---
layout: page
title: Booster Pods
permalink: boosterpods.html
---

**Booster Pods** are series of events that brings the most important topics to people and discuss how we can solve them together. 

### Upcoming Events

We are preparing something special, this time around Enviromental challanges that we may know or may not be aware! 

Currently there are no event dates. 

<div class="container">
	{% for post in site.posts %}
		{% if post.categories contains "upcoming" %}
			<div class="row">
				<div class="large-2 colums">Image
				</div>
				<div class="large-10 columns">
					<a href="{{ post.url }}">{{ post.title }} {{ post.event_date }}</a>
				</div>
			</div>
			<div class="row">
				<div class="large-10 columns">
					{{post.short_description}}
				</div>
			</div>
		{% endif %}
	{% endfor %}
</div>



{% comment %}{% endcomment %}
### Past Events

<ul>
  {% for post in site.posts %}
		{% if post.categories contains "past" %}
    <li>
      <a href="{{ post.url }}">{{ post.title }} {{ post.event_date }}</a>
    </li>
		{% endif %}
  {% endfor %}
</ul>