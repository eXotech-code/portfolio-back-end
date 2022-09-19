import {
  BlogLayout,
  Lines,
  randInt
} from "./chunk-IV3W4ONM.js";
import "./chunk-4Z6F2E56.js";
import {
  arrowRight
} from "./chunk-5Z7IN5TS.js";
import {
  add_attribute,
  create_ssr_component,
  each,
  escape,
  null_to_empty,
  validate_component
} from "./chunk-M5BCR5I3.js";
import "./chunk-HUBM7RA2.js";

// .svelte-kit/adapter-node/entries/pages/_page.svelte.js
var doneIcon = "/_app/immutable/assets/done-170f7988.svg";
var error = "/_app/immutable/assets/error-dd654ece.svg";
var css$5 = {
  code: ".notification.svelte-10cbfqq.svelte-10cbfqq{position:fixed;box-sizing:border-box;bottom:1rem;left:1rem;width:20rem;height:4rem;display:flex;justify-content:space-between;align-items:center;border:1px solid #000;background:#FFEFDC;padding:1rem;z-index:3}.good.svelte-10cbfqq.svelte-10cbfqq{border-color:#2b7878}.good.svelte-10cbfqq p.svelte-10cbfqq{color:#2b7878}.good.svelte-10cbfqq .icon.svelte-10cbfqq{filter:invert(35%) sepia(59%) saturate(437%) hue-rotate(131deg) brightness(101%) contrast(88%)}.bad.svelte-10cbfqq.svelte-10cbfqq{border-color:#f06a6a}.bad.svelte-10cbfqq p.svelte-10cbfqq{color:#f06a6a}.bad.svelte-10cbfqq .icon.svelte-10cbfqq{filter:invert(71%) sepia(25%) saturate(7465%) hue-rotate(319deg) brightness(103%) contrast(88%)}.center.svelte-10cbfqq.svelte-10cbfqq{display:flex;align-items:center;justify-content:center}.icon.svelte-10cbfqq.svelte-10cbfqq{width:1.5rem;height:1.5rem}",
  map: null
};
var NotificationBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { notification } = $$props;
  if ($$props.notification === void 0 && $$bindings.notification && notification !== void 0)
    $$bindings.notification(notification);
  $$result.css.add(css$5);
  return `<div class="${escape(null_to_empty(`notification ${notification.bad ? "bad" : "good"}`), true) + " svelte-10cbfqq"}"><p class="${"svelte-10cbfqq"}">${escape(notification.message)}</p>
	<div class="${"center svelte-10cbfqq"}"><img alt="${"status icon"}"${add_attribute("src", notification.bad ? error : doneIcon, 0)} class="${"icon svelte-10cbfqq"}"></div>
</div>`;
});
var css$4 = {
  code: ".blog-showcase.svelte-6ijsi6.svelte-6ijsi6{display:flex;flex-direction:column;gap:0.5rem;background:#FFEFDC}h2.svelte-6ijsi6.svelte-6ijsi6{margin:1rem;font-size:2rem;font-weight:500}.layout-big.svelte-6ijsi6.svelte-6ijsi6{display:grid;grid-template-columns:3fr 1fr;gap:1rem}.button-holder.svelte-6ijsi6.svelte-6ijsi6{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;gap:1rem}.button-holder.svelte-6ijsi6 .button.svelte-6ijsi6{box-sizing:border-box;display:flex;align-items:center;padding:1rem 2rem;gap:2rem;width:100%;height:fit-content;border:none;background:#000;color:#fff;position:relative}.button-holder.svelte-6ijsi6 .button p.svelte-6ijsi6{font-weight:400;z-index:2;font-size:0.75rem}.button-holder.svelte-6ijsi6 .button .icon.svelte-6ijsi6{width:1rem;height:1rem;z-index:2;filter:invert(100%)}.button-holder.svelte-6ijsi6 .button div.svelte-6ijsi6{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:#FFEFDC;width:0%;height:0%;transition:width 0.25s ease-out, height 0.25s ease-out;z-index:1}.button-holder.svelte-6ijsi6 .button.svelte-6ijsi6:hover,.button-holder.svelte-6ijsi6 .button.svelte-6ijsi6:active{color:#000;cursor:pointer}.button-holder.svelte-6ijsi6 .button:hover div.svelte-6ijsi6,.button-holder.svelte-6ijsi6 .button:active div.svelte-6ijsi6{width:calc(100% - 2px);height:calc(100% - 2px)}.button-holder.svelte-6ijsi6 .button:hover .icon.svelte-6ijsi6,.button-holder.svelte-6ijsi6 .button:active .icon.svelte-6ijsi6{filter:unset}.button-holder.svelte-6ijsi6 .button:active div.svelte-6ijsi6{filter:brightness(90%)}h1.svelte-6ijsi6.svelte-6ijsi6{font-size:3.5rem}",
  map: null
};
var BlogShowcase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$4);
  return `<section id="${"blog-showcase"}" class="${"blog-showcase svelte-6ijsi6"}"><h2 class="${"svelte-6ijsi6"}">Care for a short coffee break?</h2>
	<div class="${"layout-big svelte-6ijsi6"}">${validate_component(BlogLayout, "BlogLayout").$$render($$result, { data }, {}, {})}
		<div class="${"button-holder svelte-6ijsi6"}"><h1 class="${"svelte-6ijsi6"}">Still thirsty?</h1>
			<a class="${"button svelte-6ijsi6"}" href="${"/blog"}"><p class="${"svelte-6ijsi6"}">Check out my blog</p>
				<img alt="${"icon"}"${add_attribute("src", arrowRight, 0)} class="${"icon svelte-6ijsi6"}">
				<div class="${"svelte-6ijsi6"}"></div></a></div></div>
</section>`;
});
var projects = [
  {
    name: "Aproxymatoinator",
    tagline: "The Ordinary Differential equation solver.",
    nameHeight: 10,
    description: [
      "Have you ever needed to numerically compute a result to a complicated system of ordinary differental equations (ODEs). Well, I had. So I wrote a slick web application that does all the hard work for me and on top of that it can display the result in the form of beautiful-looking graph.",
      "Aproxymatoinator has two modes of computation. In the first one it can approximate the result of a system of ODEs using Euler's method which is a simpler method of computation than the one provided by the second mode - RK4 which is Runge-Kutta's method of computation that uses four intermediate steps for each computational step.",
      "Aproxymatoinator is highly flexible. The algorithms used for computation can be switched on the fly and results of computation using both algorithms can be compared on the graph. Also, the user can provide information that changes the way, that Aproxymatoinator computes the differential equations such as: amount of steps and step size which both can be used to fine-tune the accuracy of computation."
    ],
    link: "https://github.com/eXotech-code/aproxymatoinator",
    banner: [
      "projects/aproxymatoinator.webp",
      "projects/aproxymatoinator-mobile.webp"
    ]
  },
  {
    name: "BMB",
    tagline: "The modular C++ server.",
    nameHeight: 28,
    description: [
      'Short for "Basic Multipurpose Backend". This project is my journey into low-level APIs that serve us the Internet.',
      "From the start I envisioned this project as something greater than just a simple web server. Right now the core of BMB is the front-end module responsible for handling REST requests and communication with other modules such as the database module which I have already created. It makes calls to MySQL Connector/C++ and retrieves any information that the client can ask the web server for.",
      "An interesting future project could be to make a buffer module that stays between the front-end module and the database module and caches the latest couple or the most common responses to requests in RAM memory of the machine. This could improve the performance of request handling significantly."
    ],
    link: "https://github.com/eXotech-code/BMB",
    banner: [
      "projects/bmb.webp",
      "projects/bmb-mobile.webp"
    ]
  }
];
var projectArr = {
  projects
};
var css$3 = {
  code: '.projects.svelte-tvq4o.svelte-tvq4o{display:grid;gap:1rem;grid-template-columns:[stories] 1fr [project] 3fr [steal] 1fr}.stories.svelte-tvq4o.svelte-tvq4o{display:flex;flex-direction:column;padding:1rem;gap:1rem}h2.svelte-tvq4o.svelte-tvq4o{font-size:2rem;font-weight:500}p.svelte-tvq4o.svelte-tvq4o{font-size:1rem;font-weight:300}.project.svelte-tvq4o.svelte-tvq4o{grid-column-start:project;display:flex;flex-direction:column;gap:1rem;padding:1rem}h1.svelte-tvq4o.svelte-tvq4o{font-size:3rem;font-weight:600}h3.svelte-tvq4o.svelte-tvq4o{font-family:"PlayFair Display", serif;font-size:1.5rem;font-weight:500}.description.svelte-tvq4o.svelte-tvq4o{font-size:1.25rem;font-weight:300;width:88%;text-align:justify;align-self:center}.steal.svelte-tvq4o.svelte-tvq4o{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;padding:1rem}.steal.svelte-tvq4o .button.svelte-tvq4o{box-sizing:border-box;display:flex;align-items:center;padding:1rem 2rem;gap:2rem;width:100%;height:fit-content;border:none;background:#000;color:#fff;position:relative}.steal.svelte-tvq4o .button p.svelte-tvq4o{font-weight:400;z-index:2;font-size:0.75rem}.steal.svelte-tvq4o .button .icon.svelte-tvq4o{width:1rem;height:1rem;z-index:2;filter:invert(100%)}.steal.svelte-tvq4o .button div.svelte-tvq4o{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:#FFEFDC;width:0%;height:0%;transition:width 0.25s ease-out, height 0.25s ease-out;z-index:1}.steal.svelte-tvq4o .button.svelte-tvq4o:hover,.steal.svelte-tvq4o .button.svelte-tvq4o:active{color:#000;cursor:pointer}.steal.svelte-tvq4o .button:hover div.svelte-tvq4o,.steal.svelte-tvq4o .button:active div.svelte-tvq4o{width:calc(100% - 2px);height:calc(100% - 2px)}.steal.svelte-tvq4o .button:hover .icon.svelte-tvq4o,.steal.svelte-tvq4o .button:active .icon.svelte-tvq4o{filter:unset}.steal.svelte-tvq4o .button:active div.svelte-tvq4o{filter:brightness(90%)}img.svelte-tvq4o.svelte-tvq4o{width:100%;height:auto}',
  map: null
};
var Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects2 = projectArr.projects;
  $$result.css.add(css$3);
  return `<section id="${"projects"}" class="${"projects svelte-tvq4o"}"><div class="${"stories svelte-tvq4o"}"><h2 class="${"svelte-tvq4o"}">Blasts from my past</h2>
		<p class="${"svelte-tvq4o"}">Sometimes people like to dwell on the past. For me and for those people I\u2019ve prepared this
			small memorial in the memory of projects long
			<strike>gone</strike> finished. I advise you to look around and enjoy the views. Sometimes humans
			find new inspiration in the most unexpected of places.
		</p></div>
	${each(projects2, (project) => {
    return `<div class="${"project svelte-tvq4o"}"><h1 class="${"svelte-tvq4o"}">${escape(project.name)}</h1>
			<h3 class="${"svelte-tvq4o"}">${escape(project.tagline)}</h3>
			<img class="${"banner svelte-tvq4o"}"${add_attribute("alt", project.name + " banner", 0)}${add_attribute("src", project.banner[0], 0)}>
			${each(project.description, (desc) => {
      return `<p class="${"description svelte-tvq4o"}">${escape(desc)}</p>`;
    })}</div>
		<div class="${"steal svelte-tvq4o"}"><h1 class="${"svelte-tvq4o"}">Steal, steal, steal!</h1>
			<p class="${"svelte-tvq4o"}">If you click this button, you will get to this project\u2019s GitHub page from where you can
				clone the code to modify it, integrate it into your own works or even print it out and hang
				it on the wall to admire. You can literally do anything with it. All brought to you by the
				MIT licensing goodness.
			</p>
			<button class="${"button svelte-tvq4o"}"><p class="${"svelte-tvq4o"}">Steal the code</p>
				<img alt="${"icon"}"${add_attribute("src", arrowRight, 0)} class="${"icon svelte-tvq4o"}">
				<div class="${"svelte-tvq4o"}"></div></button>
		</div>`;
  })}
</section>`;
});
var send = "/_app/immutable/assets/send-727b66e7.svg";
var css$2 = {
  code: 'svg{z-index:-1}text{font-family:"IBM Plex Mono", monospace;font-size:0.5rem;line-height:0.9rem;opacity:0;pointer-events:none;z-index:2}circle{fill:#FFEFDC;stroke:#000;stroke-width:1;pointer-events:all}circle:hover+text{opacity:1}.pulse{stroke-width:2}.green{stroke:#2b7878;fill:#2b7878}',
  map: null
};
var Pulsars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  class PulsarMap {
    constructor() {
      this.svg = void 0;
      this.pulsars = void 0;
      this.coordinateRange = void 0;
      this.intervals = [];
    }
    async downloadData(url) {
      const resp = await fetch(url);
      this.pulsars = await resp.json();
    }
    async getRange() {
      const resp = await fetch("https://www.piskiewicz.org/api/pulsars/range");
      this.coordinateRange = await resp.json();
    }
    fakeData() {
      this.coordinateRange = [50, 200, -10, 40];
      this.pulsars = [];
      for (let i = 0; i < 100; i++) {
        this.pulsars.push({
          name: "FAKE PULSAR",
          frequency: randInt(1, 10) / 10,
          location: [
            randInt(this.coordinateRange[0], this.coordinateRange[1]),
            randInt(this.coordinateRange[2], this.coordinateRange[3])
          ],
          binary: false
        });
      }
    }
    clear() {
      this.svg.innerHTML = "";
      this.intervals.forEach((i) => window.clearInterval(i));
      this.intervals = [];
    }
    build() {
      this.clear();
      this.downloadData("https://www.piskiewicz.org/api/pulsars/53").then(() => this.getRange()).catch(() => {
        console.log("Couldn't connect to server. Displaying fake pulsar data.");
      }).then(() => {
        var _a;
        if (!((_a = this.pulsars) == null ? void 0 : _a.length))
          this.fakeData();
        this.draw();
      });
    }
    interval() {
      this.build();
      window.setInterval(() => this.build(), 36e3);
    }
    calcRange(coordSpace) {
      let range = [coordSpace[1] - coordSpace[0]];
      if (coordSpace[2] < 0 && coordSpace[3] > 0) {
        range.push(Math.abs(coordSpace[2]) + coordSpace[3]);
      } else if (coordSpace[3] < 0) {
        range.push(Math.abs(coordSpace[2]) + Math.abs(coordSpace[3]));
      } else {
        range.push(coordSpace[3] - coordSpace[2]);
      }
      return range;
    }
    reprojectX(pulsars, range, initialX) {
      pulsars.forEach((p) => {
        const percentage = (p.location[0] - initialX) / range;
        const newXPos = 1e3 * percentage;
        p.location = [newXPos, p.location[1]];
      });
      return pulsars;
    }
    reprojectY(pulsars, range, initialY) {
      pulsars.forEach((p) => {
        const zeroBasedInitial = initialY + 90;
        const zeroBased = 90 + p.location[1];
        const percentage = (zeroBased - zeroBasedInitial) / range;
        const newYPos = 526 * percentage;
        p.location = [p.location[0], newYPos];
      });
      return pulsars;
    }
    projectToSvg(pulsars) {
      pulsars.forEach((p) => {
        p.location = [p.location[0], 526 - p.location[1]];
      });
      return pulsars;
    }
    drawPulsar(location, frequency, name) {
      var _a;
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", location[0].toString());
      circle.setAttribute("cy", location[1].toString());
      circle.setAttribute("r", "2");
      circle.addEventListener("click", () => {
        navigator.clipboard.writeText(name);
        circle.classList.toggle("green");
        window.setTimeout(() => circle.classList.toggle("green"), 500);
      });
      (_a = this.svg) == null ? void 0 : _a.appendChild(circle);
      this.intervals.push(window.setInterval(
        () => {
          circle.classList.toggle("pulse");
        },
        1e3 / frequency
      ));
    }
    drawInfo(name, location) {
      var _a;
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", (location[0] - 2).toString());
      text.setAttribute("y", (location[1] - 10).toString());
      text.appendChild(document.createTextNode(name));
      (_a = this.svg) == null ? void 0 : _a.appendChild(text);
    }
    draw() {
      const range = this.calcRange(this.coordinateRange);
      let pList = this.reprojectX(this.pulsars, range[0], this.coordinateRange[0]);
      pList = this.reprojectY(pList, range[1], this.coordinateRange[2]);
      pList = this.projectToSvg(pList);
      pList.forEach((l) => {
        this.drawPulsar(l.location, l.frequency, l.name);
        this.drawInfo(l.name, l.location);
      });
    }
  }
  let map = new PulsarMap();
  $$result.css.add(css$2);
  return `<svg class="${"pulsars"}" viewBox="${"0 0 1000 526"}"${add_attribute("this", map.svg, 0)}></svg>`;
});
var css$1 = {
  code: ".contact.svelte-1c8oqks.svelte-1c8oqks{display:grid;grid-template-columns:1fr 2fr 1fr;position:relative;pointer-events:none}.form-holder.svelte-1c8oqks.svelte-1c8oqks{background:#FFEFDC;z-index:3;grid-column-start:2;padding:1rem;display:flex;flex-direction:column;gap:1rem}h2.svelte-1c8oqks.svelte-1c8oqks{font-size:2rem;font-weight:500}p.svelte-1c8oqks.svelte-1c8oqks{font-size:1.5rem;font-weight:300}form.svelte-1c8oqks.svelte-1c8oqks{justify-self:center;display:flex;flex-direction:column;gap:1rem;padding:1rem 2rem;pointer-events:all}form.svelte-1c8oqks input.svelte-1c8oqks{height:2rem}form.svelte-1c8oqks .button.svelte-1c8oqks{box-sizing:border-box;display:flex;align-items:center;padding:1rem 2rem;gap:2rem;width:fit-content;height:fit-content;border:none;background:#000;color:#fff;position:relative}form.svelte-1c8oqks .button p.svelte-1c8oqks{font-weight:400;z-index:2;font-size:0.75rem}form.svelte-1c8oqks .button .icon.svelte-1c8oqks{width:1rem;height:1rem;z-index:2;filter:invert(100%)}form.svelte-1c8oqks .button div.svelte-1c8oqks{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:#FFEFDC;width:0%;height:0%;transition:width 0.25s ease-out, height 0.25s ease-out;z-index:1}form.svelte-1c8oqks .button.svelte-1c8oqks:hover,form.svelte-1c8oqks .button.svelte-1c8oqks:active{color:#000;cursor:pointer}form.svelte-1c8oqks .button:hover div.svelte-1c8oqks,form.svelte-1c8oqks .button:active div.svelte-1c8oqks{width:calc(100% - 2px);height:calc(100% - 2px)}form.svelte-1c8oqks .button:hover .icon.svelte-1c8oqks,form.svelte-1c8oqks .button:active .icon.svelte-1c8oqks{filter:unset}form.svelte-1c8oqks .button:active div.svelte-1c8oqks{filter:brightness(90%)}.input-container.svelte-1c8oqks.svelte-1c8oqks{position:relative}label.svelte-1c8oqks.svelte-1c8oqks{display:block;position:absolute;top:-0.5rem;left:0.5rem;background:#FFEFDC;padding:0 0.5rem}label.svelte-1c8oqks p.svelte-1c8oqks{font-size:0.625rem;font-weight:300}input.svelte-1c8oqks.svelte-1c8oqks,textarea.svelte-1c8oqks.svelte-1c8oqks{box-sizing:border-box;background:none;border:1px solid #000;width:100%;padding:0.5rem 1rem}textarea.svelte-1c8oqks.svelte-1c8oqks{height:4rem;resize:none}button.svelte-1c8oqks.svelte-1c8oqks{align-self:center}.pulsars{position:absolute;inset:1rem;pointer-events:all}",
  map: null
};
var Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { notification = { message: "", bad: false } } = $$props;
  let form = { name: "", email: "", message: "" };
  if ($$props.notification === void 0 && $$bindings.notification && notification !== void 0)
    $$bindings.notification(notification);
  $$result.css.add(css$1);
  return `<section id="${"contact"}" class="${"contact svelte-1c8oqks"}"><div class="${"form-holder svelte-1c8oqks"}"><h2 class="${"svelte-1c8oqks"}">You interested?</h2>
		<p class="${"svelte-1c8oqks"}">You want it, I want it. We both know what we want. What is left for you is to just fill out
			this form.
		</p>
		<form class="${"svelte-1c8oqks"}"><div class="${"input-container svelte-1c8oqks"}"><label for="${"name"}" class="${"svelte-1c8oqks"}"><p class="${"svelte-1c8oqks"}">Your name</p></label>
				<input name="${"name"}" required class="${"svelte-1c8oqks"}"${add_attribute("value", form.name, 0)}></div>
			<div class="${"input-container svelte-1c8oqks"}"><label for="${"email"}" class="${"svelte-1c8oqks"}"><p class="${"svelte-1c8oqks"}">Your email</p></label>
				<input name="${"email"}" required class="${"svelte-1c8oqks"}"${add_attribute("value", form.email, 0)}></div>
			<div class="${"input-container svelte-1c8oqks"}"><label for="${"message"}" class="${"svelte-1c8oqks"}"><p class="${"svelte-1c8oqks"}">Your message</p></label>
				<textarea name="${"message"}" required class="${"svelte-1c8oqks"}">${""}</textarea></div>
			<button class="${"button svelte-1c8oqks"}"><p class="${"svelte-1c8oqks"}">To the ether!</p>
				<img${add_attribute("src", send, 0)} alt="${"send"}" class="${"icon svelte-1c8oqks"}">
				<div class="${"svelte-1c8oqks"}"></div></button></form></div>
	${validate_component(Pulsars, "Pulsars").$$render($$result, {}, {}, {})}
</section>`;
});
var css = {
  code: '.banner.svelte-21q00h.svelte-21q00h{height:75vh;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:3rem 1fr;grid-template-areas:". graphic" "text graphic"}.banner-text.svelte-21q00h.svelte-21q00h{grid-area:text;display:flex;flex-direction:column;gap:1rem;padding:1rem}h1.svelte-21q00h.svelte-21q00h{font-size:3rem;font-weight:900}h3.svelte-21q00h.svelte-21q00h{font-size:1.5rem;font-weight:300}.button-holder.svelte-21q00h.svelte-21q00h{width:100%;height:100%;display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-end}.button-holder.svelte-21q00h .button.svelte-21q00h{box-sizing:border-box;display:flex;align-items:center;padding:1rem 2rem;gap:2rem;width:auto;height:fit-content;border:none;background:#000;color:#fff;position:relative}.button-holder.svelte-21q00h .button p.svelte-21q00h{font-weight:400;z-index:2;font-size:0.75rem}.button-holder.svelte-21q00h .button .icon.svelte-21q00h{width:1rem;height:1rem;z-index:2;filter:invert(100%)}.button-holder.svelte-21q00h .button div.svelte-21q00h{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:#FFEFDC;width:0%;height:0%;transition:width 0.25s ease-out, height 0.25s ease-out;z-index:1}.button-holder.svelte-21q00h .button.svelte-21q00h:hover,.button-holder.svelte-21q00h .button.svelte-21q00h:active{color:#000;cursor:pointer}.button-holder.svelte-21q00h .button:hover div.svelte-21q00h,.button-holder.svelte-21q00h .button:active div.svelte-21q00h{width:calc(100% - 2px);height:calc(100% - 2px)}.button-holder.svelte-21q00h .button:hover .icon.svelte-21q00h,.button-holder.svelte-21q00h .button:active .icon.svelte-21q00h{filter:unset}.button-holder.svelte-21q00h .button:active div.svelte-21q00h{filter:brightness(90%)}.button.svelte-21q00h>.svelte-21q00h{pointer-events:none}hr.svelte-21q00h.svelte-21q00h{border-color:#000;margin:0}.graphic.svelte-21q00h.svelte-21q00h{position:absolute;height:90%;width:50%;right:0;top:-1rem;z-index:-1}.notification-holder.svelte-21q00h.svelte-21q00h{position:absolute;bottom:1rem;right:1rem}.floating-menu.svelte-21q00h.svelte-21q00h{position:fixed;display:flex;align-items:center;justify-content:center;bottom:1rem;right:1rem;float:right;padding:0.5rem;border:1px solid #000;background:#FFEFDC;z-index:3;transition:border 0.25s ease-out}.transparent-border.svelte-21q00h.svelte-21q00h{border:1px solid rgba(255, 255, 255, 0)}',
  map: null
};
var Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let y = 0;
  let sections = [
    { name: "home", pos: 0 },
    { name: "blog-showcase", pos: 0 },
    { name: "projects", pos: 0 },
    { name: "contact", pos: 0 },
    { name: "footer", pos: 0 }
  ];
  function getClosest(scrollPos) {
    let closest = sections[0];
    let found = false;
    for (let i = 0; i < sections.length - 1; i++) {
      if (scrollPos > sections[i].pos && scrollPos < sections[i + 1].pos) {
        closest = sections[i];
        found = true;
        break;
      }
    }
    if (!found)
      closest = sections[4];
    return closest.name;
  }
  let notification = { bad: false, message: "" };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (notification.message !== "") {
          window.setTimeout(() => notification.message = "", 4e3);
        }
      }
    }
    getClosest(y);
    $$rendered = `

${$$result.head += `${$$result.title = `<title>Home - PISKIEWICZ</title>`, ""}`, ""}

<section id="${"home"}" class="${"banner svelte-21q00h"}"><div class="${"banner-text svelte-21q00h"}"><h1 class="${"svelte-21q00h"}">So...<br>Tell me what do you need for your new venture.</h1>
		<h3 class="${"svelte-21q00h"}">...and let me worry about the details.</h3>
		<div class="${"button-holder svelte-21q00h"}"><a class="${"button svelte-21q00h"}" href="${"#contact"}"><p class="${"svelte-21q00h"}">Contact me</p>
				<img alt="${"icon"}"${add_attribute("src", arrowRight, 0)} class="${"icon svelte-21q00h"}">
				<div class="${"svelte-21q00h"}"></div></a></div></div>
	<div class="${"graphic svelte-21q00h"}">${validate_component(Lines, "Lines").$$render($$result, {}, {}, {})}</div></section>
<hr class="${"svelte-21q00h"}">
${validate_component(BlogShowcase, "BlogShowcase").$$render($$result, { data }, {}, {})}
${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}
${validate_component(Contact, "Contact").$$render(
      $$result,
      { notification },
      {
        notification: ($$value) => {
          notification = $$value;
          $$settled = false;
        }
      },
      {}
    )}
${notification.message !== "" ? `${validate_component(NotificationBox, "NotificationBox").$$render($$result, { notification }, {}, {})}` : ``}
${``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
//# sourceMappingURL=_page.svelte-TDR5D56R.js.map
