import { Component } from '@angular/core';
import { IonInput, IonicModule } from '@ionic/angular';

// importações realizadas para usar o formGroup
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,

  // adicionando o formgroup
  imports: [IonicModule, ReactiveFormsModule],
})

export class HomePage {
  mensagem: string;
  cor: string;
  calculado: number;
  
  formGroup: FormGroup;
   // inicializando o serviço formgroup
   constructor(private fb: FormBuilder) {
    this.mensagem = '';
    this.cor = '#fff';
    this.calculado = 0;

    // para cada input temos que adicionar
    this.formGroup = fb.group({
      alcool : ['', [Validators.required, Validators.minLength(1)]],
      gasolina : ['', [Validators.required,
                       Validators.min(0.1),
                       Validators.minLength(1)]]
    });
  }

  calcular(){
    //console.log(this.formGroup.value)

    const valores_form = this.formGroup.value;

    this.calculado = +valores_form.alcool/ +valores_form.gasolina;

    if(this.calculado <= 0.7){
      this.mensagem = 'Alcool';
      this.cor = "success";
    }else{
      this.mensagem = 'Gasolina';
      this.cor = "warning";

    }
  }
}
