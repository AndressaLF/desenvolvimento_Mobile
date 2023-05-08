import { Injectable } from '@angular/core';
import { Despesa } from './despesa';

@Injectable({
  providedIn: 'root'
})

export class DespesaService {
  despesas: Despesa[];  // criando uma lista para guardar as despesas

  constructor() {
    this.despesas = [];

   }

   adicionar(desp: Despesa):{ adicionado: boolean, mensagem: string } {
    if (desp.motivo != '' && desp.valor != 0 && desp.local != '') {

      for (let despesa of this.despesas) {
        if (despesa.motivo === desp.motivo && despesa.valor === desp.valor && despesa.tipo === desp.tipo) {
          return { adicionado: false, mensagem: 'Despesa já adicionada!' };
        }
      }
      this.despesas.push(desp);  // adicionando uma nova despesa
      return { adicionado: true, mensagem: 'Despesa adicionada com sucesso!' }
    }
    return { adicionado: false, mensagem: 'Despesa vazia!' };
  }

   obterTodas(){
    return this.despesas;
  }
}
