import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/manifest.js
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set([".DS_Store", "blog/.DS_Store", "blog/0.webp", "blog/1.webp", "blog/chunk-semantics.png", "favicon.png", "projects/aproxymatoinator-mobile.webp", "projects/aproxymatoinator.webp", "projects/bmb-mobile.webp", "projects/bmb.webp"]),
  mimeTypes: { ".webp": "image/webp", ".png": "image/png" },
  _: {
    entry: { "file": "_app/immutable/start-59d0ee0c.js", "imports": ["_app/immutable/start-59d0ee0c.js", "_app/immutable/chunks/index-c06ef3ca.js", "_app/immutable/chunks/singletons-cd299960.js", "_app/immutable/chunks/control-a6874251.js"], "stylesheets": [] },
    nodes: [
      () => import("./0-OC5CXO7S.js"),
      () => import("./1-RGPYRGEB.js"),
      () => import("./2-OWQCEMTS.js"),
      () => import("./3-ZAHTN2FC.js"),
      () => import("./4-KY7WZGKI.js"),
      () => import("./5-7HI37OUV.js")
    ],
    routes: [
      {
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 2 },
        endpoint: null
      },
      {
        id: "blog",
        pattern: /^\/blog\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 3 },
        endpoint: null
      },
      {
        id: "blog/posts/[slug]",
        pattern: /^\/blog\/posts\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        page: { layouts: [0], errors: [1], leaf: 4 },
        endpoint: null
      },
      {
        id: "blog/search/[slug]",
        pattern: /^\/blog\/search\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        page: { layouts: [0], errors: [1], leaf: 5 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
export {
  manifest
};
//# sourceMappingURL=manifest.js.map
