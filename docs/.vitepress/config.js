import { defineConfig } from "vitepress";

const head = [
  [
    "link",
    {
      rel: "icon",
      href: "https://worlds.frvr.com/a/5hRJxPmi.png",
    },
  ],
  [
    "meta",
    {
      property: "og:image",
      content: "https://worlds.frvr.com/a/EMTERgHJ.png",
    },
  ],
];

export default defineConfig({
  title: "Worlds FRVR Wiki",
  description: "A collaborative wiki for the game Worlds FRVR",
  cleanUrls: true,
  head,
  themeConfig: {
    editLink: {
      text: "Contribute in Github",
      pattern: "https://github.com/TheoristMC/worlds-frvr-wiki",
    },
    footer: {
      message: "Worlds FRVR Wiki is not affiliated in any way with FRVR.",
      copyright: "\u00A9 \"Worlds FRVR\" is a trademark of FRVR.",
    },
    outline: {
      level: [2, 3],
    },
    sidebar: [
      {
        text: "Starting your Journey",
        collapsed: false,
        items: [
          {
            text: "Lost Frontier",
          },
          {
            text: "Unlimited",
          },
          {
            text: "World Access",
            link: "/journey/world-access.md",
          },
        ],
      },
      {
        text: "Blocks",
        collapsed: true,
        items: [
          {
            text: "Natural Blocks",
            link: "/blocks/natural-blocks.md",
          },
          {
            text: "Unnatural Blocks",
            link: "/blocks/unnatural-blocks.md",
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
      {
        text: "TriggerScripts",
        link: "/trigger-scripts/index.md",
        collapsed: true,
        items: [
          {
            text: "Center",
            link: "/trigger-scripts/center.md",
          },
          {
            text: "Variables",
          },
        ],
      },
    ],
    search: {
      provider: "local",
    },
  },
});
