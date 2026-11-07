---
layout: page
title: "Сорта чая — Чайный путь"
permalink: /chay/teas/
---

# Сорта чая

Каталог сортов из прайса Пятигорского чайного клуба (ПЧК), по типам. 🆕 — новинка; пометка «не для продажи» — сорт можно попробовать только на чаепитии в клубе.

{% assign shu = site.chay_teas | where: "chay_type_slug", "shu-puer" | sort: "title" %}
<h2 id="shu-puer">Шу пуэр</h2>
<ul>
{% for tea in shu %}
  <li><a href="{{ tea.url | relative_url }}">{{ tea.title }}</a>{% if tea.is_new %} 🆕{% endif %}{% unless tea.for_sale %} <em>(не для продажи)</em>{% endunless %}</li>
{% endfor %}
</ul>

{% assign krasny = site.chay_teas | where: "chay_type_slug", "krasny-chay" | sort: "title" %}
<h2 id="krasny-chay">Красный чай</h2>
<ul>
{% for tea in krasny %}
  <li><a href="{{ tea.url | relative_url }}">{{ tea.title }}</a>{% if tea.is_new %} 🆕{% endif %}{% unless tea.for_sale %} <em>(не для продажи)</em>{% endunless %}</li>
{% endfor %}
</ul>

{% assign ulun = site.chay_teas | where: "chay_type_slug", "ulun" | sort: "title" %}
<h2 id="ulun">Улун</h2>
<ul>
{% for tea in ulun %}
  <li><a href="{{ tea.url | relative_url }}">{{ tea.title }}</a>{% if tea.is_new %} 🆕{% endif %}{% unless tea.for_sale %} <em>(не для продажи)</em>{% endunless %}</li>
{% endfor %}
</ul>

{% assign sheng = site.chay_teas | where: "chay_type_slug", "sheng-puer" | sort: "title" %}
<h2 id="sheng-puer">Шэн пуэр</h2>
<ul>
{% for tea in sheng %}
  <li><a href="{{ tea.url | relative_url }}">{{ tea.title }}</a>{% if tea.is_new %} 🆕{% endif %}{% unless tea.for_sale %} <em>(не для продажи)</em>{% endunless %}</li>
{% endfor %}
</ul>

{% assign zhyoltyy = site.chay_teas | where: "chay_type_slug", "zhyoltyy-chay" | sort: "title" %}
<h2 id="zhyoltyy-chay">Жёлтый чай</h2>
<ul>
{% for tea in zhyoltyy %}
  <li><a href="{{ tea.url | relative_url }}">{{ tea.title }}</a>{% if tea.is_new %} 🆕{% endif %}{% unless tea.for_sale %} <em>(не для продажи)</em>{% endunless %}</li>
{% endfor %}
</ul>

{% assign zeleny = site.chay_teas | where: "chay_type_slug", "zeleny-bely-chay" | sort: "title" %}
<h2 id="zeleny-bely-chay">Зелёный и белый чай</h2>
<ul>
{% for tea in zeleny %}
  <li><a href="{{ tea.url | relative_url }}">{{ tea.title }}</a>{% if tea.is_new %} 🆕{% endif %}{% unless tea.for_sale %} <em>(не для продажи)</em>{% endunless %}</li>
{% endfor %}
</ul>

{% assign heycha = site.chay_teas | where: "chay_type_slug", "heycha" | sort: "title" %}
<h2 id="heycha">Чёрный чай (Хэй Ча)</h2>
<ul>
{% for tea in heycha %}
  <li><a href="{{ tea.url | relative_url }}">{{ tea.title }}</a>{% if tea.is_new %} 🆕{% endif %}{% unless tea.for_sale %} <em>(не для продажи)</em>{% endunless %}</li>
{% endfor %}
</ul>

[← Чайный путь]({{ site.baseurl }}/chay/)
