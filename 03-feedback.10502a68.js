!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var o,i,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function h(e){return c=e,f=setTimeout(j,t),s?b(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function j(){var e=p();if(O(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,d&&o?b(e):(o=i=void 0,u)}function T(){var e=p(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return h(l);if(m)return f=setTimeout(j,t),b(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})},document.addEventListener("DOMContentLoaded",(function(){!function(){var n="feedback-form-state",o={},r={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input[name=email]"),message:document.querySelector(".feedback-form textarea[name=message]")};if(localStorage.getItem(n)){var i=JSON.parse(localStorage.getItem(n));o.email=i.email||"",o.message=i.message||""}else o.email="",o.message="";function a(e,t){o[t]=e.target.value,localStorage.setItem(n,JSON.stringify(o))}r.email.value=o.email,r.message.value=o.message,r.email.addEventListener("input",e(t)((function(e){return a(e,"email")}),500)),r.message.addEventListener("input",e(t)((function(e){return a(e,"message")}),500)),r.form.addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(r.form),i=!0;if(t.forEach((function(e,t){0===e.trim().length&&(i=!1)})),!i)return void alert("Fill Complete all fields of this form, please.");console.log(JSON.parse(localStorage.getItem(n))),o.email="",o.message="",localStorage.removeItem(n),r.form.reset()}))}()}))}();
//# sourceMappingURL=03-feedback.10502a68.js.map