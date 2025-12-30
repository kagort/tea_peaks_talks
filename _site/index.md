---
layout: home
title: "Добро пожаловать!"
---

# Привет! 👋

Это мой личный блог "Чай, горы, разговоры".

## Последние записи:

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url }}) – {{ post.date | date: "%d.%m.%Y" }}
{% endfor %}

[Все записи →](/posts/)

---
*Сайт работает на Jekyll и GitHub Pages*
