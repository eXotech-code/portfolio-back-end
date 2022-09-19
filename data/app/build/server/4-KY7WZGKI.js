import {
  error
} from "./chunk-NXBOMH6K.js";
import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/blog/posts/_slug_/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => load
});
var load = async ({ fetch, params }) => {
  try {
    const p = await fetch(`https://www.piskiewicz.org/api/posts/${params.slug}`);
    return await p.json();
  } catch (err) {
    throw error(404, "Not found");
  }
};

// .svelte-kit/adapter-node/nodes/4.js
var index = 4;
var component = async () => (await import("./_page.svelte-SN6MB2PK.js")).default;
var file = "_app/immutable/components/pages/blog/posts/_slug_/_page.svelte-66995e35.js";
var imports = ["_app/immutable/components/pages/blog/posts/_slug_/_page.svelte-66995e35.js", "_app/immutable/chunks/index-c06ef3ca.js", "_app/immutable/chunks/Tag-63d65a85.js", "_app/immutable/chunks/done-a25a1c21.js", "_app/immutable/modules/pages/blog/posts/_slug_/_page.ts-1f619354.js", "_app/immutable/chunks/index-07d89891.js", "_app/immutable/chunks/control-a6874251.js", "_app/immutable/chunks/_page-102c03d9.js"];
var stylesheets = ["_app/immutable/assets/_page-165a83c8.css", "_app/immutable/assets/Tag-4d390a54.css"];
export {
  component,
  file,
  imports,
  index,
  page_ts_exports as shared,
  stylesheets
};
//# sourceMappingURL=4-KY7WZGKI.js.map
