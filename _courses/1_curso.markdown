---
layout: page
title: Estruturas de Dados I
description: Conceitos de Tipos Abstratos, Pilhas, Filas, Árvores, Árvores de Busca, Filas de Prioridade. 
     Conteúdo apresentado em C/C++
img: /assets/img/12.jpg
importance: 1
lang: pt-br
---


### Materiais Didáticos

Materiais didáticos são disponibilizados sob licenças [CreativeCommons](https://creativecommons.org/licenses/), em Português, no intuito de contribuir com a disseminação do conhecimento para a comunidade brasileira. 
- licença para materiais em texto/slides: [Atribuição - CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- licença para materiais em vídeo: [Atribuição, Não Comercial e Sem Derivações - CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

Até 2021, vídeos eram hospedados no YouTube. 
Em busca de maior transparência e portabilidade,
a partir de 2022, somente plataformas descentralizadas e federadas serão utilizadas.
Portanto, utilizamos o protocolo PeerTube, com vídeos hospedados no canal [https://pertur.be/c/curso_estruturas_de_dados_i/](https://pertur.be/c/curso_estruturas_de_dados_i/videos) e redistribuídos via tecnologia webtorrent.

Por ser um serviço gratuito e federado, ele pode não estar disponível. 
Veja [https://peertube.fediverse.observer/pertur.be](https://peertube.fediverse.observer/pertur.be).

Para Android, recomendo os aplicativos livres disponibilizado no f-droid como [Fedilab](https://f-droid.org/app/fr.gouv.etalab.mastodon) (para PeerTube e Mastodon) ou [NewPipe](https://f-droid.org/en/packages/org.schabi.newpipe/) (para vídeos do YouTube e PeerTube). *OBS: o Fedilab também tem versão paga na Google Play.

Desculpem eventuais erros, em breve pretendo refazê-los com uma qualidade melhor (processo contínuo de revisão).

<!-- MDB -->
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.js"
></script>

#### Curso de Estruturas de Dados I
   * [Materiais em PDF/Online](https://igormcoelho.github.io/curso-estruturas-de-dados-i)
   * ![last-commit](https://img.shields.io/github/last-commit/igormcoelho/curso-estruturas-de-dados-i)
   * [Playlist no YouTube](https://www.youtube.com/playlist?list=PLWiiA_CLle93LYnkOV-OzxtahTiNioTMD)

<br/>

<!--
Dica de Embed no PeerTube: https://thinkmoult.com/embed-peertube-video-on-your-website.html
-->

##### Bloco 1: Introdução e Revisão

<ul class="nav nav-tabs" id="myTab-ed1" role="tablist">
  <li class="nav-item" role="presentation">
    <a
      class="nav-link active"
      id="ed1-revisao-tab"
      data-mdb-toggle="tab"
      href="#ed1-revisao"
      role="tab"
      aria-controls="ed1-revisao"
      aria-selected="true"
      >0-Revisão Tipos e Módulos C/C++</a
    >
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="ed1-revisao" role="tabpanel" aria-labelledby="ed1-revisao-tab">
    Aula em <a target="_blank" href="https://igormcoelho.github.io/curso-estruturas-de-dados-i/slides/1-revisao-tipos/index.html">JS/HTML</a><br/>
    YouTube Parte 1/2<br/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/byZLHu4kTb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br/>
    YouTube Parte 2/2<br/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2Bo7MYFCJ0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <!--
    Vídeo (1/2) no PeerTube (stream via webtorrent): https://pertur.be/w/bxtozxWAJwEkdmPhFoNHCV<br/>
    <iframe src="https://pertur.be/videos/embed/bxtozxWAJwEkdmPhFoNHCV" style="min-height: 400px; width: 100%;" frameborder="0" sandbox="allow-same-origin allow-scripts" allowfullscreen="allowfullscreen">
    </iframe>
    Vídeo (2/2) no PeerTube (stream via webtorrent): https://pertur.be/w/ixpbZxGTVfJr7Aw9nxZGsV<br/>
    <iframe src="https://pertur.be/videos/embed/ixpbZxGTVfJr7Aw9nxZGsV" style="min-height: 400px; width: 100%;" frameborder="0" sandbox="allow-same-origin allow-scripts" allowfullscreen="allowfullscreen">
    </iframe>
    -->
  </div>
</div>

<br/>

##### Bloco 2: Estruturas de Dados Lineares

<ul class="nav nav-tabs" id="myTab-ed1" role="tablist">
  <li class="nav-item" role="presentation">
    <a
      class="nav-link active"
      id="ed1-sacos-tab"
      data-mdb-toggle="tab"
      href="#ed1-sacos"
      role="tab"
      aria-controls="ed1-sacos"
      aria-selected="false"
      >2-Sacos</a
    >
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="ed1-pilhas-tab"
      data-mdb-toggle="tab"
      href="#ed1-pilhas"
      role="tab"
      aria-controls="ed1-pilhas"
      aria-selected="false"
      >3-Pilhas</a
    >
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="ed1-filas-tab"
      data-mdb-toggle="tab"
      href="#ed1-filas"
      role="tab"
      aria-controls="ed1-filas"
      aria-selected="false"
      >4-Filas</a
    >
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane" id="ed1-sacos" role="tabpanel" aria-labelledby="ed1-sacos-tab">
    Aula em <a target="_blank" href="https://igormcoelho.github.io/curso-estruturas-de-dados-i/slides/2-sacos/index.html">JS/HTML</a><br/>
    Sem vídeo aqui para o TAD Sacos (ainda) :( <br/>
  </div>
  <div class="tab-pane" id="ed1-pilhas" role="tabpanel" aria-labelledby="ed1-pilhas-tab">
    Aula em <a target="_blank" href="https://igormcoelho.github.io/curso-estruturas-de-dados-i/slides/3-pilhas/index.html">JS/HTML</a><br/>
    <!--
    Vídeo no PeerTube (stream via webtorrent): https://pertur.be/w/mxZj2xv1zAqLzN4F9heoGr<br/>
    <iframe src="https://pertur.be/videos/embed/mxZj2xv1zAqLzN4F9heoGr" style="min-height: 400px; width: 100%;" frameborder="0" sandbox="allow-same-origin allow-scripts" allowfullscreen="allowfullscreen">
    </iframe>
    -->
    <iframe width="560" height="315" src="https://www.youtube.com/embed/2J1EdzSZ1NQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
  </div>
  <div class="tab-pane" id="ed1-filas" role="tabpanel" aria-labelledby="ed1-filas-tab">
    Aula em <a target="_blank" href="https://igormcoelho.github.io/curso-estruturas-de-dados-i/slides/4-filas/index.html">JS/HTML</a><br/>
    <!--
    Vídeo no PeerTube (stream via webtorrent): https://pertur.be/w/ghhZMd2Dvtqy6ZzP7ZeRwG<br/>
    <iframe src="https://pertur.be/videos/embed/ghhZMd2Dvtqy6ZzP7ZeRwG" style="min-height: 400px; width: 100%;" frameborder="0" sandbox="allow-same-origin allow-scripts" allowfullscreen="allowfullscreen">
    </iframe>
    -->
    <iframe width="560" height="315" src="https://www.youtube.com/embed/pZ36rzfSxYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
  </div>  
</div>

<br/>

##### Bloco 3: Estruturas de Dados em Árvore

<!-- ARVORES -->

<ul class="nav nav-tabs" id="myTab-ed1" role="tablist">
  <li class="nav-item" role="presentation">
    <a
      class="nav-link active"
      id="ed1-arvores-tab"
      data-mdb-toggle="tab"
      href="#ed1-arvores"
      role="tab"
      aria-controls="ed1-arvores"
      aria-selected="false"
      >5-Árvores</a
    >
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="ed1-dicionarios-tab"
      data-mdb-toggle="tab"
      href="#ed1-dicionarios"
      role="tab"
      aria-controls="ed1-dicionarios"
      aria-selected="false"
      >6-Dicionários e Árvores de Busca</a
    >
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="ed1-heap-tab"
      data-mdb-toggle="tab"
      href="#ed1-heap"
      role="tab"
      aria-controls="ed1-heap"
      aria-selected="false"
      >7-Filas de Prioridade</a
    >
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="ed1-arvores" role="tabpanel" aria-labelledby="ed1-arvores-tab">
    Aula em <a target="_blank" href="https://igormcoelho.github.io/curso-estruturas-de-dados-i/slides/5-arvores/index.html">JS/HTML</a><br/>
    <!--
    Vídeo no PeerTube (stream via webtorrent): https://pertur.be/w/37YGcRBgkGcS9zwapuB36m<br/>
    <iframe src="https://pertur.be/videos/embed/37YGcRBgkGcS9zwapuB36m" style="min-height: 400px; width: 100%;" frameborder="0" sandbox="allow-same-origin allow-scripts" allowfullscreen="allowfullscreen"></iframe>
    -->
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Yd6Wda879Q4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
  </div>
  <div class="tab-pane" id="ed1-dicionarios" role="tabpanel" aria-labelledby="ed1-dicionarios-tab">
    Aula em <a target="_blank" href="https://igormcoelho.github.io/curso-estruturas-de-dados-i/slides/6-dicionarios/index.html">JS/HTML</a><br/>
    <!--
    Vídeo no PeerTube (stream via webtorrent): https://pertur.be/w/wW5iJVM1UqWVtEhhcKFvyA<br/>
    <iframe src="https://pertur.be/videos/embed/wW5iJVM1UqWVtEhhcKFvyA" style="min-height: 400px; width: 100%;" frameborder="0" sandbox="allow-same-origin allow-scripts" allowfullscreen="allowfullscreen"></iframe>
    -->
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Y_jx6sMQyf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
  </div>
  <div class="tab-pane" id="ed1-heap" role="tabpanel" aria-labelledby="ed1-heap-tab">
    Aula em <a target="_blank" href="https://igormcoelho.github.io/curso-estruturas-de-dados-i/slides/7-filas-prioridade/index.html">JS/HTML</a><br/>
    <!--
    Vídeo (1/2) no PeerTube (stream via webtorrent): https://pertur.be/w/7xnHp2TDjXK68EQqrX8bQR<br/>
    <iframe src="https://pertur.be/videos/embed/7xnHp2TDjXK68EQqrX8bQR" style="min-height: 400px; width: 100%;" frameborder="0" sandbox="allow-same-origin allow-scripts" allowfullscreen="allowfullscreen">
    </iframe>
    Vídeo (2/2) no PeerTube (stream via webtorrent): https://pertur.be/w/m4wFX7SbUDDJMMHMqoybUB<br/>
    <iframe src="https://pertur.be/videos/embed/m4wFX7SbUDDJMMHMqoybUB" style="min-height: 400px; width: 100%;" frameborder="0" sandbox="allow-same-origin allow-scripts" allowfullscreen="allowfullscreen">
    </iframe>
    -->
    YouTube Parte 1/2<br/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/SA-RgtmLWkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br/>
    YouTube Parte 2/2<br/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/q0kRz4oz_7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>