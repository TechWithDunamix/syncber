/**
 * * This file is used to define the navigation links for the documentation site.
 */

// types
import { type navItem } from "../types/configDataTypes";

const navConfig: navItem[] = [
  {
    text: "Aperçu du Cours",
    link: "/learn/iam-pam-professional/",
  },
  {
    text: "Modules",
    link: "/learn/iam-fundamentals/",
  },
  {
    text: "Obtenir Solstice",
    link: "https://cosmicthemes.com/themes/solstice",
    newTab: true,
  },
];

export default navConfig;
