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
          id: "phase-1-python-foundations",
          title: "Phase 1 : Fondamentaux de Python",
          children: [
            {
              id: "python-basics",
              title: "Bases de Python",
            },
            {
              id: "python-collections",
              title: "Structures de Données & Collections",
            },
            {
              id: "python-functions",
              title: "Fonctions & Modules",
            },
          ],
        },
        {
          id: "phase-2-python-oop",
          title: "Phase 2 : Python Orienté Objet",
          children: [
            {
              id: "python-oop",
              title: "Programmation Orientée Objet",
            },
            {
              id: "python-advanced-oop",
              title: "Techniques POO Avancées",
            },
            {
              id: "python-error-handling",
              title: "Gestion d'Erreurs & E/S Fichiers",
            },
          ],
        },
        {
          id: "phase-3-python-proficiency",
          title: "Phase 3 : Maîtrise de Python",
          children: [
            {
              id: "python-standard-library",
              title: "Exploration de la Bibliothèque Standard",
            },
            {
              id: "python-advanced-topics",
              title: "Sujets Python Avancés",
            },
            {
              id: "python-testing",
              title: "Tests & Débogage",
            },
          ],
        },
        {
          id: "phase-4-python-in-practice",
          title: "Phase 4 : Python en Pratique",
          children: [
            {
              id: "python-data-tools",
              title: "Travail avec les Données",
            },
            {
              id: "python-building-tools",
              title: "Création d'Outils Python",
            },
            {
              id: "python-project",
              title: "Projet de Fin de Parcours",
            },
          ],
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
          id: "phase-1-cloud-foundations",
          title: "Phase 1 : Fondamentaux du Cloud",
          children: [
            {
              id: "cloud-fundamentals",
              title: "Fondamentaux du Cloud",
            },
            {
              id: "cloud-networking",
              title: "Réseau Cloud",
            },
            {
              id: "cloud-storage-databases",
              title: "Stockage & Bases de Données",
            },
          ],
        },
        {
          id: "phase-2-aws-deep-dive",
          title: "Phase 2 : Plongée AWS",
          children: [
            {
              id: "aws-core-services",
              title: "Services Principaux AWS",
            },
            {
              id: "aws-compute-serverless",
              title: "Calcul & Serverless",
            },
            {
              id: "aws-architecture",
              title: "Architecture & Meilleures Pratiques",
            },
          ],
        },
        {
          id: "phase-3-multi-cloud-iac",
          title: "Phase 3 : Multi-Cloud & IaC",
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
          title: "Phase 4 : Opérations Cloud",
          children: [
            {
              id: "monitoring-observability",
              title: "Surveillance & Observabilité",
            },
            {
              id: "cloud-security-compliance",
              title: "Sécurité & Conformité",
            },
            {
              id: "cloud-capstone",
              title: "Projet de Fin de Parcours",
            },
          ],
        },
      ],
    },
    {
      id: "cybersecurity",
      title: "Cyber Sécurité et Analyste SOC",
      description: "Protégez les systèmes et les données et maîtrisez les opérations SOC",
      icon: "tabler/shield",
      sections: [
        {
          id: "cybersecurity",
          title: "Aperçu du Cours",
        },
        {
          id: "phase-1-security-foundations",
          title: "Phase 1 : Fondamentaux de la Sécurité",
          children: [
            {
              id: "security-fundamentals",
              title: "Fondamentaux de la Sécurité",
            },
            {
              id: "network-security",
              title: "Sécurité Réseau",
            },
            {
              id: "application-security",
              title: "Sécurité des Applications",
            },
          ],
        },
        {
          id: "phase-2-threat-management",
          title: "Phase 2 : Gestion des Menaces",
          children: [
            {
              id: "threat-detection",
              title: "Détection & Renseignement sur les Menaces",
            },
            {
              id: "incident-response",
              title: "Réponse aux Incidents & Forensique",
            },
            {
              id: "vulnerability-management",
              title: "Gestion des Vulnérabilités",
            },
          ],
        },
        {
          id: "phase-3-defense-tools",
          title: "Phase 3 : Défense & Outils",
          children: [
            {
              id: "identity-access-management",
              title: "Gestion des Identités & Accès",
            },
            {
              id: "security-tools",
              title: "Outils de Sécurité & Pentesting",
            },
            {
              id: "cloud-security",
              title: "Sécurité du Cloud",
            },
          ],
        },
        {
          id: "phase-4-governance-operations",
          title: "Phase 4 : Gouvernance & Opérations",
          children: [
            {
              id: "compliance-auditing",
              title: "Conformité & Audit",
            },
            {
              id: "security-automation",
              title: "Automatisation & DevSecOps",
            },
            {
              id: "cybersecurity-capstone",
              title: "Projet de Fin de Parcours",
            },
          ],
        },
        {
          id: "soc-analyst",
          title: "Analyste SOC",
          children: [
            {
              id: "soc-career-path",
              title: "Carrière et Rôles SOC",
            },
            {
              id: "tier-1-triage",
              title: "Niveau 1 : Analyste de Triage",
            },
            {
              id: "tier-2-incident-handler",
              title: "Niveau 2 : Gestionnaire d'Incidents",
            },
            {
              id: "tier-3-threat-hunter",
              title: "Niveau 3 : Chasseur de Menaces",
            },
            {
              id: "soc-tooling",
              title: "Outils et Plateformes SOC",
            },
            {
              id: "alert-analysis-triage",
              title: "Analyse et Triage dAlertes",
            },
            {
              id: "soc-playbooks-runbooks",
              title: "Playbooks et Runbooks",
            },
            {
              id: "soc-lab",
              title: "Laboratoire SOC",
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
