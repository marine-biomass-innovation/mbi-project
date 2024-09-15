---
title: Team
layout: team
---


<html>
  <body>
<h2>Project Management</h2>
{% include list-circles.html items=site.data.people.projectmanagement %}
<h2>Indigenous Community Liaisons</h2>
{% include list-circles.html items=site.data.people.liaisons %}
<h2>Work Package 1</h2>
    <h3 class="center">Team Leads</h3>
{% include list-circles.html items=site.data.people.wpt1leads %}
    <h3>Collaborators and Co-Investigators</h3>
{% include list-circles.html items=site.data.people.wpt1CI %}
    <h3>Researchers</h3>
{% include list-circles.html items=site.data.people.wpt1researchers %}
  </body>
</html>

