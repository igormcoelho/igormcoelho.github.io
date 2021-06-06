var userLang = navigator.language || navigator.userLanguage; 
//if(userLang == 'pt-BR')
//  alert("PORTUGUES");
//alert ("The language is: " + userLang);
/*
Swal.fire({
    //title: '<strong>HTML <u>example</u></strong>',
    //icon: 'info',
    html:
      '<img src="/assets/img/60px-Nuvola_English_language_flag.svg.png"/>'+
      '<a href="/about">Welcome to Igor Machado Coelho website!</a> - in English <br/>'+
      'Main pages: <a href="/about">about</a> - <a href="/materials">materials</a> -'+
      '<a href="/projects">projects</a> - <a href="/publications">publications</a> - <a href="/teaching">teaching</a><br/>'+ 
      '<em>Igor is Computer Science researcher and professor at [IC/UFF](http://www.ic.uff.br)</em>' +
      '<hr/>'+
      '<img src="/assets/img/64px-Brazilian_flag_icon_round.svg.png"/>'+
      '<a href="/sobre">Bem-vind@ à página de Igor Machado Coelho!</a> - Português (br) <br/>'+
      'Páginas principais: <a href="/sobre">sobre</a> - <a href="/materiais">materiais</a> - <a href="/projetos">projetos</a> -'+
      '<a href="/publicacoes">publicações</a> - <a href="/ensino">ensino</a><br/>'+
      '<em>Igor é pesquisador de Ciência da Computação e professor no <a href="http://www.ic.uff.br">IC/UFF</a></em><br/>',
    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: true,
    confirmButtonText:
      (userLang == 'pt-BR')?'<i class="fa"></i> Redirecionando para Português (Brasil)':'<i class="fa"></i> en',
    confirmButtonAriaLabel: 'lang',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'lang-default'
  })
*/


let timerInterval
Swal.fire({
  //title: '',
  html: '<img src="/assets/img/60px-Nuvola_English_language_flag.svg.png"/>'+
  '<a href="/about">Welcome to Igor Machado Coelho website!</a> - in English <br/>'+
  'Main pages: <a href="/about">about</a> - <a href="/materials">materials</a> -'+
  '<a href="/projects">projects</a> - <a href="/publications">publications</a> - <a href="/teaching">teaching</a><br/>'+ 
  '<em>Igor is Computer Science researcher and professor at [IC/UFF](http://www.ic.uff.br)</em>' +
  '<hr/>'+
  '<img src="/assets/img/64px-Brazilian_flag_icon_round.svg.png"/>'+
  '<a href="/sobre">Bem-vind@ à página de Igor Machado Coelho!</a> - Português (br) <br/>'+
  'Páginas principais: <a href="/sobre">sobre</a> - <a href="/materiais">materiais</a> - <a href="/projetos">projetos</a> -'+
  '<a href="/publicacoes">publicações</a> - <a href="/ensino">ensino</a><br/>'+
  '<em>Igor é pesquisador de Ciência da Computação e professor no <a href="http://www.ic.uff.br">IC/UFF</a></em><br/>',
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getHtmlContainer()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    //console.log('I was closed by the timer')
    if(userLang == 'pt-BR')
      window.location = "/sobre";
      //var response = Response.redirect("/sobre",status);
    else
      window.location = "/about";
      //var response = Response.redirect("/about",status);
  }
})