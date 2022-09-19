import {
  error
} from "./chunk-NXBOMH6K.js";
import {
  __export
} from "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/blog/search/_slug_/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => load
});
var load = async ({ fetch, params }) => {
  try {
    const resp = await fetch(`https://www.piskiewicz.org/api/posts/tagsearch/${params.slug}`);
    return { tag: params.slug, blogPosts: await resp.json() };
  } catch (e) {
    throw error(404, "Not found");
  }
};

// .svelte-kit/adapter-node/nodes/5.js
var index = 5;
var component = async () => (await import("./_page.svelte-ZO3CNSLJ.js")).default;
var file = "_app/immutable/components/pages/blog/search/_slug_/_page.svelte-bb07a87b.js";
var imports = ["_app/immutable/components/pages/blog/search/_slug_/_page.svelte-bb07a87b.js", "_app/immutable/chunks/index-c06ef3ca.js", "_app/immutable/chunks/Tag-63d65a85.js", "_app/immutable/chunks/arrow-right-f3818478.js", "_app/immutable/modules/pages/blog/search/_slug_/_page.ts-abe1fd67.js", "_app/immutable/chunks/index-07d89891.js", "_app/immutable/chunks/control-a6874251.js", "_app/immutable/chunks/_page-cdef26b1.js"];
var stylesheets = ["_app/immutable/assets/_page-924be73e.css", "_app/immutable/assets/Tag-4d390a54.css"];
export {
  component,
  file,
  imports,
  index,
  page_ts_exports as shared,
  stylesheets
};
//# sourceMappingURL=5-7HI37OUV.js.map
