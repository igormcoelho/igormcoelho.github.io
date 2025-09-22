Script criado pela Chefia de Depto TCC-IC-UFF 2023-09/2025-09 com a ajuda de
diversos colegas, para auxiliar no processo de Afastamento via SEI.

É uma versão web baseada na primeira versão em python, já em uso, publicada em:
https://github.com/LCC-UFF/tcc/tree/main/src/thirdparty/autoforms-script

Para utilizar:
1) Acesse o SEI e crie um novo Processo de Afastamento, copiando o identificador
de processo SEI
2) Acesse o site, preenchendo os campos (incluindo o código SEI) e baixe os 
4 formulários gerados para incluir no processo do SEI.

IMPORTANTE: ao copiar o conteúdo dos formulários gerados, utilize o Firefox, pois
o Chrome distorce alguns elementos da página ao colar no SEI.

Projeto de código-aberto: colabore conosco!

Instruções para Desenvolvedores:
1) Os formulários html foram copiados manualmente e vieram com "charset=windows-1252"
(deixe assim mesmo no html), porém o funcionamento correto exige uma codificação do
tipo western iso-8859-1.

No git já deve estar correto, mas verifique caso substitua os arquivos!

$ file -i oform-1.htm 
oform-1.htm: text/html; charset=iso-8859-1

Se estiver em utf-8, irá corromper os campos:

$ file -i oform-2.htm 
oform-2.htm: text/html; charset=utf-8

Nesse caso, abra o arquivo no gedit e salve novamente como western.
Se estiver correto, estará assim:

$ file -i oform-2.htm 
oform-2.htm: text/html; charset=iso-8859-1

2) para rodar o servidor em testes, basta usar o python:

python3 -m http.server 8000

Acesse: http://127.0.0.1:8000/

Licença MIT, 2025