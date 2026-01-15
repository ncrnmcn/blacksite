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
          light: "#1B0A1B",        // background (primary dark base)
          lightgray: "#2E1A2E",    // thin lines, frames, graph connections, search background
          gray: "#6F7738",         // text in search box, graph links highlight
          darkgray: "#8A9243",     // loupe, symbols, body text, credits
          dark: "#9EA74E",         // headings, unhighlighted folder content, mini graph symbols, node text
          secondary: "#A8B05A",    // header, folders, tags text, active node, embed line, link text
          tertiary: "#4A5224",     // selected text background, mouse over, non-active node
          highlight: "#31380F",    // internal link background
          textHighlight: "#5C642C" // marked / highlighted text
        },
        darkMode: {
          light: "#121E20", //backgr
          lightgray: "#819429", //culprit
          gray: "#819429", //graph links
          darkgray: "#819429", //body text
          dark: "#819429", //headings and folder content
          secondary: "#819429", // header, ordner, tags text
          tertiary: "#819429", // markierter text, mouse over
          highlight: "#819429", // internal link back
          textHighlight: "#ff0000", // mark high
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
