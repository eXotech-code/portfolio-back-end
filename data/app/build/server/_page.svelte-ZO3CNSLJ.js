import {
  Tag
} from "./chunk-4Z6F2E56.js";
import {
  arrowRight
} from "./chunk-5Z7IN5TS.js";
import {
  add_attribute,
  create_ssr_component,
  each,
  escape,
  validate_component
} from "./chunk-M5BCR5I3.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/blog/search/_slug_/_page.svelte.js
var css$1 = {
  code: '.post.svelte-tu2rmx.svelte-tu2rmx{border:1px solid #000;display:flex;justify-content:space-between;padding:1rem}.content.svelte-tu2rmx.svelte-tu2rmx{display:flex;flex-direction:column;gap:1rem}h3.svelte-tu2rmx.svelte-tu2rmx{font-family:"PlayFair Display", serif;font-weight:500;font-size:1.5rem}.date.svelte-tu2rmx.svelte-tu2rmx{font-size:0.75rem}.description.svelte-tu2rmx.svelte-tu2rmx{font-size:1rem;font-weight:300}.tags.svelte-tu2rmx.svelte-tu2rmx{display:grid;grid-template-columns:repeat(6, max-content);gap:0.5rem;flex-grow:1}.button-holder.svelte-tu2rmx.svelte-tu2rmx{display:flex;align-items:flex-end;width:20%}.button.svelte-tu2rmx.svelte-tu2rmx{box-sizing:border-box;border:1px solid black;width:100%;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;gap:1rem;background:#FFEFDC;transition:background 0.1s ease-out}.button.svelte-tu2rmx.svelte-tu2rmx:hover{background:#000;color:#fff;cursor:pointer}.button.svelte-tu2rmx:hover img.svelte-tu2rmx{filter:invert(100%)}.button.svelte-tu2rmx.svelte-tu2rmx:active{background:#393939}.button.svelte-tu2rmx img.svelte-tu2rmx{width:1rem;height:1rem}.button.svelte-tu2rmx p.svelte-tu2rmx{font-weight:400;font-size:0.75rem}',
  map: null
};
var TagSearchResult = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$1);
  return `<div class="${"post svelte-tu2rmx"}"><div class="${"content svelte-tu2rmx"}"><h3 class="${"svelte-tu2rmx"}">${escape(post.title)}</h3>
		<p class="${"date svelte-tu2rmx"}">${escape(post.date)}</p>
		<p class="${"description svelte-tu2rmx"}">${escape(post.description)}</p>
		<div class="${"tags svelte-tu2rmx"}">${each(post.tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, { borderColor: tag.colour, name: tag.name }, {}, {})}`;
  })}</div></div>
	<div class="${"button-holder svelte-tu2rmx"}"><a class="${"button svelte-tu2rmx"}"${add_attribute("href", `/blog/posts/${post.id}`, 0)}><p class="${"svelte-tu2rmx"}">Read this</p>
			<img alt="${"icon"}"${add_attribute("src", arrowRight, 0)} class="${"icon svelte-tu2rmx"}"></a></div>
</div>`;
});
var css = {
  code: '.banner.svelte-1dwflwc{display:flex;justify-content:center;align-items:center;gap:1rem;padding:5rem}h1.svelte-1dwflwc{font-size:3rem}.tag.svelte-1dwflwc{font-family:"IBM Plex Mono";color:var(--color)}hr.svelte-1dwflwc{border-color:#000;margin:0}.results.svelte-1dwflwc{display:flex;flex-direction:column;gap:1rem;padding:1rem 4rem}',
  map: null
};
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  function findTagColour() {
    for (let t of data.blogPosts[0].tags) {
      if (t.name === data.tag) {
        return t.colour;
      }
    }
    return "";
  }
  let tagColour = findTagColour();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Tag: ${escape(data.tag)} - PISKIEWICZ</title>`, ""}`, ""}

<section id="${"banner"}" class="${"banner svelte-1dwflwc"}"><h1 class="${"svelte-1dwflwc"}">Search results for:</h1>
	<h1 class="${"tag svelte-1dwflwc"}"${add_attribute("style", `--color: #${tagColour}`, 0)}>${escape(data.tag)}</h1></section>
<hr class="${"svelte-1dwflwc"}">
${data.blogPosts.length ? `<section id="${"results"}" class="${"results svelte-1dwflwc"}">${each(data.blogPosts, (post) => {
    return `${validate_component(TagSearchResult, "TagSearchResult").$$render($$result, { post }, {}, {})}`;
  })}</section>` : ``}`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-ZO3CNSLJ.js.map
