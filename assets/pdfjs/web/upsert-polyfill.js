// Polyfill for the Map/WeakMap "upsert" proposal methods
// (Map.prototype.getOrInsert / getOrInsertComputed).
//
// pdf.js 6.x's modern build calls these, but they are very new and some
// browsers (e.g. current Firefox) don't ship them yet. Without this, the
// viewer throws "getOrInsertComputed is not a function" inside setDocument
// and never renders any page (blank/black box).
//
// Loaded as a classic (non-module) script from viewer.html BEFORE the
// pdf.mjs/viewer.mjs module scripts, so it installs before pdf.js runs.
// Served same-origin to satisfy the viewer's "script-src 'self'" CSP.
(function () {
  "use strict";

  function define(proto, name, fn) {
    if (typeof proto[name] !== "function") {
      Object.defineProperty(proto, name, {
        value: fn,
        writable: true,
        configurable: true,
        enumerable: false,
      });
    }
  }

  [typeof Map !== "undefined" ? Map : null,
   typeof WeakMap !== "undefined" ? WeakMap : null].forEach(function (Ctor) {
    if (!Ctor || !Ctor.prototype) {
      return;
    }
    define(Ctor.prototype, "getOrInsert", function (key, defaultValue) {
      if (this.has(key)) {
        return this.get(key);
      }
      this.set(key, defaultValue);
      return defaultValue;
    });
    define(Ctor.prototype, "getOrInsertComputed", function (key, callbackFn) {
      if (this.has(key)) {
        return this.get(key);
      }
      var value = callbackFn(key);
      this.set(key, value);
      return value;
    });
  });
})();
