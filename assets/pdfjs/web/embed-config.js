// Embed configuration for the pdf.js viewer.
//
// disableFontFace: true makes pdf.js paint glyph outlines directly onto the
// canvas instead of rendering text through dynamically-created @font-face web
// fonts. The @font-face path renders correctly in Chrome/Firefox but Safari's
// font engine mishandles the subsetted/converted fonts embedded by Canva,
// producing distorted text. Drawing the outlines is engine-independent, so the
// PDF looks the same in every browser.
//
// Loaded as a classic (non-module) script from viewer.html so its listener is
// registered before viewer.mjs dispatches "webviewerloaded". Same-origin to
// satisfy the viewer's "script-src 'self'" CSP.
document.addEventListener(
  "webviewerloaded",
  function () {
    try {
      window.PDFViewerApplicationOptions.set("disableFontFace", true);
    } catch (e) {
      /* option unavailable in this build — leave default */
    }
  },
  { once: true }
);
