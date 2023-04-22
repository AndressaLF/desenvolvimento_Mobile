import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, ReactiveFormsModule],  // 3.importar o reactive formsModule
})

export class Tab1Page {
  // 2.instanciando o objeto do formulario
  fg: FormGroup;

  constructor( 
    // 3. adicionando os inputs
    private fb: FormBuilder) {
    this.fg = fb.group({
      motivo: ['', Validators.required], //4. adicionar os validators
      valor: [0.0, Validators.required],
      tipo: ['', Validators.required],
      data: [new Date().toISOString, Validators.required]
    });

  }

  // 1. criando as funções
  adicionar(){

  }

  ver(){

  }

  limpar(){

  }
}
