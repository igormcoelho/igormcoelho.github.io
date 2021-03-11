---
layout: page
title: generate-selected-papers
permalink: /generate_selected_papers
description: 

profile:
  align: right

---

<div class="publications" id="pub_selected_papers"> 
  <!-- <h2>selected publications</h2> -->
  {%    bibliography -f papers -q @*[selected=true]*   %}
</div>