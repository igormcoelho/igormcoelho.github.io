---
layout: page
permalink: /publicacoes/
title: publicações
lang: pt-br
lang-ref: igormcoelho-publications
description: publicações por categorias em order cronológica reversa. gerada pelo jekyll-scholar (EM CONSTRUÇÃO).
years: [1956, 1950, 1935, 1905]
nav: true
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
