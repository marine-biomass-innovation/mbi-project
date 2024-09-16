---
title: Team
---

1. this ordered seed list will be replaced by the toc
{:toc}

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

# Test mix of html and markdown

## Project Management
<html>
  <body>
    {% include list-circles.html items=site.data.people.projectmanagement %}
  </body>
</html>

## Indigenous Community Liaisons

<html>
  <body>
    {% include list-circles.html items=site.data.people.liaisons %}
  </body>
</html>

## Work Package 1

### Team Leads

<html>
  <body>
    {% include list-circles.html items=site.data.people.wpt1leads %}
  </body>
</html>

### Co-Investigators and Collaborators

<html>
  <body>
    {% include list-circles.html items=site.data.people.wpt1CI %}
  </body>
</html>

### Researchers

<html>
  <body>
    {% include list-circles.html items=site.data.people.wpt1researchers %}
  </body>
</html>

## Work Package 2

### Team Leads
<html>
  <body>
    {% include list-circles.html items=site.data.people.wpt2leads %}
  </body>
</html>
