---
layout: page
title: Initiatives
permalink: initiatives.html
---

<ul>
{% for i in site.data.list_of_initiatives.environment %}

  <li>
    <a href="{{ i.url }}">
      {{ i.name }}
    </a>
  </li>
{% endfor %}
</ul>