---
layout: page
title: materiais
permalink: /materiais
lang: pt-br
lang-ref: igormcoelho-materials
description: Coletânea de materiais e tutoriais de uso geral

nav: true
---

### Cursos

Materiais didáticos são disponibilizados sob licença [CreativeCommons CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/), em Português, no intuito de contribuir com a disseminação do conhecimento para a comunidade brasileira. 
Existem vídeos pré-gravados dos cursos (apenas algumas aulas ainda foram finalizadas no momento), que seguem a mesma licença.

Veja mais em [Cursos](/cursos/).


-------

### Materiais Técnicos

<!-- Latest compiled and minified CSS -->
<!--
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
-->

<!-- jQuery library -->
<!--
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
-->

<!-- Latest compiled JavaScript -->
<!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> 
-->

<!-- Font Awesome -->
<!--
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
  rel="stylesheet"
/>
-->
<!-- Google Fonts -->

<!-- 
<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  rel="stylesheet"
/>
-->

<!-- MDB -->
<!-- MDB 
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.css"
  rel="stylesheet"
/>
-->



<script>
/*
const triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'));
triggerTabList.forEach((triggerEl) => {
  const tabTrigger = new mdb.Tab(triggerEl);

  triggerEl.addEventListener('click', (event) => {
    event.preventDefault();
    tabTrigger.show();
    //alert('oi');
  });
});
*/
/*
const triggerEl = document.querySelector('#myTab a[href="#profile"]');
mdb.Tab.getInstance(triggerEl).show(); // Select tab by name

const triggerFirstTabEl = document.querySelector('#myTab li:first-child a');
mdb.Tab.getInstance(triggerFirstTabEl).show(); // Select first tab
*/
</script>

<!-- Nav tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a
      class="nav-link active"
      id="home-tab"
      data-mdb-toggle="tab"
      href="#home"
      role="tab"
      aria-controls="home"
      aria-selected="true"
      >Home</a
    >
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="profile-tab"
      data-mdb-toggle="tab"
      href="#profile"
      role="tab"
      aria-controls="profile"
      aria-selected="false"
      >Profile</a
    >
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="messages-tab"
      data-mdb-toggle="tab"
      href="#messages"
      role="tab"
      aria-controls="messages"
      aria-selected="false"
      >Messages</a
    >
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="settings-tab"
      data-mdb-toggle="tab"
      href="#settings"
      role="tab"
      aria-controls="settings"
      aria-selected="false"
      >Settings</a
    >
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
    ... home
  </div>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    ... profile
  </div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
    ... messages
  </div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">
    ... settings
  </div>
</div>
