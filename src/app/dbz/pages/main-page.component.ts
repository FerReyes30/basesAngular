import { Component } from '@angular/core';
import { Character } from '../Interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  //Se inyecta el servicio
  constructor( private dbzService: DbzService ){

  }

  //Obtencion de datos de elos caracteres registrados
  get characters(): Character[]{
    return [...this.dbzService.characters]; //Recibimos la data del servicio
  }


  //Metodo para borrar el personaje seleccionado
  onDeleteCharacter(id:string): void{
    this.dbzService.deleteCharacterById(id); //Envio de ID al servicio
  }

  //Metodo para añadir un nuevo personaje
  onNewCharacter(character: Character){
    this.dbzService.addCharacter(character); //Envio de datos del personaje en Json al servicio
  }

}
