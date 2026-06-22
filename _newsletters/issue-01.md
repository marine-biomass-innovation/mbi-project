---
layout: project
title: "Issue 01"
date: 2026-06-01
image:
  path: /assets/newsletters/img/issue-01.svg
  srcset:
    1920w: /assets/newsletters/img/issue-01.png
    960w:  /assets/newsletters/img/issue-01@0,5x.png
    480w:  /assets/newsletters/img/issue-01@0,25x.png
hide_image: true
links:
  - title: Download PDF
    url: /assets/newsletters/pdf/issue-01.pdf
---

{% assign pdf_url = '/assets/newsletters/pdf/issue-01.pdf' | relative_url %}
{% assign viewer_url = '/assets/pdfjs/web/viewer.html' | relative_url %}

<div class="pdf-embed-wrap">
  <iframe
    class="pdf-embed"
    title="Newsletter | Issue 01 — PDF viewer"
    src="{{ viewer_url }}?file={{ pdf_url | url_encode }}#page=1"
    allowfullscreen></iframe>
</div>

<noscript>
  <p>The PDF viewer needs JavaScript. You can
    <a href="{{ pdf_url }}">download the PDF</a> instead.</p>
</noscript>

[Open the PDF in a new tab]({{ pdf_url }}){:target="_blank" rel="noopener"}
