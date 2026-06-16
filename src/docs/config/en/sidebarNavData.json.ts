import type { DocsSidebarNavData } from "../types/configDataTypes";

/**
 * Combined sidebar navigation data for the English locale
 */
const sidebarNavData: DocsSidebarNavData = {
  /**
   * Documentation tabs configuration
   * Each tab corresponds to a course with its own independent sidebar content.
   */
  tabs: [
    {
      id: "iam-pam-professional",
      title: "IAM & PAM Professional",
      description: "Course modules",
      icon: "tabler/file-text",
      sections: [
        {
          id: "iam-pam-professional",
          title: "Course Overview",
        },
        {
          id: "iam-fundamentals",
          title: "Fundamentals of IAM",
        },
        {
          id: "authentication-authorization",
          title: "Authentication & Authorization",
        },
        {
          id: "privileged-access-management",
          title: "Privileged Access Management",
        },
        {
          id: "identity-governance",
          title: "Identity Governance",
        },
        {
          id: "compliance-security",
          title: "Compliance, Auditing & Reporting",
        },
        {
          id: "architecture-deployment",
          title: "Architecture & Deployment",
        },
      ],
    },
    {
      id: "full-stack-development",
      title: "Full Stack Web Development",
      description: "Build modern web applications from scratch",
      icon: "tabler/code",
      sections: [
        {
          id: "full-stack-development",
          title: "Course Overview",
        },
        {
          id: "phase-1-frontend",
          title: "Phase 1: Frontend Foundations",
          children: [
            {
              id: "html-fundamentals",
              title: "HTML & Web Fundamentals",
            },
            {
              id: "css-styling",
              title: "CSS & Styling",
            },
            {
              id: "javascript-basics",
              title: "JavaScript Basics",
            },
          ],
        },
        {
          id: "phase-2-javascript",
          title: "Phase 2: JavaScript in Depth",
          children: [
            {
              id: "javascript-advanced",
              title: "Advanced JavaScript",
            },
            {
              id: "dom-browser",
              title: "DOM & Browser APIs",
            },
          ],
        },
        {
          id: "phase-3-frontend",
          title: "Phase 3: Modern Frontend",
          children: [
            {
              id: "react-frontend",
              title: "React & Modern Frontend",
            },
          ],
        },
        {
          id: "phase-4-backend",
          title: "Phase 4: Backend Development",
          children: [
            {
              id: "node-express",
              title: "Node.js & Express",
            },
            {
              id: "auth-security",
              title: "Authentication & Security",
            },
            {
              id: "mongodb-databases",
              title: "MongoDB & Databases",
            },
          ],
        },
      ],
    },
    {
      id: "python-programming",
      title: "Python Programming",
      description: "Master Python from fundamentals to advanced",
      icon: "tabler/brand-python",
      sections: [
    {
      id: "pam-program-maturity",
      title: "PAM Program Maturity",
    },
      ],
    },
    {
      id: "cloud-engineering",
      title: "Cloud Engineering",
      description: "Design and manage cloud infrastructure",
      icon: "tabler/cloud",
      sections: [
        {
          id: "cloud-engineering",
          title: "Course Overview",
        },
        {
          id: "cloud-fundamentals",
          title: "Cloud Fundamentals",
        },
        {
          id: "aws-services",
          title: "AWS Services",
        },
        {
          id: "azure-gcp",
          title: "Azure & GCP",
        },
      ],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Protect systems and data from threats",
      icon: "tabler/shield",
      sections: [
        {
          id: "cybersecurity",
          title: "Course Overview",
        },
        {
          id: "security-fundamentals",
          title: "Security Fundamentals",
        },
        {
          id: "threat-detection",
          title: "Threat Detection & Response",
        },
        {
          id: "security-tools",
          title: "Security Tools & Practices",
        },
      ],
    },
    {
      id: "data-science-ml",
      title: "Data Science & ML",
      description: "Learn data analysis and machine learning",
      icon: "tabler/chart-bar",
      sections: [
        {
          id: "data-science-ml",
          title: "Course Overview",
        },
        {
          id: "data-analysis",
          title: "Data Analysis",
        },
        {
          id: "machine-learning",
          title: "Machine Learning",
        },
        {
          id: "deep-learning",
          title: "Deep Learning",
        },
      ],
    },
    {
      id: "devops-cicd",
      title: "DevOps & CI/CD",
      description: "Automate and streamline delivery pipelines",
      icon: "tabler/infinity",
      sections: [
        {
          id: "devops-cicd",
          title: "Course Overview",
        },
        {
          id: "devops-fundamentals",
          title: "DevOps Fundamentals",
        },
        {
          id: "cicd-pipelines",
          title: "CI/CD Pipelines",
        },
        {
          id: "containerization",
          title: "Containerization & Orchestration",
        },
      ],
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description: "Build iOS and Android applications",
      icon: "tabler/device-mobile",
      sections: [
        {
          id: "mobile-app-development",
          title: "Course Overview",
        },
        {
          id: "mobile-fundamentals",
          title: "Mobile Fundamentals",
        },
        {
          id: "cross-platform",
          title: "Cross-Platform Development",
        },
        {
          id: "native-development",
          title: "Native Development",
        },
      ],
    },
  ],
};

export default sidebarNavData;
