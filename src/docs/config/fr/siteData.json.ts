import type { DocsSiteData } from "../types/configDataTypes";

const docsSiteData: DocsSiteData = {
  title: "IAM & PAM Professional",
  description:
    "Maîtrisez la Gestion des Identités et des Accès et la Gestion des Accès Privilégiés. Un cours complet couvrant les fondamentaux de l'IAM, l'authentification, l'autorisation, le PAM, la gouvernance, la conformité et le déploiement.",
  navSocials: [
    // {
    //   social: "GitHub",
    //   link: "https://github.com/Boston343",
    //   icon: "mdi/github",
    // },
  ],
  footerSocials: [
    {
      social: "X formerly known as Twitter",
      link: "https://x.com/BowTiedWebReapr",
      icon: "tabler/brand-x",
    },
    {
      social: "Threads",
      link: "https://www.threads.net/@bowtiedwebreaper",
      icon: "tabler/brand-threads",
    },
    {
      social: "BlueSky",
      link: "https://bsky.app/profile/webreaper.dev",
      icon: "tabler/brand-bluesky",
    },
    {
      social: "GitHub",
      link: "https://github.com/Boston343",
      icon: "tabler/brand-github",
    },
  ],
  defaultImage: {
    src: "/images/solstice.jpg",
    alt: "IAM & PAM Professional",
  },
  author: {
    name: "Cosmic Themes",
    email: "creator@cosmicthemes.com",
    twitter: "Cosmic_Themes",
  },
};

export default docsSiteData;
