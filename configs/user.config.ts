import type { UserConfig } from "../src/site.config";

const userConfig: UserConfig = {
  title: "pondside.dev",
  description:
    "Essays and experiments from a two-person workshop.",

  url: "https://pondside.dev",
  author: "Jeffery Harrell",

  logo: "/logo.svg",
  avatar: "/avatar.png",

  navigation: [
    { title: "Writing", url: "/posts" },
    { title: "Archive", url: "/archive" },
    { title: "About", url: "/about" },
  ],

  footerLinks: [
    { title: "RSS", url: "/rss.xml" },
    { title: "Archive", url: "/archive" },
    { title: "Source", url: "https://github.com/Pondsiders/pondside.dev" },
  ],

  social: [
    {
      title: "GitHub",
      url: "https://github.com/Pondsiders",
      icon: "github",
    },
  ],

  footerCredits: "Designed for reading. Built with Astro & Lipi",

  postsPerPage: 8,
  recentPosts: 6,
  relatedPosts: 4,

  showThemeToggle: true,
  showReadingTime: true,

  heroVariant: "studio",

  annotation: "Recreational machine learning and light applied theology.",
};

export default userConfig;
