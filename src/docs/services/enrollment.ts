import { requireSupabase } from "./supabase";
import type { ApiResponse } from "./api";

export interface CourseInfo {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: number;
  pages: number;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  courseTitle: string;
  purchasedAt: string;
  amount: number;
}

export const COURSES: CourseInfo[] = [
  {
    id: "iam-pam-professional",
    title: "IAM & PAM Professional",
    description: "Identity and access management, privileged access management, authentication, authorization, governance, compliance, and enterprise deployment.",
    icon: "🔐",
    price: 49.99,
    pages: 80,
  },
  {
    id: "full-stack-development",
    title: "Full Stack Web Development",
    description: "Frontend frameworks, backend APIs, databases, deployment, Python, JavaScript, React, and Node.js.",
    icon: "💻",
    price: 49.99,
    pages: 70,
  },
  {
    id: "python-programming",
    title: "Python Programming",
    description: "Python fundamentals, OOP, standard library, testing, advanced topics, and capstone projects.",
    icon: "🐍",
    price: 49.99,
    pages: 60,
  },
  {
    id: "cloud-engineering",
    title: "Cloud Engineering",
    description: "AWS, Azure, and GCP architecture, infrastructure as code, serverless, containerization, and cloud security.",
    icon: "☁️",
    price: 49.99,
    pages: 80,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Threat detection, incident response, vulnerability management, IAM, PAM, and security operations with hands-on labs.",
    icon: "🛡️",
    price: 49.99,
    pages: 99,
  },
  {
    id: "data-science-ml",
    title: "Data Science & ML",
    description: "Data analysis, machine learning, deep learning, and AI with hands-on projects and real-world datasets.",
    icon: "📊",
    price: 49.99,
    pages: 55,
  },
  {
    id: "devops-cicd",
    title: "DevOps & CI/CD",
    description: "CI/CD pipelines, Docker, Kubernetes, Terraform, Ansible, monitoring, and site reliability engineering.",
    icon: "⚙️",
    price: 49.99,
    pages: 55,
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "iOS and Android apps with Swift, Kotlin, React Native, Flutter, API integration, and app store deployment.",
    icon: "📱",
    price: 49.99,
    pages: 50,
  },
];

export async function purchaseCourse(
  userId: string,
  courseId: string
): Promise<ApiResponse<Enrollment>> {
  const course = COURSES.find((c) => c.id === courseId);
  if (!course) {
    return { success: false, error: "Course not found." };
  }

  const sb = requireSupabase();
  const { data: existing } = await sb
    .from("enrollments")
    .select("id")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .maybeSingle();

  if (existing) {
    return { success: false, error: "You are already enrolled in this course." };
  }

  const { data, error } = await sb
    .from("enrollments")
    .insert({
      user_id: userId,
      course_id: courseId,
      course_title: course.title,
      amount: course.price,
    })
    .select()
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  const enrollment: Enrollment = {
    id: data.id,
    userId: data.user_id,
    courseId: data.course_id,
    courseTitle: data.course_title,
    purchasedAt: data.purchased_at,
    amount: data.amount,
  };

  return { success: true, data: enrollment };
}

export async function hasAccess(
  userId: string,
  courseId: string
): Promise<boolean> {
  try {
    const sb = requireSupabase();
    const { data } = await sb
      .from("enrollments")
      .select("id")
      .eq("user_id", userId)
      .eq("course_id", courseId)
      .maybeSingle();

    return !!data;
  } catch {
    return false;
  }
}

export async function getEnrolledCourses(
  userId: string
): Promise<Enrollment[]> {
  try {
    const sb = requireSupabase();
    const { data } = await sb
      .from("enrollments")
      .select("*")
      .eq("user_id", userId)
      .order("purchased_at", { ascending: false });

    if (!data) return [];

    return data.map((row: any) => ({
      id: row.id,
      userId: row.user_id,
      courseId: row.course_id,
      courseTitle: row.course_title,
      purchasedAt: row.purchased_at,
      amount: row.amount,
    }));
  } catch {
    return [];
  }
}

export function getCourseInfo(courseId: string): CourseInfo | undefined {
  return COURSES.find((c) => c.id === courseId);
}
