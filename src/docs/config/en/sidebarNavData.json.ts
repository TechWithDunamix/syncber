import type { DocsSidebarNavData } from "../types/configDataTypes";

/**
 * Combined sidebar navigation data for the English locale
 */
const sidebarNavData: DocsSidebarNavData = {
  /**
   * Documentation tabs configuration
   * These define the different top-level documentation section tabs
   */
  tabs: [
    {
      // "main" is the default tab keyword
      id: "main",
      title: "IAM & PAM Professional",
      description: "Course modules",
      icon: "tabler/file-text",
      // Ordered list of sidebar sections for the 'main' tab
      // The "id" of each section should match a folder in the docs content collection
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
  ],
};

export default sidebarNavData;
