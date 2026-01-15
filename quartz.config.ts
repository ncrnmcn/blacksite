import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
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
        header: "Victor Mono",
        body: "Victor Mono",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#9EA74E",        // background (swapped)
          lightgray: "#B4BC6A",    // thin lines, frames, graph connections, search background
          gray: "#4B5124",         // text in search box, graph links highlight
          darkgray: "#1B0A1B",     // loupe, symbols, body text, credits
          dark: "#2E1A2E",         // headings, unhighlighted folder content, node text
          secondary: "#1B0A1B",    // header, folders, tags text, active node, links
          tertiary: "#7C843E",     // selected text background, hover, non-active node
          highlight: "#6E7536",    // internal link background
          textHighlight: "#7C843E" // marked text background
        },
        darkMode: {
          light: "#1B0A1B",        // background
          lightgray: "#2E1A2E",    // thin lines, frames, graph connections, search background
          gray: "#6E7536",         // text in search box, graph links highlight
          darkgray: "#8C9444",     // loupe, symbols, body text, credits
          dark: "#9EA74E",         // headings, unhighlighted folder content, node text
          secondary: "#A8B05A",    // header, folders, tags text, active node, links
          tertiary: "#4B5124",    // selected text background, hover, non-active node
          highlight: "#31380F",    // internal link background
          textHighlight: "#5E6530" // marked text background
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
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
