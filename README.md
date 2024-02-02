# Crud AngularApp Json-Server

Este projeto foi gerado com Angular CLI versão 17.0.10, Angular Material versão 17.1.1, Json-server versão 1.0.

## Rodar o projeto

Clone o repositório com `git clone` ou fork.

Ao abrir o projeto no editor de código, use `npm install` para instalar as dependêcias.

Então, use `json-server --watch db.json` para iniciar o servidor dos produtos a serem cadastrados.

Rode `ng serve` para criar o servidor http. Navegue para `http://localhost:4200/`. A aplicação vai atualizar automaticamente em qualquer mudança de arquivos.

## Explicação do site

Na tela de inicio, é mostrada uma tabela com produtos cadastrados pelo usuário, esses produtos estão no Json-server.

Na ultima coluna da tabela tem os botões de pincel para editar o produto adicionado, e lixeira para deletar.

Todas essas ações são notificadas pelo site.

Para adicionar mais produtos, deve clicar no botão `+Add Produto` no canto superior direito, com isso abrirá o formulário.

No formulário os campos nome, código, e preço do produto são obrigatórios para o cadastro, apertar em salvar irá salvar os dados no servidor, e eles serão apresentados na tabela.
