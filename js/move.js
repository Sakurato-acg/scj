// // document.addEventListener("mousemove", function (e) {
// //   var img = document.querySelector("#imgs");
// //   img.style.top = e.pageY - 50 + "px";
// //   img.style.left = e.pageX - 50 + "px";
// //   console.log(e.pageY);
// // });
// window.JSCompiler_renameProperty = function (t, e) {
//   return t;
// };
// let t = 0,
//   e = 0,
//   s = [],
//   n = 0,
//   r = document.createTextNode("");
// new window.MutationObserver(function () {
//   const t = s.length;
//   for (let e = 0; e < t; e++) {
//     let t = s[e];
//     if (t)
//       try {
//         t();
//       } catch (t) {
//         setTimeout(() => {
//           throw t;
//         });
//       }
//   }
//   s.splice(0, t), (e += t);
// }).observe(r, { characterData: !0 });
// const i = {
//     after: (t) => ({
//       run: (e) => window.setTimeout(e, t),
//       cancel(t) {
//         window.clearTimeout(t);
//       },
//     }),
//     run: (t, e) => window.setTimeout(t, e),
//     cancel(t) {
//       window.clearTimeout(t);
//     },
//   },
//   o = {
//     run: (t) => window.requestAnimationFrame(t),
//     cancel(t) {
//       window.cancelAnimationFrame(t);
//     },
//   },
//   a = {
//     run: (t) =>
//       window.requestIdleCallback
//         ? window.requestIdleCallback(t)
//         : window.setTimeout(t, 16),
//     cancel(t) {
//       window.cancelIdleCallback
//         ? window.cancelIdleCallback(t)
//         : window.clearTimeout(t);
//     },
//   },
//   l = {
//     run: (e) => ((r.textContent = n++), s.push(e), t++),
//     cancel(t) {
//       const n = t - e;
//       if (n >= 0) {
//         if (!s[n]) throw new Error("invalid async handle: " + t);
//         s[n] = null;
//       }
//     },
//   };
// let h = 0;
// const d = function (t) {
//   let e = t.__mixinApplications;
//   e || ((e = new WeakMap()), (t.__mixinApplications = e));
//   let s = h++;
//   return function (n) {
//     let r = n.__mixinSet;
//     if (r && r[s]) return n;
//     let i = e,
//       o = i.get(n);
//     o || ((o = t(n)), i.set(n, o));
//     let a = Object.create(o.__mixinSet || r || null);
//     return (a[s] = !0), (o.__mixinSet = a), o;
//   };
// };
// class c {
//   constructor() {
//     (this._asyncModule = null), (this._callback = null), (this._timer = null);
//   }
//   setConfig(t, e) {
//     (this._asyncModule = t),
//       (this._callback = e),
//       (this._timer = this._asyncModule.run(() => {
//         (this._timer = null), u.delete(this), this._callback();
//       }));
//   }
//   cancel() {
//     this.isActive() && (this._cancelAsync(), u.delete(this));
//   }
//   _cancelAsync() {
//     this.isActive() &&
//       (this._asyncModule.cancel(this._timer), (this._timer = null));
//   }
//   flush() {
//     this.isActive() && (this.cancel(), this._callback());
//   }
//   isActive() {
//     return null != this._timer;
//   }
//   static debounce(t, e, s) {
//     return (
//       t instanceof c ? t._cancelAsync() : (t = new c()), t.setConfig(e, s), t
//     );
//   }
// }
// let u = new Set();
// const p = function (t) {
//     u.add(t);
//   },
//   _ = function () {
//     const t = Boolean(u.size);
//     return (
//       u.forEach((t) => {
//         try {
//           t.flush();
//         } catch (t) {
//           setTimeout(() => {
//             throw t;
//           });
//         }
//       }),
//       t
//     );
//   };
// let f,
//   m,
//   y = /(url\()([^)]*)(\))/g,
//   g = /(^\/)|(^#)|(^[\w-\d]*:)/;
// function b(t, e) {
//   if (t && g.test(t)) return t;
//   if (void 0 === f) {
//     f = !1;
//     try {
//       const t = new URL("b", "http://a");
//       (t.pathname = "c%20d"), (f = "http://a/c%20d" === t.href);
//     } catch (t) {}
//   }
//   return (
//     e || (e = document.baseURI || window.location.href),
//     f
//       ? new URL(t, e).href
//       : (m ||
//           ((m = document.implementation.createHTMLDocument("temp")),
//           (m.base = m.createElement("base")),
//           m.head.appendChild(m.base),
//           (m.anchor = m.createElement("a")),
//           m.body.appendChild(m.anchor)),
//         (m.base.href = e),
//         (m.anchor.href = t),
//         m.anchor.href || t)
//   );
// }
// function P(t, e) {
//   return t.replace(y, function (t, s, n, r) {
//     return s + "'" + b(n.replace(/["']/g, ""), e) + "'" + r;
//   });
// }
// function C(t) {
//   return t.substring(0, t.lastIndexOf("/") + 1);
// }
// const v = !window.ShadyDOM;
// Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss);
// let S = C(document.baseURI || window.location.href),
//   w = (window.Polymer && window.Polymer.sanitizeDOMValue) || void 0;
// const E =
//   window.ShadyDOM && window.ShadyDOM.noPatch && window.ShadyDOM.wrap
//     ? window.ShadyDOM.wrap
//     : (t) => t;
// let T = "string" == typeof document.head.style.touchAction,
//   O = "__polymerGestures",
//   N = "__polymerGesturesHandled",
//   x = "__polymerGesturesTouchAction",
//   A = ["mousedown", "mousemove", "mouseup", "click"],
//   I = [0, 1, 4, 2],
//   M = (function () {
//     try {
//       return 1 === new MouseEvent("test", { buttons: 1 }).buttons;
//     } catch (t) {
//       return !1;
//     }
//   })();
// function R(t) {
//   return A.indexOf(t) > -1;
// }
// let L = !1;
// function k(t) {
//   R(t);
// }
// !(function () {
//   try {
//     let t = Object.defineProperty({}, "passive", {
//       get() {
//         L = !0;
//       },
//     });
//     window.addEventListener("test", null, t),
//       window.removeEventListener("test", null, t);
//   } catch (t) {}
// })();
// let D = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);
// const F = [],
//   H = {
//     button: !0,
//     input: !0,
//     keygen: !0,
//     meter: !0,
//     output: !0,
//     textarea: !0,
//     progress: !0,
//     select: !0,
//   },
//   z = {
//     button: !0,
//     command: !0,
//     fieldset: !0,
//     input: !0,
//     keygen: !0,
//     optgroup: !0,
//     option: !0,
//     select: !0,
//     textarea: !0,
//   };
// function j(t) {
//   let e = Array.prototype.slice.call(t.labels || []);
//   if (!e.length) {
//     e = [];
//     let s = t.getRootNode();
//     if (t.id) {
//       let n = s.querySelectorAll(`label[for = ${t.id}]`);
//       for (let t = 0; t < n.length; t++) e.push(n[t]);
//     }
//   }
//   return e;
// }
// let B = function (t) {
//   let e = t.sourceCapabilities;
//   var s;
//   if (
//     (!e || e.firesTouchEvents) &&
//     ((t[N] = { skip: !0 }), "click" === t.type)
//   ) {
//     let e = !1,
//       n = U(t);
//     for (let t = 0; t < n.length; t++) {
//       if (n[t].nodeType === Node.ELEMENT_NODE)
//         if ("label" === n[t].localName) F.push(n[t]);
//         else if (((s = n[t]), H[s.localName])) {
//           let s = j(n[t]);
//           for (let t = 0; t < s.length; t++) e = e || F.indexOf(s[t]) > -1;
//         }
//       if (n[t] === Y.mouse.target) return;
//     }
//     if (e) return;
//     t.preventDefault(), t.stopPropagation();
//   }
// };
// function q(t) {
//   let e = D ? ["click"] : A;
//   for (let s, n = 0; n < e.length; n++)
//     (s = e[n]),
//       t
//         ? ((F.length = 0), document.addEventListener(s, B, !0))
//         : document.removeEventListener(s, B, !0);
// }
// function $(t) {
//   let e = t.type;
//   if (!R(e)) return !1;
//   if ("mousemove" === e) {
//     let e = void 0 === t.buttons ? 1 : t.buttons;
//     return (
//       t instanceof window.MouseEvent && !M && (e = I[t.which] || 0),
//       Boolean(1 & e)
//     );
//   }
//   return 0 === (void 0 === t.button ? 0 : t.button);
// }
// let Y = {
//   mouse: { target: null, mouseIgnoreJob: null },
//   touch: { x: 0, y: 0, id: -1, scrollDecided: !1 },
// };
// function J(t, e, s) {
//   (t.movefn = e),
//     (t.upfn = s),
//     document.addEventListener("mousemove", e),
//     document.addEventListener("mouseup", s);
// }
// function V(t) {
//   document.removeEventListener("mousemove", t.movefn),
//     document.removeEventListener("mouseup", t.upfn),
//     (t.movefn = null),
//     (t.upfn = null);
// }
// document.addEventListener(
//   "touchend",
//   function (t) {
//     Y.mouse.mouseIgnoreJob || q(!0),
//       (Y.mouse.target = U(t)[0]),
//       (Y.mouse.mouseIgnoreJob = c.debounce(
//         Y.mouse.mouseIgnoreJob,
//         i.after(2500),
//         function () {
//           q(), (Y.mouse.target = null), (Y.mouse.mouseIgnoreJob = null);
//         }
//       ));
//   },
//   !!L && { passive: !0 }
// );
// const U =
//     window.ShadyDOM && window.ShadyDOM.noPatch
//       ? window.ShadyDOM.composedPath
//       : (t) => (t.composedPath && t.composedPath()) || [],
//   X = {},
//   W = [];
// function G(t, e) {
//   let s = document.elementFromPoint(t, e),
//     n = s;
//   for (; n && n.shadowRoot && !window.ShadyDOM; ) {
//     let r = n;
//     if (((n = n.shadowRoot.elementFromPoint(t, e)), r === n)) break;
//     n && (s = n);
//   }
//   return s;
// }
// function Z(t) {
//   const e = U(t);
//   return e.length > 0 ? e[0] : t.target;
// }
// function K(t) {
//   let e,
//     s = t.type,
//     n = t.currentTarget.__polymerGestures;
//   if (!n) return;
//   let r = n[s];
//   if (r) {
//     if (!t[N] && ((t[N] = {}), "touch" === s.slice(0, 5))) {
//       let e = (t = t).changedTouches[0];
//       if (
//         ("touchstart" === s &&
//           1 === t.touches.length &&
//           (Y.touch.id = e.identifier),
//         Y.touch.id !== e.identifier)
//       )
//         return;
//       T ||
//         ("touchstart" !== s && "touchmove" !== s) ||
//         (function (t) {
//           let e = t.changedTouches[0],
//             s = t.type;
//           if ("touchstart" === s)
//             (Y.touch.x = e.clientX),
//               (Y.touch.y = e.clientY),
//               (Y.touch.scrollDecided = !1);
//           else if ("touchmove" === s) {
//             if (Y.touch.scrollDecided) return;
//             Y.touch.scrollDecided = !0;
//             let s = (function (t) {
//                 let e = "auto",
//                   s = U(t);
//                 for (let t, n = 0; n < s.length; n++)
//                   if (((t = s[n]), t[x])) {
//                     e = t[x];
//                     break;
//                   }
//                 return e;
//               })(t),
//               n = !1,
//               r = Math.abs(Y.touch.x - e.clientX),
//               i = Math.abs(Y.touch.y - e.clientY);
//             t.cancelable &&
//               ("none" === s
//                 ? (n = !0)
//                 : "pan-x" === s
//                 ? (n = i > r)
//                 : "pan-y" === s && (n = r > i)),
//               n ? t.preventDefault() : rt("track");
//           }
//         })(t);
//     }
//     if (((e = t[N]), !e.skip)) {
//       for (let s, n = 0; n < W.length; n++)
//         (s = W[n]),
//           r[s.name] &&
//             !e[s.name] &&
//             s.flow &&
//             s.flow.start.indexOf(t.type) > -1 &&
//             s.reset &&
//             s.reset();
//       for (let n, i = 0; i < W.length; i++)
//         (n = W[i]), r[n.name] && !e[n.name] && ((e[n.name] = !0), n[s](t));
//     }
//   }
// }
// function Q(t, e, s) {
//   return (
//     !!X[e] &&
//     ((function (t, e, s) {
//       let n = X[e],
//         r = n.deps,
//         i = n.name,
//         o = t[O];
//       o || (t[O] = o = {});
//       for (let e, s, n = 0; n < r.length; n++)
//         (e = r[n]),
//           (D && R(e) && "click" !== e) ||
//             ((s = o[e]),
//             s || (o[e] = s = { _count: 0 }),
//             0 === s._count && t.addEventListener(e, K, k(e)),
//             (s[i] = (s[i] || 0) + 1),
//             (s._count = (s._count || 0) + 1));
//       t.addEventListener(e, s), n.touchAction && st(t, n.touchAction);
//     })(t, e, s),
//     !0)
//   );
// }
// function tt(t, e, s) {
//   return (
//     !!X[e] &&
//     ((function (t, e, s) {
//       let n = X[e],
//         r = n.deps,
//         i = n.name,
//         o = t[O];
//       if (o)
//         for (let e, s, n = 0; n < r.length; n++)
//           (e = r[n]),
//             (s = o[e]),
//             s &&
//               s[i] &&
//               ((s[i] = (s[i] || 1) - 1),
//               (s._count = (s._count || 1) - 1),
//               0 === s._count && t.removeEventListener(e, K, k(e)));
//       t.removeEventListener(e, s);
//     })(t, e, s),
//     !0)
//   );
// }
// function et(t) {
//   W.push(t);
//   for (let e = 0; e < t.emits.length; e++) X[t.emits[e]] = t;
// }
// function st(t, e) {
//   T &&
//     t instanceof HTMLElement &&
//     l.run(() => {
//       t.style.touchAction = e;
//     }),
//     (t[x] = e);
// }
// function nt(t, e, s) {
//   let n = new Event(e, { bubbles: !0, cancelable: !0, composed: !0 });
//   if (((n.detail = s), E(t).dispatchEvent(n), n.defaultPrevented)) {
//     let t = s.preventer || s.sourceEvent;
//     t && t.preventDefault && t.preventDefault();
//   }
// }
// function rt(t) {
//   let e = (function (t) {
//     for (let e, s = 0; s < W.length; s++) {
//       e = W[s];
//       for (let s, n = 0; n < e.emits.length; n++)
//         if (((s = e.emits[n]), s === t)) return e;
//     }
//     return null;
//   })(t);
//   e.info && (e.info.prevent = !0);
// }
// function it(t, e, s, n) {
//   e &&
//     nt(e, t, {
//       x: s.clientX,
//       y: s.clientY,
//       sourceEvent: s,
//       preventer: n,
//       prevent: function (t) {
//         return rt(t);
//       },
//     });
// }
// function ot(t, e, s) {
//   if (t.prevent) return !1;
//   if (t.started) return !0;
//   let n = Math.abs(t.x - e),
//     r = Math.abs(t.y - s);
//   return n >= 5 || r >= 5;
// }
// function at(t, e, s) {
//   if (!e) return;
//   let n,
//     r = t.moves[t.moves.length - 2],
//     i = t.moves[t.moves.length - 1],
//     o = i.x - t.x,
//     a = i.y - t.y,
//     l = 0;
//   r && ((n = i.x - r.x), (l = i.y - r.y)),
//     nt(e, "track", {
//       state: t.state,
//       x: s.clientX,
//       y: s.clientY,
//       dx: o,
//       dy: a,
//       ddx: n,
//       ddy: l,
//       sourceEvent: s,
//       hover: function () {
//         return G(s.clientX, s.clientY);
//       },
//     });
// }
// function lt(t, e, s) {
//   let n = Math.abs(e.clientX - t.x),
//     r = Math.abs(e.clientY - t.y),
//     i = Z(s || e);
//   !i ||
//     (z[i.localName] && i.hasAttribute("disabled")) ||
//     ((isNaN(n) ||
//       isNaN(r) ||
//       (n <= 25 && r <= 25) ||
//       (function (t) {
//         if ("click" === t.type) {
//           if (0 === t.detail) return !0;
//           let e = Z(t);
//           if (!e.nodeType || e.nodeType !== Node.ELEMENT_NODE) return !0;
//           let s = e.getBoundingClientRect(),
//             n = t.pageX,
//             r = t.pageY;
//           return !(n >= s.left && n <= s.right && r >= s.top && r <= s.bottom);
//         }
//         return !1;
//       })(e)) &&
//       (t.prevent ||
//         nt(i, "tap", {
//           x: e.clientX,
//           y: e.clientY,
//           sourceEvent: e,
//           preventer: s,
//         })));
// }
// et({
//   name: "downup",
//   deps: ["mousedown", "touchstart", "touchend"],
//   flow: { start: ["mousedown", "touchstart"], end: ["mouseup", "touchend"] },
//   emits: ["down", "up"],
//   info: { movefn: null, upfn: null },
//   reset: function () {
//     V(this.info);
//   },
//   mousedown: function (t) {
//     if (!$(t)) return;
//     let e = Z(t),
//       s = this;
//     J(
//       this.info,
//       function (t) {
//         $(t) || (it("up", e, t), V(s.info));
//       },
//       function (t) {
//         $(t) && it("up", e, t), V(s.info);
//       }
//     ),
//       it("down", e, t);
//   },
//   touchstart: function (t) {
//     it("down", Z(t), t.changedTouches[0], t);
//   },
//   touchend: function (t) {
//     it("up", Z(t), t.changedTouches[0], t);
//   },
// }),
//   et({
//     name: "track",
//     touchAction: "none",
//     deps: ["mousedown", "touchstart", "touchmove", "touchend"],
//     flow: { start: ["mousedown", "touchstart"], end: ["mouseup", "touchend"] },
//     emits: ["track"],
//     info: {
//       x: 0,
//       y: 0,
//       state: "start",
//       started: !1,
//       moves: [],
//       addMove: function (t) {
//         this.moves.length > 2 && this.moves.shift(), this.moves.push(t);
//       },
//       movefn: null,
//       upfn: null,
//       prevent: !1,
//     },
//     reset: function () {
//       (this.info.state = "start"),
//         (this.info.started = !1),
//         (this.info.moves = []),
//         (this.info.x = 0),
//         (this.info.y = 0),
//         (this.info.prevent = !1),
//         V(this.info);
//     },
//     mousedown: function (t) {
//       if (!$(t)) return;
//       let e = Z(t),
//         s = this,
//         n = function (t) {
//           let n = t.clientX,
//             r = t.clientY;
//           ot(s.info, n, r) &&
//             ((s.info.state = s.info.started
//               ? "mouseup" === t.type
//                 ? "end"
//                 : "track"
//               : "start"),
//             "start" === s.info.state && rt("tap"),
//             s.info.addMove({ x: n, y: r }),
//             $(t) || ((s.info.state = "end"), V(s.info)),
//             e && at(s.info, e, t),
//             (s.info.started = !0));
//         };
//       J(this.info, n, function (t) {
//         s.info.started && n(t), V(s.info);
//       }),
//         (this.info.x = t.clientX),
//         (this.info.y = t.clientY);
//     },
//     touchstart: function (t) {
//       let e = t.changedTouches[0];
//       (this.info.x = e.clientX), (this.info.y = e.clientY);
//     },
//     touchmove: function (t) {
//       let e = Z(t),
//         s = t.changedTouches[0],
//         n = s.clientX,
//         r = s.clientY;
//       ot(this.info, n, r) &&
//         ("start" === this.info.state && rt("tap"),
//         this.info.addMove({ x: n, y: r }),
//         at(this.info, e, s),
//         (this.info.state = "track"),
//         (this.info.started = !0));
//     },
//     touchend: function (t) {
//       let e = Z(t),
//         s = t.changedTouches[0];
//       this.info.started &&
//         ((this.info.state = "end"),
//         this.info.addMove({ x: s.clientX, y: s.clientY }),
//         at(this.info, e, s));
//     },
//   }),
//   et({
//     name: "tap",
//     deps: ["mousedown", "click", "touchstart", "touchend"],
//     flow: { start: ["mousedown", "touchstart"], end: ["click", "touchend"] },
//     emits: ["tap"],
//     info: { x: NaN, y: NaN, prevent: !1 },
//     reset: function () {
//       (this.info.x = NaN), (this.info.y = NaN), (this.info.prevent = !1);
//     },
//     mousedown: function (t) {
//       $(t) && ((this.info.x = t.clientX), (this.info.y = t.clientY));
//     },
//     click: function (t) {
//       $(t) && lt(this.info, t);
//     },
//     touchstart: function (t) {
//       const e = t.changedTouches[0];
//       (this.info.x = e.clientX), (this.info.y = e.clientY);
//     },
//     touchend: function (t) {
//       lt(this.info, t.changedTouches[0], t);
//     },
//   });
// const ht = Z,
//   dt = Q,
//   ct = tt;
// var ut = Object.freeze({
//   __proto__: null,
//   gestures: X,
//   recognizers: W,
//   deepTargetFind: G,
//   addListener: Q,
//   removeListener: tt,
//   register: et,
//   setTouchAction: st,
//   prevent: rt,
//   resetMouseCanceller: function () {
//     Y.mouse.mouseIgnoreJob && Y.mouse.mouseIgnoreJob.flush();
//   },
//   findOriginalTarget: ht,
//   add: dt,
//   remove: ct,
// });
// let pt = {},
//   _t = {};
// class ft extends HTMLElement {
//   static get observedAttributes() {
//     return ["id"];
//   }
//   static import(t, e) {
//     if (t) {
//       let s = (function (t) {
//         return pt[t] || _t[t.toLowerCase()];
//       })(t);
//       return s && e ? s.querySelector(e) : s;
//     }
//     return null;
//   }
//   attributeChangedCallback(t, e, s, n) {
//     e !== s && this.register();
//   }
//   get assetpath() {
//     if (!this.__assetpath) {
//       const t =
//           window.HTMLImports && HTMLImports.importForElement
//             ? HTMLImports.importForElement(this) || document
//             : this.ownerDocument,
//         e = b(this.getAttribute("assetpath") || "", t.baseURI);
//       this.__assetpath = C(e);
//     }
//     return this.__assetpath;
//   }
//   register(t) {
//     var e;
//     (t = t || this.id) &&
//       ((this.id = t),
//       (function (t, e) {
//         pt[t] = _t[t.toLowerCase()] = e;
//       })(t, this),
//       (e = this).querySelector("style") &&
//         console.warn("dom-module %s has style outside template", e.id));
//   }
// }
// (ft.prototype.modules = pt), customElements.define("dom-module", ft);
// function mt(t) {
//   return ft.import(t);
// }
// function yt(t) {
//   const e = P((t.body ? t.body : t).textContent, t.baseURI),
//     s = document.createElement("style");
//   return (s.textContent = e), s;
// }
// function gt(t) {
//   const e = t.trim().split(/\s+/),
//     s = [];
//   for (let t = 0; t < e.length; t++) s.push(...bt(e[t]));
//   return s;
// }
// function bt(t) {
//   const e = mt(t);
//   if (!e)
//     return console.warn("Could not find style data in module named", t), [];
//   if (void 0 === e._styles) {
//     const t = [];
//     t.push(...Ct(e));
//     const s = e.querySelector("template");
//     s && t.push(...Pt(s, e.assetpath)), (e._styles = t);
//   }
//   return e._styles;
// }
// function Pt(t, e) {
//   if (!t._styles) {
//     const s = [],
//       n = t.content.querySelectorAll("style");
//     for (let t = 0; t < n.length; t++) {
//       let r = n[t],
//         i = r.getAttribute("include");
//       i &&
//         s.push(
//           ...gt(i).filter(function (t, e, s) {
//             return s.indexOf(t) === e;
//           })
//         ),
//         e && (r.textContent = P(r.textContent, e)),
//         s.push(r);
//     }
//     t._styles = s;
//   }
//   return t._styles;
// }
// function Ct(t) {
//   const e = [],
//     s = t.querySelectorAll("link[rel=import][type~=css]");
//   for (let t = 0; t < s.length; t++) {
//     let n = s[t];
//     if (n.import) {
//       const t = n.import,
//         s = n.hasAttribute("shady-unscoped");
//       if (s && !t._unscopedStyle) {
//         const e = yt(t);
//         e.setAttribute("shady-unscoped", ""), (t._unscopedStyle = e);
//       } else t._style || (t._style = yt(t));
//       e.push(s ? t._unscopedStyle : t._style);
//     }
//   }
//   return e;
// }
// function vt(t) {
//   let e = mt(t);
//   if (e && void 0 === e._cssText) {
//     let t = (function (t) {
//         let e = "",
//           s = Ct(t);
//         for (let t = 0; t < s.length; t++) e += s[t].textContent;
//         return e;
//       })(e),
//       s = e.querySelector("template");
//     s &&
//       (t += (function (t, e) {
//         let s = "";
//         const n = Pt(t, e);
//         for (let t = 0; t < n.length; t++) {
//           let e = n[t];
//           e.parentNode && e.parentNode.removeChild(e), (s += e.textContent);
//         }
//         return s;
//       })(s, e.assetpath)),
//       (e._cssText = t || null);
//   }
//   return (
//     e || console.warn("Could not find style data in module named", t),
//     (e && e._cssText) || ""
//   );
// }
// function St(t) {
//   return t.indexOf(".") >= 0;
// }
// function wt(t) {
//   let e = t.indexOf(".");
//   return -1 === e ? t : t.slice(0, e);
// }
// function Et(t, e) {
//   return 0 === t.indexOf(e + ".");
// }
// function Tt(t, e) {
//   return 0 === e.indexOf(t + ".");
// }
// function Ot(t, e, s) {
//   return e + s.slice(t.length);
// }
// function Nt(t, e) {
//   return t === e || Et(t, e) || Tt(t, e);
// }
// function xt(t) {
//   if (Array.isArray(t)) {
//     let e = [];
//     for (let s = 0; s < t.length; s++) {
//       let n = t[s].toString().split(".");
//       for (let t = 0; t < n.length; t++) e.push(n[t]);
//     }
//     return e.join(".");
//   }
//   return t;
// }
// function At(t) {
//   return Array.isArray(t) ? xt(t).split(".") : t.toString().split(".");
// }
// function It(t, e, s) {
//   let n = t,
//     r = At(e);
//   for (let t = 0; t < r.length; t++) {
//     if (!n) return;
//     n = n[r[t]];
//   }
//   return s && (s.path = r.join(".")), n;
// }
// function Mt(t, e, s) {
//   let n = t,
//     r = At(e),
//     i = r[r.length - 1];
//   if (r.length > 1) {
//     for (let t = 0; t < r.length - 1; t++) {
//       if (((n = n[r[t]]), !n)) return;
//     }
//     n[i] = s;
//   } else n[e] = s;
//   return r.join(".");
// }
// const Rt = {},
//   Lt = /-[a-z]/g,
//   kt = /([A-Z])/g;
// function Dt(t) {
//   return (
//     Rt[t] ||
//     (Rt[t] = t.indexOf("-") < 0 ? t : t.replace(Lt, (t) => t[1].toUpperCase()))
//   );
// }
// function Ft(t) {
//   return Rt[t] || (Rt[t] = t.replace(kt, "-$1").toLowerCase());
// }
// const Ht = l,
//   zt = d(
//     (t) =>
//       class extends t {
//         static createProperties(t) {
//           const e = this.prototype;
//           for (let s in t) s in e || e._createPropertyAccessor(s);
//         }
//         static attributeNameForProperty(t) {
//           return t.toLowerCase();
//         }
//         static typeForProperty(t) {}
//         _createPropertyAccessor(t, e) {
//           this._addPropertyToAttributeMap(t),
//             this.hasOwnProperty("__dataHasAccessor") ||
//               (this.__dataHasAccessor = Object.assign(
//                 {},
//                 this.__dataHasAccessor
//               )),
//             this.__dataHasAccessor[t] ||
//               ((this.__dataHasAccessor[t] = !0),
//               this._definePropertyAccessor(t, e));
//         }
//         _addPropertyToAttributeMap(t) {
//           if (
//             (this.hasOwnProperty("__dataAttributes") ||
//               (this.__dataAttributes = Object.assign(
//                 {},
//                 this.__dataAttributes
//               )),
//             !this.__dataAttributes[t])
//           ) {
//             const e = this.constructor.attributeNameForProperty(t);
//             this.__dataAttributes[e] = t;
//           }
//         }
//         _definePropertyAccessor(t, e) {
//           Object.defineProperty(this, t, {
//             get() {
//               return this._getProperty(t);
//             },
//             set: e
//               ? function () {}
//               : function (e) {
//                   this._setProperty(t, e);
//                 },
//           });
//         }
//         constructor() {
//           super(),
//             (this.__dataEnabled = !1),
//             (this.__dataReady = !1),
//             (this.__dataInvalid = !1),
//             (this.__data = {}),
//             (this.__dataPending = null),
//             (this.__dataOld = null),
//             (this.__dataInstanceProps = null),
//             (this.__serializing = !1),
//             this._initializeProperties();
//         }
//         ready() {
//           (this.__dataReady = !0), this._flushProperties();
//         }
//         _initializeProperties() {
//           for (let t in this.__dataHasAccessor)
//             this.hasOwnProperty(t) &&
//               ((this.__dataInstanceProps = this.__dataInstanceProps || {}),
//               (this.__dataInstanceProps[t] = this[t]),
//               delete this[t]);
//         }
//         _initializeInstanceProperties(t) {
//           Object.assign(this, t);
//         }
//         _setProperty(t, e) {
//           this._setPendingProperty(t, e) && this._invalidateProperties();
//         }
//         _getProperty(t) {
//           return this.__data[t];
//         }
//         _setPendingProperty(t, e, s) {
//           let n = this.__data[t],
//             r = this._shouldPropertyChange(t, e, n);
//           return (
//             r &&
//               (this.__dataPending ||
//                 ((this.__dataPending = {}), (this.__dataOld = {})),
//               this.__dataOld &&
//                 !(t in this.__dataOld) &&
//                 (this.__dataOld[t] = n),
//               (this.__data[t] = e),
//               (this.__dataPending[t] = e)),
//             r
//           );
//         }
//         _invalidateProperties() {
//           !this.__dataInvalid &&
//             this.__dataReady &&
//             ((this.__dataInvalid = !0),
//             Ht.run(() => {
//               this.__dataInvalid &&
//                 ((this.__dataInvalid = !1), this._flushProperties());
//             }));
//         }
//         _enableProperties() {
//           this.__dataEnabled ||
//             ((this.__dataEnabled = !0),
//             this.__dataInstanceProps &&
//               (this._initializeInstanceProperties(this.__dataInstanceProps),
//               (this.__dataInstanceProps = null)),
//             this.ready());
//         }
//         _flushProperties() {
//           const t = this.__data,
//             e = this.__dataPending,
//             s = this.__dataOld;
//           this._shouldPropertiesChange(t, e, s) &&
//             ((this.__dataPending = null),
//             (this.__dataOld = null),
//             this._propertiesChanged(t, e, s));
//         }
//         _shouldPropertiesChange(t, e, s) {
//           return Boolean(e);
//         }
//         _propertiesChanged(t, e, s) {}
//         _shouldPropertyChange(t, e, s) {
//           return s !== e && (s == s || e == e);
//         }
//         attributeChangedCallback(t, e, s, n) {
//           e !== s && this._attributeToProperty(t, s),
//             super.attributeChangedCallback &&
//               super.attributeChangedCallback(t, e, s, n);
//         }
//         _attributeToProperty(t, e, s) {
//           if (!this.__serializing) {
//             const n = this.__dataAttributes,
//               r = (n && n[t]) || t;
//             this[r] = this._deserializeValue(
//               e,
//               s || this.constructor.typeForProperty(r)
//             );
//           }
//         }
//         _propertyToAttribute(t, e, s) {
//           (this.__serializing = !0),
//             (s = arguments.length < 3 ? this[t] : s),
//             this._valueToNodeAttribute(
//               this,
//               s,
//               e || this.constructor.attributeNameForProperty(t)
//             ),
//             (this.__serializing = !1);
//         }
//         _valueToNodeAttribute(t, e, s) {
//           const n = this._serializeValue(e);
//           void 0 === n
//             ? t.removeAttribute(s)
//             : (("class" !== s && "name" !== s && "slot" !== s) || (t = E(t)),
//               t.setAttribute(s, n));
//         }
//         _serializeValue(t) {
//           switch (typeof t) {
//             case "boolean":
//               return t ? "" : void 0;
//             default:
//               return null != t ? t.toString() : void 0;
//           }
//         }
//         _deserializeValue(t, e) {
//           switch (e) {
//             case Boolean:
//               return null !== t;
//             case Number:
//               return Number(t);
//             default:
//               return t;
//           }
//         }
//       }
//   ),
//   jt = {};
// let Bt = HTMLElement.prototype;
// for (; Bt; ) {
//   let t = Object.getOwnPropertyNames(Bt);
//   for (let e = 0; e < t.length; e++) jt[t[e]] = !0;
//   Bt = Object.getPrototypeOf(Bt);
// }
// const qt = d((t) => {
//     const e = zt(t);
//     return class extends e {
//       static createPropertiesForAttributes() {
//         let t = this.observedAttributes;
//         for (let e = 0; e < t.length; e++)
//           this.prototype._createPropertyAccessor(Dt(t[e]));
//       }
//       static attributeNameForProperty(t) {
//         return Ft(t);
//       }
//       _initializeProperties() {
//         this.__dataProto &&
//           (this._initializeProtoProperties(this.__dataProto),
//           (this.__dataProto = null)),
//           super._initializeProperties();
//       }
//       _initializeProtoProperties(t) {
//         for (let e in t) this._setProperty(e, t[e]);
//       }
//       _ensureAttribute(t, e) {
//         const s = this;
//         s.hasAttribute(t) || this._valueToNodeAttribute(s, e, t);
//       }
//       _serializeValue(t) {
//         switch (typeof t) {
//           case "object":
//             if (t instanceof Date) return t.toString();
//             if (t)
//               try {
//                 return JSON.stringify(t);
//               } catch (t) {
//                 return "";
//               }
//           default:
//             return super._serializeValue(t);
//         }
//       }
//       _deserializeValue(t, e) {
//         let s;
//         switch (e) {
//           case Object:
//             try {
//               s = JSON.parse(t);
//             } catch (e) {
//               s = t;
//             }
//             break;
//           case Array:
//             try {
//               s = JSON.parse(t);
//             } catch (e) {
//               (s = null),
//                 console.warn(
//                   "Polymer::Attributes: couldn't decode Array as JSON: " + t
//                 );
//             }
//             break;
//           case Date:
//             (s = isNaN(t) ? String(t) : Number(t)), (s = new Date(s));
//             break;
//           default:
//             s = super._deserializeValue(t, e);
//         }
//         return s;
//       }
//       _definePropertyAccessor(t, e) {
//         !(function (t, e) {
//           if (!jt[e]) {
//             let s = t[e];
//             void 0 !== s &&
//               (t.__data
//                 ? t._setPendingProperty(e, s)
//                 : (t.__dataProto
//                     ? t.hasOwnProperty(
//                         JSCompiler_renameProperty("__dataProto", t)
//                       ) || (t.__dataProto = Object.create(t.__dataProto))
//                     : (t.__dataProto = {}),
//                   (t.__dataProto[e] = s)));
//           }
//         })(this, t),
//           super._definePropertyAccessor(t, e);
//       }
//       _hasAccessor(t) {
//         return this.__dataHasAccessor && this.__dataHasAccessor[t];
//       }
//       _isPropertyPending(t) {
//         return Boolean(this.__dataPending && t in this.__dataPending);
//       }
//     };
//   }),
//   $t = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
//   Yt = { "dom-if": !0, "dom-repeat": !0 };
// function Jt(t) {
//   let e = t.getAttribute("is");
//   if (e && Yt[e]) {
//     let s = t;
//     for (
//       s.removeAttribute("is"),
//         t = s.ownerDocument.createElement(e),
//         s.parentNode.replaceChild(t, s),
//         t.appendChild(s);
//       s.attributes.length;

//     )
//       t.setAttribute(s.attributes[0].name, s.attributes[0].value),
//         s.removeAttribute(s.attributes[0].name);
//   }
//   return t;
// }
// function Vt(t, e) {
//   let s = e.parentInfo && Vt(t, e.parentInfo);
//   if (!s) return t;
//   $t.currentNode = s;
//   for (let t = $t.firstChild(), s = 0; t; t = $t.nextSibling())
//     if (e.parentIndex === s++) return t;
// }
// function Ut(t, e, s, n) {
//   n.id && (e[n.id] = s);
// }
// function Xt(t, e, s) {
//   if (s.events && s.events.length)
//     for (let n, r = 0, i = s.events; r < i.length && (n = i[r]); r++)
//       t._addMethodEventListenerToNode(e, n.name, n.value, t);
// }
// function Wt(t, e, s) {
//   s.templateInfo && (e._templateInfo = s.templateInfo);
// }
// const Gt = d(
//   (t) =>
//     class extends t {
//       static _parseTemplate(t, e) {
//         if (!t._templateInfo) {
//           let e = (t._templateInfo = {});
//           (e.nodeInfoList = []),
//             (e.stripWhiteSpace = !0),
//             this._parseTemplateContent(t, e, { parent: null });
//         }
//         return t._templateInfo;
//       }
//       static _parseTemplateContent(t, e, s) {
//         return this._parseTemplateNode(t.content, e, s);
//       }
//       static _parseTemplateNode(t, e, s) {
//         let n,
//           r = t;
//         return (
//           "template" != r.localName || r.hasAttribute("preserve-content")
//             ? "slot" === r.localName && (e.hasInsertionPoint = !0)
//             : (n = this._parseTemplateNestedTemplate(r, e, s) || n),
//           ($t.currentNode = r),
//           $t.firstChild() && (n = this._parseTemplateChildNodes(r, e, s) || n),
//           r.hasAttributes &&
//             r.hasAttributes() &&
//             (n = this._parseTemplateNodeAttributes(r, e, s) || n),
//           n
//         );
//       }
//       static _parseTemplateChildNodes(t, e, s) {
//         if ("script" !== t.localName && "style" !== t.localName) {
//           $t.currentNode = t;
//           for (let n, r = $t.firstChild(), i = 0; r; r = n) {
//             if (
//               ("template" == r.localName && (r = Jt(r)),
//               ($t.currentNode = r),
//               (n = $t.nextSibling()),
//               r.nodeType === Node.TEXT_NODE)
//             ) {
//               let s = n;
//               for (; s && s.nodeType === Node.TEXT_NODE; )
//                 (r.textContent += s.textContent),
//                   (n = $t.nextSibling()),
//                   t.removeChild(s),
//                   (s = n);
//               if (e.stripWhiteSpace && !r.textContent.trim()) {
//                 t.removeChild(r);
//                 continue;
//               }
//             }
//             let o = { parentIndex: i, parentInfo: s };
//             this._parseTemplateNode(r, e, o) &&
//               (o.infoIndex = e.nodeInfoList.push(o) - 1),
//               ($t.currentNode = r),
//               $t.parentNode() && i++;
//           }
//         }
//       }
//       static _parseTemplateNestedTemplate(t, e, s) {
//         let n = this._parseTemplate(t, e);
//         return (
//           (n.content =
//             t.content.ownerDocument.createDocumentFragment()).appendChild(
//             t.content
//           ),
//           (s.templateInfo = n),
//           !0
//         );
//       }
//       static _parseTemplateNodeAttributes(t, e, s) {
//         let n = !1,
//           r = Array.from(t.attributes);
//         for (let i, o = r.length - 1; (i = r[o]); o--)
//           n = this._parseTemplateNodeAttribute(t, e, s, i.name, i.value) || n;
//         return n;
//       }
//       static _parseTemplateNodeAttribute(t, e, s, n, r) {
//         return "on-" === n.slice(0, 3)
//           ? (t.removeAttribute(n),
//             (s.events = s.events || []),
//             s.events.push({ name: n.slice(3), value: r }),
//             !0)
//           : "id" === n && ((s.id = r), !0);
//       }
//       static _contentForTemplate(t) {
//         let e = t._templateInfo;
//         return (e && e.content) || t.content;
//       }
//       _stampTemplate(t) {
//         t &&
//           !t.content &&
//           window.HTMLTemplateElement &&
//           HTMLTemplateElement.decorate &&
//           HTMLTemplateElement.decorate(t);
//         let e = this.constructor._parseTemplate(t),
//           s = e.nodeInfoList,
//           n = e.content || t.content,
//           r = document.importNode(n, !0);
//         r.__noInsertionPoint = !e.hasInsertionPoint;
//         let i = (r.nodeList = new Array(s.length));
//         r.$ = {};
//         for (let t, e = 0, n = s.length; e < n && (t = s[e]); e++) {
//           let s = (i[e] = Vt(r, t));
//           Ut(0, r.$, s, t), Wt(0, s, t), Xt(this, s, t);
//         }
//         return (r = r), r;
//       }
//       _addMethodEventListenerToNode(t, e, s, n) {
//         let r = (function (t, e, s) {
//           return (
//             (t = t._methodHost || t),
//             function (e) {
//               t[s]
//                 ? t[s](e, e.detail)
//                 : console.warn("listener method `" + s + "` not defined");
//             }
//           );
//         })((n = n || t), 0, s);
//         return this._addEventListenerToNode(t, e, r), r;
//       }
//       _addEventListenerToNode(t, e, s) {
//         t.addEventListener(e, s);
//       }
//       _removeEventListenerFromNode(t, e, s) {
//         t.removeEventListener(e, s);
//       }
//     }
// );
// let Zt = 0;
// const Kt = {
//     COMPUTE: "__computeEffects",
//     REFLECT: "__reflectEffects",
//     NOTIFY: "__notifyEffects",
//     PROPAGATE: "__propagateEffects",
//     OBSERVE: "__observeEffects",
//     READ_ONLY: "__readOnly",
//   },
//   Qt = /[A-Z]/;
// function te(t, e) {
//   let s = t[e];
//   if (s) {
//     if (!t.hasOwnProperty(e)) {
//       s = t[e] = Object.create(t[e]);
//       for (let t in s) {
//         let e = s[t],
//           n = (s[t] = Array(e.length));
//         for (let t = 0; t < e.length; t++) n[t] = e[t];
//       }
//     }
//   } else s = t[e] = {};
//   return s;
// }
// function ee(t, e, s, n, r, i) {
//   if (e) {
//     let o = !1,
//       a = Zt++;
//     for (let l in s) se(t, e, a, l, s, n, r, i) && (o = !0);
//     return o;
//   }
//   return !1;
// }
// function se(t, e, s, n, r, i, o, a) {
//   let l = !1,
//     h = e[o ? wt(n) : n];
//   if (h)
//     for (let e, d = 0, c = h.length; d < c && (e = h[d]); d++)
//       (e.info && e.info.lastRun === s) ||
//         (o && !ne(n, e.trigger)) ||
//         (e.info && (e.info.lastRun = s),
//         e.fn(t, n, r, i, e.info, o, a),
//         (l = !0));
//   return l;
// }
// function ne(t, e) {
//   if (e) {
//     let s = e.name;
//     return (
//       s == t || !(!e.structured || !Et(s, t)) || !(!e.wildcard || !Tt(s, t))
//     );
//   }
//   return !0;
// }
// function re(t, e, s, n, r) {
//   let i = "string" == typeof r.method ? t[r.method] : r.method,
//     o = r.property;
//   i
//     ? i.call(t, t.__data[o], n[o])
//     : r.dynamicFn ||
//       console.warn("observer method `" + r.method + "` not defined");
// }
// function ie(t, e, s) {
//   let n = wt(e);
//   if (n !== e) {
//     return oe(t, Ft(n) + "-changed", s[e], e), !0;
//   }
//   return !1;
// }
// function oe(t, e, s, n) {
//   let r = { value: s, queueProperty: !0 };
//   n && (r.path = n), E(t).dispatchEvent(new CustomEvent(e, { detail: r }));
// }
// function ae(t, e, s, n, r, i) {
//   let o = (i ? wt(e) : e) != e ? e : null,
//     a = o ? It(t, o) : t.__data[e];
//   o && void 0 === a && (a = s[e]), oe(t, r.eventName, a, o);
// }
// function le(t, e, s, n, r) {
//   let i = t.__data[e];
//   w && (i = w(i, r.attrName, "attribute", t)),
//     t._propertyToAttribute(e, r.attrName, i);
// }
// function he(t, e, s, n, r) {
//   let i = me(t, e, s, n, r),
//     o = r.methodInfo;
//   t.__dataHasAccessor && t.__dataHasAccessor[o]
//     ? t._setPendingProperty(o, i, !0)
//     : (t[o] = i);
// }
// function de(t, e, s, n, r, i, o) {
//   s.bindings = s.bindings || [];
//   let a = {
//     kind: n,
//     target: r,
//     parts: i,
//     literal: o,
//     isCompound: 1 !== i.length,
//   };
//   if (
//     (s.bindings.push(a),
//     (function (t) {
//       return (
//         Boolean(t.target) &&
//         "attribute" != t.kind &&
//         "text" != t.kind &&
//         !t.isCompound &&
//         "{" === t.parts[0].mode
//       );
//     })(a))
//   ) {
//     let { event: t, negate: e } = a.parts[0];
//     (a.listenerEvent = t || Ft(r) + "-changed"), (a.listenerNegate = e);
//   }
//   let l = e.nodeInfoList.length;
//   for (let s = 0; s < a.parts.length; s++) {
//     let n = a.parts[s];
//     (n.compoundIndex = s), ce(t, e, a, n, l);
//   }
// }
// function ce(t, e, s, n, r) {
//   if (!n.literal)
//     if ("attribute" === s.kind && "-" === s.target[0])
//       console.warn(
//         "Cannot set attribute " +
//           s.target +
//           ' because "-" is not a valid attribute starting character'
//       );
//     else {
//       let i = n.dependencies,
//         o = { index: r, binding: s, part: n, evaluator: t };
//       for (let s = 0; s < i.length; s++) {
//         let n = i[s];
//         "string" == typeof n && ((n = Ce(n)), (n.wildcard = !0)),
//           t._addTemplatePropertyEffect(e, n.rootProperty, {
//             fn: ue,
//             info: o,
//             trigger: n,
//           });
//       }
//     }
// }
// function ue(t, e, s, n, r, i, o) {
//   let a = o[r.index],
//     l = r.binding,
//     h = r.part;
//   if (
//     i &&
//     h.source &&
//     e.length > h.source.length &&
//     "property" == l.kind &&
//     !l.isCompound &&
//     a.__isPropertyEffectsClient &&
//     a.__dataHasAccessor &&
//     a.__dataHasAccessor[l.target]
//   ) {
//     let n = s[e];
//     (e = Ot(h.source, l.target, e)),
//       a._setPendingPropertyOrPath(e, n, !1, !0) && t._enqueueClient(a);
//   } else {
//     !(function (t, e, s, n, r) {
//       (r = (function (t, e, s, n) {
//         if (s.isCompound) {
//           let r = t.__dataCompoundStorage[s.target];
//           (r[n.compoundIndex] = e), (e = r.join(""));
//         }
//         "attribute" !== s.kind &&
//           (("textContent" !== s.target &&
//             ("value" !== s.target ||
//               ("input" !== t.localName && "textarea" !== t.localName))) ||
//             (e = null == e ? "" : e));
//         return e;
//       })(e, r, s, n)),
//         w && (r = w(r, s.target, s.kind, e));
//       if ("attribute" == s.kind) t._valueToNodeAttribute(e, r, s.target);
//       else {
//         let n = s.target;
//         e.__isPropertyEffectsClient &&
//         e.__dataHasAccessor &&
//         e.__dataHasAccessor[n]
//           ? (e[Kt.READ_ONLY] && e[Kt.READ_ONLY][n]) ||
//             (e._setPendingProperty(n, r) && t._enqueueClient(e))
//           : t._setUnmanagedPropertyToNode(e, n, r);
//       }
//     })(t, a, l, h, r.evaluator._evaluateBinding(t, h, e, s, n, i));
//   }
// }
// function pe(t, e) {
//   if (e.isCompound) {
//     let s = t.__dataCompoundStorage || (t.__dataCompoundStorage = {}),
//       n = e.parts,
//       r = new Array(n.length);
//     for (let t = 0; t < n.length; t++) r[t] = n[t].literal;
//     let i = e.target;
//     (s[i] = r), e.literal && "property" == e.kind && (t[i] = e.literal);
//   }
// }
// function _e(t, e, s) {
//   if (s.listenerEvent) {
//     let n = s.parts[0];
//     t.addEventListener(s.listenerEvent, function (t) {
//       !(function (t, e, s, n, r) {
//         let i,
//           o = t.detail,
//           a = o && o.path;
//         a ? ((n = Ot(s, n, a)), (i = o && o.value)) : (i = t.currentTarget[s]),
//           (i = r ? !i : i),
//           (e[Kt.READ_ONLY] && e[Kt.READ_ONLY][n]) ||
//             !e._setPendingPropertyOrPath(n, i, !0, Boolean(a)) ||
//             (o && o.queueProperty) ||
//             e._invalidateProperties();
//       })(t, e, s.target, n.source, n.negate);
//     });
//   }
// }
// function fe(t, e, s, n, r, i) {
//   i = e.static || (i && ("object" != typeof i || i[e.methodName]));
//   let o = {
//     methodName: e.methodName,
//     args: e.args,
//     methodInfo: r,
//     dynamicFn: i,
//   };
//   for (let r, i = 0; i < e.args.length && (r = e.args[i]); i++)
//     r.literal ||
//       t._addPropertyEffect(r.rootProperty, s, { fn: n, info: o, trigger: r });
//   i && t._addPropertyEffect(e.methodName, s, { fn: n, info: o });
// }
// function me(t, e, s, n, r) {
//   let i = t._methodHost || t,
//     o = i[r.methodName];
//   if (o) {
//     let n = t._marshalArgs(r.args, e, s);
//     return o.apply(i, n);
//   }
//   r.dynamicFn || console.warn("method `" + r.methodName + "` not defined");
// }
// const ye = [],
//   ge = new RegExp(
//     "(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})",
//     "g"
//   );
// function be(t) {
//   let e = "";
//   for (let s = 0; s < t.length; s++) {
//     e += t[s].literal || "";
//   }
//   return e;
// }
// function Pe(t) {
//   let e = t.match(/([^\s]+?)\(([\s\S]*)\)/);
//   if (e) {
//     let t = { methodName: e[1], static: !0, args: ye };
//     if (e[2].trim()) {
//       return (function (t, e) {
//         return (
//           (e.args = t.map(function (t) {
//             let s = Ce(t);
//             return s.literal || (e.static = !1), s;
//           }, this)),
//           e
//         );
//       })(e[2].replace(/\\,/g, "&comma;").split(","), t);
//     }
//     return t;
//   }
//   return null;
// }
// function Ce(t) {
//   let e = t
//       .trim()
//       .replace(/&comma;/g, ",")
//       .replace(/\\(.)/g, "$1"),
//     s = { name: e, value: "", literal: !1 },
//     n = e[0];
//   switch (("-" === n && (n = e[1]), n >= "0" && n <= "9" && (n = "#"), n)) {
//     case "'":
//     case '"':
//       (s.value = e.slice(1, -1)), (s.literal = !0);
//       break;
//     case "#":
//       (s.value = Number(e)), (s.literal = !0);
//   }
//   return (
//     s.literal ||
//       ((s.rootProperty = wt(e)),
//       (s.structured = St(e)),
//       s.structured &&
//         ((s.wildcard = ".*" == e.slice(-2)),
//         s.wildcard && (s.name = e.slice(0, -2)))),
//     s
//   );
// }
// function ve(t, e, s) {
//   let n = It(t, s);
//   return void 0 === n && (n = e[s]), n;
// }
// function Se(t, e, s, n) {
//   t.notifyPath(s + ".splices", { indexSplices: n }),
//     t.notifyPath(s + ".length", e.length);
// }
// function we(t, e, s, n, r, i) {
//   Se(t, e, s, [
//     { index: n, addedCount: r, removed: i, object: e, type: "splice" },
//   ]);
// }
// const Ee = d((t) => {
//   const e = Gt(qt(t));
//   return class extends e {
//     constructor() {
//       super(),
//         (this.__isPropertyEffectsClient = !0),
//         (this.__dataCounter = 0),
//         this.__dataClientsReady,
//         this.__dataPendingClients,
//         this.__dataToNotify,
//         this.__dataLinkedPaths,
//         this.__dataHasPaths,
//         this.__dataCompoundStorage,
//         this.__dataHost,
//         this.__dataTemp,
//         this.__dataClientsInitialized,
//         this.__data,
//         this.__dataPending,
//         this.__dataOld,
//         this.__computeEffects,
//         this.__reflectEffects,
//         this.__notifyEffects,
//         this.__propagateEffects,
//         this.__observeEffects,
//         this.__readOnly,
//         this.__templateInfo;
//     }
//     get PROPERTY_EFFECT_TYPES() {
//       return Kt;
//     }
//     _initializeProperties() {
//       super._initializeProperties(),
//         Te.registerHost(this),
//         (this.__dataClientsReady = !1),
//         (this.__dataPendingClients = null),
//         (this.__dataToNotify = null),
//         (this.__dataLinkedPaths = null),
//         (this.__dataHasPaths = !1),
//         (this.__dataCompoundStorage = this.__dataCompoundStorage || null),
//         (this.__dataHost = this.__dataHost || null),
//         (this.__dataTemp = {}),
//         (this.__dataClientsInitialized = !1);
//     }
//     _initializeProtoProperties(t) {
//       (this.__data = Object.create(t)),
//         (this.__dataPending = Object.create(t)),
//         (this.__dataOld = {});
//     }
//     _initializeInstanceProperties(t) {
//       let e = this[Kt.READ_ONLY];
//       for (let s in t)
//         (e && e[s]) ||
//           ((this.__dataPending = this.__dataPending || {}),
//           (this.__dataOld = this.__dataOld || {}),
//           (this.__data[s] = this.__dataPending[s] = t[s]));
//     }
//     _addPropertyEffect(t, e, s) {
//       this._createPropertyAccessor(t, e == Kt.READ_ONLY);
//       let n = te(this, e)[t];
//       n || (n = this[e][t] = []), n.push(s);
//     }
//     _removePropertyEffect(t, e, s) {
//       let n = te(this, e)[t],
//         r = n.indexOf(s);
//       r >= 0 && n.splice(r, 1);
//     }
//     _hasPropertyEffect(t, e) {
//       let s = this[e];
//       return Boolean(s && s[t]);
//     }
//     _hasReadOnlyEffect(t) {
//       return this._hasPropertyEffect(t, Kt.READ_ONLY);
//     }
//     _hasNotifyEffect(t) {
//       return this._hasPropertyEffect(t, Kt.NOTIFY);
//     }
//     _hasReflectEffect(t) {
//       return this._hasPropertyEffect(t, Kt.REFLECT);
//     }
//     _hasComputedEffect(t) {
//       return this._hasPropertyEffect(t, Kt.COMPUTE);
//     }
//     _setPendingPropertyOrPath(t, e, s, n) {
//       if (n || wt(Array.isArray(t) ? t[0] : t) !== t) {
//         if (!n) {
//           let s = It(this, t);
//           if (!(t = Mt(this, t, e)) || !super._shouldPropertyChange(t, e, s))
//             return !1;
//         }
//         if (((this.__dataHasPaths = !0), this._setPendingProperty(t, e, s)))
//           return (
//             (function (t, e, s) {
//               let n = t.__dataLinkedPaths;
//               if (n) {
//                 let r;
//                 for (let i in n) {
//                   let o = n[i];
//                   Tt(i, e)
//                     ? ((r = Ot(i, o, e)),
//                       t._setPendingPropertyOrPath(r, s, !0, !0))
//                     : Tt(o, e) &&
//                       ((r = Ot(o, i, e)),
//                       t._setPendingPropertyOrPath(r, s, !0, !0));
//                 }
//               }
//             })(this, t, e),
//             !0
//           );
//       } else {
//         if (this.__dataHasAccessor && this.__dataHasAccessor[t])
//           return this._setPendingProperty(t, e, s);
//         this[t] = e;
//       }
//       return !1;
//     }
//     _setUnmanagedPropertyToNode(t, e, s) {
//       (s === t[e] && "object" != typeof s) || (t[e] = s);
//     }
//     _setPendingProperty(t, e, s) {
//       let n = this.__dataHasPaths && St(t),
//         r = n ? this.__dataTemp : this.__data;
//       return (
//         !!this._shouldPropertyChange(t, e, r[t]) &&
//         (this.__dataPending ||
//           ((this.__dataPending = {}), (this.__dataOld = {})),
//         t in this.__dataOld || (this.__dataOld[t] = this.__data[t]),
//         n ? (this.__dataTemp[t] = e) : (this.__data[t] = e),
//         (this.__dataPending[t] = e),
//         (n || (this[Kt.NOTIFY] && this[Kt.NOTIFY][t])) &&
//           ((this.__dataToNotify = this.__dataToNotify || {}),
//           (this.__dataToNotify[t] = s)),
//         !0)
//       );
//     }
//     _setProperty(t, e) {
//       this._setPendingProperty(t, e, !0) && this._invalidateProperties();
//     }
//     _invalidateProperties() {
//       this.__dataReady && this._flushProperties();
//     }
//     _enqueueClient(t) {
//       (this.__dataPendingClients = this.__dataPendingClients || []),
//         t !== this && this.__dataPendingClients.push(t);
//     }
//     _flushProperties() {
//       this.__dataCounter++, super._flushProperties(), this.__dataCounter--;
//     }
//     _flushClients() {
//       this.__dataClientsReady
//         ? this.__enableOrFlushClients()
//         : ((this.__dataClientsReady = !0),
//           this._readyClients(),
//           (this.__dataReady = !0));
//     }
//     __enableOrFlushClients() {
//       let t = this.__dataPendingClients;
//       if (t) {
//         this.__dataPendingClients = null;
//         for (let e = 0; e < t.length; e++) {
//           let s = t[e];
//           s.__dataEnabled
//             ? s.__dataPending && s._flushProperties()
//             : s._enableProperties();
//         }
//       }
//     }
//     _readyClients() {
//       this.__enableOrFlushClients();
//     }
//     setProperties(t, e) {
//       for (let s in t)
//         (!e && this[Kt.READ_ONLY] && this[Kt.READ_ONLY][s]) ||
//           this._setPendingPropertyOrPath(s, t[s], !0);
//       this._invalidateProperties();
//     }
//     ready() {
//       this._flushProperties(),
//         this.__dataClientsReady || this._flushClients(),
//         this.__dataPending && this._flushProperties();
//     }
//     _propertiesChanged(t, e, s) {
//       let n = this.__dataHasPaths;
//       (this.__dataHasPaths = !1),
//         (function (t, e, s, n) {
//           let r = t[Kt.COMPUTE];
//           if (r) {
//             let i = e;
//             for (; ee(t, r, i, s, n); )
//               Object.assign(s, t.__dataOld),
//                 Object.assign(e, t.__dataPending),
//                 (i = t.__dataPending),
//                 (t.__dataPending = null);
//           }
//         })(this, e, s, n);
//       let r = this.__dataToNotify;
//       (this.__dataToNotify = null),
//         this._propagatePropertyChanges(e, s, n),
//         this._flushClients(),
//         ee(this, this[Kt.REFLECT], e, s, n),
//         ee(this, this[Kt.OBSERVE], e, s, n),
//         r &&
//           (function (t, e, s, n, r) {
//             let i,
//               o,
//               a = t[Kt.NOTIFY],
//               l = Zt++;
//             for (let o in e)
//               e[o] &&
//                 ((a && se(t, a, l, o, s, n, r)) || (r && ie(t, o, s))) &&
//                 (i = !0);
//             i &&
//               (o = t.__dataHost) &&
//               o._invalidateProperties &&
//               o._invalidateProperties();
//           })(this, r, e, s, n),
//         1 == this.__dataCounter && (this.__dataTemp = {});
//     }
//     _propagatePropertyChanges(t, e, s) {
//       this[Kt.PROPAGATE] && ee(this, this[Kt.PROPAGATE], t, e, s);
//       let n = this.__templateInfo;
//       for (; n; )
//         ee(this, n.propertyEffects, t, e, s, n.nodeList),
//           (n = n.nextTemplateInfo);
//     }
//     linkPaths(t, e) {
//       (t = xt(t)),
//         (e = xt(e)),
//         (this.__dataLinkedPaths = this.__dataLinkedPaths || {}),
//         (this.__dataLinkedPaths[t] = e);
//     }
//     unlinkPaths(t) {
//       (t = xt(t)), this.__dataLinkedPaths && delete this.__dataLinkedPaths[t];
//     }
//     notifySplices(t, e) {
//       let s = { path: "" };
//       Se(this, It(this, t, s), s.path, e);
//     }
//     get(t, e) {
//       return It(e || this, t);
//     }
//     set(t, e, s) {
//       s
//         ? Mt(s, t, e)
//         : (this[Kt.READ_ONLY] && this[Kt.READ_ONLY][t]) ||
//           (this._setPendingPropertyOrPath(t, e, !0) &&
//             this._invalidateProperties());
//     }
//     push(t, ...e) {
//       let s = { path: "" },
//         n = It(this, t, s),
//         r = n.length,
//         i = n.push(...e);
//       return e.length && we(this, n, s.path, r, e.length, []), i;
//     }
//     pop(t) {
//       let e = { path: "" },
//         s = It(this, t, e),
//         n = Boolean(s.length),
//         r = s.pop();
//       return n && we(this, s, e.path, s.length, 0, [r]), r;
//     }
//     splice(t, e, s, ...n) {
//       let r,
//         i = { path: "" },
//         o = It(this, t, i);
//       return (
//         e < 0 ? (e = o.length - Math.floor(-e)) : e && (e = Math.floor(e)),
//         (r = 2 === arguments.length ? o.splice(e) : o.splice(e, s, ...n)),
//         (n.length || r.length) && we(this, o, i.path, e, n.length, r),
//         r
//       );
//     }
//     shift(t) {
//       let e = { path: "" },
//         s = It(this, t, e),
//         n = Boolean(s.length),
//         r = s.shift();
//       return n && we(this, s, e.path, 0, 0, [r]), r;
//     }
//     unshift(t, ...e) {
//       let s = { path: "" },
//         n = It(this, t, s),
//         r = n.unshift(...e);
//       return e.length && we(this, n, s.path, 0, e.length, []), r;
//     }
//     notifyPath(t, e) {
//       let s;
//       if (1 == arguments.length) {
//         let n = { path: "" };
//         (e = It(this, t, n)), (s = n.path);
//       } else s = Array.isArray(t) ? xt(t) : t;
//       this._setPendingPropertyOrPath(s, e, !0, !0) &&
//         this._invalidateProperties();
//     }
//     _createReadOnlyProperty(t, e) {
//       var s;
//       this._addPropertyEffect(t, Kt.READ_ONLY),
//         e &&
//           (this["_set" + ((s = t), s[0].toUpperCase() + s.substring(1))] =
//             function (e) {
//               this._setProperty(t, e);
//             });
//     }
//     _createPropertyObserver(t, e, s) {
//       let n = { property: t, method: e, dynamicFn: Boolean(s) };
//       this._addPropertyEffect(t, Kt.OBSERVE, {
//         fn: re,
//         info: n,
//         trigger: { name: t },
//       }),
//         s &&
//           this._addPropertyEffect(e, Kt.OBSERVE, {
//             fn: re,
//             info: n,
//             trigger: { name: e },
//           });
//     }
//     _createMethodObserver(t, e) {
//       let s = Pe(t);
//       if (!s) throw new Error("Malformed observer expression '" + t + "'");
//       fe(this, s, Kt.OBSERVE, me, null, e);
//     }
//     _createNotifyingProperty(t) {
//       this._addPropertyEffect(t, Kt.NOTIFY, {
//         fn: ae,
//         info: { eventName: Ft(t) + "-changed", property: t },
//       });
//     }
//     _createReflectedProperty(t) {
//       let e = this.constructor.attributeNameForProperty(t);
//       "-" === e[0]
//         ? console.warn(
//             "Property " +
//               t +
//               " cannot be reflected to attribute " +
//               e +
//               ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'
//           )
//         : this._addPropertyEffect(t, Kt.REFLECT, {
//             fn: le,
//             info: { attrName: e },
//           });
//     }
//     _createComputedProperty(t, e, s) {
//       let n = Pe(e);
//       if (!n) throw new Error("Malformed computed expression '" + e + "'");
//       fe(this, n, Kt.COMPUTE, he, t, s);
//     }
//     _marshalArgs(t, e, s) {
//       const n = this.__data,
//         r = [];
//       for (let i = 0, o = t.length; i < o; i++) {
//         let {
//           name: o,
//           structured: a,
//           wildcard: l,
//           value: h,
//           literal: d,
//         } = t[i];
//         if (!d)
//           if (l) {
//             const t = Tt(o, e),
//               r = ve(n, s, t ? e : o);
//             h = { path: t ? e : o, value: r, base: t ? It(n, o) : r };
//           } else h = a ? ve(n, s, o) : n[o];
//         r[i] = h;
//       }
//       return r;
//     }
//     static addPropertyEffect(t, e, s) {
//       this.prototype._addPropertyEffect(t, e, s);
//     }
//     static createPropertyObserver(t, e, s) {
//       this.prototype._createPropertyObserver(t, e, s);
//     }
//     static createMethodObserver(t, e) {
//       this.prototype._createMethodObserver(t, e);
//     }
//     static createNotifyingProperty(t) {
//       this.prototype._createNotifyingProperty(t);
//     }
//     static createReadOnlyProperty(t, e) {
//       this.prototype._createReadOnlyProperty(t, e);
//     }
//     static createReflectedProperty(t) {
//       this.prototype._createReflectedProperty(t);
//     }
//     static createComputedProperty(t, e, s) {
//       this.prototype._createComputedProperty(t, e, s);
//     }
//     static bindTemplate(t) {
//       return this.prototype._bindTemplate(t);
//     }
//     _bindTemplate(t, e) {
//       let s = this.constructor._parseTemplate(t),
//         n = this.__templateInfo == s;
//       if (!n) for (let t in s.propertyEffects) this._createPropertyAccessor(t);
//       if (
//         e &&
//         ((s = Object.create(s)), (s.wasPreBound = n), !n && this.__templateInfo)
//       ) {
//         let t = this.__templateInfoLast || this.__templateInfo;
//         return (
//           (this.__templateInfoLast = t.nextTemplateInfo = s),
//           (s.previousTemplateInfo = t),
//           s
//         );
//       }
//       return (this.__templateInfo = s);
//     }
//     static _addTemplatePropertyEffect(t, e, s) {
//       (t.hostProps = t.hostProps || {})[e] = !0;
//       let n = (t.propertyEffects = t.propertyEffects || {});
//       (n[e] = n[e] || []).push(s);
//     }
//     _stampTemplate(t) {
//       Te.beginHosting(this);
//       let e = super._stampTemplate(t);
//       Te.endHosting(this);
//       let s = this._bindTemplate(t, !0);
//       if (((s.nodeList = e.nodeList), !s.wasPreBound)) {
//         let t = (s.childNodes = []);
//         for (let s = e.firstChild; s; s = s.nextSibling) t.push(s);
//       }
//       return (
//         (e.templateInfo = s),
//         (function (t, e) {
//           let { nodeList: s, nodeInfoList: n } = e;
//           if (n.length)
//             for (let e = 0; e < n.length; e++) {
//               let r = n[e],
//                 i = s[e],
//                 o = r.bindings;
//               if (o)
//                 for (let e = 0; e < o.length; e++) {
//                   let s = o[e];
//                   pe(i, s), _e(i, t, s);
//                 }
//               i.__dataHost = t;
//             }
//         })(this, s),
//         this.__dataReady &&
//           ee(this, s.propertyEffects, this.__data, null, !1, s.nodeList),
//         e
//       );
//     }
//     _removeBoundDom(t) {
//       let e = t.templateInfo;
//       e.previousTemplateInfo &&
//         (e.previousTemplateInfo.nextTemplateInfo = e.nextTemplateInfo),
//         e.nextTemplateInfo &&
//           (e.nextTemplateInfo.previousTemplateInfo = e.previousTemplateInfo),
//         this.__templateInfoLast == e &&
//           (this.__templateInfoLast = e.previousTemplateInfo),
//         (e.previousTemplateInfo = e.nextTemplateInfo = null);
//       let s = e.childNodes;
//       for (let t = 0; t < s.length; t++) {
//         let e = s[t];
//         e.parentNode.removeChild(e);
//       }
//     }
//     static _parseTemplateNode(t, e, s) {
//       let n = super._parseTemplateNode(t, e, s);
//       if (t.nodeType === Node.TEXT_NODE) {
//         let r = this._parseBindings(t.textContent, e);
//         r &&
//           ((t.textContent = be(r) || " "),
//           de(this, e, s, "text", "textContent", r),
//           (n = !0));
//       }
//       return n;
//     }
//     static _parseTemplateNodeAttribute(t, e, s, n, r) {
//       let i = this._parseBindings(r, e);
//       if (i) {
//         let r = n,
//           o = "property";
//         Qt.test(n)
//           ? (o = "attribute")
//           : "$" == n[n.length - 1] && ((n = n.slice(0, -1)), (o = "attribute"));
//         let a = be(i);
//         return (
//           a &&
//             "attribute" == o &&
//             ("class" == n &&
//               t.hasAttribute("class") &&
//               (a += " " + t.getAttribute(n)),
//             t.setAttribute(n, a)),
//           "input" === t.localName && "value" === r && t.setAttribute(r, ""),
//           t.removeAttribute(r),
//           "property" === o && (n = Dt(n)),
//           de(this, e, s, o, n, i, a),
//           !0
//         );
//       }
//       return super._parseTemplateNodeAttribute(t, e, s, n, r);
//     }
//     static _parseTemplateNestedTemplate(t, e, s) {
//       let n = super._parseTemplateNestedTemplate(t, e, s),
//         r = s.templateInfo.hostProps;
//       for (let t in r) {
//         de(this, e, s, "property", "_host_" + t, [
//           { mode: "{", source: t, dependencies: [t] },
//         ]);
//       }
//       return n;
//     }
//     static _parseBindings(t, e) {
//       let s,
//         n = [],
//         r = 0;
//       for (; null !== (s = ge.exec(t)); ) {
//         s.index > r && n.push({ literal: t.slice(r, s.index) });
//         let i = s[1][0],
//           o = Boolean(s[2]),
//           a = s[3].trim(),
//           l = !1,
//           h = "",
//           d = -1;
//         "{" == i &&
//           (d = a.indexOf("::")) > 0 &&
//           ((h = a.substring(d + 2)), (a = a.substring(0, d)), (l = !0));
//         let c = Pe(a),
//           u = [];
//         if (c) {
//           let { args: t, methodName: s } = c;
//           for (let e = 0; e < t.length; e++) {
//             let s = t[e];
//             s.literal || u.push(s);
//           }
//           let n = e.dynamicFns;
//           ((n && n[s]) || c.static) && (u.push(s), (c.dynamicFn = !0));
//         } else u.push(a);
//         n.push({
//           source: a,
//           mode: i,
//           negate: o,
//           customEvent: l,
//           signature: c,
//           dependencies: u,
//           event: h,
//         }),
//           (r = ge.lastIndex);
//       }
//       if (r && r < t.length) {
//         let e = t.substring(r);
//         e && n.push({ literal: e });
//       }
//       return n.length ? n : null;
//     }
//     static _evaluateBinding(t, e, s, n, r, i) {
//       let o;
//       return (
//         (o = e.signature
//           ? me(t, s, n, 0, e.signature)
//           : s != e.source
//           ? It(t, e.source)
//           : i && St(s)
//           ? It(t, s)
//           : t.__data[s]),
//         e.negate && (o = !o),
//         o
//       );
//     }
//   };
// });
// const Te = new (class {
//   constructor() {
//     this.stack = [];
//   }
//   registerHost(t) {
//     if (this.stack.length) {
//       this.stack[this.stack.length - 1]._enqueueClient(t);
//     }
//   }
//   beginHosting(t) {
//     this.stack.push(t);
//   }
//   endHosting(t) {
//     let e = this.stack.length;
//     e && this.stack[e - 1] == t && this.stack.pop();
//   }
// })();
// const Oe = d((t) => {
//     const e = zt(t);
//     function s(t) {
//       const e = Object.getPrototypeOf(t);
//       return e.prototype instanceof r ? e : null;
//     }
//     function n(t) {
//       if (!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties", t))) {
//         let e = null;
//         if (t.hasOwnProperty(JSCompiler_renameProperty("properties", t))) {
//           const s = t.properties;
//           s &&
//             (e = (function (t) {
//               const e = {};
//               for (let s in t) {
//                 const n = t[s];
//                 e[s] = "function" == typeof n ? { type: n } : n;
//               }
//               return e;
//             })(s));
//         }
//         t.__ownProperties = e;
//       }
//       return t.__ownProperties;
//     }
//     class r extends e {
//       static get observedAttributes() {
//         if (!this.hasOwnProperty("__observedAttributes")) {
//           this.prototype;
//           const t = this._properties;
//           this.__observedAttributes = t
//             ? Object.keys(t).map((t) => this.attributeNameForProperty(t))
//             : [];
//         }
//         return this.__observedAttributes;
//       }
//       static finalize() {
//         if (
//           !this.hasOwnProperty(JSCompiler_renameProperty("__finalized", this))
//         ) {
//           const t = s(this);
//           t && t.finalize(), (this.__finalized = !0), this._finalizeClass();
//         }
//       }
//       static _finalizeClass() {
//         const t = n(this);
//         t && this.createProperties(t);
//       }
//       static get _properties() {
//         if (
//           !this.hasOwnProperty(JSCompiler_renameProperty("__properties", this))
//         ) {
//           const t = s(this);
//           this.__properties = Object.assign({}, t && t._properties, n(this));
//         }
//         return this.__properties;
//       }
//       static typeForProperty(t) {
//         const e = this._properties[t];
//         return e && e.type;
//       }
//       _initializeProperties() {
//         this.constructor.finalize(), super._initializeProperties();
//       }
//       connectedCallback() {
//         super.connectedCallback && super.connectedCallback(),
//           this._enableProperties();
//       }
//       disconnectedCallback() {
//         super.disconnectedCallback && super.disconnectedCallback();
//       }
//     }
//     return r;
//   }),
//   Ne = window.ShadyCSS && window.ShadyCSS.cssBuild,
//   xe = d((t) => {
//     const e = Oe(Ee(t));
//     function s(t, e, s, n) {
//       s.computed && (s.readOnly = !0),
//         s.computed &&
//           (t._hasReadOnlyEffect(e)
//             ? console.warn(`Cannot redefine computed property '${e}'.`)
//             : t._createComputedProperty(e, s.computed, n)),
//         s.readOnly && !t._hasReadOnlyEffect(e)
//           ? t._createReadOnlyProperty(e, !s.computed)
//           : !1 === s.readOnly &&
//             t._hasReadOnlyEffect(e) &&
//             console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),
//         s.reflectToAttribute && !t._hasReflectEffect(e)
//           ? t._createReflectedProperty(e)
//           : !1 === s.reflectToAttribute &&
//             t._hasReflectEffect(e) &&
//             console.warn(
//               `Cannot make reflected property '${e}' non-reflected.`
//             ),
//         s.notify && !t._hasNotifyEffect(e)
//           ? t._createNotifyingProperty(e)
//           : !1 === s.notify &&
//             t._hasNotifyEffect(e) &&
//             console.warn(`Cannot make notify property '${e}' non-notify.`),
//         s.observer && t._createPropertyObserver(e, s.observer, n[s.observer]),
//         t._addPropertyToAttributeMap(e);
//     }
//     function n(t, e, s, n) {
//       if (!Ne) {
//         const r = e.content.querySelectorAll("style"),
//           i = Pt(e),
//           o = (function (t) {
//             let e = mt(t);
//             return e ? Ct(e) : [];
//           })(s),
//           a = e.content.firstElementChild;
//         for (let s = 0; s < o.length; s++) {
//           let r = o[s];
//           (r.textContent = t._processStyleText(r.textContent, n)),
//             e.content.insertBefore(r, a);
//         }
//         let l = 0;
//         for (let e = 0; e < i.length; e++) {
//           let s = i[e],
//             o = r[l];
//           o !== s
//             ? ((s = s.cloneNode(!0)), o.parentNode.insertBefore(s, o))
//             : l++,
//             (s.textContent = t._processStyleText(s.textContent, n));
//         }
//       }
//       window.ShadyCSS && window.ShadyCSS.prepareTemplate(e, s);
//     }
//     return class extends e {
//       static get polymerElementVersion() {
//         return "3.2.0";
//       }
//       static _finalizeClass() {
//         super._finalizeClass();
//         const t =
//           ((e = this).hasOwnProperty(
//             JSCompiler_renameProperty("__ownObservers", e)
//           ) ||
//             (e.__ownObservers = e.hasOwnProperty(
//               JSCompiler_renameProperty("observers", e)
//             )
//               ? e.observers
//               : null),
//           e.__ownObservers);
//         var e;
//         t && this.createObservers(t, this._properties), this._prepareTemplate();
//       }
//       static _prepareTemplate() {
//         let t = this.template;
//         t &&
//           ("string" == typeof t
//             ? (console.error("template getter must return HTMLTemplateElement"),
//               (t = null))
//             : (t = t.cloneNode(!0))),
//           (this.prototype._template = t);
//       }
//       static createProperties(t) {
//         for (let e in t) s(this.prototype, e, t[e], t);
//       }
//       static createObservers(t, e) {
//         const s = this.prototype;
//         for (let n = 0; n < t.length; n++) s._createMethodObserver(t[n], e);
//       }
//       static get template() {
//         return (
//           this.hasOwnProperty(JSCompiler_renameProperty("_template", this)) ||
//             (this._template = this.prototype.hasOwnProperty(
//               JSCompiler_renameProperty("_template", this.prototype)
//             )
//               ? this.prototype._template
//               : (function (t) {
//                   let e = null;
//                   return t && (e = ft.import(t, "template")), e;
//                 })(this.is) ||
//                 Object.getPrototypeOf(this.prototype).constructor.template),
//           this._template
//         );
//       }
//       static set template(t) {
//         this._template = t;
//       }
//       static get importPath() {
//         if (
//           !this.hasOwnProperty(JSCompiler_renameProperty("_importPath", this))
//         ) {
//           const t = this.importMeta;
//           if (t) this._importPath = C(t.url);
//           else {
//             const t = ft.import(this.is);
//             this._importPath =
//               (t && t.assetpath) ||
//               Object.getPrototypeOf(this.prototype).constructor.importPath;
//           }
//         }
//         return this._importPath;
//       }
//       constructor() {
//         super(),
//           this._template,
//           this._importPath,
//           this.rootPath,
//           this.importPath,
//           this.root,
//           this.$;
//       }
//       _initializeProperties() {
//         this.constructor.finalize(),
//           this.constructor._finalizeTemplate(this.localName),
//           super._initializeProperties(),
//           (this.rootPath = S),
//           (this.importPath = this.constructor.importPath);
//         let t = (function (t) {
//           if (
//             !t.hasOwnProperty(
//               JSCompiler_renameProperty("__propertyDefaults", t)
//             )
//           ) {
//             t.__propertyDefaults = null;
//             let e = t._properties;
//             for (let s in e) {
//               let n = e[s];
//               "value" in n &&
//                 ((t.__propertyDefaults = t.__propertyDefaults || {}),
//                 (t.__propertyDefaults[s] = n));
//             }
//           }
//           return t.__propertyDefaults;
//         })(this.constructor);
//         if (t)
//           for (let e in t) {
//             let s = t[e];
//             if (!this.hasOwnProperty(e)) {
//               let t =
//                 "function" == typeof s.value ? s.value.call(this) : s.value;
//               this._hasAccessor(e)
//                 ? this._setPendingProperty(e, t, !0)
//                 : (this[e] = t);
//             }
//           }
//       }
//       static _processStyleText(t, e) {
//         return P(t, e);
//       }
//       static _finalizeTemplate(t) {
//         const e = this.prototype._template;
//         if (e && !e.__polymerFinalized) {
//           e.__polymerFinalized = !0;
//           const s = this.importPath;
//           n(this, e, t, s ? b(s) : ""), this.prototype._bindTemplate(e);
//         }
//       }
//       connectedCallback() {
//         window.ShadyCSS && this._template && window.ShadyCSS.styleElement(this),
//           super.connectedCallback();
//       }
//       ready() {
//         this._template &&
//           ((this.root = this._stampTemplate(this._template)),
//           (this.$ = this.root.$)),
//           super.ready();
//       }
//       _readyClients() {
//         this._template && (this.root = this._attachDom(this.root)),
//           super._readyClients();
//       }
//       _attachDom(t) {
//         const e = E(this);
//         if (e.attachShadow)
//           return t
//             ? (e.shadowRoot || e.attachShadow({ mode: "open" }),
//               e.shadowRoot.appendChild(t),
//               e.shadowRoot)
//             : null;
//         throw new Error(
//           "ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`."
//         );
//       }
//       updateStyles(t) {
//         window.ShadyCSS && window.ShadyCSS.styleSubtree(this, t);
//       }
//       resolveUrl(t, e) {
//         return !e && this.importPath && (e = b(this.importPath)), b(t, e);
//       }
//       static _parseTemplateContent(t, e, s) {
//         return (
//           (e.dynamicFns = e.dynamicFns || this._properties),
//           super._parseTemplateContent(t, e, s)
//         );
//       }
//       static _addTemplatePropertyEffect(t, e, s) {
//         return super._addTemplatePropertyEffect(t, e, s);
//       }
//     };
//   });
// class Ae {
//   constructor(t) {
//     this.value = t.toString();
//   }
//   toString() {
//     return this.value;
//   }
// }
// function Ie(t) {
//   if (t instanceof HTMLTemplateElement) return t.innerHTML;
//   if (t instanceof Ae)
//     return (function (t) {
//       if (t instanceof Ae) return t.value;
//       throw new Error(
//         "non-literal value passed to Polymer's htmlLiteral function: " + t
//       );
//     })(t);
//   throw new Error("non-template value passed to Polymer's html function: " + t);
// }
// const Me = function (t, ...e) {
//     const s = document.createElement("template");
//     return (s.innerHTML = e.reduce((e, s, n) => e + Ie(s) + t[n + 1], t[0])), s;
//   },
//   Re = xe(HTMLElement);
// function Le(t, e, s, n, r) {
//   let i;
//   r && ((i = "object" == typeof s && null !== s), i && (n = t.__dataTemp[e]));
//   let o = n !== s && (n == n || s == s);
//   return i && o && (t.__dataTemp[e] = s), o;
// }
// const ke = d(
//     (t) =>
//       class extends t {
//         _shouldPropertyChange(t, e, s) {
//           return Le(this, t, e, s, !0);
//         }
//       }
//   ),
//   De = d(
//     (t) =>
//       class extends t {
//         static get properties() {
//           return { mutableData: Boolean };
//         }
//         _shouldPropertyChange(t, e, s) {
//           return Le(this, t, e, s, this.mutableData);
//         }
//       }
//   );
// ke._mutablePropertyChange = Le;
// let Fe = null;
// function He() {
//   return Fe;
// }
// He.prototype = Object.create(HTMLTemplateElement.prototype, {
//   constructor: { value: He, writable: !0 },
// });
// const ze = Ee(He),
//   je = ke(ze);
// const Be = Ee(class {});
// class qe extends Be {
//   constructor(t) {
//     super(),
//       this._configureProperties(t),
//       (this.root = this._stampTemplate(this.__dataHost));
//     let e = (this.children = []);
//     for (let t = this.root.firstChild; t; t = t.nextSibling)
//       e.push(t), (t.__templatizeInstance = this);
//     this.__templatizeOwner &&
//       this.__templatizeOwner.__hideTemplateChildren__ &&
//       this._showHideChildren(!0);
//     let s = this.__templatizeOptions;
//     ((t && s.instanceProps) || !s.instanceProps) && this._enableProperties();
//   }
//   _configureProperties(t) {
//     if (this.__templatizeOptions.forwardHostProp)
//       for (let t in this.__hostProps)
//         this._setPendingProperty(t, this.__dataHost["_host_" + t]);
//     for (let e in t) this._setPendingProperty(e, t[e]);
//   }
//   forwardHostProp(t, e) {
//     this._setPendingPropertyOrPath(t, e, !1, !0) &&
//       this.__dataHost._enqueueClient(this);
//   }
//   _addEventListenerToNode(t, e, s) {
//     if (this._methodHost && this.__templatizeOptions.parentModel)
//       this._methodHost._addEventListenerToNode(t, e, (t) => {
//         (t.model = this), s(t);
//       });
//     else {
//       let n = this.__dataHost.__dataHost;
//       n && n._addEventListenerToNode(t, e, s);
//     }
//   }
//   _showHideChildren(t) {
//     let e = this.children;
//     for (let s = 0; s < e.length; s++) {
//       let n = e[s];
//       if (Boolean(t) != Boolean(n.__hideTemplateChildren__))
//         if (n.nodeType === Node.TEXT_NODE)
//           t
//             ? ((n.__polymerTextContent__ = n.textContent), (n.textContent = ""))
//             : (n.textContent = n.__polymerTextContent__);
//         else if ("slot" === n.localName)
//           if (t)
//             (n.__polymerReplaced__ = document.createComment("hidden-slot")),
//               E(E(n).parentNode).replaceChild(n.__polymerReplaced__, n);
//           else {
//             const t = n.__polymerReplaced__;
//             t && E(E(t).parentNode).replaceChild(n, t);
//           }
//         else
//           n.style &&
//             (t
//               ? ((n.__polymerDisplay__ = n.style.display),
//                 (n.style.display = "none"))
//               : (n.style.display = n.__polymerDisplay__));
//       (n.__hideTemplateChildren__ = t),
//         n._showHideChildren && n._showHideChildren(t);
//     }
//   }
//   _setUnmanagedPropertyToNode(t, e, s) {
//     t.__hideTemplateChildren__ &&
//     t.nodeType == Node.TEXT_NODE &&
//     "textContent" == e
//       ? (t.__polymerTextContent__ = s)
//       : super._setUnmanagedPropertyToNode(t, e, s);
//   }
//   get parentModel() {
//     let t = this.__parentModel;
//     if (!t) {
//       let e;
//       t = this;
//       do {
//         t = t.__dataHost.__dataHost;
//       } while ((e = t.__templatizeOptions) && !e.parentModel);
//       this.__parentModel = t;
//     }
//     return t;
//   }
//   dispatchEvent(t) {
//     return !0;
//   }
// }
// qe.prototype.__dataHost,
//   qe.prototype.__templatizeOptions,
//   qe.prototype._methodHost,
//   qe.prototype.__templatizeOwner,
//   qe.prototype.__hostProps;
// const $e = ke(qe);
// function Ye(t, e, s) {
//   let n = s.mutableData ? $e : qe;
//   Xe.mixin && (n = Xe.mixin(n));
//   let r = class extends n {};
//   return (
//     (r.prototype.__templatizeOptions = s),
//     r.prototype._bindTemplate(t),
//     (function (t, e, s, n) {
//       let r = s.hostProps || {};
//       for (let e in n.instanceProps) {
//         delete r[e];
//         let s = n.notifyInstanceProp;
//         s &&
//           t.prototype._addPropertyEffect(
//             e,
//             t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,
//             { fn: Ue(e, s) }
//           );
//       }
//       if (n.forwardHostProp && e.__dataHost)
//         for (let e in r)
//           t.prototype._addPropertyEffect(
//             e,
//             t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,
//             {
//               fn: function (t, e, s) {
//                 t.__dataHost._setPendingPropertyOrPath(
//                   "_host_" + e,
//                   s[e],
//                   !0,
//                   !0
//                 );
//               },
//             }
//           );
//     })(r, t, e, s),
//     r
//   );
// }
// function Je(t, e, s) {
//   let n = s.forwardHostProp;
//   if (n) {
//     let r = e.templatizeTemplateClass;
//     if (!r) {
//       let t = s.mutableData ? je : ze;
//       r = e.templatizeTemplateClass = class extends t {};
//       let i = e.hostProps;
//       for (let t in i)
//         r.prototype._addPropertyEffect(
//           "_host_" + t,
//           r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,
//           { fn: Ve(t, n) }
//         ),
//           r.prototype._createNotifyingProperty("_host_" + t);
//     }
//     !(function (t, e) {
//       (Fe = t), Object.setPrototypeOf(t, e.prototype), new e(), (Fe = null);
//     })(t, r),
//       t.__dataProto && Object.assign(t.__data, t.__dataProto),
//       (t.__dataTemp = {}),
//       (t.__dataPending = null),
//       (t.__dataOld = null),
//       t._enableProperties();
//   }
// }
// function Ve(t, e) {
//   return function (t, s, n) {
//     e.call(t.__templatizeOwner, s.substring("_host_".length), n[s]);
//   };
// }
// function Ue(t, e) {
//   return function (t, s, n) {
//     e.call(t.__templatizeOwner, t, s, n[s]);
//   };
// }
// function Xe(t, e, s) {
//   if (((s = s || {}), t.__templatizeOwner))
//     throw new Error("A <template> can only be templatized once");
//   t.__templatizeOwner = e;
//   let n = (e ? e.constructor : qe)._parseTemplate(t),
//     r = n.templatizeInstanceClass;
//   r || ((r = Ye(t, n, s)), (n.templatizeInstanceClass = r)), Je(t, n, s);
//   let i = class extends r {};
//   return (
//     (i.prototype._methodHost = (function (t) {
//       let e = t.__dataHost;
//       return (e && e._methodHost) || e;
//     })(t)),
//     (i.prototype.__dataHost = t),
//     (i.prototype.__templatizeOwner = e),
//     (i.prototype.__hostProps = n.hostProps),
//     (i = i),
//     i
//   );
// }
// function We(t, e) {
//   let s;
//   for (; e; )
//     if ((s = e.__templatizeInstance)) {
//       if (s.__dataHost == t) return s;
//       e = s.__dataHost;
//     } else e = E(e).parentNode;
//   return null;
// }
// const Ge = function () {
//   let t, e;
//   do {
//     (t = window.ShadyDOM && ShadyDOM.flush()),
//       window.ShadyCSS &&
//         window.ShadyCSS.ScopingShim &&
//         window.ShadyCSS.ScopingShim.flush(),
//       (e = _());
//   } while (t || e);
// };
// class Ze extends Re {
//   static get is() {
//     return "dom-if";
//   }
//   static get template() {
//     return null;
//   }
//   static get properties() {
//     return {
//       if: { type: Boolean, observer: "__debounceRender" },
//       restamp: { type: Boolean, observer: "__debounceRender" },
//     };
//   }
//   constructor() {
//     super(),
//       (this.__renderDebouncer = null),
//       (this.__invalidProps = null),
//       (this.__instance = null),
//       (this._lastIf = !1),
//       (this.__ctor = null),
//       (this.__hideTemplateChildren__ = !1);
//   }
//   __debounceRender() {
//     (this.__renderDebouncer = c.debounce(this.__renderDebouncer, l, () =>
//       this.__render()
//     )),
//       p(this.__renderDebouncer);
//   }
//   disconnectedCallback() {
//     super.disconnectedCallback();
//     const t = E(this).parentNode;
//     (t && (t.nodeType != Node.DOCUMENT_FRAGMENT_NODE || E(t).host)) ||
//       this.__teardownInstance();
//   }
//   connectedCallback() {
//     super.connectedCallback(),
//       (this.style.display = "none"),
//       this.if && this.__debounceRender();
//   }
//   render() {
//     Ge();
//   }
//   __render() {
//     if (this.if) {
//       if (!this.__ensureInstance()) return;
//       this._showHideChildren();
//     } else this.restamp && this.__teardownInstance();
//     !this.restamp && this.__instance && this._showHideChildren(),
//       this.if != this._lastIf &&
//         (this.dispatchEvent(
//           new CustomEvent("dom-change", { bubbles: !0, composed: !0 })
//         ),
//         (this._lastIf = this.if));
//   }
//   __ensureInstance() {
//     let t = E(this).parentNode;
//     if (t) {
//       if (!this.__ctor) {
//         let t = E(this).querySelector("template");
//         if (!t) {
//           let t = new MutationObserver(() => {
//             if (!E(this).querySelector("template"))
//               throw new Error("dom-if requires a <template> child");
//             t.disconnect(), this.__render();
//           });
//           return t.observe(this, { childList: !0 }), !1;
//         }
//         this.__ctor = Xe(t, this, {
//           mutableData: !0,
//           forwardHostProp: function (t, e) {
//             this.__instance &&
//               (this.if
//                 ? this.__instance.forwardHostProp(t, e)
//                 : ((this.__invalidProps =
//                     this.__invalidProps || Object.create(null)),
//                   (this.__invalidProps[wt(t)] = !0)));
//           },
//         });
//       }
//       if (this.__instance) {
//         this.__syncHostProperties();
//         let e = this.__instance.children;
//         if (e && e.length) {
//           if (E(this).previousSibling !== e[e.length - 1])
//             for (let s, n = 0; n < e.length && (s = e[n]); n++)
//               E(t).insertBefore(s, this);
//         }
//       } else
//         (this.__instance = new this.__ctor()),
//           E(t).insertBefore(this.__instance.root, this);
//     }
//     return !0;
//   }
//   __syncHostProperties() {
//     let t = this.__invalidProps;
//     if (t) {
//       for (let e in t)
//         this.__instance._setPendingProperty(e, this.__dataHost[e]);
//       (this.__invalidProps = null), this.__instance._flushProperties();
//     }
//   }
//   __teardownInstance() {
//     if (this.__instance) {
//       let t = this.__instance.children;
//       if (t && t.length) {
//         let e = E(t[0]).parentNode;
//         if (e) {
//           e = E(e);
//           for (let s, n = 0; n < t.length && (s = t[n]); n++) e.removeChild(s);
//         }
//       }
//       (this.__instance = null), (this.__invalidProps = null);
//     }
//   }
//   _showHideChildren() {
//     let t = this.__hideTemplateChildren__ || !this.if;
//     this.__instance && this.__instance._showHideChildren(t);
//   }
// }
// customElements.define(Ze.is, Ze);
// const Ke = De(Re);
// class Qe extends Ke {
//   static get is() {
//     return "dom-repeat";
//   }
//   static get template() {
//     return null;
//   }
//   static get properties() {
//     return {
//       items: { type: Array },
//       as: { type: String, value: "item" },
//       indexAs: { type: String, value: "index" },
//       itemsIndexAs: { type: String, value: "itemsIndex" },
//       sort: { type: Function, observer: "__sortChanged" },
//       filter: { type: Function, observer: "__filterChanged" },
//       observe: { type: String, observer: "__observeChanged" },
//       delay: Number,
//       renderedItemCount: { type: Number, notify: !0, readOnly: !0 },
//       initialCount: { type: Number, observer: "__initializeChunking" },
//       targetFramerate: { type: Number, value: 20 },
//       _targetFrameTime: {
//         type: Number,
//         computed: "__computeFrameTime(targetFramerate)",
//       },
//     };
//   }
//   static get observers() {
//     return ["__itemsChanged(items.*)"];
//   }
//   constructor() {
//     super(),
//       (this.__instances = []),
//       (this.__limit = 1 / 0),
//       (this.__pool = []),
//       (this.__renderDebouncer = null),
//       (this.__itemsIdxToInstIdx = {}),
//       (this.__chunkCount = null),
//       (this.__lastChunkTime = null),
//       (this.__sortFn = null),
//       (this.__filterFn = null),
//       (this.__observePaths = null),
//       (this.__ctor = null),
//       (this.__isDetached = !0),
//       (this.template = null);
//   }
//   disconnectedCallback() {
//     super.disconnectedCallback(), (this.__isDetached = !0);
//     for (let t = 0; t < this.__instances.length; t++) this.__detachInstance(t);
//   }
//   connectedCallback() {
//     if (
//       (super.connectedCallback(),
//       (this.style.display = "none"),
//       this.__isDetached)
//     ) {
//       this.__isDetached = !1;
//       let t = E(E(this).parentNode);
//       for (let e = 0; e < this.__instances.length; e++)
//         this.__attachInstance(e, t);
//     }
//   }
//   __ensureTemplatized() {
//     if (!this.__ctor) {
//       let t = (this.template = this.querySelector("template"));
//       if (!t) {
//         let t = new MutationObserver(() => {
//           if (!this.querySelector("template"))
//             throw new Error("dom-repeat requires a <template> child");
//           t.disconnect(), this.__render();
//         });
//         return t.observe(this, { childList: !0 }), !1;
//       }
//       let e = {};
//       (e[this.as] = !0),
//         (e[this.indexAs] = !0),
//         (e[this.itemsIndexAs] = !0),
//         (this.__ctor = Xe(t, this, {
//           mutableData: this.mutableData,
//           parentModel: !0,
//           instanceProps: e,
//           forwardHostProp: function (t, e) {
//             let s = this.__instances;
//             for (let n, r = 0; r < s.length && (n = s[r]); r++)
//               n.forwardHostProp(t, e);
//           },
//           notifyInstanceProp: function (t, e, s) {
//             if (Nt(this.as, e)) {
//               let n = t[this.itemsIndexAs];
//               e == this.as && (this.items[n] = s);
//               let r = Ot(
//                 this.as,
//                 `${JSCompiler_renameProperty("items", this)}.${n}`,
//                 e
//               );
//               this.notifyPath(r, s);
//             }
//           },
//         }));
//     }
//     return !0;
//   }
//   __getMethodHost() {
//     return this.__dataHost._methodHost || this.__dataHost;
//   }
//   __functionFromPropertyValue(t) {
//     if ("string" == typeof t) {
//       let e = t,
//         s = this.__getMethodHost();
//       return function () {
//         return s[e].apply(s, arguments);
//       };
//     }
//     return t;
//   }
//   __sortChanged(t) {
//     (this.__sortFn = this.__functionFromPropertyValue(t)),
//       this.items && this.__debounceRender(this.__render);
//   }
//   __filterChanged(t) {
//     (this.__filterFn = this.__functionFromPropertyValue(t)),
//       this.items && this.__debounceRender(this.__render);
//   }
//   __computeFrameTime(t) {
//     return Math.ceil(1e3 / t);
//   }
//   __initializeChunking() {
//     this.initialCount &&
//       ((this.__limit = this.initialCount),
//       (this.__chunkCount = this.initialCount),
//       (this.__lastChunkTime = performance.now()));
//   }
//   __tryRenderChunk() {
//     this.items &&
//       this.__limit < this.items.length &&
//       this.__debounceRender(this.__requestRenderChunk);
//   }
//   __requestRenderChunk() {
//     requestAnimationFrame(() => this.__renderChunk());
//   }
//   __renderChunk() {
//     let t = performance.now(),
//       e = this._targetFrameTime / (t - this.__lastChunkTime);
//     (this.__chunkCount = Math.round(this.__chunkCount * e) || 1),
//       (this.__limit += this.__chunkCount),
//       (this.__lastChunkTime = t),
//       this.__debounceRender(this.__render);
//   }
//   __observeChanged() {
//     this.__observePaths =
//       this.observe && this.observe.replace(".*", ".").split(" ");
//   }
//   __itemsChanged(t) {
//     this.items &&
//       !Array.isArray(this.items) &&
//       console.warn("dom-repeat expected array for `items`, found", this.items),
//       this.__handleItemPath(t.path, t.value) ||
//         (this.__initializeChunking(), this.__debounceRender(this.__render));
//   }
//   __handleObservedPaths(t) {
//     if (this.__sortFn || this.__filterFn)
//       if (t) {
//         if (this.__observePaths) {
//           let e = this.__observePaths;
//           for (let s = 0; s < e.length; s++)
//             0 === t.indexOf(e[s]) &&
//               this.__debounceRender(this.__render, this.delay);
//         }
//       } else this.__debounceRender(this.__render, this.delay);
//   }
//   __debounceRender(t, e = 0) {
//     (this.__renderDebouncer = c.debounce(
//       this.__renderDebouncer,
//       e > 0 ? i.after(e) : l,
//       t.bind(this)
//     )),
//       p(this.__renderDebouncer);
//   }
//   render() {
//     this.__debounceRender(this.__render), Ge();
//   }
//   __render() {
//     this.__ensureTemplatized() &&
//       (this.__applyFullRefresh(),
//       (this.__pool.length = 0),
//       this._setRenderedItemCount(this.__instances.length),
//       this.dispatchEvent(
//         new CustomEvent("dom-change", { bubbles: !0, composed: !0 })
//       ),
//       this.__tryRenderChunk());
//   }
//   __applyFullRefresh() {
//     let t = this.items || [],
//       e = new Array(t.length);
//     for (let s = 0; s < t.length; s++) e[s] = s;
//     this.__filterFn && (e = e.filter((e, s, n) => this.__filterFn(t[e], s, n))),
//       this.__sortFn && e.sort((e, s) => this.__sortFn(t[e], t[s]));
//     const s = (this.__itemsIdxToInstIdx = {});
//     let n = 0;
//     const r = Math.min(e.length, this.__limit);
//     for (; n < r; n++) {
//       let r = this.__instances[n],
//         i = e[n],
//         o = t[i];
//       (s[i] = n),
//         r
//           ? (r._setPendingProperty(this.as, o),
//             r._setPendingProperty(this.indexAs, n),
//             r._setPendingProperty(this.itemsIndexAs, i),
//             r._flushProperties())
//           : this.__insertInstance(o, n, i);
//     }
//     for (let t = this.__instances.length - 1; t >= n; t--)
//       this.__detachAndRemoveInstance(t);
//   }
//   __detachInstance(t) {
//     let e = this.__instances[t];
//     const s = E(e.root);
//     for (let t = 0; t < e.children.length; t++) {
//       let n = e.children[t];
//       s.appendChild(n);
//     }
//     return e;
//   }
//   __attachInstance(t, e) {
//     let s = this.__instances[t];
//     e.insertBefore(s.root, this);
//   }
//   __detachAndRemoveInstance(t) {
//     let e = this.__detachInstance(t);
//     e && this.__pool.push(e), this.__instances.splice(t, 1);
//   }
//   __stampInstance(t, e, s) {
//     let n = {};
//     return (
//       (n[this.as] = t),
//       (n[this.indexAs] = e),
//       (n[this.itemsIndexAs] = s),
//       new this.__ctor(n)
//     );
//   }
//   __insertInstance(t, e, s) {
//     let n = this.__pool.pop();
//     n
//       ? (n._setPendingProperty(this.as, t),
//         n._setPendingProperty(this.indexAs, e),
//         n._setPendingProperty(this.itemsIndexAs, s),
//         n._flushProperties())
//       : (n = this.__stampInstance(t, e, s));
//     let r = this.__instances[e + 1],
//       i = r ? r.children[0] : this;
//     return (
//       E(E(this).parentNode).insertBefore(n.root, i),
//       (this.__instances[e] = n),
//       n
//     );
//   }
//   _showHideChildren(t) {
//     for (let e = 0; e < this.__instances.length; e++)
//       this.__instances[e]._showHideChildren(t);
//   }
//   __handleItemPath(t, e) {
//     let s = t.slice(6),
//       n = s.indexOf("."),
//       r = n < 0 ? s : s.substring(0, n);
//     if (r == parseInt(r, 10)) {
//       let t = n < 0 ? "" : s.substring(n + 1);
//       this.__handleObservedPaths(t);
//       let i = this.__itemsIdxToInstIdx[r],
//         o = this.__instances[i];
//       if (o) {
//         let s = this.as + (t ? "." + t : "");
//         o._setPendingPropertyOrPath(s, e, !1, !0), o._flushProperties();
//       }
//       return !0;
//     }
//   }
//   itemForElement(t) {
//     let e = this.modelForElement(t);
//     return e && e[this.as];
//   }
//   indexForElement(t) {
//     let e = this.modelForElement(t);
//     return e && e[this.indexAs];
//   }
//   modelForElement(t) {
//     return We(this.template, t);
//   }
// }
// customElements.define(Qe.is, Qe);
// const ts = !(window.ShadyDOM && window.ShadyDOM.inUse);
// let es, ss;
// function ns(t) {
//   es =
//     (!t || !t.shimcssproperties) &&
//     (ts ||
//       Boolean(
//         !navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) &&
//           window.CSS &&
//           CSS.supports &&
//           CSS.supports("box-shadow", "0 0 0 var(--foo)")
//       ));
// }
// window.ShadyCSS &&
//   void 0 !== window.ShadyCSS.cssBuild &&
//   (ss = window.ShadyCSS.cssBuild);
// const rs = Boolean(window.ShadyCSS && window.ShadyCSS.disableRuntime);
// window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss
//   ? (es = window.ShadyCSS.nativeCss)
//   : window.ShadyCSS
//   ? (ns(window.ShadyCSS), (window.ShadyCSS = void 0))
//   : ns(window.WebComponents && window.WebComponents.flags);
// const is = es;
// class os {
//   constructor() {
//     (this.start = 0),
//       (this.end = 0),
//       (this.previous = null),
//       (this.parent = null),
//       (this.rules = null),
//       (this.parsedCssText = ""),
//       (this.cssText = ""),
//       (this.atRule = !1),
//       (this.type = 0),
//       (this.keyframesName = ""),
//       (this.selector = ""),
//       (this.parsedSelector = "");
//   }
// }
// function as(t) {
//   return ls(
//     (function (t) {
//       let e = new os();
//       (e.start = 0), (e.end = t.length);
//       let s = e;
//       for (let n = 0, r = t.length; n < r; n++)
//         if (t[n] === cs) {
//           s.rules || (s.rules = []);
//           let t = s,
//             e = t.rules[t.rules.length - 1] || null;
//           (s = new os()),
//             (s.start = n + 1),
//             (s.parent = t),
//             (s.previous = e),
//             t.rules.push(s);
//         } else t[n] === us && ((s.end = n + 1), (s = s.parent || e));
//       return e;
//     })((t = t.replace(ps.comments, "").replace(ps.port, ""))),
//     t
//   );
// }
// function ls(t, e) {
//   let s = e.substring(t.start, t.end - 1);
//   if (((t.parsedCssText = t.cssText = s.trim()), t.parent)) {
//     let n = t.previous ? t.previous.end : t.parent.start;
//     (s = e.substring(n, t.start - 1)),
//       (s = (function (t) {
//         return t.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
//           let t = arguments[1],
//             e = 6 - t.length;
//           for (; e--; ) t = "0" + t;
//           return "\\" + t;
//         });
//       })(s)),
//       (s = s.replace(ps.multipleSpaces, " ")),
//       (s = s.substring(s.lastIndexOf(";") + 1));
//     let r = (t.parsedSelector = t.selector = s.trim());
//     (t.atRule = 0 === r.indexOf(ms)),
//       t.atRule
//         ? 0 === r.indexOf(fs)
//           ? (t.type = ds.MEDIA_RULE)
//           : r.match(ps.keyframesRule) &&
//             ((t.type = ds.KEYFRAMES_RULE),
//             (t.keyframesName = t.selector.split(ps.multipleSpaces).pop()))
//         : 0 === r.indexOf(_s)
//         ? (t.type = ds.MIXIN_RULE)
//         : (t.type = ds.STYLE_RULE);
//   }
//   let n = t.rules;
//   if (n) for (let t, s = 0, r = n.length; s < r && (t = n[s]); s++) ls(t, e);
//   return t;
// }
// function hs(t, e, s = "") {
//   let n = "";
//   if (t.cssText || t.rules) {
//     let s = t.rules;
//     if (
//       s &&
//       !(function (t) {
//         let e = t[0];
//         return (
//           Boolean(e) && Boolean(e.selector) && 0 === e.selector.indexOf(_s)
//         );
//       })(s)
//     )
//       for (let t, r = 0, i = s.length; r < i && (t = s[r]); r++)
//         n = hs(t, e, n);
//     else
//       (n = e
//         ? t.cssText
//         : (function (t) {
//             return (function (t) {
//               return t.replace(ps.mixinApply, "").replace(ps.varApply, "");
//             })(
//               (t = (function (t) {
//                 return t.replace(ps.customProp, "").replace(ps.mixinProp, "");
//               })(t))
//             );
//           })(t.cssText)),
//         (n = n.trim()),
//         n && (n = "  " + n + "\n");
//   }
//   return (
//     n &&
//       (t.selector && (s += t.selector + " " + cs + "\n"),
//       (s += n),
//       t.selector && (s += us + "\n\n")),
//     s
//   );
// }
// const ds = { STYLE_RULE: 1, KEYFRAMES_RULE: 7, MEDIA_RULE: 4, MIXIN_RULE: 1e3 },
//   cs = "{",
//   us = "}",
//   ps = {
//     comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
//     port: /@import[^;]*;/gim,
//     customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
//     mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
//     mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
//     varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
//     keyframesRule: /^@[^\s]*keyframes/,
//     multipleSpaces: /\s+/g,
//   },
//   _s = "--",
//   fs = "@media",
//   ms = "@",
//   ys =
//     /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
//   gs = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
//   bs = /@media\s(.*)/,
//   Ps = new Set();
// function Cs(t) {
//   const e = t.textContent;
//   if (!Ps.has(e)) {
//     Ps.add(e);
//     const s = t.cloneNode(!0);
//     document.head.appendChild(s);
//   }
// }
// function vs(t) {
//   return t.hasAttribute("shady-unscoped");
// }
// function Ss(t, e) {
//   return t
//     ? ("string" == typeof t && (t = as(t)), e && Es(t, e), hs(t, is))
//     : "";
// }
// function ws(t) {
//   return (
//     !t.__cssRules && t.textContent && (t.__cssRules = as(t.textContent)),
//     t.__cssRules || null
//   );
// }
// function Es(t, e, s, n) {
//   if (!t) return;
//   let r = !1,
//     i = t.type;
//   if (n && i === ds.MEDIA_RULE) {
//     let e = t.selector.match(bs);
//     e && (window.matchMedia(e[1]).matches || (r = !0));
//   }
//   i === ds.STYLE_RULE
//     ? e(t)
//     : s && i === ds.KEYFRAMES_RULE
//     ? s(t)
//     : i === ds.MIXIN_RULE && (r = !0);
//   let o = t.rules;
//   if (o && !r)
//     for (let t, r = 0, i = o.length; r < i && (t = o[r]); r++) Es(t, e, s, n);
// }
// function Ts(t, e) {
//   let s = t.indexOf("var(");
//   if (-1 === s) return e(t, "", "", "");
//   let n = (function (t, e) {
//       let s = 0;
//       for (let n = e, r = t.length; n < r; n++)
//         if ("(" === t[n]) s++;
//         else if (")" === t[n] && 0 == --s) return n;
//       return -1;
//     })(t, s + 3),
//     r = t.substring(s + 4, n),
//     i = t.substring(0, s),
//     o = Ts(t.substring(n + 1), e),
//     a = r.indexOf(",");
//   return -1 === a
//     ? e(i, r.trim(), "", o)
//     : e(i, r.substring(0, a).trim(), r.substring(a + 1).trim(), o);
// }
// window.ShadyDOM && window.ShadyDOM.wrap;
// function Os(t) {
//   if (void 0 !== ss) return ss;
//   if (void 0 === t.__cssBuild) {
//     const e = t.getAttribute("css-build");
//     if (e) t.__cssBuild = e;
//     else {
//       const e = (function (t) {
//         const e =
//           "template" === t.localName ? t.content.firstChild : t.firstChild;
//         if (e instanceof Comment) {
//           const t = e.textContent.trim().split(":");
//           if ("css-build" === t[0]) return t[1];
//         }
//         return "";
//       })(t);
//       "" !== e &&
//         (function (t) {
//           const e =
//             "template" === t.localName ? t.content.firstChild : t.firstChild;
//           e.parentNode.removeChild(e);
//         })(t),
//         (t.__cssBuild = e);
//     }
//   }
//   return t.__cssBuild || "";
// }
// function Ns(t) {
//   return "" !== Os(t);
// }
// function xs(t, e) {
//   for (let s in e)
//     null === s ? t.style.removeProperty(s) : t.style.setProperty(s, e[s]);
// }
// function As(t, e) {
//   const s = window.getComputedStyle(t).getPropertyValue(e);
//   return s ? s.trim() : "";
// }
// const Is = /;\s*/m,
//   Ms = /^\s*(initial)|(inherit)\s*$/,
//   Rs = /\s*!important/;
// class Ls {
//   constructor() {
//     this._map = {};
//   }
//   set(t, e) {
//     (t = t.trim()), (this._map[t] = { properties: e, dependants: {} });
//   }
//   get(t) {
//     return (t = t.trim()), this._map[t] || null;
//   }
// }
// let ks = null;
// class Ds {
//   constructor() {
//     (this._currentElement = null),
//       (this._measureElement = null),
//       (this._map = new Ls());
//   }
//   detectMixin(t) {
//     return (function (t) {
//       const e = gs.test(t) || ys.test(t);
//       return (gs.lastIndex = 0), (ys.lastIndex = 0), e;
//     })(t);
//   }
//   gatherStyles(t) {
//     const e = (function (t) {
//       const e = [],
//         s = t.querySelectorAll("style");
//       for (let t = 0; t < s.length; t++) {
//         const n = s[t];
//         vs(n)
//           ? ts || (Cs(n), n.parentNode.removeChild(n))
//           : (e.push(n.textContent), n.parentNode.removeChild(n));
//       }
//       return e.join("").trim();
//     })(t.content);
//     if (e) {
//       const s = document.createElement("style");
//       return (
//         (s.textContent = e), t.content.insertBefore(s, t.content.firstChild), s
//       );
//     }
//     return null;
//   }
//   transformTemplate(t, e) {
//     void 0 === t._gatheredStyle && (t._gatheredStyle = this.gatherStyles(t));
//     const s = t._gatheredStyle;
//     return s ? this.transformStyle(s, e) : null;
//   }
//   transformStyle(t, e = "") {
//     let s = ws(t);
//     return this.transformRules(s, e), (t.textContent = Ss(s)), s;
//   }
//   transformCustomStyle(t) {
//     let e = ws(t);
//     return (
//       Es(e, (t) => {
//         ":root" === t.selector && (t.selector = "html"), this.transformRule(t);
//       }),
//       (t.textContent = Ss(e)),
//       e
//     );
//   }
//   transformRules(t, e) {
//     (this._currentElement = e),
//       Es(t, (t) => {
//         this.transformRule(t);
//       }),
//       (this._currentElement = null);
//   }
//   transformRule(t) {
//     (t.cssText = this.transformCssText(t.parsedCssText, t)),
//       ":root" === t.selector && (t.selector = ":host > *");
//   }
//   transformCssText(t, e) {
//     return (
//       (t = t.replace(ys, (t, s, n, r) =>
//         this._produceCssProperties(t, s, n, r, e)
//       )),
//       this._consumeCssProperties(t, e)
//     );
//   }
//   _getInitialValueForProperty(t) {
//     return (
//       this._measureElement ||
//         ((this._measureElement = document.createElement("meta")),
//         this._measureElement.setAttribute("apply-shim-measure", ""),
//         (this._measureElement.style.all = "initial"),
//         document.head.appendChild(this._measureElement)),
//       window.getComputedStyle(this._measureElement).getPropertyValue(t)
//     );
//   }
//   _fallbacksFromPreviousRules(t) {
//     let e = t;
//     for (; e.parent; ) e = e.parent;
//     const s = {};
//     let n = !1;
//     return (
//       Es(e, (e) => {
//         (n = n || e === t),
//           n ||
//             (e.selector === t.selector &&
//               Object.assign(s, this._cssTextToMap(e.parsedCssText)));
//       }),
//       s
//     );
//   }
//   _consumeCssProperties(t, e) {
//     let s = null;
//     for (; (s = gs.exec(t)); ) {
//       let n = s[0],
//         r = s[1],
//         i = s.index,
//         o = i + n.indexOf("@apply"),
//         a = i + n.length,
//         l = t.slice(0, o),
//         h = t.slice(a),
//         d = e ? this._fallbacksFromPreviousRules(e) : {};
//       Object.assign(d, this._cssTextToMap(l));
//       let c = this._atApplyToCssProperties(r, d);
//       (t = `${l}${c}${h}`), (gs.lastIndex = i + c.length);
//     }
//     return t;
//   }
//   _atApplyToCssProperties(t, e) {
//     t = t.replace(Is, "");
//     let s = [],
//       n = this._map.get(t);
//     if ((n || (this._map.set(t, {}), (n = this._map.get(t))), n)) {
//       let r, i, o;
//       this._currentElement && (n.dependants[this._currentElement] = !0);
//       const a = n.properties;
//       for (r in a)
//         (o = e && e[r]),
//           (i = [r, ": var(", t, "_-_", r]),
//           o && i.push(",", o.replace(Rs, "")),
//           i.push(")"),
//           Rs.test(a[r]) && i.push(" !important"),
//           s.push(i.join(""));
//     }
//     return s.join("; ");
//   }
//   _replaceInitialOrInherit(t, e) {
//     let s = Ms.exec(e);
//     return (
//       s &&
//         (e = s[1] ? this._getInitialValueForProperty(t) : "apply-shim-inherit"),
//       e
//     );
//   }
//   _cssTextToMap(t, e = !1) {
//     let s,
//       n,
//       r = t.split(";"),
//       i = {};
//     for (let t, o, a = 0; a < r.length; a++)
//       (t = r[a]),
//         t &&
//           ((o = t.split(":")),
//           o.length > 1 &&
//             ((s = o[0].trim()),
//             (n = o.slice(1).join(":")),
//             e && (n = this._replaceInitialOrInherit(s, n)),
//             (i[s] = n)));
//     return i;
//   }
//   _invalidateMixinEntry(t) {
//     if (ks) for (let e in t.dependants) e !== this._currentElement && ks(e);
//   }
//   _produceCssProperties(t, e, s, n, r) {
//     if (
//       (s &&
//         Ts(s, (t, e) => {
//           e && this._map.get(e) && (n = `@apply ${e};`);
//         }),
//       !n)
//     )
//       return t;
//     let i = this._consumeCssProperties("" + n, r),
//       o = t.slice(0, t.indexOf("--")),
//       a = this._cssTextToMap(i, !0),
//       l = a,
//       h = this._map.get(e),
//       d = h && h.properties;
//     d ? (l = Object.assign(Object.create(d), a)) : this._map.set(e, l);
//     let c,
//       u,
//       p = [],
//       _ = !1;
//     for (c in l)
//       (u = a[c]),
//         void 0 === u && (u = "initial"),
//         d && !(c in d) && (_ = !0),
//         p.push(`${e}_-_${c}: ${u}`);
//     return (
//       _ && this._invalidateMixinEntry(h),
//       h && (h.properties = l),
//       s && (o = `${t};${o}`),
//       `${o}${p.join("; ")};`
//     );
//   }
// }
// (Ds.prototype.detectMixin = Ds.prototype.detectMixin),
//   (Ds.prototype.transformStyle = Ds.prototype.transformStyle),
//   (Ds.prototype.transformCustomStyle = Ds.prototype.transformCustomStyle),
//   (Ds.prototype.transformRules = Ds.prototype.transformRules),
//   (Ds.prototype.transformRule = Ds.prototype.transformRule),
//   (Ds.prototype.transformTemplate = Ds.prototype.transformTemplate),
//   (Ds.prototype._separator = "_-_"),
//   Object.defineProperty(Ds.prototype, "invalidCallback", {
//     get: () => ks,
//     set(t) {
//       ks = t;
//     },
//   });
// const Fs = {},
//   Hs = "_applyShimCurrentVersion",
//   zs = "_applyShimNextVersion",
//   js = "_applyShimValidatingVersion",
//   Bs = Promise.resolve();
// function qs(t) {
//   let e = Fs[t];
//   e &&
//     (function (t) {
//       (t[Hs] = t[Hs] || 0), (t[js] = t[js] || 0), (t[zs] = (t[zs] || 0) + 1);
//     })(e);
// }
// function $s(t) {
//   return t[Hs] === t[zs];
// }
// let Ys,
//   Js = null,
//   Vs = (window.HTMLImports && window.HTMLImports.whenReady) || null;
// function Us(t) {
//   requestAnimationFrame(function () {
//     Vs
//       ? Vs(t)
//       : (Js ||
//           ((Js = new Promise((t) => {
//             Ys = t;
//           })),
//           "complete" === document.readyState
//             ? Ys()
//             : document.addEventListener("readystatechange", () => {
//                 "complete" === document.readyState && Ys();
//               })),
//         Js.then(function () {
//           t && t();
//         }));
//   });
// }
// const Xs = "__shadyCSSCachedStyle";
// let Ws = null,
//   Gs = null;
// class Zs {
//   constructor() {
//     (this.customStyles = []),
//       (this.enqueued = !1),
//       Us(() => {
//         window.ShadyCSS.flushCustomStyles &&
//           window.ShadyCSS.flushCustomStyles();
//       });
//   }
//   enqueueDocumentValidation() {
//     !this.enqueued && Gs && ((this.enqueued = !0), Us(Gs));
//   }
//   addCustomStyle(t) {
//     t.__seenByShadyCSS ||
//       ((t.__seenByShadyCSS = !0),
//       this.customStyles.push(t),
//       this.enqueueDocumentValidation());
//   }
//   getStyleForCustomStyle(t) {
//     if (t[Xs]) return t[Xs];
//     let e;
//     return (e = t.getStyle ? t.getStyle() : t), e;
//   }
//   processStyles() {
//     const t = this.customStyles;
//     for (let e = 0; e < t.length; e++) {
//       const s = t[e];
//       if (s[Xs]) continue;
//       const n = this.getStyleForCustomStyle(s);
//       if (n) {
//         const t = n.__appliedElement || n;
//         Ws && Ws(t), (s[Xs] = t);
//       }
//     }
//     return t;
//   }
// }
// (Zs.prototype.addCustomStyle = Zs.prototype.addCustomStyle),
//   (Zs.prototype.getStyleForCustomStyle = Zs.prototype.getStyleForCustomStyle),
//   (Zs.prototype.processStyles = Zs.prototype.processStyles),
//   Object.defineProperties(Zs.prototype, {
//     transformCallback: {
//       get: () => Ws,
//       set(t) {
//         Ws = t;
//       },
//     },
//     validateCallback: {
//       get: () => Gs,
//       set(t) {
//         let e = !1;
//         Gs || (e = !0), (Gs = t), e && this.enqueueDocumentValidation();
//       },
//     },
//   });
// const Ks = new Ds();
// class Qs {
//   constructor() {
//     (this.customStyleInterface = null), (Ks.invalidCallback = qs);
//   }
//   ensure() {
//     this.customStyleInterface ||
//       (window.ShadyCSS.CustomStyleInterface &&
//         ((this.customStyleInterface = window.ShadyCSS.CustomStyleInterface),
//         (this.customStyleInterface.transformCallback = (t) => {
//           Ks.transformCustomStyle(t);
//         }),
//         (this.customStyleInterface.validateCallback = () => {
//           requestAnimationFrame(() => {
//             this.customStyleInterface.enqueued && this.flushCustomStyles();
//           });
//         })));
//   }
//   prepareTemplate(t, e) {
//     if ((this.ensure(), Ns(t))) return;
//     Fs[e] = t;
//     let s = Ks.transformTemplate(t, e);
//     t._styleAst = s;
//   }
//   flushCustomStyles() {
//     if ((this.ensure(), !this.customStyleInterface)) return;
//     let t = this.customStyleInterface.processStyles();
//     if (this.customStyleInterface.enqueued) {
//       for (let e = 0; e < t.length; e++) {
//         let s = t[e],
//           n = this.customStyleInterface.getStyleForCustomStyle(s);
//         n && Ks.transformCustomStyle(n);
//       }
//       this.customStyleInterface.enqueued = !1;
//     }
//   }
//   styleSubtree(t, e) {
//     if ((this.ensure(), e && xs(t, e), t.shadowRoot)) {
//       this.styleElement(t);
//       let e = t.shadowRoot.children || t.shadowRoot.childNodes;
//       for (let t = 0; t < e.length; t++) this.styleSubtree(e[t]);
//     } else {
//       let e = t.children || t.childNodes;
//       for (let t = 0; t < e.length; t++) this.styleSubtree(e[t]);
//     }
//   }
//   styleElement(t) {
//     this.ensure();
//     let { is: e } = (function (t) {
//         let e = t.localName,
//           s = "",
//           n = "";
//         return (
//           e
//             ? e.indexOf("-") > -1
//               ? (s = e)
//               : ((n = e), (s = (t.getAttribute && t.getAttribute("is")) || ""))
//             : ((s = t.is), (n = t.extends)),
//           { is: s, typeExtension: n }
//         );
//       })(t),
//       s = Fs[e];
//     if ((!s || !Ns(s)) && s && !$s(s)) {
//       (function (t) {
//         return !$s(t) && t[js] === t[zs];
//       })(s) ||
//         (this.prepareTemplate(s, e),
//         (function (t) {
//           (t[js] = t[zs]),
//             t._validating ||
//               ((t._validating = !0),
//               Bs.then(function () {
//                 (t[Hs] = t[zs]), (t._validating = !1);
//               }));
//         })(s));
//       let n = t.shadowRoot;
//       if (n) {
//         let t = n.querySelector("style");
//         t && ((t.__cssRules = s._styleAst), (t.textContent = Ss(s._styleAst)));
//       }
//     }
//   }
//   styleDocument(t) {
//     this.ensure(), this.styleSubtree(document.body, t);
//   }
// }
// if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
//   const t = new Qs();
//   let e = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;
//   (window.ShadyCSS = {
//     prepareTemplate(e, s, n) {
//       t.flushCustomStyles(), t.prepareTemplate(e, s);
//     },
//     prepareTemplateStyles(t, e, s) {
//       window.ShadyCSS.prepareTemplate(t, e, s);
//     },
//     prepareTemplateDom(t, e) {},
//     styleSubtree(e, s) {
//       t.flushCustomStyles(), t.styleSubtree(e, s);
//     },
//     styleElement(e) {
//       t.flushCustomStyles(), t.styleElement(e);
//     },
//     styleDocument(e) {
//       t.flushCustomStyles(), t.styleDocument(e);
//     },
//     getComputedStyleValue: (t, e) => As(t, e),
//     flushCustomStyles() {
//       t.flushCustomStyles();
//     },
//     nativeCss: is,
//     nativeShadow: ts,
//     cssBuild: ss,
//     disableRuntime: rs,
//   }),
//     e && (window.ShadyCSS.CustomStyleInterface = e);
// }
// window.ShadyCSS.ApplyShim = Ks;
// const tn = d(
//   (t) =>
//     class extends t {
//       _addEventListenerToNode(t, e, s) {
//         Q(t, e, s) || super._addEventListenerToNode(t, e, s);
//       }
//       _removeEventListenerFromNode(t, e, s) {
//         tt(t, e, s) || super._removeEventListenerFromNode(t, e, s);
//       }
//     }
// );
// let en = !1,
//   sn = [],
//   nn = [];
// function rn() {
//   (en = !0),
//     requestAnimationFrame(function () {
//       (en = !1),
//         (function (t) {
//           for (; t.length; ) on(t.shift());
//         })(sn),
//         setTimeout(function () {
//           !(function (t) {
//             for (let e = 0, s = t.length; e < s; e++) on(t.shift());
//           })(nn);
//         });
//     });
// }
// function on(t) {
//   const e = t[0],
//     s = t[1],
//     n = t[2];
//   try {
//     s.apply(e, n);
//   } catch (t) {
//     setTimeout(() => {
//       throw t;
//     });
//   }
// }
// function an(t, e, s) {
//   en || rn(), sn.push([t, e, s]);
// }
// function ln(t, e, s) {
//   en || rn(), nn.push([t, e, s]);
// }
// function hn() {
//   document.body.removeAttribute("unresolved");
// }
// function dn(t, e, s) {
//   return { index: t, removed: e, addedCount: s };
// }
// "interactive" === document.readyState || "complete" === document.readyState
//   ? hn()
//   : window.addEventListener("DOMContentLoaded", hn);
// function cn(t, e, s, n, r, i) {
//   let o,
//     a = 0,
//     l = 0,
//     h = Math.min(s - e, i - r);
//   if (
//     (0 == e &&
//       0 == r &&
//       (a = (function (t, e, s) {
//         for (let n = 0; n < s; n++) if (!pn(t[n], e[n])) return n;
//         return s;
//       })(t, n, h)),
//     s == t.length &&
//       i == n.length &&
//       (l = (function (t, e, s) {
//         let n = t.length,
//           r = e.length,
//           i = 0;
//         for (; i < s && pn(t[--n], e[--r]); ) i++;
//         return i;
//       })(t, n, h - a)),
//     (r += a),
//     (i -= l),
//     (s -= l) - (e += a) == 0 && i - r == 0)
//   )
//     return [];
//   if (e == s) {
//     for (o = dn(e, [], 0); r < i; ) o.removed.push(n[r++]);
//     return [o];
//   }
//   if (r == i) return [dn(e, [], s - e)];
//   let d = (function (t) {
//     let e = t.length - 1,
//       s = t[0].length - 1,
//       n = t[e][s],
//       r = [];
//     for (; e > 0 || s > 0; ) {
//       if (0 == e) {
//         r.push(2), s--;
//         continue;
//       }
//       if (0 == s) {
//         r.push(3), e--;
//         continue;
//       }
//       let i,
//         o = t[e - 1][s - 1],
//         a = t[e - 1][s],
//         l = t[e][s - 1];
//       (i = a < l ? (a < o ? a : o) : l < o ? l : o),
//         i == o
//           ? (o == n ? r.push(0) : (r.push(1), (n = o)), e--, s--)
//           : i == a
//           ? (r.push(3), e--, (n = a))
//           : (r.push(2), s--, (n = l));
//     }
//     return r.reverse(), r;
//   })(
//     (function (t, e, s, n, r, i) {
//       let o = i - r + 1,
//         a = s - e + 1,
//         l = new Array(o);
//       for (let t = 0; t < o; t++) (l[t] = new Array(a)), (l[t][0] = t);
//       for (let t = 0; t < a; t++) l[0][t] = t;
//       for (let s = 1; s < o; s++)
//         for (let i = 1; i < a; i++)
//           if (pn(t[e + i - 1], n[r + s - 1])) l[s][i] = l[s - 1][i - 1];
//           else {
//             let t = l[s - 1][i] + 1,
//               e = l[s][i - 1] + 1;
//             l[s][i] = t < e ? t : e;
//           }
//       return l;
//     })(t, e, s, n, r, i)
//   );
//   o = void 0;
//   let c = [],
//     u = e,
//     p = r;
//   for (let t = 0; t < d.length; t++)
//     switch (d[t]) {
//       case 0:
//         o && (c.push(o), (o = void 0)), u++, p++;
//         break;
//       case 1:
//         o || (o = dn(u, [], 0)), o.addedCount++, u++, o.removed.push(n[p]), p++;
//         break;
//       case 2:
//         o || (o = dn(u, [], 0)), o.addedCount++, u++;
//         break;
//       case 3:
//         o || (o = dn(u, [], 0)), o.removed.push(n[p]), p++;
//     }
//   return o && c.push(o), c;
// }
// function un(t, e) {
//   return cn(t, 0, t.length, e, 0, e.length);
// }
// function pn(t, e) {
//   return t === e;
// }
// function _n(t) {
//   return "slot" === t.localName;
// }
// let fn = class {
//   static getFlattenedNodes(t) {
//     const e = E(t);
//     return _n(t)
//       ? ((t = t), e.assignedNodes({ flatten: !0 }))
//       : Array.from(e.childNodes)
//           .map((t) => (_n(t) ? E((t = t)).assignedNodes({ flatten: !0 }) : [t]))
//           .reduce((t, e) => t.concat(e), []);
//   }
//   constructor(t, e) {
//     (this._shadyChildrenObserver = null),
//       (this._nativeChildrenObserver = null),
//       (this._connected = !1),
//       (this._target = t),
//       (this.callback = e),
//       (this._effectiveNodes = []),
//       (this._observer = null),
//       (this._scheduled = !1),
//       (this._boundSchedule = () => {
//         this._schedule();
//       }),
//       this.connect(),
//       this._schedule();
//   }
//   connect() {
//     _n(this._target)
//       ? this._listenSlots([this._target])
//       : E(this._target).children &&
//         (this._listenSlots(E(this._target).children),
//         window.ShadyDOM
//           ? (this._shadyChildrenObserver = ShadyDOM.observeChildren(
//               this._target,
//               (t) => {
//                 this._processMutations(t);
//               }
//             ))
//           : ((this._nativeChildrenObserver = new MutationObserver((t) => {
//               this._processMutations(t);
//             })),
//             this._nativeChildrenObserver.observe(this._target, {
//               childList: !0,
//             }))),
//       (this._connected = !0);
//   }
//   disconnect() {
//     _n(this._target)
//       ? this._unlistenSlots([this._target])
//       : E(this._target).children &&
//         (this._unlistenSlots(E(this._target).children),
//         window.ShadyDOM && this._shadyChildrenObserver
//           ? (ShadyDOM.unobserveChildren(this._shadyChildrenObserver),
//             (this._shadyChildrenObserver = null))
//           : this._nativeChildrenObserver &&
//             (this._nativeChildrenObserver.disconnect(),
//             (this._nativeChildrenObserver = null))),
//       (this._connected = !1);
//   }
//   _schedule() {
//     this._scheduled || ((this._scheduled = !0), l.run(() => this.flush()));
//   }
//   _processMutations(t) {
//     this._processSlotMutations(t), this.flush();
//   }
//   _processSlotMutations(t) {
//     if (t)
//       for (let e = 0; e < t.length; e++) {
//         let s = t[e];
//         s.addedNodes && this._listenSlots(s.addedNodes),
//           s.removedNodes && this._unlistenSlots(s.removedNodes);
//       }
//   }
//   flush() {
//     if (!this._connected) return !1;
//     window.ShadyDOM && ShadyDOM.flush(),
//       this._nativeChildrenObserver
//         ? this._processSlotMutations(this._nativeChildrenObserver.takeRecords())
//         : this._shadyChildrenObserver &&
//           this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),
//       (this._scheduled = !1);
//     let t = { target: this._target, addedNodes: [], removedNodes: [] },
//       e = this.constructor.getFlattenedNodes(this._target),
//       s = un(e, this._effectiveNodes);
//     for (let e, n = 0; n < s.length && (e = s[n]); n++)
//       for (let s, n = 0; n < e.removed.length && (s = e.removed[n]); n++)
//         t.removedNodes.push(s);
//     for (let n, r = 0; r < s.length && (n = s[r]); r++)
//       for (let s = n.index; s < n.index + n.addedCount; s++)
//         t.addedNodes.push(e[s]);
//     this._effectiveNodes = e;
//     let n = !1;
//     return (
//       (t.addedNodes.length || t.removedNodes.length) &&
//         ((n = !0), this.callback.call(this._target, t)),
//       n
//     );
//   }
//   _listenSlots(t) {
//     for (let e = 0; e < t.length; e++) {
//       let s = t[e];
//       _n(s) && s.addEventListener("slotchange", this._boundSchedule);
//     }
//   }
//   _unlistenSlots(t) {
//     for (let e = 0; e < t.length; e++) {
//       let s = t[e];
//       _n(s) && s.removeEventListener("slotchange", this._boundSchedule);
//     }
//   }
// };
// const mn = Element.prototype,
//   yn =
//     mn.matches ||
//     mn.matchesSelector ||
//     mn.mozMatchesSelector ||
//     mn.msMatchesSelector ||
//     mn.oMatchesSelector ||
//     mn.webkitMatchesSelector,
//   gn = function (t, e) {
//     return yn.call(t, e);
//   };
// class bn {
//   constructor(t) {
//     this.node = t;
//   }
//   observeNodes(t) {
//     return new fn(this.node, t);
//   }
//   unobserveNodes(t) {
//     t.disconnect();
//   }
//   notifyObserver() {}
//   deepContains(t) {
//     if (E(this.node).contains(t)) return !0;
//     let e = t,
//       s = t.ownerDocument;
//     for (; e && e !== s && e !== this.node; ) e = E(e).parentNode || E(e).host;
//     return e === this.node;
//   }
//   getOwnerRoot() {
//     return E(this.node).getRootNode();
//   }
//   getDistributedNodes() {
//     return "slot" === this.node.localName
//       ? E(this.node).assignedNodes({ flatten: !0 })
//       : [];
//   }
//   getDestinationInsertionPoints() {
//     let t = [],
//       e = E(this.node).assignedSlot;
//     for (; e; ) t.push(e), (e = E(e).assignedSlot);
//     return t;
//   }
//   importNode(t, e) {
//     let s = this.node instanceof Document ? this.node : this.node.ownerDocument;
//     return E(s).importNode(t, e);
//   }
//   getEffectiveChildNodes() {
//     return fn.getFlattenedNodes(this.node);
//   }
//   queryDistributedElements(t) {
//     let e = this.getEffectiveChildNodes(),
//       s = [];
//     for (let n, r = 0, i = e.length; r < i && (n = e[r]); r++)
//       n.nodeType === Node.ELEMENT_NODE && gn(n, t) && s.push(n);
//     return s;
//   }
//   get activeElement() {
//     let t = this.node;
//     return void 0 !== t._activeElement ? t._activeElement : t.activeElement;
//   }
// }
// function Pn(t, e) {
//   for (let s = 0; s < e.length; s++) {
//     let n = e[s];
//     Object.defineProperty(t, n, {
//       get: function () {
//         return this.node[n];
//       },
//       configurable: !0,
//     });
//   }
// }
// class Cn {
//   constructor(t) {
//     this.event = t;
//   }
//   get rootTarget() {
//     return this.path[0];
//   }
//   get localTarget() {
//     return this.event.target;
//   }
//   get path() {
//     return this.event.composedPath();
//   }
// }
// bn.prototype.cloneNode,
//   bn.prototype.appendChild,
//   bn.prototype.insertBefore,
//   bn.prototype.removeChild,
//   bn.prototype.replaceChild,
//   bn.prototype.setAttribute,
//   bn.prototype.removeAttribute,
//   bn.prototype.querySelector,
//   bn.prototype.querySelectorAll,
//   bn.prototype.parentNode,
//   bn.prototype.firstChild,
//   bn.prototype.lastChild,
//   bn.prototype.nextSibling,
//   bn.prototype.previousSibling,
//   bn.prototype.firstElementChild,
//   bn.prototype.lastElementChild,
//   bn.prototype.nextElementSibling,
//   bn.prototype.previousElementSibling,
//   bn.prototype.childNodes,
//   bn.prototype.children,
//   bn.prototype.classList,
//   bn.prototype.textContent,
//   bn.prototype.innerHTML;
// let vn = bn;
// if (
//   window.ShadyDOM &&
//   window.ShadyDOM.inUse &&
//   window.ShadyDOM.noPatch &&
//   window.ShadyDOM.Wrapper
// ) {
//   class t extends window.ShadyDOM.Wrapper {}
//   Object.getOwnPropertyNames(bn.prototype).forEach((e) => {
//     "activeElement" != e && (t.prototype[e] = bn.prototype[e]);
//   }),
//     Pn(t.prototype, ["classList"]),
//     (vn = t),
//     Object.defineProperties(Cn.prototype, {
//       localTarget: {
//         get() {
//           return this.event.currentTarget;
//         },
//         configurable: !0,
//       },
//       path: {
//         get() {
//           return window.ShadyDOM.composedPath(this.event);
//         },
//         configurable: !0,
//       },
//     });
// } else
//   !(function (t, e) {
//     for (let s = 0; s < e.length; s++) {
//       let n = e[s];
//       t[n] = function () {
//         return this.node[n].apply(this.node, arguments);
//       };
//     }
//   })(bn.prototype, [
//     "cloneNode",
//     "appendChild",
//     "insertBefore",
//     "removeChild",
//     "replaceChild",
//     "setAttribute",
//     "removeAttribute",
//     "querySelector",
//     "querySelectorAll",
//   ]),
//     Pn(bn.prototype, [
//       "parentNode",
//       "firstChild",
//       "lastChild",
//       "nextSibling",
//       "previousSibling",
//       "firstElementChild",
//       "lastElementChild",
//       "nextElementSibling",
//       "previousElementSibling",
//       "childNodes",
//       "children",
//       "classList",
//     ]),
//     (function (t, e) {
//       for (let s = 0; s < e.length; s++) {
//         let n = e[s];
//         Object.defineProperty(t, n, {
//           get: function () {
//             return this.node[n];
//           },
//           set: function (t) {
//             this.node[n] = t;
//           },
//           configurable: !0,
//         });
//       }
//     })(bn.prototype, ["textContent", "innerHTML"]);
// const Sn = function (t) {
//   if ((t = t || document) instanceof vn) return t;
//   if (t instanceof Cn) return t;
//   let e = t.__domApi;
//   return (
//     e || ((e = t instanceof Event ? new Cn(t) : new vn(t)), (t.__domApi = e)), e
//   );
// };
// let wn = window.ShadyCSS;
// const En = d((t) => {
//     const e = tn(xe(t)),
//       s = { x: "pan-x", y: "pan-y", none: "none", all: "auto" };
//     class n extends e {
//       constructor() {
//         super(), this.isAttached, this.__boundListeners, this._debouncers;
//       }
//       static get importMeta() {
//         return this.prototype.importMeta;
//       }
//       created() {}
//       connectedCallback() {
//         super.connectedCallback(), (this.isAttached = !0), this.attached();
//       }
//       attached() {}
//       disconnectedCallback() {
//         super.disconnectedCallback(), (this.isAttached = !1), this.detached();
//       }
//       detached() {}
//       attributeChangedCallback(t, e, s, n) {
//         e !== s &&
//           (super.attributeChangedCallback(t, e, s, n),
//           this.attributeChanged(t, e, s));
//       }
//       attributeChanged(t, e, s) {}
//       _initializeProperties() {
//         let t = Object.getPrototypeOf(this);
//         t.hasOwnProperty("__hasRegisterFinished") ||
//           (this._registered(), (t.__hasRegisterFinished = !0)),
//           super._initializeProperties(),
//           (this.root = this),
//           this.created(),
//           this._applyListeners();
//       }
//       _registered() {}
//       ready() {
//         this._ensureAttributes(), super.ready();
//       }
//       _ensureAttributes() {}
//       _applyListeners() {}
//       serialize(t) {
//         return this._serializeValue(t);
//       }
//       deserialize(t, e) {
//         return this._deserializeValue(t, e);
//       }
//       reflectPropertyToAttribute(t, e, s) {
//         this._propertyToAttribute(t, e, s);
//       }
//       serializeValueToAttribute(t, e, s) {
//         this._valueToNodeAttribute(s || this, t, e);
//       }
//       extend(t, e) {
//         if (!t || !e) return t || e;
//         let s = Object.getOwnPropertyNames(e);
//         for (let n, r = 0; r < s.length && (n = s[r]); r++) {
//           let s = Object.getOwnPropertyDescriptor(e, n);
//           s && Object.defineProperty(t, n, s);
//         }
//         return t;
//       }
//       mixin(t, e) {
//         for (let s in e) t[s] = e[s];
//         return t;
//       }
//       chainObject(t, e) {
//         return t && e && t !== e && (t.__proto__ = e), t;
//       }
//       instanceTemplate(t) {
//         let e = this.constructor._contentForTemplate(t);
//         return document.importNode(e, !0);
//       }
//       fire(t, e, s) {
//         (s = s || {}), (e = null == e ? {} : e);
//         let n = new Event(t, {
//           bubbles: void 0 === s.bubbles || s.bubbles,
//           cancelable: Boolean(s.cancelable),
//           composed: void 0 === s.composed || s.composed,
//         });
//         n.detail = e;
//         let r = s.node || this;
//         return E(r).dispatchEvent(n), n;
//       }
//       listen(t, e, s) {
//         t = t || this;
//         let n =
//             this.__boundListeners || (this.__boundListeners = new WeakMap()),
//           r = n.get(t);
//         r || ((r = {}), n.set(t, r));
//         let i = e + s;
//         r[i] || (r[i] = this._addMethodEventListenerToNode(t, e, s, this));
//       }
//       unlisten(t, e, s) {
//         t = t || this;
//         let n = this.__boundListeners && this.__boundListeners.get(t),
//           r = e + s,
//           i = n && n[r];
//         i && (this._removeEventListenerFromNode(t, e, i), (n[r] = null));
//       }
//       setScrollDirection(t, e) {
//         st(e || this, s[t] || "auto");
//       }
//       $$(t) {
//         return this.root.querySelector(t);
//       }
//       get domHost() {
//         let t = E(this).getRootNode();
//         return t instanceof DocumentFragment ? t.host : t;
//       }
//       distributeContent() {
//         const t = Sn(this);
//         window.ShadyDOM && t.shadowRoot && ShadyDOM.flush();
//       }
//       getEffectiveChildNodes() {
//         return Sn(this).getEffectiveChildNodes();
//       }
//       queryDistributedElements(t) {
//         return Sn(this).queryDistributedElements(t);
//       }
//       getEffectiveChildren() {
//         return this.getEffectiveChildNodes().filter(function (t) {
//           return t.nodeType === Node.ELEMENT_NODE;
//         });
//       }
//       getEffectiveTextContent() {
//         let t = this.getEffectiveChildNodes(),
//           e = [];
//         for (let s, n = 0; (s = t[n]); n++)
//           s.nodeType !== Node.COMMENT_NODE && e.push(s.textContent);
//         return e.join("");
//       }
//       queryEffectiveChildren(t) {
//         let e = this.queryDistributedElements(t);
//         return e && e[0];
//       }
//       queryAllEffectiveChildren(t) {
//         return this.queryDistributedElements(t);
//       }
//       getContentChildNodes(t) {
//         let e = this.root.querySelector(t || "slot");
//         return e ? Sn(e).getDistributedNodes() : [];
//       }
//       getContentChildren(t) {
//         return this.getContentChildNodes(t).filter(function (t) {
//           return t.nodeType === Node.ELEMENT_NODE;
//         });
//       }
//       isLightDescendant(t) {
//         const e = this;
//         return (
//           e !== t &&
//           E(e).contains(t) &&
//           E(e).getRootNode() === E(t).getRootNode()
//         );
//       }
//       isLocalDescendant(t) {
//         return this.root === E(t).getRootNode();
//       }
//       scopeSubtree(t, e) {}
//       getComputedStyleValue(t) {
//         return wn.getComputedStyleValue(this, t);
//       }
//       debounce(t, e, s) {
//         return (
//           (this._debouncers = this._debouncers || {}),
//           (this._debouncers[t] = c.debounce(
//             this._debouncers[t],
//             s > 0 ? i.after(s) : l,
//             e.bind(this)
//           ))
//         );
//       }
//       isDebouncerActive(t) {
//         this._debouncers = this._debouncers || {};
//         let e = this._debouncers[t];
//         return !(!e || !e.isActive());
//       }
//       flushDebouncer(t) {
//         this._debouncers = this._debouncers || {};
//         let e = this._debouncers[t];
//         e && e.flush();
//       }
//       cancelDebouncer(t) {
//         this._debouncers = this._debouncers || {};
//         let e = this._debouncers[t];
//         e && e.cancel();
//       }
//       async(t, e) {
//         return e > 0 ? i.run(t.bind(this), e) : ~l.run(t.bind(this));
//       }
//       cancelAsync(t) {
//         t < 0 ? l.cancel(~t) : i.cancel(t);
//       }
//       create(t, e) {
//         let s = document.createElement(t);
//         if (e)
//           if (s.setProperties) s.setProperties(e);
//           else for (let t in e) s[t] = e[t];
//         return s;
//       }
//       elementMatches(t, e) {
//         return gn(e || this, t);
//       }
//       toggleAttribute(t, e) {
//         let s = this;
//         return (
//           3 === arguments.length && (s = arguments[2]),
//           1 == arguments.length && (e = !s.hasAttribute(t)),
//           e ? (E(s).setAttribute(t, ""), !0) : (E(s).removeAttribute(t), !1)
//         );
//       }
//       toggleClass(t, e, s) {
//         (s = s || this),
//           1 == arguments.length && (e = !s.classList.contains(t)),
//           e ? s.classList.add(t) : s.classList.remove(t);
//       }
//       transform(t, e) {
//         ((e = e || this).style.webkitTransform = t), (e.style.transform = t);
//       }
//       translate3d(t, e, s, n) {
//         (n = n || this),
//           this.transform("translate3d(" + t + "," + e + "," + s + ")", n);
//       }
//       arrayDelete(t, e) {
//         let s;
//         if (Array.isArray(t)) {
//           if (((s = t.indexOf(e)), s >= 0)) return t.splice(s, 1);
//         } else {
//           if (((s = It(this, t).indexOf(e)), s >= 0))
//             return this.splice(t, s, 1);
//         }
//         return null;
//       }
//       _logger(t, e) {
//         switch (
//           (Array.isArray(e) &&
//             1 === e.length &&
//             Array.isArray(e[0]) &&
//             (e = e[0]),
//           t)
//         ) {
//           case "log":
//           case "warn":
//           case "error":
//             console[t](...e);
//         }
//       }
//       _log(...t) {
//         this._logger("log", t);
//       }
//       _warn(...t) {
//         this._logger("warn", t);
//       }
//       _error(...t) {
//         this._logger("error", t);
//       }
//       _logf(t, ...e) {
//         return ["[%s::%s]", this.is, t, ...e];
//       }
//     }
//     return (n.prototype.is = ""), n;
//   }),
//   Tn = {
//     attached: !0,
//     detached: !0,
//     ready: !0,
//     created: !0,
//     beforeRegister: !0,
//     registered: !0,
//     attributeChanged: !0,
//     listeners: !0,
//     hostAttributes: !0,
//   },
//   On = {
//     attached: !0,
//     detached: !0,
//     ready: !0,
//     created: !0,
//     beforeRegister: !0,
//     registered: !0,
//     attributeChanged: !0,
//     behaviors: !0,
//     _noAccessors: !0,
//   },
//   Nn = Object.assign(
//     { listeners: !0, hostAttributes: !0, properties: !0, observers: !0 },
//     On
//   );
// function xn(t, e) {
//   return Rn({}, En(e), t);
// }
// function An(t, e, s, n) {
//   !(function (t, e, s) {
//     const n = t._noAccessors,
//       r = Object.getOwnPropertyNames(t);
//     for (let i = 0; i < r.length; i++) {
//       let o = r[i];
//       if (!(o in s))
//         if (n) e[o] = t[o];
//         else {
//           let s = Object.getOwnPropertyDescriptor(t, o);
//           s && ((s.configurable = !0), Object.defineProperty(e, o, s));
//         }
//     }
//   })(e, t, n);
//   for (let t in Tn) e[t] && ((s[t] = s[t] || []), s[t].push(e[t]));
// }
// function In(t, e, s) {
//   e = e || [];
//   for (let n = t.length - 1; n >= 0; n--) {
//     let r = t[n];
//     r
//       ? Array.isArray(r)
//         ? In(r, e)
//         : e.indexOf(r) < 0 && (!s || s.indexOf(r) < 0) && e.unshift(r)
//       : console.warn("behavior is null, check for missing or 404 import");
//   }
//   return e;
// }
// function Mn(t, e) {
//   for (const s in e) {
//     const n = t[s],
//       r = e[s];
//     t[s] =
//       !("value" in r) && n && "value" in n
//         ? Object.assign({ value: n.value }, r)
//         : r;
//   }
// }
// function Rn(t, e, s) {
//   let n;
//   const r = {};
//   class i extends e {
//     static _finalizeClass() {
//       if (
//         this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom", this))
//       ) {
//         if (n)
//           for (let t, e = 0; e < n.length; e++)
//             (t = n[e]),
//               t.properties && this.createProperties(t.properties),
//               t.observers && this.createObservers(t.observers, t.properties);
//         t.properties && this.createProperties(t.properties),
//           t.observers && this.createObservers(t.observers, t.properties),
//           this._prepareTemplate();
//       } else super._finalizeClass();
//     }
//     static get properties() {
//       const e = {};
//       if (n) for (let t = 0; t < n.length; t++) Mn(e, n[t].properties);
//       return Mn(e, t.properties), e;
//     }
//     static get observers() {
//       let e = [];
//       if (n)
//         for (let t, s = 0; s < n.length; s++)
//           (t = n[s]), t.observers && (e = e.concat(t.observers));
//       return t.observers && (e = e.concat(t.observers)), e;
//     }
//     created() {
//       super.created();
//       const t = r.created;
//       if (t) for (let e = 0; e < t.length; e++) t[e].call(this);
//     }
//     _registered() {
//       const t = i.prototype;
//       if (!t.hasOwnProperty("__hasRegisterFinished")) {
//         (t.__hasRegisterFinished = !0), super._registered();
//         const e = Object.getPrototypeOf(this);
//         let s = r.beforeRegister;
//         if (s) for (let t = 0; t < s.length; t++) s[t].call(e);
//         if (((s = r.registered), s))
//           for (let t = 0; t < s.length; t++) s[t].call(e);
//       }
//     }
//     _applyListeners() {
//       super._applyListeners();
//       const t = r.listeners;
//       if (t)
//         for (let e = 0; e < t.length; e++) {
//           const s = t[e];
//           if (s)
//             for (let t in s) this._addMethodEventListenerToNode(this, t, s[t]);
//         }
//     }
//     _ensureAttributes() {
//       const t = r.hostAttributes;
//       if (t)
//         for (let e = t.length - 1; e >= 0; e--) {
//           const s = t[e];
//           for (let t in s) this._ensureAttribute(t, s[t]);
//         }
//       super._ensureAttributes();
//     }
//     ready() {
//       super.ready();
//       let t = r.ready;
//       if (t) for (let e = 0; e < t.length; e++) t[e].call(this);
//     }
//     attached() {
//       super.attached();
//       let t = r.attached;
//       if (t) for (let e = 0; e < t.length; e++) t[e].call(this);
//     }
//     detached() {
//       super.detached();
//       let t = r.detached;
//       if (t) for (let e = 0; e < t.length; e++) t[e].call(this);
//     }
//     attributeChanged(t, e, s) {
//       super.attributeChanged();
//       let n = r.attributeChanged;
//       if (n) for (let r = 0; r < n.length; r++) n[r].call(this, t, e, s);
//     }
//   }
//   if (s) {
//     Array.isArray(s) || (s = [s]);
//     let t = e.prototype.behaviors;
//     (n = In(s, null, t)), (i.prototype.behaviors = t ? t.concat(s) : n);
//   }
//   return (
//     ((e) => {
//       n &&
//         (function (t, e, s) {
//           for (let n = 0; n < e.length; n++) An(t, e[n], s, Nn);
//         })(e, n, r),
//         An(e, t, r, On);
//     })(i.prototype),
//     (i.generatedFrom = t),
//     i
//   );
// }
// let Ln;
// Ln = ke._mutablePropertyChange;
// const kn = {
//     properties: { mutableData: Boolean },
//     _shouldPropertyChange(t, e, s) {
//       return Ln(this, t, e, s, this.mutableData);
//     },
//   },
//   Dn = function (t) {
//     let e;
//     return (
//       (e = "function" == typeof t ? t : Dn.Class(t)),
//       customElements.define(e.is, e),
//       e
//     );
//   };
// Dn.Class = function (t, e) {
//   t || console.warn("Polymer.Class requires `info` argument");
//   let s = e ? e(En(HTMLElement)) : En(HTMLElement);
//   return (s = Rn(t, s, t.behaviors)), (s.is = s.prototype.is = t.is), s;
// };
// const Fn = {
//     templatize(t, e) {
//       (this._templatizerTemplate = t),
//         (this.ctor = Xe(t, this, {
//           mutableData: Boolean(e),
//           parentModel: this._parentModel,
//           instanceProps: this._instanceProps,
//           forwardHostProp: this._forwardHostPropV2,
//           notifyInstanceProp: this._notifyInstancePropV2,
//         }));
//     },
//     stamp(t) {
//       return new this.ctor(t);
//     },
//     modelForElement(t) {
//       return We(this._templatizerTemplate, t);
//     },
//   },
//   Hn = tn(De(Ee(HTMLElement)));
// customElements.define(
//   "dom-bind",
//   class extends Hn {
//     static get observedAttributes() {
//       return ["mutable-data"];
//     }
//     constructor() {
//       super(), (this.root = null), (this.$ = null), (this.__children = null);
//     }
//     attributeChangedCallback() {
//       this.mutableData = !0;
//     }
//     connectedCallback() {
//       (this.style.display = "none"), this.render();
//     }
//     disconnectedCallback() {
//       this.__removeChildren();
//     }
//     __insertChildren() {
//       E(E(this).parentNode).insertBefore(this.root, this);
//     }
//     __removeChildren() {
//       if (this.__children)
//         for (let t = 0; t < this.__children.length; t++)
//           this.root.appendChild(this.__children[t]);
//     }
//     render() {
//       let t;
//       if (!this.__children) {
//         if (((t = t || this.querySelector("template")), !t)) {
//           let e = new MutationObserver(() => {
//             if (((t = this.querySelector("template")), !t))
//               throw new Error("dom-bind requires a <template> child");
//             e.disconnect(), this.render();
//           });
//           return void e.observe(this, { childList: !0 });
//         }
//         (this.root = this._stampTemplate(t)),
//           (this.$ = this.root.$),
//           (this.__children = []);
//         for (let t = this.root.firstChild; t; t = t.nextSibling)
//           this.__children[this.__children.length] = t;
//         this._enableProperties();
//       }
//       this.__insertChildren(),
//         this.dispatchEvent(
//           new CustomEvent("dom-change", { bubbles: !0, composed: !0 })
//         );
//     }
//   }
// );
// let zn = d((t) => {
//   let e = xe(t);
//   return class extends e {
//     static get properties() {
//       return {
//         items: { type: Array },
//         multi: { type: Boolean, value: !1 },
//         selected: { type: Object, notify: !0 },
//         selectedItem: { type: Object, notify: !0 },
//         toggle: { type: Boolean, value: !1 },
//       };
//     }
//     static get observers() {
//       return ["__updateSelection(multi, items.*)"];
//     }
//     constructor() {
//       super(),
//         (this.__lastItems = null),
//         (this.__lastMulti = null),
//         (this.__selectedMap = null);
//     }
//     __updateSelection(t, e) {
//       let s = e.path;
//       if (s == JSCompiler_renameProperty("items", this)) {
//         let s = e.base || [],
//           n = this.__lastItems;
//         if ((t !== this.__lastMulti && this.clearSelection(), n)) {
//           let t = un(s, n);
//           this.__applySplices(t);
//         }
//         (this.__lastItems = s), (this.__lastMulti = t);
//       } else if (
//         e.path ==
//         JSCompiler_renameProperty("items", this) + ".splices"
//       )
//         this.__applySplices(e.value.indexSplices);
//       else {
//         let t = s.slice(
//             (JSCompiler_renameProperty("items", this) + ".").length
//           ),
//           e = parseInt(t, 10);
//         t.indexOf(".") < 0 && t == e && this.__deselectChangedIdx(e);
//       }
//     }
//     __applySplices(t) {
//       let e = this.__selectedMap;
//       for (let s = 0; s < t.length; s++) {
//         let n = t[s];
//         e.forEach((t, s) => {
//           t < n.index ||
//             (t >= n.index + n.removed.length
//               ? e.set(s, t + n.addedCount - n.removed.length)
//               : e.set(s, -1));
//         });
//         for (let t = 0; t < n.addedCount; t++) {
//           let s = n.index + t;
//           e.has(this.items[s]) && e.set(this.items[s], s);
//         }
//       }
//       this.__updateLinks();
//       let s = 0;
//       e.forEach((t, n) => {
//         t < 0
//           ? (this.multi
//               ? this.splice(JSCompiler_renameProperty("selected", this), s, 1)
//               : (this.selected = this.selectedItem = null),
//             e.delete(n))
//           : s++;
//       });
//     }
//     __updateLinks() {
//       if (((this.__dataLinkedPaths = {}), this.multi)) {
//         let t = 0;
//         this.__selectedMap.forEach((e) => {
//           e >= 0 &&
//             this.linkPaths(
//               `${JSCompiler_renameProperty("items", this)}.${e}`,
//               `${JSCompiler_renameProperty("selected", this)}.${t++}`
//             );
//         });
//       } else
//         this.__selectedMap.forEach((t) => {
//           this.linkPaths(
//             JSCompiler_renameProperty("selected", this),
//             `${JSCompiler_renameProperty("items", this)}.${t}`
//           ),
//             this.linkPaths(
//               JSCompiler_renameProperty("selectedItem", this),
//               `${JSCompiler_renameProperty("items", this)}.${t}`
//             );
//         });
//     }
//     clearSelection() {
//       (this.__dataLinkedPaths = {}),
//         (this.__selectedMap = new Map()),
//         (this.selected = this.multi ? [] : null),
//         (this.selectedItem = null);
//     }
//     isSelected(t) {
//       return this.__selectedMap.has(t);
//     }
//     isIndexSelected(t) {
//       return this.isSelected(this.items[t]);
//     }
//     __deselectChangedIdx(t) {
//       let e = this.__selectedIndexForItemIndex(t);
//       if (e >= 0) {
//         let t = 0;
//         this.__selectedMap.forEach((s, n) => {
//           e == t++ && this.deselect(n);
//         });
//       }
//     }
//     __selectedIndexForItemIndex(t) {
//       let e =
//         this.__dataLinkedPaths[
//           `${JSCompiler_renameProperty("items", this)}.${t}`
//         ];
//       if (e)
//         return parseInt(
//           e.slice((JSCompiler_renameProperty("selected", this) + ".").length),
//           10
//         );
//     }
//     deselect(t) {
//       let e = this.__selectedMap.get(t);
//       if (e >= 0) {
//         let s;
//         this.__selectedMap.delete(t),
//           this.multi && (s = this.__selectedIndexForItemIndex(e)),
//           this.__updateLinks(),
//           this.multi
//             ? this.splice(JSCompiler_renameProperty("selected", this), s, 1)
//             : (this.selected = this.selectedItem = null);
//       }
//     }
//     deselectIndex(t) {
//       this.deselect(this.items[t]);
//     }
//     select(t) {
//       this.selectIndex(this.items.indexOf(t));
//     }
//     selectIndex(t) {
//       let e = this.items[t];
//       this.isSelected(e)
//         ? this.toggle && this.deselectIndex(t)
//         : (this.multi || this.__selectedMap.clear(),
//           this.__selectedMap.set(e, t),
//           this.__updateLinks(),
//           this.multi
//             ? this.push(JSCompiler_renameProperty("selected", this), e)
//             : (this.selected = this.selectedItem = e));
//     }
//   };
// })(Re);
// class jn extends zn {
//   static get is() {
//     return "array-selector";
//   }
//   static get template() {
//     return null;
//   }
// }
// customElements.define(jn.is, jn);
// const Bn = new Zs();
// window.ShadyCSS ||
//   (window.ShadyCSS = {
//     prepareTemplate(t, e, s) {},
//     prepareTemplateDom(t, e) {},
//     prepareTemplateStyles(t, e, s) {},
//     styleSubtree(t, e) {
//       Bn.processStyles(), xs(t, e);
//     },
//     styleElement(t) {
//       Bn.processStyles();
//     },
//     styleDocument(t) {
//       Bn.processStyles(), xs(document.body, t);
//     },
//     getComputedStyleValue: (t, e) => As(t, e),
//     flushCustomStyles() {},
//     nativeCss: is,
//     nativeShadow: ts,
//     cssBuild: ss,
//     disableRuntime: rs,
//   }),
//   (window.ShadyCSS.CustomStyleInterface = Bn);
// const qn = window.ShadyCSS.CustomStyleInterface;
// class $n extends HTMLElement {
//   constructor() {
//     super(), (this._style = null), qn.addCustomStyle(this);
//   }
//   getStyle() {
//     if (this._style) return this._style;
//     const t = this.querySelector("style");
//     if (!t) return null;
//     this._style = t;
//     const e = t.getAttribute("include");
//     return (
//       e &&
//         (t.removeAttribute("include"),
//         (t.textContent =
//           (function (t) {
//             let e = t.trim().split(/\s+/),
//               s = "";
//             for (let t = 0; t < e.length; t++) s += vt(e[t]);
//             return s;
//           })(e) + t.textContent)),
//       this.ownerDocument !== window.document &&
//         window.document.head.appendChild(this),
//       this._style
//     );
//   }
// }
// window.customElements.define("custom-style", $n);
// const Yn = En(HTMLElement).prototype;
// export {
//   Yn as Base,
//   c as Debouncer,
//   Ze as DomIf,
//   Qe as DomRepeat,
//   fn as FlattenedNodesObserver,
//   kn as OptionalMutableDataBehavior,
//   Dn as Polymer,
//   Re as PolymerElement,
//   qe as TemplateInstanceBase,
//   Fn as Templatizer,
//   ln as afterNextRender,
//   o as animationFrame,
//   an as beforeNextRender,
//   un as calculateSplices,
//   Dt as dashToCamelCase,
//   d as dedupingMixin,
//   Sn as dom,
//   p as enqueueDebouncer,
//   Ge as flush,
//   ut as gestures,
//   It as get,
//   Me as html,
//   a as idlePeriod,
//   Nt as matches,
//   l as microTask,
//   xn as mixinBehaviors,
//   Xe as templatize,
//   i as timeOut,
//   Ot as translate,
//   v as useShadow,
// };
