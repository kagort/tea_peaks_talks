---
layout: page
title: "Все записи"
permalink: "/posts/"
---

# Все записи

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url }})
*{{ post.date | date: "%d.%m.%Y" }}* | Категории: {{ post.categories | join: ", " }}

{{ post.excerpt }}

[Читать полностью →]({{ post.url }})

---
{% endfor %}
