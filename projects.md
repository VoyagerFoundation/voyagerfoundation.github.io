---
layout: page
title: Projects
permalink: projects.html
---

## Our Open-Source Open Collaboration Projects

{% for p in site.data.projects %}
  <div style="row project">
    <div style="col-xs-12">
      <div style="box-row">
        <h3><a href="{{p.url}}">{{ p.name }} </a></h3>
      </div>
    </div>
    <div style="col-xs-12">
      <div style="box-row">
        {{ p.description }}
      </div>
      {% if p.vacancies.roles %}
      <div  style="box-row">
        We are looking for people with skills in those roles:
        <ul>
          {% for role in p.vacancies.roles %}
            <li>{{ role }}</li>
          {%endfor%}
        </ul>
      </div>
      {% endif %}
    </div>
  </div>
{% endfor %}
