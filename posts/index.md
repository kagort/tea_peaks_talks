---
layout: page
title: "Все записи"
permalink: "/posts/"
---

# Все записи

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url | relative_url }})
*{{ post.date | date: "%d.%m.%Y" }}* | Категории: {{ post.categories | join: ", " }}

{{ post.excerpt | strip_html | truncatewords: 30 }}

[Читать полностью →]({{ post.url | relative_url }})

---
{% endfor %}