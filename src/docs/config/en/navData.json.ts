/**
 * * This file is used to define the navigation links for the documentation site.
 */

// types
import { type navItem } from "../types/configDataTypes";

const navConfig: navItem[] = [
  {
    text: "Courses",
    items: [
      {
        text: "IAM & PAM Professional",
        link: "/learn/iam-pam-professional/",
      },
      {
        text: "Full Stack Web Development",
        link: "/learn/full-stack-development/",
      },
      {
        text: "Python Programming",
        link: "/learn/python-programming/",
      },
      {
        text: "Cloud Engineering",
        link: "/learn/cloud-engineering/",
      },
      {
        text: "Cyber Security and SOC Analyst",
        link: "/learn/cybersecurity/",
      },
      {
        text: "Data Science & Machine Learning",
        link: "/learn/data-science-ml/",
      },
      {
        text: "DevOps & CI/CD",
        link: "/learn/devops-cicd/",
      },
      {
        text: "Mobile App Development",
        link: "/learn/mobile-app-development/",
      },
      {
        text: "Electronic Health Records Management",
        link: "/learn/electronic-health-records/",
      },
    ],
  },
];

export default navConfig;
