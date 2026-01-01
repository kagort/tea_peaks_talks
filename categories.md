---
layout: page
title: "Категории"
permalink: "/categories/"
---

{% for category in site.categories %}
## {{ category[0] }}

<ul>
{% for post in category[1] %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small>({{ post.date | date: "%d.%m.%Y" }})</small>
  </li>
{% endfor %}
</ul>
{% endfor %}