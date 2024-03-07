import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','She Hulk','Thor'];
  public deletedHeroe?: string = ""; //La tendriamos que asignar como propiedad de clase para poderla usar en la vista o exportarla


  removeLastHero(): void {
    this.deletedHeroe = this.heroNames.pop();
  }


}
