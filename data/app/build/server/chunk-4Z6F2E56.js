import {
  add_attribute,
  create_ssr_component,
  escape
} from "./chunk-M5BCR5I3.js";

// .svelte-kit/adapter-node/chunks/Tag.js
var css = {
  code: 'div.svelte-hx4ifp.svelte-hx4ifp{border:1px solid var(--color);display:flex;justify-content:center;border-radius:1rem;padding:0 0.5rem;user-select:none;-webkit-user-select:none}div.svelte-hx4ifp.svelte-hx4ifp:hover{background-color:var(--color);cursor:pointer}div.svelte-hx4ifp:hover p.svelte-hx4ifp{color:#FFEFDC}div.svelte-hx4ifp.svelte-hx4ifp:active{filter:brightness(90%)}p.svelte-hx4ifp.svelte-hx4ifp{font-family:"IBM Plex Mono", monospace;font-size:0.5rem;line-height:0.9rem;color:var(--color)}',
  map: null
};
var Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { borderColor } = $$props;
  let { name } = $$props;
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0)
    $$bindings.borderColor(borderColor);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css);
  return `<a${add_attribute("href", `/blog/search/${name}`, 0)}><div${add_attribute("style", `--color: #${borderColor}`, 0)} class="${"tag svelte-hx4ifp"}"><p class="${"svelte-hx4ifp"}">${escape(name)}</p></div>
</a>`;
});

export {
  Tag
};
//# sourceMappingURL=chunk-4Z6F2E56.js.map
