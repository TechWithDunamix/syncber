/**
 * * This file is used to define the navigation links for the documentation site.
 */

// types
import { type navItem } from "../types/configDataTypes";

const navConfig: navItem[] = [
  {
    text: "Course Overview",
    link: "/learn/iam-pam-professional/",
  },
  {
    text: "Modules",
    link: "/learn/iam-fundamentals/",
  },
  {
    text: "Get Solstice",
    link: "https://cosmicthemes.com/themes/solstice",
    newTab: true,
  },
];

export default navConfig;
