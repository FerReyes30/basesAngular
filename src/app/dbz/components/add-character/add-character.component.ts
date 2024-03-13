import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../Interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  //Emite cualquier tipo de dato de tipo personaje
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  //Se declara un objeto vacio de datos
  public character: Character = {
    name: '',
    power: 0
  };

  //Se emite el agregar un nuevo personaje
  emitCharacter(): void{
    //debugger;
    console.log(this.character);
    //Si no hay nada no regresamos datos
    if( this.character.name.length === 0) return;

    //Se emite el evento de nuevo caracter
    this.onNewCharacter.emit(this.character);

    //Limpiamos la informacion ingresada
    this.character = {name: '', power: 0}
    // this.character.name = "";
    // this.character.power = 0;
  }
}
