---
title: Team
---


<html>
  <body>
  <header>
<h2>Project Management</h2>
  </header>
    {% include list-circles.html items=site.data.people.projectmanagement %}
  <header>
    <h2>Indigenous Community Liaisons</h2>
  </header>
    {% include list-circles.html items=site.data.people.liaisons %}
    <h2>Work Package 1</h2>
    <h3>Team Leads</h3>
    {% include list-circles.html items=site.data.people.wpt1leads %}
    <h3>Collaborators and Co-Investigators</h3>
    {% include list-circles.html items=site.data.people.wpt1CI %}
    <h3>Researchers</h3>
    {% include list-circles.html items=site.data.people.wpt1researchers %}
  </body>
</html>

