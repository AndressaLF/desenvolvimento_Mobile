import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { DespesaService } from '../model/despesa.service';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule]
})

export class Tab2Page {

  despesas: any[];

  constructor(public ds: DespesaService) {
    this.despesas = this.ds.obterTodas();
    console.log(this.despesas)
  }

}
