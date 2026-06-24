// Polyfills for very new (2025-era) JavaScript APIs that pdf.js 6's build calls
// but some browsers — notably Safari — don't implement yet. Without these the
// viewer fails in browser-specific ways:
//   * Math.sumPrecise  -> thrown during font name-table parsing in the worker,
//                         producing garbled fonts (font weight comes out NaN).
//   * Map.getOrInsert* -> thrown in setDocument, so no page ever renders.
//   * Promise.withResolvers -> belt-and-suspenders for older Safari.
//
// This same file is loaded two ways, because the failures happen in two
// separate JS contexts:
//   1. as a classic <script> in viewer.html (main thread), and
//   2. prepended to build/pdf.worker.mjs (the Web Worker, which has its own
//      global scope the main-thread script can't reach).
(function () {
  "use strict";

  function defineMethod(obj, name, fn) {
    if (obj && typeof obj[name] !== "function") {
      Object.defineProperty(obj, name, {
        value: fn,
        writable: true,
        configurable: true,
        enumerable: false,
      });
    }
  }

  // Math.sumPrecise(iterable). pdf.js feeds it integer sizes, so a plain sum is
  // exact; for float sums the sub-ULP difference is irrelevant to rendering.
  defineMethod(Math, "sumPrecise", function (iterable) {
    var sum = 0;
    for (var n of iterable) {
      sum += n;
    }
    return sum;
  });

  // Map / WeakMap "upsert" proposal.
  [
    typeof Map !== "undefined" ? Map : null,
    typeof WeakMap !== "undefined" ? WeakMap : null,
  ].forEach(function (Ctor) {
    if (!Ctor) {
      return;
    }
    defineMethod(Ctor.prototype, "getOrInsert", function (key, defaultValue) {
      if (this.has(key)) {
        return this.get(key);
      }
      this.set(key, defaultValue);
      return defaultValue;
    });
    defineMethod(Ctor.prototype, "getOrInsertComputed", function (key, callbackFn) {
      if (this.has(key)) {
        return this.get(key);
      }
      var value = callbackFn(key);
      this.set(key, value);
      return value;
    });
  });

  // Promise.withResolvers().
  if (typeof Promise !== "undefined") {
    defineMethod(Promise, "withResolvers", function () {
      var resolve, reject;
      var promise = new this(function (res, rej) {
        resolve = res;
        reject = rej;
      });
      return { promise: promise, resolve: resolve, reject: reject };
    });
  }
})();
