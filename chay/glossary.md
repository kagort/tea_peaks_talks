---
layout: page
title: "Глоссарий — Чайный путь"
permalink: /chay/glossary/
---

# Глоссарий

{% assign terms = site.data.chay_glossary | sort: "term" %}
<dl>
{% for item in terms %}
  <dt id="{{ item.slug }}">{{ item.term }}</dt>
  <dd>{{ item.definition }}</dd>
{% endfor %}
</dl>

[← Чайный путь](/chay/)
