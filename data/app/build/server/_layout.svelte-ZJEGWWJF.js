import {
  page
} from "./chunk-L6SH7T7W.js";
import {
  add_attribute,
  create_ssr_component,
  escape,
  null_to_empty,
  subscribe,
  validate_component
} from "./chunk-M5BCR5I3.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/_layout.svelte.js
var menuIcon = "/_app/immutable/assets/menu-3166dc46.svg";
var css$6 = {
  code: "img.svelte-192qbq4{z-index:3;width:1rem;height:1rem;transition:transform 0.25s ease-out}img.svelte-192qbq4:hover{cursor:pointer;transform:scale(1.5)}",
  map: null
};
var MenuButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { menuOpen } = $$props;
  if ($$props.menuOpen === void 0 && $$bindings.menuOpen && menuOpen !== void 0)
    $$bindings.menuOpen(menuOpen);
  $$result.css.add(css$6);
  return `<img alt="${"menu button"}"${add_attribute("src", menuIcon, 0)} class="${"svelte-192qbq4"}">`;
});
var css$5 = {
  code: "div.svelte-dvx6n3.svelte-dvx6n3{width:fit-content;height:1.5rem;position:relative}div.svelte-dvx6n3.svelte-dvx6n3:hover{cursor:pointer}div.svelte-dvx6n3:hover>span.svelte-dvx6n3{background:#ff737a;height:10px}p.svelte-dvx6n3.svelte-dvx6n3{position:relative;z-index:2}span.svelte-dvx6n3.svelte-dvx6n3{position:absolute;bottom:0;height:2px;width:100%;margin:0;background:#000;z-index:1}span.selected.svelte-dvx6n3.svelte-dvx6n3{background:#ff737a;height:10px}",
  map: null
};
var Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "scroll" } = $$props;
  let { selectedLink } = $$props;
  let { link } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.selectedLink === void 0 && $$bindings.selectedLink && selectedLink !== void 0)
    $$bindings.selectedLink(selectedLink);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$5);
  return `<div class="${"svelte-dvx6n3"}"><p class="${"svelte-dvx6n3"}">${type === "scroll" ? `<a${add_attribute("href", link, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<a${add_attribute("href", link, 0)}>${slots.default ? slots.default({}) : ``}</a>`}</p>
	<span class="${escape(
    null_to_empty(selectedLink === link || selectedLink === "/" && link === "#home" ? "selected" : ""),
    true
  ) + " svelte-dvx6n3"}"></span>
</div>`;
});
var css$4 = {
  code: ".menu.svelte-1700u98{right:0;width:10rem;display:flex;flex-direction:column;gap:1rem;border:1px solid #000;background:#FFEFDC;padding:2rem;z-index:2}.normal.svelte-1700u98{position:absolute;top:0;padding-top:4rem}.float.svelte-1700u98{position:fixed;bottom:0;padding-bottom:4rem}.links.svelte-1700u98{display:flex;flex-direction:column;gap:0.5rem}",
  map: null
};
var Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isHome = true } = $$props;
  let { type = "normal" } = $$props;
  let { selectedLink } = $$props;
  if ($$props.isHome === void 0 && $$bindings.isHome && isHome !== void 0)
    $$bindings.isHome(isHome);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.selectedLink === void 0 && $$bindings.selectedLink && selectedLink !== void 0)
    $$bindings.selectedLink(selectedLink);
  $$result.css.add(css$4);
  return `<div class="${escape(null_to_empty(`menu ${type}`), true) + " svelte-1700u98"}">${isHome ? `<h3>On this page</h3>
		<div class="${"links svelte-1700u98"}">${validate_component(Link, "Link").$$render($$result, { selectedLink, link: "#home" }, {}, {
    default: () => {
      return `Home`;
    }
  })}
			${validate_component(Link, "Link").$$render($$result, { selectedLink, link: "#blog-showcase" }, {}, {
    default: () => {
      return `Blog showcase`;
    }
  })}
			${validate_component(Link, "Link").$$render($$result, { selectedLink, link: "#projects" }, {}, {
    default: () => {
      return `Projects`;
    }
  })}
			${validate_component(Link, "Link").$$render($$result, { selectedLink, link: "#contact" }, {}, {
    default: () => {
      return `Contact`;
    }
  })}
			${validate_component(Link, "Link").$$render($$result, { selectedLink, link: "#footer" }, {}, {
    default: () => {
      return `Footer`;
    }
  })}</div>` : ``}
	<h3>Global links</h3>
	<div class="${"links svelte-1700u98"}">${!isHome ? `${validate_component(Link, "Link").$$render(
    $$result,
    {
      type: "standard",
      selectedLink,
      link: "/"
    },
    {},
    {
      default: () => {
        return `Home`;
      }
    }
  )}` : ``}
		${validate_component(Link, "Link").$$render(
    $$result,
    {
      type: "standard",
      selectedLink,
      link: "/blog"
    },
    {},
    {
      default: () => {
        return `Blog`;
      }
    }
  )}</div>
</div>`;
});
var css$3 = {
  code: ".salmon.svelte-7bn1zq{color:#FFEFDC;pointer-events:none}",
  map: null
};
var Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentUrl;
  let isHome;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { variant = "dark" } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  $$result.css.add(css$3);
  currentUrl = $page.url.pathname.substring($page.url.pathname.lastIndexOf("/") - 1);
  isHome = currentUrl === "/" && $page.status !== 500;
  $$unsubscribe_page();
  return `${isHome ? `<a href="${"#home"}"><h3 class="${escape(null_to_empty(`logo ${variant === "light" ? "salmon" : ""}`), true) + " svelte-7bn1zq"}">PISKIEWICZ</h3></a>` : `<a href="${"/"}"><h3 class="${escape(null_to_empty(`logo ${variant === "light" ? "salmon" : ""}`), true) + " svelte-7bn1zq"}">PISKIEWICZ</h3></a>`}`;
});
var css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300&family=Playfair+Display:wght@500;600;900&family=Zen+Dots&display=swap");.nav.svelte-6359yv{display:flex;justify-content:space-between;padding:1rem}',
  map: null
};
var Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isHome;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let menuOpen = false;
  let currentUrl = "/";
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        currentUrl = $page.url.pathname.substring($page.url.pathname.indexOf("/") - 1);
        currentUrl = currentUrl !== "/" ? $page.url.pathname.substring($page.url.pathname.indexOf("/"), 5) : currentUrl;
      }
    }
    isHome = currentUrl === "/" && $page.status !== 500;
    $$rendered = `<div class="${"nav svelte-6359yv"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
	${validate_component(MenuButton, "MenuButton").$$render(
      $$result,
      { menuOpen },
      {
        menuOpen: ($$value) => {
          menuOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
${menuOpen ? `${validate_component(Menu, "Menu").$$render(
      $$result,
      {
        isHome,
        selectedLink: currentUrl === "" ? "#home" : currentUrl
      },
      {},
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
var css$1 = {
  code: ".footer.svelte-30a6y8{background:#000;display:flex;flex-direction:column;gap:2rem}.rightflow.svelte-30a6y8{display:flex;justify-content:space-between;padding:1rem}p.svelte-30a6y8,a.svelte-30a6y8,h1.svelte-30a6y8,h3.svelte-30a6y8{color:#FFEFDC}h1.svelte-30a6y8{font-size:3rem}.title-and-tagline.svelte-30a6y8{padding:1rem;display:flex;flex-direction:column;gap:1rem}.tagline.svelte-30a6y8{font-size:1.5rem;font-weight:300}.footer-section.svelte-30a6y8{display:flex;flex-direction:column;gap:0.5rem}.section-name.svelte-30a6y8{font-size:2rem}.subsection-name.svelte-30a6y8{font-size:1.5rem;font-weight:400}p.svelte-30a6y8{font-weight:300}span.svelte-30a6y8{font-weight:400}.logo-holder.svelte-30a6y8{display:flex;justify-content:flex-end;align-items:flex-end;height:3rem}",
  map: null
};
var Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentUrl;
  let isHome;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  currentUrl = $page.url.pathname.substring($page.url.pathname.lastIndexOf("/") - 1);
  isHome = currentUrl === "/";
  $$unsubscribe_page();
  return `<section id="${"footer"}" class="${"footer svelte-30a6y8"}"><div class="${"title-and-tagline svelte-30a6y8"}"><h1 class="${"svelte-30a6y8"}">Tak na marginesie...</h1>
		<p class="${"tagline svelte-30a6y8"}">...or in other words \u201Con the footer\u201D.</p></div>

	<div class="${"rightflow svelte-30a6y8"}"><div class="${"footer-section svelte-30a6y8"}"><h3 class="${"section-name svelte-30a6y8"}">sitemap</h3>
			${isHome ? `<p class="${"subsection-name svelte-30a6y8"}">This page</p>
				<p class="${"svelte-30a6y8"}"><a href="${"#home"}" class="${"svelte-30a6y8"}">home</a></p>
				<p class="${"svelte-30a6y8"}"><a href="${"#blog-showcase"}" class="${"svelte-30a6y8"}">blog showcase</a></p>
				<p class="${"svelte-30a6y8"}"><a href="${"#projects"}" class="${"svelte-30a6y8"}">projects</a></p>
				<p class="${"svelte-30a6y8"}"><a href="${"#contact"}" class="${"svelte-30a6y8"}">contact</a></p>` : ``}
			<p class="${"subsection-name svelte-30a6y8"}">Global</p>
			${!isHome ? `<p class="${"svelte-30a6y8"}"><a href="${"/"}" class="${"svelte-30a6y8"}">home</a></p>` : ``}
			<p class="${"svelte-30a6y8"}"><a href="${"/blog"}" class="${"svelte-30a6y8"}">blog</a></p></div>

		<div class="${"footer-section svelte-30a6y8"}"><h3 class="${"section-name svelte-30a6y8"}">contact info</h3>
			<p class="${"svelte-30a6y8"}"><span class="${"svelte-30a6y8"}">Email: </span><a href="${"mailto:jakub@piskiewicz.org"}" class="${"svelte-30a6y8"}">jakub@piskiewicz.org</a></p>
			<p class="${"svelte-30a6y8"}"><span class="${"svelte-30a6y8"}">Phone number: </span><a href="${"tel:+48784815504"}" class="${"svelte-30a6y8"}">+48 784 815 504</a></p>
			<p class="${"svelte-30a6y8"}"><span class="${"svelte-30a6y8"}"><a href="${"https://www.linkedin.com/in/jakub-pi\u015Bkiewicz-946b181a5/"}" class="${"svelte-30a6y8"}">Linkedin</a></span></p>
			<p class="${"svelte-30a6y8"}"><span class="${"svelte-30a6y8"}"><a href="${"https://github.com/eXotech-code"}" class="${"svelte-30a6y8"}">GitHub</a></span></p></div>

		<div class="${"footer-section svelte-30a6y8"}"><h3 class="${"section-name svelte-30a6y8"}">credits</h3>
			<p class="${"subsection-name svelte-30a6y8"}">Icons</p>
			<p class="${"svelte-30a6y8"}">IBM Carbon Design System</p>
			<p class="${"subsection-name svelte-30a6y8"}">Fonts</p>
			<p class="${"svelte-30a6y8"}">Open Sans</p>
			<p class="${"svelte-30a6y8"}">PlayFair Display</p>
			<p class="${"svelte-30a6y8"}">IBM Plex Mono</p>
			<p class="${"subsection-name svelte-30a6y8"}">Ideas, testing and encouragement</p>
			<p class="${"svelte-30a6y8"}">Ada Gottfried</p>
			<p class="${"svelte-30a6y8"}">\u0141ukasz \u015Awiszcz</p>
			<p class="${"svelte-30a6y8"}">Szymon Pi\u015Bkiewicz</p>
			<p class="${"svelte-30a6y8"}">Sylwia Pi\u015Bkiewicz</p>
			<p class="${"svelte-30a6y8"}">Sara Dziubi\u0144ska</p></div></div>

	<div class="${"logo-holder svelte-30a6y8"}">${validate_component(Logo, "Logo").$$render($$result, { variant: "light" }, {}, {})}</div>
</section>`;
});
var css = {
  code: 'body{background:#FFEFDC;padding:0;margin:0;overflow-x:hidden}section{padding:1rem}h1,h2,h3,p,a{margin:0;font-family:"Open Sans", sans-serif}h1,h2{font-family:"PlayFair Display", serif}a{text-decoration:none;color:#000}.logo{font-family:"Zen Dots", cursive;font-size:1rem;letter-spacing:0.25rem}.logo:hover{cursor:pointer}',
  map: null
};
var Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${`${``}`}
${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
//# sourceMappingURL=_layout.svelte-ZJEGWWJF.js.map
