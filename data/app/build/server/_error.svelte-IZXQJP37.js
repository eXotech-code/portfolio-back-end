import {
  page
} from "./chunk-L6SH7T7W.js";
import {
  arrowRight
} from "./chunk-5Z7IN5TS.js";
import {
  add_attribute,
  create_ssr_component,
  escape,
  subscribe
} from "./chunk-M5BCR5I3.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/_error.svelte.js
var css = {
  code: "h1.svelte-1bu5o5f.svelte-1bu5o5f{font-size:3rem}.banner.svelte-1bu5o5f.svelte-1bu5o5f{display:flex;justify-content:center;align-items:center}.banner.svelte-1bu5o5f .button.svelte-1bu5o5f{box-sizing:border-box;display:flex;align-items:center;padding:1rem 2rem;gap:2rem;width:auto;height:fit-content;border:none;background:#000;color:#fff;position:relative}.banner.svelte-1bu5o5f .button p.svelte-1bu5o5f{font-weight:400;z-index:2;font-size:0.75rem}.banner.svelte-1bu5o5f .button .icon.svelte-1bu5o5f{width:1rem;height:1rem;z-index:2;filter:invert(100%)}.banner.svelte-1bu5o5f .button div.svelte-1bu5o5f{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:#FFEFDC;width:0%;height:0%;transition:width 0.25s ease-out, height 0.25s ease-out;z-index:1}.banner.svelte-1bu5o5f .button.svelte-1bu5o5f:hover,.banner.svelte-1bu5o5f .button.svelte-1bu5o5f:active{color:#000;cursor:pointer}.banner.svelte-1bu5o5f .button:hover div.svelte-1bu5o5f,.banner.svelte-1bu5o5f .button:active div.svelte-1bu5o5f{width:calc(100% - 2px);height:calc(100% - 2px)}.banner.svelte-1bu5o5f .button:hover .icon.svelte-1bu5o5f,.banner.svelte-1bu5o5f .button:active .icon.svelte-1bu5o5f{filter:unset}.banner.svelte-1bu5o5f .button:active div.svelte-1bu5o5f{filter:brightness(90%)}.content.svelte-1bu5o5f.svelte-1bu5o5f{width:fit-content;display:flex;flex-direction:column;gap:4rem}.button.svelte-1bu5o5f.svelte-1bu5o5f{align-self:flex-end}",
  map: null
};
var Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let message = `${$page.status}: ${(_a = $page.error) == null ? void 0 : _a.message}`;
  if ($page.status === 404) {
    message = "Hey boy, aren't you a little bit lost?";
  } else if ($page.status === 500) {
    message = "Sorry bardzo. The server is acting weird lately.";
  }
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${escape($page.status)} - PISKIEWICZ</title>`, ""}`, ""}

<section id="${"banner"}" class="${"banner svelte-1bu5o5f"}"><div class="${"content svelte-1bu5o5f"}"><h1 class="${"svelte-1bu5o5f"}">${escape(message)}</h1>
		<a class="${"button svelte-1bu5o5f"}" href="${"/"}"><p class="${"svelte-1bu5o5f"}">Go back home</p>
			<img${add_attribute("src", arrowRight, 0)} alt="${"arrow right icon"}" class="${"icon svelte-1bu5o5f"}">
			<div class="${"svelte-1bu5o5f"}"></div></a></div>
</section>`;
});
export {
  Error as default
};
//# sourceMappingURL=_error.svelte-IZXQJP37.js.map
