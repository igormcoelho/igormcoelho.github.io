---
layout: page
title: cursos
permalink: /cursos/
lang: pt-br
lang-ref: igormcoelho-courses
description: Cursos do Prof. Igor com materiais abertos no GitHub e vídeos no YouTube.
nav: true
---

<div class="projects grid">

  {% assign sorted_projects = site.courses | sort: "importance" %}
  {% for project in sorted_projects %}
  <div class="grid-item">
    {% if project.redirect %}
    <a href="{{ project.redirect }}" target="_blank">
    {% else %}
    <a href="{{ project.url | relative_url }}">
    {% endif %}
      <div class="card hoverable">
        {% if project.img %}
        <img src="{{ project.img | relative_url }}" alt="project thumbnail">
        {% endif %}
        <div class="card-body">
          <h2 class="card-title text-lowercase">{{ project.title }}</h2>
          <p class="card-text">{{ project.description }}</p>
          <div class="row ml-1 mr-1 p-0">
            {% if project.github %}
            <div class="github-icon">
              <div class="icon" data-toggle="tooltip" title="Code Repository">
                <a href="{{ project.github }}" target="_blank"><i class="fab fa-github gh-icon"></i></a>
              </div>
              {% if project.github_stars %}
              <span class="stars" data-toggle="tooltip" title="GitHub Stars">
                <i class="fas fa-star"></i>
                <span id="{{ project.github_stars }}-stars"></span>
              </span>
              {% endif %}
            </div>
            {% endif %}
          </div>
        </div>
      </div>
    </a>
  </div>
{% endfor %}

</div>


### Turmas Finalizadas e Em Andamento

- [Estruturas de Dados para Sistemas de Informação - IC/UFF - 2021.1](https://igormcoelho.github.io/curso-estruturas-de-dados-i/uff-edsi-2021-1)
    * 14/06/2021 a 25/09/2021

- [Programação de Computadores II para Sistemas de Informação - IC/UFF - 2021.1](https://igormcoelho.github.io/curso-programacao-ii/uff-pc2si-2021-1)
    * 14/06/2021 a 25/09/2021

- [Estruturas de Dados para Sistemas de Informação - IC/UFF - 2020.2](https://igormcoelho.github.io/curso-estruturas-de-dados-i/uff-edsi-2020-2)
    * fev./2021 - mai./2021

- [Estruturas de Dados para Sistemas de Informação - IC/UFF - 2020.1](https://igormcoelho.github.io/curso-estruturas-de-dados-i/uff-edsi-2020-1)
    * set./2020 - dez./2020