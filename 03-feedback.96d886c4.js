function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function p(e,t,n){var o,i,r,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,f=setTimeout(O,t),c?b(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=r}function O(){var e=g();if(h(e))return j(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?d(n,r-(e-l)):n}(e))}function j(e){return f=void 0,p&&o?b(e):(o=i=void 0,a)}function w(){var e=g(),n=h(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),b(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=y(t)||0,v(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=i=f=void 0},w.flush=function(){return void 0===f?a:j(g())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})},document.addEventListener("DOMContentLoaded",(()=>{!function(){const n="feedback-form-state",o={},i={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input[name=email]"),message:document.querySelector(".feedback-form textarea[name=message]")};if(localStorage.getItem(n)){const e=JSON.parse(localStorage.getItem(n));o.email=e.email||"",o.message=e.message||""}else o.email="",o.message="";function r(e,t){o[t]=e.target.value,localStorage.setItem(n,JSON.stringify(o))}i.email.value=o.email,i.message.value=o.message,i.email.addEventListener("input",e(t)((e=>r(e,"email")),500)),i.message.addEventListener("input",e(t)((e=>r(e,"message")),500)),i.form.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(i.form);let r=!0;if(t.forEach(((e,t)=>{0===e.trim().length&&(r=!1)})),!r)return void alert("Fill Complete all fields of this form, please.");console.log(JSON.parse(localStorage.getItem(n))),o.email="",o.message="",localStorage.removeItem(n),i.form.reset()}))}()}));
//# sourceMappingURL=03-feedback.96d886c4.js.map