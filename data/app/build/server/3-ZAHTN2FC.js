import {
  error
} from "./chunk-NXBOMH6K.js";
import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/blog/_page.ts.js
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

// .svelte-kit/adapter-node/nodes/3.js
var index = 3;
var component = async () => (await import("./_page.svelte-5WA7T5OQ.js")).default;
var file = "_app/immutable/components/pages/blog/_page.svelte-70cec0b2.js";
var imports = ["_app/immutable/components/pages/blog/_page.svelte-70cec0b2.js", "_app/immutable/chunks/index-c06ef3ca.js", "_app/immutable/chunks/BlogLayout-2573fb74.js", "_app/immutable/chunks/arrow-right-f3818478.js", "_app/immutable/chunks/Tag-63d65a85.js", "_app/immutable/modules/pages/blog/_page.ts-02159766.js", "_app/immutable/chunks/index-07d89891.js", "_app/immutable/chunks/control-a6874251.js", "_app/immutable/chunks/_page-a02d2da5.js"];
var stylesheets = ["_app/immutable/assets/_page-110df6ac.css", "_app/immutable/assets/BlogLayout-c7a7813c.css", "_app/immutable/assets/Tag-4d390a54.css"];
export {
  component,
  file,
  imports,
  index,
  page_ts_exports as shared,
  stylesheets
};
//# sourceMappingURL=3-ZAHTN2FC.js.map
