import { Component } from '@angular/core';
import { FilmesService } from '../models/filmes.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  filmes: any[];

  constructor(private filmeService: FilmesService) {
    this.filmes = this.filmeService.getFilmes();
  }

}
