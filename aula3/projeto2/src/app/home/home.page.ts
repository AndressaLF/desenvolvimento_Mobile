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
  cor: string;

   constructor() {
    this.resultado = ''
    this.cor = '#fff'
  }

  calcular(gasolina: IonInput, alcool: IonInput){
    let calculado = 0;

    if ((gasolina.value != null && gasolina.value !='') && (alcool.value != null && alcool.value !='')){
      
      calculado = ((+alcool.value)/(+gasolina.value));
      console.log(calculado)
      if(calculado > 0.7){
        this.resultado = 'Gasolina';
        this.cor = "success";
      }else{
        this.resultado = 'Alcool';
        this.cor = "warning";

      }
    }
  }
}
