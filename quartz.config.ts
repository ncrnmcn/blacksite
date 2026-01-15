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
          light: "#91F81F",        // background (swapped)
          lightgray: "#A6FF4D",    // thin lines, frames, search background
          gray: "#4E7A2C",         // text in search box, graph links highlight
          darkgray: "#2F4D1C",     // loupe, symbols, body text, credits
          dark: "#1F3313",         // headings, unhighlighted folder content, node text
          secondary: "#2F4D1C",    // header, folders, tags, active node, links
          tertiary: "#6FB83A",     // selected text background, hover, inactive node
          highlight: "#4E7A2C",    // internal link background
          textHighlight: "#6FB83A" // marked text background
        },
        darkMode: {
          light: "#0F1A09",        // background
          lightgray: "#1F3313",    // thin lines, frames, graph connections, search background
          gray: "#4E7A2C",         // text in search box, graph links highlight
          darkgray: "#6FB83A",     // loupe, symbols, body text, credits
          dark: "#91F81F",         // headings, unhighlighted folder content, node text
          secondary: "#A6FF4D",    // header, folders, tags, active node, links
          tertiary: "#2F4D1C",     // selected text background, hover, inactive node
          highlight: "#1F3313",    // internal link background
          textHighlight: "#3F6625" // marked text background
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
