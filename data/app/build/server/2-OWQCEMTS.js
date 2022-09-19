import {
  error
} from "./chunk-NXBOMH6K.js";
import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => load
});
var load = async ({ fetch }) => {
  try {
    const resp = await fetch("https://www.piskiewicz.org/api/posts/recent");
    return await resp.json();
  } catch (e) {
    throw error(404, "Not found");
  }
};

// .svelte-kit/adapter-node/nodes/2.js
var index = 2;
var component = async () => (await import("./_page.svelte-TDR5D56R.js")).default;
var file = "_app/immutable/components/pages/_page.svelte-19ea2705.js";
var imports = ["_app/immutable/components/pages/_page.svelte-19ea2705.js", "_app/immutable/chunks/index-c06ef3ca.js", "_app/immutable/chunks/arrow-right-f3818478.js", "_app/immutable/chunks/BlogLayout-2573fb74.js", "_app/immutable/chunks/Tag-63d65a85.js", "_app/immutable/chunks/done-a25a1c21.js", "_app/immutable/chunks/Menu-2e065125.js", "_app/immutable/modules/pages/_page.ts-5ba5d5d0.js", "_app/immutable/chunks/index-07d89891.js", "_app/immutable/chunks/control-a6874251.js", "_app/immutable/chunks/_page-df2e4f9a.js"];
var stylesheets = ["_app/immutable/assets/_page-7b7e576f.css", "_app/immutable/assets/BlogLayout-c7a7813c.css", "_app/immutable/assets/Tag-4d390a54.css", "_app/immutable/assets/Menu-65c1d245.css"];
export {
  component,
  file,
  imports,
  index,
  page_ts_exports as shared,
  stylesheets
};
//# sourceMappingURL=2-OWQCEMTS.js.map
