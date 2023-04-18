# Overview

Nessa aula o app que calcular o preço dos combustíveis foi reescrito utilizando o recurso do *FormGroup*.

## *FormGroup*

O **FormGroup** no Ionic é uma classe fornecida pelo *Angular Forms Module* que ajuda a gerenciar e validar formulários em aplicações móveis. Essa classe representa um conjunto de controles de formulário, como *inputs, selects, checkboxes*, etc. Ele é usado para agrupar e gerenciar os valores e estados de validação desses controles.

A utilização do **FormGroup** é útil para validação de formulários, uma vez que ele permite validar um conjunto de campos ao mesmo tempo e fornece feedback de validação para o usuário. Por exemplo, é possível usar o FormGroup para garantir que um campo de e-mail seja preenchido corretamente, que um campo de senha tenha um comprimento mínimo, entre outras validações.

Além disso, essa ferramenta também permite o uso de outras classes do *Angular Forms Module*, como o *FormControl* e o *Validators*, para tornar a validação de formulários ainda mais poderosa e personalizada.

## Documentação

- [Ionic 4 Form Validation Tutorial with Reactive Forms](https://morioh.com/p/18976817e1a7)
- [Ionic adding reactive forms](https://daily-dev-tips.com/posts/ionic-adding-reactive-forms/)

## Passo a passo da utilização

- Importe o módulo FormGroup no seu componente (*home.page.ts*):

```typescript
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
```
- Crie uma instância do FormGroup no construtor do seu componente:

```typescript
myForm: FormGroup;

constructor(private formBuilder: FormBuilder) { }
```

- Dentro do ngOnInit, inicialize o FormGroup usando o FormBuilder:

```typescript
ngOnInit() {
  this.myForm = this.formBuilder.group({
    campo1: ['', Validators.required],
    campo2: ['', Validators.required]
  });
}
```

- No template do seu componente, utilize o FormGroup no formulário (*home.page.html*):

```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <ion-item>
    <ion-label> Campo 1 </ion-label>
    <ion-input formControlName="campo1"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label> Campo 2 </ion-label>
    <ion-input formControlName="campo2"></ion-input>
  </ion-item>
  <ion-button type="submit">Enviar</ion-button>
</form>
```
- Por fim, implemente a função *onSubmit* no seu componente:

```typescript
onSubmit() {
  console.log(this.myForm.value);
}
```

