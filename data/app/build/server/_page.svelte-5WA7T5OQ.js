import {
  BlogLayout,
  Lines
} from "./chunk-IV3W4ONM.js";
import "./chunk-4Z6F2E56.js";
import "./chunk-5Z7IN5TS.js";
import {
  create_ssr_component,
  validate_component
} from "./chunk-M5BCR5I3.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/blog/_page.svelte.js
var css = {
  code: '.banner.svelte-nowsv5{height:50vh;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:3rem 1fr;grid-template-areas:". graphic" "text graphic"}.banner-text.svelte-nowsv5{grid-area:text;display:flex;flex-direction:column;gap:1rem;padding:1rem}h1.svelte-nowsv5{font-size:3rem;font-weight:900}h2.svelte-nowsv5{margin:1rem;font-size:2rem;font-weight:500}h3.svelte-nowsv5{font-size:1.5rem;font-weight:300}hr.svelte-nowsv5{border-color:#000;margin:0}.graphic.svelte-nowsv5{position:absolute;height:90%;width:50%;right:0;top:-1rem;z-index:-1}.blog.svelte-nowsv5{background:#FFEFDC}',
  map: null
};
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Blog - PISKIEWICZ</title>`, ""}`, ""}

<section id="${"banner"}" class="${"banner svelte-nowsv5"}"><div class="${"banner-text svelte-nowsv5"}"><h1 class="${"svelte-nowsv5"}">The blog</h1>
		<h3 class="${"svelte-nowsv5"}">If I\u2019ve done something I want to brag about, this is where you would find out about it.</h3></div>
	<div class="${"graphic svelte-nowsv5"}">${validate_component(Lines, "Lines").$$render($$result, {}, {}, {})}</div></section>
<hr class="${"svelte-nowsv5"}">
<section id="${"blog"}" class="${"blog svelte-nowsv5"}"><h2 class="${"svelte-nowsv5"}">My latest adventures</h2>
	${validate_component(BlogLayout, "BlogLayout").$$render($$result, { data }, {}, {})}
</section>`;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-5WA7T5OQ.js.map
