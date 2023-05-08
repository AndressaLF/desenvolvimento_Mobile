import { Injectable } from '@angular/core';
import { Filme } from '../models/filmes'

@Injectable({
  providedIn: 'root'
})

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
