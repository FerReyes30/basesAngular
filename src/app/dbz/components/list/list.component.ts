import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../Interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() //Recibira una propiedad del mundo exterior (del padre) y se mostrara el contenido obtenido en el html
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }];

  @Output()
  //Emite cualquier tipo de dato
  public onDelete: EventEmitter<string> = new EventEmitter();

  //Emite el evento de eliminacion
  onDeleteCharacter2(id: string): void{
    //console.log({index});

    this.onDelete.emit( id );

    console.log({id});
  }

}
