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

// .svelte-kit/adapter-node/chunks/BlogLayout.js
var randInt = (min, max) => {
  const rand = Math.random();
  return Math.floor(rand * (max - min + 1)) + min;
};
var css$2 = {
  code: "svg.svelte-8ee4gh.svelte-8ee4gh{width:100%;height:100%}@keyframes svelte-8ee4gh-dash{from{stroke-dashoffset:0}to{stroke-dashoffset:1500}}svg.svelte-8ee4gh path.svelte-8ee4gh{fill:none;stroke:#000;stroke-width:8;stroke-dasharray:1000;stroke-dashoffset:1500;animation:svelte-8ee4gh-dash 8s linear alternate infinite}",
  map: null
};
var MAX_ANG = 110;
var MIN_ANG = 30;
var MIN_POINT = 0;
var MAX_POINT = 400;
var POINT_DISTANCE = 150;
var MIN_DISTANCE = 24;
var MAX_CALLS = 100;
var BOUND_TOLERANCE = 0.6;
var Lines = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const REGEN_POINT = [-1, -1];
  class Path {
    constructor(corners) {
      this.corners = corners;
      this.element = void 0;
      const beginPoint = this.translateCoord(Array(2).fill(MAX_POINT / 2));
      this.points = [beginPoint];
      this.angles = [0];
      this.pathString = `M ${beginPoint.join(" ")}`;
    }
    randomAngle() {
      const lastAng = this.angles.at(-1);
      if ((lastAng === 90 || lastAng === 45) && this.angles.at(-2) !== lastAng) {
        return lastAng;
      }
      const seed = Number.parseFloat(Math.random().toFixed(2));
      if (seed < 0.3 && lastAng !== 90) {
        return 90;
      }
      if (seed > 0.8) {
        if (Math.random() > 0.5) {
          return 315;
        }
        return 270;
      }
      if (seed === 0.5) {
        return randInt(MIN_ANG, MAX_ANG);
      }
      return Math.floor(randInt(MIN_ANG, MAX_ANG) / 10) * 10;
    }
    translateCoord(coord) {
      return [coord[0], MAX_POINT - coord[1]];
    }
    drawLine(newPoint) {
      this.pathString += ` L ${newPoint.join(" ")}`;
    }
    toRadians(angleDeg) {
      return angleDeg * (Math.PI / 180);
    }
    calcDistance(p1, p2) {
      return Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
    }
    newPoint(calls) {
      const lastPoint = this.points.at(-1);
      const ang = this.randomAngle();
      const angleRad = this.toRadians(ang);
      let x = Math.floor(lastPoint[0] + POINT_DISTANCE * Math.cos(angleRad));
      let y = Math.floor(lastPoint[0] + POINT_DISTANCE * Math.sin(angleRad));
      if (this.points.length > 1) {
        let index = this.points.length - 2;
        x = Math.floor(-(lastPoint[0] - this.points[index][0]) * Math.cos(angleRad) - -(lastPoint[1] - this.points[index][1]) * Math.sin(angleRad) + lastPoint[0]);
        y = Math.floor(-(lastPoint[0] - this.points[index][0]) * Math.sin(angleRad) + -(lastPoint[1] - this.points[index][1]) * Math.cos(angleRad) + lastPoint[1]);
      }
      const newp = [x, y];
      for (const point of this.points) {
        const d = this.calcDistance(point, newp);
        if (d < MIN_DISTANCE) {
          if (calls !== MAX_CALLS) {
            return this.newPoint(calls + 1);
          }
          return REGEN_POINT;
        }
      }
      this.angles.push(ang);
      return newp;
    }
    newLine() {
      const p2 = this.newPoint(0);
      if (p2 === REGEN_POINT) {
        return -1;
      }
      this.points.push(p2);
      const pTranslated = this.translateCoord(p2);
      this.drawLine(pTranslated);
      return 0;
    }
    zero() {
      this.points = [Array(2).fill(MAX_POINT / 2)];
      this.pathString = `M ${this.points[0].join(" ")}`;
      this.angles = [0];
    }
    pointsDoFit() {
      let count = 0;
      for (const p2 of this.points) {
        p2.forEach((coord) => {
          if (coord > MAX_POINT || coord < MIN_POINT) {
            count++;
          }
        });
      }
      return count * 2 / this.points.length <= BOUND_TOLERANCE;
    }
    genPath() {
      var _a;
      for (let i = 0; i < this.corners; i++) {
        if (this.newLine() === -1 || !this.pointsDoFit())
          return -1;
      }
      if (!this.element) {
        window.setTimeout(() => this.genPath(), 500);
      }
      (_a = this.element) == null ? void 0 : _a.setAttribute("d", this.pathString);
      return 0;
    }
    drawPath() {
      let exitCode = this.genPath();
      while (exitCode === -1) {
        this.zero();
        exitCode = this.genPath();
      }
    }
  }
  let p = new Path(10);
  $$result.css.add(css$2);
  return `<svg viewBox="${"0 0 400 400"}" class="${"svelte-8ee4gh"}"><path d="${""}" class="${"svelte-8ee4gh"}"${add_attribute("this", p.element, 0)}></path></svg>`;
});
var css$1 = {
  code: '.post.svelte-1wr73og.svelte-1wr73og{border:1px solid #000;display:flex;flex-direction:column}img.svelte-1wr73og.svelte-1wr73og{width:100%;height:auto}.text.svelte-1wr73og.svelte-1wr73og{padding:1rem;display:flex;flex-direction:column;gap:1rem;flex-grow:1}h3.svelte-1wr73og.svelte-1wr73og{font-family:"PlayFair Display", serif;font-weight:500;font-size:1.5rem}.date.svelte-1wr73og.svelte-1wr73og{font-size:0.75rem}.description.svelte-1wr73og.svelte-1wr73og{font-size:1rem;font-weight:300}.tags.svelte-1wr73og.svelte-1wr73og{display:grid;grid-template-columns:repeat(3, max-content);grid-template-rows:repeat(2, 1rem);gap:0.5rem;flex-grow:1}.button.svelte-1wr73og.svelte-1wr73og{box-sizing:border-box;border:1px solid black;width:100%;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;gap:1rem;background:#FFEFDC;transition:background 0.1s ease-out}.button.svelte-1wr73og.svelte-1wr73og:hover{background:#000;color:#fff;cursor:pointer}.button.svelte-1wr73og:hover img.svelte-1wr73og{filter:invert(100%)}.button.svelte-1wr73og.svelte-1wr73og:active{background:#393939}.button.svelte-1wr73og img.svelte-1wr73og{width:1rem;height:1rem}.button.svelte-1wr73og p.svelte-1wr73og{font-weight:400;font-size:0.75rem}',
  map: null
};
var Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$1);
  return `<div class="${"post svelte-1wr73og"}"${add_attribute("id", post.id.toString(), 0)}>${post.image ? `<img${add_attribute("alt", post.title, 0)}${add_attribute("src", `blog/${post.id}.webp`, 0)} class="${"svelte-1wr73og"}">` : ``}
	<div class="${"text svelte-1wr73og"}"><h3 class="${"svelte-1wr73og"}">${escape(post.title)}</h3>
		<p class="${"date svelte-1wr73og"}">${escape(post.date)}</p>
		<p class="${"description svelte-1wr73og"}">${escape(post.description)}</p>
		<div class="${"tags svelte-1wr73og"}">${each(post.tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, { borderColor: tag.colour, name: tag.name }, {}, {})}`;
  })}</div>
		<a class="${"button svelte-1wr73og"}"${add_attribute("href", `/blog/posts/${post.id}`, 0)}><p class="${"svelte-1wr73og"}">Read this</p>
			<img alt="${"icon"}"${add_attribute("src", arrowRight, 0)} class="${"icon svelte-1wr73og"}"></a></div>
</div>`;
});
var css = {
  code: ".blogposts.svelte-147zl78{display:grid;padding:1rem;grid-template-columns:repeat(3, 1fr);gap:1rem}.layout-small.svelte-147zl78{display:flex;flex-direction:column;gap:1rem}",
  map: null
};
var BlogLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let layoutBig;
  let layoutSmall;
  let { type = "small" } = $$props;
  let { data } = $$props;
  let longPosts = [];
  let shortPosts = [];
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    {
      if (Object.keys(data).length) {
        Object.values(data).forEach((p) => {
          if (p.image) {
            longPosts = [...longPosts, p];
          } else {
            shortPosts = [...shortPosts, p];
          }
        });
      }
    }
  }
  layoutBig = type === "small" ? longPosts.slice(0, 2) : longPosts.slice(0, 4);
  layoutSmall = shortPosts.slice(-2);
  return `<div class="${"blogposts svelte-147zl78"}">${each(layoutBig, (post) => {
    return `${validate_component(Post, "Post").$$render($$result, { post }, {}, {})}`;
  })}
	<div class="${"layout-small svelte-147zl78"}">${each(layoutSmall, (post) => {
    return `${validate_component(Post, "Post").$$render($$result, { post }, {}, {})}`;
  })}</div>
</div>`;
});

export {
  randInt,
  Lines,
  BlogLayout
};
//# sourceMappingURL=chunk-IV3W4ONM.js.map
