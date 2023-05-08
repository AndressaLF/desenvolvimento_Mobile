// classe responsável por representar as despesas (tipar o objeto JSON)

export enum TipoDespesa{
    ALIMENTACAO = "Alimentação",
    LAZER = 'Lazer',
    TRANSPORTE = 'Carro',
    PET =  'Pet',
    JARDIM = 'Jardim',
    COZINHA = 'Cozinha',
    LIMPEZA = 'Limpeza',
    OUTRO = 'Outro'
}


export class Despesa{
    motivo: string; 
    valor: number;
    tipo: string;
    local: string;
    data: string;

constructor(){
    this.motivo = '';
    this.valor = 0;
    this.tipo = TipoDespesa.OUTRO;  // valor default
    this.local = '';
    this.data = new Date().toISOString();
  }
}