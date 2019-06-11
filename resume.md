---
layout: default
title: Resume
show_on_side_bar_menu: true
show_on_side_bar_icon: far fa-file-pdf
---

<div>
<a href="{{page.resume_link}}" class="square_btn"><i class="far fa-file-pdf"></i> Open as PDF </a>
</div>


<script>
var pdf_url_to_view = "{{page.resume_link}}"
</script>
<script src="//mozilla.github.io/pdf.js/build/pdf.js"></script>
<script src="/public/js/about_page_resume_pdf.js"></script>

<div id = "resume_display_area">
    <canvas id="the-canvas"></canvas>
</div>
