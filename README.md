# Overview

Caso você ainda não tenha o **Node.js**, o**Angular CLI** e o **Ionic** instalado no computador, siga os passos abaixo:

- Instale o Node.js no seu computador
Pode baixar o instalador a partir do site oficial: https://nodejs.org/en/

- Instale o Angular CLI globalmente

Abra um terminal ou prompt de comando e instale o Angular CLI globalmente, executando o seguinte comando:

`npm install -g @angular/cli`

- Instale o Ionic globalmente
Abra um terminal ou prompt de comando e instale o Ionic, executando o seguinte comando:

`npm install -g @ionic/cli`

## Criando seu projeto
- Crie a pasta do projeto e acesse: `mkdir meu-projeto && cd meu-projeto`

- Para iniciar um novo projeto Ionic com o Angular:
- `ionic start meu-app blank --type=angular` (caso ele tenha apenas uma pagina)
- `ionic start meu-app tabs --type=angular` (caso queira 3 paginas)

- Para rodar o aplicativo: `ionic serve`

## Editando o projeto clonado do GitHub

Geralmente quando enviamos o projeto para o GitHub a pasta *Node Modules* não é incluida.

Caso você clone algum projeto ou tenha excluido tal pasta, execute o comando abaixo via terminal dentro da pasta do seu projeto:
`npm install`

Isso irá instalar todas as dependências do projeto, incluindo as dependências listadas no arquivo *package.json* e suas respectivas dependências.

