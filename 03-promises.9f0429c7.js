var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in t){var l=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,l.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){t[e]=o},e.parcelRequired7c6=l),l("eWCmQ");const r=Array.from(document.querySelectorAll("label")),n=Array.from(document.querySelectorAll("input")),s=document.querySelector(".form");document.querySelector('button[type="submit"]');for(const e of r)e.style.display="inline-block";for(const e of n)e.style.display="block";s.addEventListener("submit",(e=>{e.preventDefault();setTimeout((()=>{console.log("first")}),s.elements.delay.value),setInterval((()=>{console.log("kolejne")}),s.elements.step.value);e.currentTarget.reset()})),console.log(s.elements.amount.value);
//# sourceMappingURL=03-promises.9f0429c7.js.map
