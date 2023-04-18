import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})

export class HomePage {
  expressao: string;
  resultado: number;

  constructor() {
    this.expressao = '';
    this.resultado = 0 ;
  }

  addlimpar(){
    if (this.expressao == ''){
      this.resultado = 0 ;
    }else{
      this.expressao = '';
      this.resultado = 0 ;
    }
  }

  abrirPar(){
    this.expressao += '(';
  }

  fecharPar(){
    this.expressao += ')';
  }

  addPonto(){
    this.expressao += '.';
  }

  addApagar(){
    if(this.expressao != ''){
      this.expressao = this.expressao.slice(0, -1);
    }else{
      this.expressao = ' ';
      this.resultado = 0;
    }
    
  }

  addIgual(){
    if (this.expressao != '') {
      this.resultado = eval(this.expressao);
      this.expressao = '';
    }
}

  addDiv(){
    this.expressao += '/';
  }

  addMult(){
    this.expressao += '*';
  }

  addSub(){
    this.expressao += '-';
  }

  addSoma(){
    this.expressao += '+';
  }

  addZero() {
    this.expressao += '0';
  }

  addUm(){
    this.expressao += '1';
  }

  addDois(){
    this.expressao += '2';
  }

  addTres(){
    this.expressao += '3';
  }

  addQuatro(){
    this.expressao += '4';
  }

  addCinco(){
    this.expressao += '5';
  }

  addSeis(){
    this.expressao += '6';
  }

  addSete(){
    this.expressao += '7';
  }

  addOito(){
    this.expressao += '8';
  }

  addNove(){
    this.expressao += '9';
  } 
}
