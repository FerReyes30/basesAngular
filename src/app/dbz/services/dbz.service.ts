import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid' //Instalamos la paqueteria de UUID con npm install uuid y despues npm i --save-dev @types/uuid

import { Character } from '../Interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  //Coleccion de personajes
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  //Metodo para agregar un nuevo personaje en la coleccion characters
  addCharacter( character: Character ):void {

    //Se añade la informacion del nuevo personaje a la coleccion añadiendo el ID unico
    const newCharacter: Character = { id: uuid(), ...character}
    this.characters.push(newCharacter); //Se agrega a la coleccion

    console.log(this.characters);
  }

  // onDeleteCharacter( index: number ): void{
  //   this.characters.splice(index, 1);
  // }
  //Eliminamos el personaje con el ID enviado
  deleteCharacterById( id: string ): void{
    //Se busca el ID enviado y se filtra de la coleccion (elimina)
    this.characters = this.characters.filter( character => character.id !== id)
  }




}
