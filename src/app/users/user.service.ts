import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    constructor(){

  }

  getUsers(){
    return [
    {
      nome: "Luca",
      cognome: "Rossi"
    },

    {
      nome: "Mario",
      cognome: "Rossi"
    },

    {
      nome: "Lucia",
      cognome: "Rossi"
    }
  ];
  }

}