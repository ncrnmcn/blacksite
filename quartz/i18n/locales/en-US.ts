import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "untitled",
    description: "no data",
  },
  components: {
    callout: {
      note: "Note",
      abstract: "Abstract",
      info: "Info",
      todo: "Todo",
      tip: "Tip",
      success: "Success",
      question: "Question",
      warning: "Warning",
      failure: "Failure",
      danger: "Danger",
      bug: "Bug",
      example: "Example",
      quote: "Quote",
    },
    backlinks: {
      title: "back.trace",
      noBacklinksFound: "invalid",
    },
    themeToggle: {
      lightMode: "light",
      darkMode: "dark",
    },
    readerMode: {
      title: "focus",
    },
    explorer: {
      title: "sub.echo.net",
    },
    footer: {
      createdWith: "Created with",
    },
    graph: {
      title: "local_node",
    },
    recentNotes: {
      title: "Recent Notes",
      seeRemainingMore: ({ remaining }) => `See ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `source: ${targetSlug}`,
      linkToOriginal: "access source",
    },
    search: {
      title: "scan",
      searchBarPlaceholder: "scan local node",
    },
    tableOfContents: {
      title: "index",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min read`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Recent notes",
      lastFewNotes: ({ count }) => `Last ${count} notes`,
    },
    error: {
      title: "access restricted",
      notFound: "active_encryption.mdenc",
      home: "return:0xH0M3",
    },
    folderContent: {
      folder: "Folder",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item under this folder." : `${count} items under this folder.`,
    },
    tagContent: {
      tag: "trace",
      tagIndex: "trace index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 entry with this trace." : `${count} entries with this trace.`,
      showingFirst: ({ count }) => `showing querry of ${count} traces.`,
      totalTags: ({ count }) => `found ${count} total traces.`,
    },
  },
} as const satisfies Translation
