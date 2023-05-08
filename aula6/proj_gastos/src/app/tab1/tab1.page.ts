import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoDespesa } from '../model/despesa';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DespesaService } from '../model/despesa.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [ ReactiveFormsModule, IonicModule, ExploreContainerComponent, CommonModule],  // 2.importar o reactive formsModule  9. Importando o CommonModule(ngfor)
})

export class Tab1Page {
  // 3.instanciando o objeto do formulario
  fg: FormGroup;
  tipoDespesa: string[]; // 6. instanciando a variavel para pegar o array de strings do arquivo model.tipodedespesas
  corMensagem: string;
  mensagem: string = '';

 
  constructor( 
    // 4. adicionando os inputs
    private fb: FormBuilder, private rota: Router, private ds: DespesaService) { //10. adicionar e importar o serviço router  11/adicionando o servico criado (desp)
    this.fg = fb.group({
      motivo: ['', Validators.required], //5. adicionar os validators
      valor: [0.0, [Validators.required, Validators.min(0)]],  //se existir mais de uma validação é necessário passar por meio de lista[[]] 
      tipo: [TipoDespesa.OUTRO, Validators.required],  // 8. Tipo de despesas criados (Outro = default)
      local: ['', Validators.required],
      data: [new Date().toISOString(), Validators.required]
    });

    this.tipoDespesa = Object.values(TipoDespesa); //7. pegando os valores do array de strings
    this.corMensagem = '#fff';
  }

  // 1. criando as funções
  async adicionar(){
    console.log(this.fg.value);
    
    const despesa = this.fg.value;
    const resultado = this.ds.adicionar(despesa);

    if (resultado.adicionado){
      //this.ds.adicionar(despesa);
      this.mensagem = resultado.mensagem;
      this.corMensagem = "success";
    }else{  
      this.mensagem = resultado.mensagem;
      this.corMensagem = "warning";;
    }
  }

  ver(){
    this.rota.navigate(['/tabs/tab2'])  // 11. o endereço está dentro de tabs/tabs.routes.ts
  }

  limpar(){
    this.fg.setValue({motivo: '', valor: 0.0, tipo: '', local: '', data: new Date().toISOString()})
  }
}
