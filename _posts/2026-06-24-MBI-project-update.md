---
layout: post
title: Project Update
image:
  path:  /assets/img/blog/2026-06-24-MBI-project-update.png
  srcset:
    1920w: /assets/img/blog/2026-06-24-MBI-project-update.png
    960w:  /assets/img/blog/2026-06-24-MBI-project-update@0,5x.png
    480w:  /assets/img/blog/2026-06-24-MBI-project-update@0,25x.png
tags: [blog]
hide_image: true
links:
  - title: Download PDF
    url: /assets/pdf/2026-06-24-MBI-project-update.pdf
---

Catch up on the latest updates from the MBI project.

{% assign pdf_url = '/assets/pdf/2026-06-24-MBI-project-update.pdf' | relative_url %}
{% assign viewer_url = '/assets/pdfjs/web/viewer.html' | relative_url %}

<div class="pdf-embed-wrap">
  <iframe
    class="pdf-embed"
    title="MBI Project Update — PDF viewer"
    src="{{ viewer_url }}?file={{ pdf_url | url_encode }}#page=1"
    allowfullscreen></iframe>
</div>

<noscript>
  <p>The PDF viewer needs JavaScript. You can
    <a href="{{ pdf_url }}">download the PDF</a> instead.</p>
</noscript>

[Open the PDF in a new tab]({{ pdf_url }}){:target="_blank" rel="noopener"}
