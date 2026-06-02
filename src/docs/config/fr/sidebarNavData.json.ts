import type { DocsSidebarNavData } from "../types/configDataTypes";

/**
 * Combined sidebar navigation data for the French locale
 */
const sidebarNavData: DocsSidebarNavData = {
  tabs: [
    {
      id: "main",
      title: "IAM & PAM Professional",
      description: "Modules du cours",
      icon: "tabler/file-text",
      sections: [
        {
          id: "iam-pam-professional",
          title: "Aperçu du Cours",
        },
        {
          id: "iam-fundamentals",
          title: "Fondamentaux de l'IAM",
        },
        {
          id: "authentication-authorization",
          title: "Authentification & Autorisation",
        },
        {
          id: "privileged-access-management",
          title: "Gestion des Accès Privilégiés",
        },
        {
          id: "identity-governance",
          title: "Gouvernance des Identités",
        },
        {
          id: "compliance-security",
          title: "Conformité, Audit & Rapports",
        },
        {
          id: "architecture-deployment",
          title: "Architecture & Déploiement",
        },
      ],
    },
  ],
};

export default sidebarNavData;
