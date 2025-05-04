## Projeto de vendas
## Como usar:
- O código do frontend está na pasta web <br>
- O código do backend está na pasta server <br>
- abrir as pastas em telas diferentes no editor, uma pasta web aberta em um editor e pasta backend em outro editor <br>
- Na pasta web, no arquivo chamado database.sql, abra e copie o script do banco de dados no sgbd do banco e execute <br>
- crie na pasta server, o arquivo com o nome de .env, e passe a seguintes informações:
  - USER=
  - PASSWORD=
  - DATABASE=db_sales
  - no USER escreva o nome do usuário do seu banco e PASSWORD a senha do seu usuário<br>
  <br><br>
- na pasta server, digite seguinte comando no terminal bash:<br>
  ``` npm i ```
- depois de instalar a dependências, digite:<br>
  ``` npm run dev ```
<br><br>

## OBS:
- optei por não fazer a rota do backend, porque a regra é não usar framework, apenas usar a linguagem pura
- não consegui criar o backend sem usar um framework, até pesquisei utilizar o http server, mas não estava conseguindo captar os dados dos campos em json

## Tecnologias:
- HTML
- CSS
- JavaScript
- Node.js
- MariaDB
