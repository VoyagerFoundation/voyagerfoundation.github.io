---
layout: page
---

{% for post in ite.posts %}
    <a href="{{ post.url | absolute_url }}">
      {{ post.title }}
    </a>
{% endfor %}
