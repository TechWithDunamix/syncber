/**
 * * This file is used to define the navigation links for the documentation site.
 */

// types
import { type navItem } from "../types/configDataTypes";

const navConfig: navItem[] = [
  {
    text: "Cours",
    items: [
      {
        text: "IAM & PAM Professional",
        link: "/learn/iam-pam-professional/",
      },
      {
        text: "Développement Web Full Stack",
        link: "/learn/full-stack-development/",
      },
      {
        text: "Programmation Python",
        link: "/learn/python-programming/",
      },
      {
        text: "Ingénierie Cloud",
        link: "/learn/cloud-engineering/",
      },
      {
        text: "Cyber Sécurité et Analyste SOC",
        link: "/learn/cybersecurity/",
      },
      {
        text: "Science des Données & ML",
        link: "/learn/data-science-ml/",
      },
      {
        text: "DevOps & CI/CD",
        link: "/learn/devops-cicd/",
      },
      {
        text: "Développement Mobile",
        link: "/learn/mobile-app-development/",
      },
    ],
  },
];

export default navConfig;
