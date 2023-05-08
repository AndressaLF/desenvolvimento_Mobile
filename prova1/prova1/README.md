# Objetivo

Criar uma aplicação de 1 (uma) tela (modelo blank) que exiba uma lista com informações de 4 (quatro) filmes em elementos do tipo cartão (ion-card) conforme os exemplos de tela a seguir. Os filmes devem estar pré-definidos em uma lista contida em uma classe de serviço (FilmeService).

# Passo a passo

1. Crie um novo projeto Ionic Angular usando o comando `ionic start nome-do-projeto blank --type=angular` no terminal. 

2. Abra o projeto em um editor de código e navegue até o diretório `src/app`. 
Crie uma pasta chamada `models` e dentro dela um arquivo chamado `filmes.ts`. Este arquivo será responsável por conter a classe de filmes com seus respectivos atributos. Além disso, rode o comando `ionic g s filme` para criar o arquivo `filmes.service.ts`. Este arquivo será responsável por fornecer uma lista de filmes para o aplicativo.

3. No arquivo `filmes.ts` crie a classe filmes e seus atributos. Lembre de inicializar os valores dos atributos.

```typescript
export class Filme {
    titulo: string = '';
    diretor: string = '';
    genero: string = '';
    cartaz: string = '';
    ano: number= 0;
  }

```

4. No arquivo `filmes.service.ts`, crie uma classe chamada ``FilmeService`` com um método chamado `getFilmes()`. Este método deve retornar uma lista de objetos do tipo __filme__ com informações como __título, cartaz, ano de lançamento, diretor, gênero__.

5. No arquivo `filmes.service.ts` importe a classe `Filmes`. Na classe FilmesService, cria a lista de filmes do tipo Filmes. A classe __FilmesService__ deve conter um método (_getFilmes()_) que retorne os filmes.

```typescript
export class FilmesService {

  filmes: Filme[] = [
    {
      titulo: 'Titanic',
      diretor: 'James Cameron',
      genero: 'Romance',
      cartaz: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/56/94/20055685.jpg',
      ano: 1997
    },
    {
      titulo: 'Avatar',
      diretor: 'James Cameron',
      genero: 'Ação/ Aventura/ Fantasia/ Ficção Científica',
      cartaz: 'https://i.pinimg.com/originals/89/a4/19/89a4190c923f6d92d7235ef0cd90e47b.jpg',
      ano:2009
    },
    {
      titulo: 'Up Altas Aventuras',
      diretor: 'Pete Docter',
      genero: 'Fantasia/ Infatil',
      cartaz: 'https://br.web.img3.acsta.net/medias/nmedia/18/92/03/73/20176438.jpg',
      ano:2009
    },
    {
      titulo: 'Matrix',
      diretor: 'Lana Wachowski e Lilly Wachowski',
      genero: 'Ação/ Ficção Científica',
      cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTwbGN1Hd2T_NTeV5-esoyl5UWScnx31eU1zK-FmUciFQVfw2IoZJxJS4Ee-J61XmatQ&usqp=CAU',
      ano:1999
    }
  ];

  
  constructor() { 
    
  }


  getFilmes(){
    return this.filmes;

  }

}
```

6. No arquivo **home.page.html** use o loop ***ngFor** do Angular para iterar sobre a variável de filmes e exibir cada um em um cartão usando o elemento _ion-card._
```html
<ion-header [translucent]="true">
  <ion-toolbar color="primary" class="ion-text-center">
    <ion-title>
      Prova 01
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <div id="container">
    
    <ion-card *ngFor="let filme of filmes">
      <ion-img [src]="filme.cartaz" style="width: 40%; height: 20%;"></ion-img>
      <ion-card-header>
        <ion-card-title>{{ filme.titulo }}</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <p><strong>Gênero:</strong> {{ filme.genero }}</p>
        <p><strong>Diretor:</strong> {{ filme.diretor }}</p>
        <p><strong>Ano:</strong> {{ filme.ano }}</p>
      </ion-card-content>
    </ion-card>

  </div>
</ion-content>

<ion-footer collapse="fade">
  <ion-toolbar color="primary" class="ion-text-center">
    <ion-title> </ion-title>
  </ion-toolbar>
</ion-footer>


```

## Modelo de dados
Um Filme deve ser uma classe com os seguintes atributos:

- titulo: string
- diretor: string
- origem: string 
- cartaz: string 
- ano: number 

## Comandos
- `ionic start app-filme blank` 
- `ionic serve` 
- `ionic g s filme` ou `ionic generate service filme`