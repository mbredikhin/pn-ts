!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e||self).pnTs={})}(this,function(e){const t={nullish:e=>[void 0,null].includes(e),number:e=>!t.nullish(e)&&!Number.isNaN(e)&&Object.getPrototypeOf(e)===Number.prototype,nan:e=>!t.nullish(e)&&Number.isNaN(e),string:e=>!t.nullish(e)&&Object.getPrototypeOf(e)===String.prototype,boolean:e=>!t.nullish(e)&&Object.getPrototypeOf(e)===Boolean.prototype,set:e=>!t.nullish(e)&&Object.getPrototypeOf(e)===Set.prototype,map:e=>!t.nullish(e)&&Object.getPrototypeOf(e)===Map.prototype,array:e=>!t.nullish(e)&&Array.isArray(e),object:e=>!t.nullish(e)&&Object.getPrototypeOf(e)===Object.prototype,symbol:e=>!t.nullish(e)&&Object.getPrototypeOf(e)===Symbol.prototype,function:e=>!t.nullish(e)&&Object.getPrototypeOf(e)===Function.prototype,any:e=>!0},o=(e,r)=>{const n={array:t.array(e)&&t.array(r)&&e.length===r.length&&e.every((e,t)=>r[t]===e),object:t.object(e)&&t.object(r)&&Array.from(new Set([...Object.keys(e),...Object.keys(r)])).every(t=>e.hasOwnProperty(t)&&r.hasOwnProperty(t)&&o(e[t],r[t])),nan:t.nan(e)&&t.nan(r),set:!t.nullish(e)&&!t.nullish(r)&&t.set(e)&&t.set(r)&&Array.from(e).every(e=>r.has(e)),map:!t.nullish(e)&&!t.nullish(r)&&t.map(e)&&t.map(r)&&Array.from(e.keys()).every(t=>r.has(t)&&r[t]===e[t]),other:e===r};return Object.values(n).some(Boolean)},r=(e,n)=>t.function(e)?e(n):(t.object(n)&&t.object(e)||t.array(n)&&t.array(e))&&Object.keys(n).length&&Object.keys(e).length&&Object.keys(e).every(e=>e in n)?Object.keys(e).every(t=>r(e[t],n[t])):o(n,e);class n{constructor(e){this.value=void 0,this.result=void 0,this.value=e}with(e,t){return r(e,this.value)&&(this.result=t(this.value)),this}otherwise(e){return this.result=e(this.value),this}run(){return this.result}}e.isMatching=r,e.match=e=>new n(e),e.predicate=t});
//# sourceMappingURL=index.umd.js.map