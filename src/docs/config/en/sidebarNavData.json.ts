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
          id: "python-programming",
          title: "Course Overview",
        },
        {
          id: "phase-1-python-foundations",
          title: "Phase 1: Python Foundations",
          children: [
            {
              id: "python-basics",
              title: "Python Basics",
            },
            {
              id: "python-collections",
              title: "Data Structures & Collections",
            },
            {
              id: "python-functions",
              title: "Functions & Modules",
            },
          ],
        },
        {
          id: "phase-2-python-oop",
          title: "Phase 2: Object-Oriented Python",
          children: [
            {
              id: "python-oop",
              title: "Object-Oriented Programming",
            },
            {
              id: "python-advanced-oop",
              title: "Advanced OOP Techniques",
            },
            {
              id: "python-error-handling",
              title: "Error Handling & File I/O",
            },
          ],
        },
        {
          id: "phase-3-python-proficiency",
          title: "Phase 3: Python Proficiency",
          children: [
            {
              id: "python-standard-library",
              title: "Standard Library Deep Dive",
            },
            {
              id: "python-advanced-topics",
              title: "Advanced Python Topics",
            },
            {
              id: "python-testing",
              title: "Testing & Debugging",
            },
          ],
        },
        {
          id: "phase-4-python-in-practice",
          title: "Phase 4: Python in Practice",
          children: [
            {
              id: "python-data-tools",
              title: "Working with Data",
            },
            {
              id: "python-building-tools",
              title: "Building Python Tools",
            },
            {
              id: "python-project",
              title: "Capstone Project",
            },
          ],
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
          id: "phase-1-cloud-foundations",
          title: "Phase 1: Cloud Foundations",
          children: [
            {
              id: "cloud-fundamentals",
              title: "Cloud Fundamentals",
            },
            {
              id: "cloud-networking",
              title: "Cloud Networking",
            },
            {
              id: "cloud-storage-databases",
              title: "Storage & Databases",
            },
          ],
        },
        {
          id: "phase-2-aws-deep-dive",
          title: "Phase 2: AWS Deep Dive",
          children: [
            {
              id: "aws-core-services",
              title: "AWS Core Services",
            },
            {
              id: "aws-compute-serverless",
              title: "Compute & Serverless",
            },
            {
              id: "aws-architecture",
              title: "Architecture & Best Practices",
            },
          ],
        },
        {
          id: "phase-3-multi-cloud-iac",
          title: "Phase 3: Multi-Cloud & IaC",
          children: [
            {
              id: "microsoft-azure",
              title: "Microsoft Azure",
            },
            {
              id: "google-cloud-platform",
              title: "Google Cloud Platform",
            },
            {
              id: "infrastructure-as-code",
              title: "Infrastructure as Code",
            },
          ],
        },
        {
          id: "phase-4-cloud-operations",
          title: "Phase 4: Cloud Operations",
          children: [
            {
              id: "monitoring-observability",
              title: "Monitoring & Observability",
            },
            {
              id: "cloud-security-compliance",
              title: "Security & Compliance",
            },
            {
              id: "cloud-capstone",
              title: "Capstone Project",
            },
          ],
        },
      ],
    },
    {
      id: "cybersecurity",
      title: "Cyber Security and SOC Analyst",
      description: "Protect systems and data from threats and master SOC operations",
      icon: "tabler/shield",
      sections: [
        {
          id: "cybersecurity",
          title: "Course Overview",
        },
        {
          id: "phase-1-security-foundations",
          title: "Phase 1: Security Foundations",
          children: [
            {
              id: "security-fundamentals",
              title: "Security Fundamentals",
            },
            {
              id: "network-security",
              title: "Network Security",
            },
            {
              id: "application-security",
              title: "Application Security",
            },
          ],
        },
        {
          id: "phase-2-threat-management",
          title: "Phase 2: Threat Management",
          children: [
            {
              id: "threat-detection",
              title: "Threat Detection & Intelligence",
            },
            {
              id: "incident-response",
              title: "Incident Response & Forensics",
            },
            {
              id: "vulnerability-management",
              title: "Vulnerability Management",
            },
          ],
        },
        {
          id: "phase-3-defense-tools",
          title: "Phase 3: Defense & Tools",
          children: [
            {
              id: "identity-access-management",
              title: "Identity & Access Management",
            },
            {
              id: "security-tools",
              title: "Security Tools & Pentesting",
            },
            {
              id: "cloud-security",
              title: "Cloud Security",
            },
          ],
        },
        {
          id: "phase-4-governance-operations",
          title: "Phase 4: Governance & Operations",
          children: [
            {
              id: "compliance-auditing",
              title: "Compliance & Auditing",
            },
            {
              id: "security-automation",
              title: "Security Automation & DevSecOps",
            },
            {
              id: "cybersecurity-capstone",
              title: "Capstone Project",
            },
          ],
        },
        {
          id: "soc-analyst",
          title: "SOC Analyst",
          children: [
            {
              id: "soc-career-path",
              title: "SOC Career Path & Job Roles",
            },
            {
              id: "tier-1-triage",
              title: "Tier 1: Triage Analyst",
            },
            {
              id: "tier-2-incident-handler",
              title: "Tier 2: Incident Handler",
            },
            {
              id: "tier-3-threat-hunter",
              title: "Tier 3: Threat Hunter",
            },
            {
              id: "soc-tooling",
              title: "SOC Tooling & Platforms",
            },
            {
              id: "alert-analysis-triage",
              title: "Alert Analysis & Triage",
            },
            {
              id: "soc-playbooks-runbooks",
              title: "Playbooks & Runbooks",
            },
            {
              id: "soc-lab",
              title: "SOC Lab",
            },
            {
              id: "flashcards",
              title: "Flashcards",
            },
          ],
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
    {
      id: "electronic-health-records",
      title: "Electronic Health Records Management",
      description: "Master EHR systems from foundations to implementation",
      icon: "tabler/file-text",
      sections: [
        {
          id: "electronic-health-records",
          title: "Course Overview",
        },
        {
          id: "ehr-phase-1-foundations",
          title: "Phase 1: EHR Foundations",
          children: [
            {
              id: "introduction-to-ehr",
              title: "Introduction to EHR",
            },
            {
              id: "contents-of-ehr",
              title: "Contents of the EHR",
            },
            {
              id: "documentation-importance",
              title: "Documentation Importance",
            },
          ],
        },
        {
          id: "ehr-phase-2-transition",
          title: "Phase 2: Transition & Processes",
          children: [
            {
              id: "paper-based-procedures",
              title: "Paper-Based Procedures",
            },
            {
              id: "transition-to-electronic",
              title: "Transition to EHR",
            },
            {
              id: "ehr-contributors-ownership",
              title: "EHR Contributors & Ownership",
            },
          ],
        },
        {
          id: "ehr-phase-3-software",
          title: "Phase 3: EHR Software & Systems",
          children: [
            {
              id: "ehr-software-systems",
              title: "EHR Software & CDS",
            },
            {
              id: "practice-management-software",
              title: "Practice Management Software",
            },
          ],
        },
        {
          id: "ehr-phase-4-impact",
          title: "Phase 4: Impact & Outcomes",
          children: [
            {
              id: "advantages-impact",
              title: "Advantages & Impact",
            },
            {
              id: "disaster-response-documentation",
              title: "Disaster Response & Documentation",
            },
          ],
        },
        {
          id: "ehr-flashcards",
          title: "Flashcards",
        },
      ],
    },
  ],
};

export default sidebarNavData;
