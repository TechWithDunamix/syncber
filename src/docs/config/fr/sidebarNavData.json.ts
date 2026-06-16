import type { DocsSidebarNavData } from "../types/configDataTypes";

const sidebarNavData: DocsSidebarNavData = {
  tabs: [
    {
      id: "iam-pam-professional",
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
    {
      id: "full-stack-development",
      title: "Développement Web Full Stack",
      description: "Construisez des applications web modernes",
      icon: "tabler/code",
      sections: [
        {
          id: "full-stack-development",
          title: "Aperçu du Cours",
        },
        {
          id: "phase-1-frontend",
          title: "Phase 1 : Fondamentaux du Frontend",
          children: [
            {
              id: "html-fundamentals",
              title: "HTML & Fondamentaux du Web",
            },
            {
              id: "css-styling",
              title: "CSS & Style",
            },
            {
              id: "javascript-basics",
              title: "Bases de JavaScript",
            },
          ],
        },
        {
          id: "phase-2-javascript",
          title: "Phase 2 : JavaScript Approfondi",
          children: [
            {
              id: "javascript-advanced",
              title: "JavaScript Avancé",
            },
            {
              id: "dom-browser",
              title: "DOM & API du Navigateur",
            },
          ],
        },
        {
          id: "phase-3-frontend",
          title: "Phase 3 : Frontend Moderne",
          children: [
            {
              id: "react-frontend",
              title: "React & Frontend Moderne",
            },
          ],
        },
        {
          id: "phase-4-backend",
          title: "Phase 4 : Développement Backend",
          children: [
            {
              id: "node-express",
              title: "Node.js & Express",
            },
            {
              id: "auth-security",
              title: "Authentification & Sécurité",
            },
            {
              id: "mongodb-databases",
              title: "MongoDB & Bases de Données",
            },
          ],
        },
      ],
    },
    {
      id: "python-programming",
      title: "Programmation Python",
      description: "Maîtrisez Python du débutant à l'avancé",
      icon: "tabler/brand-python",
      sections: [
        {
          id: "python-programming",
          title: "Aperçu du Cours",
        },
        {
          id: "python-basics",
          title: "Bases de Python",
        },
        {
          id: "python-intermediate",
          title: "Python Intermédiaire",
        },
        {
          id: "python-advanced",
          title: "Python Avancé",
        },
      ],
    },
    {
      id: "cloud-engineering",
      title: "Ingénierie Cloud",
      description: "Concevez et gérez l'infrastructure cloud",
      icon: "tabler/cloud",
      sections: [
        {
          id: "cloud-engineering",
          title: "Aperçu du Cours",
        },
        {
          id: "cloud-fundamentals",
          title: "Fondamentaux du Cloud",
        },
        {
          id: "aws-services",
          title: "Services AWS",
        },
        {
          id: "azure-gcp",
          title: "Azure & GCP",
        },
      ],
    },
    {
      id: "cybersecurity",
      title: "Cybersécurité",
      description: "Protégez les systèmes et les données",
      icon: "tabler/shield",
      sections: [
        {
          id: "cybersecurity",
          title: "Aperçu du Cours",
        },
        {
          id: "security-fundamentals",
          title: "Fondamentaux de la Sécurité",
        },
        {
          id: "threat-detection",
          title: "Détection & Réponse aux Menaces",
        },
        {
          id: "security-tools",
          title: "Outils et Pratiques de Sécurité",
        },
      ],
    },
    {
      id: "data-science-ml",
      title: "Science des Données & ML",
      description: "Apprenez l'analyse de données et le machine learning",
      icon: "tabler/chart-bar",
      sections: [
        {
          id: "data-science-ml",
          title: "Aperçu du Cours",
        },
        {
          id: "data-analysis",
          title: "Analyse de Données",
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
      description: "Automatisez et optimisez les pipelines de livraison",
      icon: "tabler/infinity",
      sections: [
        {
          id: "devops-cicd",
          title: "Aperçu du Cours",
        },
        {
          id: "devops-fundamentals",
          title: "Fondamentaux DevOps",
        },
        {
          id: "cicd-pipelines",
          title: "Pipelines CI/CD",
        },
        {
          id: "containerization",
          title: "Conteneurisation & Orchestration",
        },
      ],
    },
    {
      id: "mobile-app-development",
      title: "Développement Mobile",
      description: "Créez des applications iOS et Android",
      icon: "tabler/device-mobile",
      sections: [
        {
          id: "mobile-app-development",
          title: "Aperçu du Cours",
        },
        {
          id: "mobile-fundamentals",
          title: "Fondamentaux du Mobile",
        },
        {
          id: "cross-platform",
          title: "Développement Cross-Platform",
        },
        {
          id: "native-development",
          title: "Développement Natif",
        },
      ],
    },
  ],
};

export default sidebarNavData;
