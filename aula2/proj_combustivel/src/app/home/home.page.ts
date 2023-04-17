import { Component } from '@angular/core';
import { IonInput, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})

export class HomePage {
  resultado: string;

  constructor() {
    this.resultado = '';
  }

  calcular(md: IonInput){
    let media = 0;

    if (md.value != null && md.value != ''){
       media = +md.value;


      if (media >= 60 ){
        this.resultado = "Aprovado 😊😁";
      }else{
        this.resultado = "Prova Final 😭😥"
      }
    }
    console.log(md.value)
  } 
}