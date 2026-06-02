import type { DocsSiteData } from "../types/configDataTypes";

const docsSiteData: DocsSiteData = {
  title: "IAM & PAM Professional",
  description:
    "Master Identity and Access Management and Privileged Access Management. A comprehensive course covering IAM fundamentals, authentication, authorization, PAM, governance, compliance, and deployment.",
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
  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/solstice.jpg",
    alt: "IAM & PAM Professional",
  },
  // Your information for SEO purposes
  author: {
    name: "Cosmic Themes",
    email: "creator@cosmicthemes.com",
    twitter: "Cosmic_Themes",
  },
};

export default docsSiteData;
