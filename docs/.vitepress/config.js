import { defineConfig } from "vitepress";

const head = [
  [
    "link",
    {
      rel: "icon",
      href: "https://worlds.frvr.com/a/5hRJxPmi.png",
    },
  ],
];

export default defineConfig({
  title: "Worlds FRVR Wiki",
  cleanUrls: true,
  head,
  themeConfig: {
    editLink: {
      text: "Contribute in Github",
      pattern: "https://github.com/TheoristMC/worlds-frvr-wiki",
    },
    sidebar: [
      {
        text: "Starting your Journey",
        collapsed: true,
        items: [
          {
            text: "Lost Frontier",
          },
          {
            text: "Unlimited",
          },
          {
            text: "World Access",
            // link: "/journey/world-access.md",
          },
        ],
      },
      {
        text: "Documentation",
        collapsed: true,
        items: [
          {
            text: "Texture Packs",
            link: "/documentation/texture-packs.md",
          },
        ],
      },
    ],
    search: {
      provider: "local",
    },
  },
});
