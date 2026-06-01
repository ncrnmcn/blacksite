import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 * BLACKSITE — SECURITY BREACH THEME
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "blacksitΣ",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://ncrnmcn.github.io/blacksite",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Share Tech Mono",   // corrupted broadcast terminal feel
        body: "Victor Mono",         // keeping your existing body font
        code: "IBM Plex Mono",       // keeping your existing code font
      },
      colors: {
        lightMode: {
          // Light mode: bleached datasheet, red-ink redactions
          light: "#F0EDE8",           // background — aged paper, classified doc
          lightgray: "#D6CFC6",       // thin lines, frames, graph connections
          gray: "#8C7B6E",            // search box text, graph link highlights
          darkgray: "#1A1A1A",        // body text — near black
          dark: "#0D0D0D",            // headings — full black
          secondary: "#CC0000",       // links, tags, active nodes — breach red
          tertiary: "#FF4444",        // hover, selected, non-active node
          highlight: "#FFECEC",       // internal link background — red blush
          textHighlight: "#FF000033", // marked text — redaction overlay
        },
        darkMode: {
          // Dark mode: active breach, terminal intrusion
          light: "#080808",           // background — void black
          lightgray: "#111111",       // thin lines, frames, graph connections
          gray: "#2A2A2A",            // graph links, search box elements
          darkgray: "#B0B0B0",        // body text — dim terminal output
          dark: "#E8E8E8",            // headings — cold white
          secondary: "#FF2222",       // links, tags, active nodes — hot breach red
          tertiary: "#00FF41",        // hover — matrix green, system compromise
          highlight: "#FF000015",     // internal link background — red ghost
          textHighlight: "#00FF4120", // marked text — compromised data highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      //Plugin.CreatedModifiedDate({
      //  priority: ["frontmatter", "git", "filesystem"],
      //}),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
