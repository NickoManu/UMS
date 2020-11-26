import { Component } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent {
  title = "users";

  users = [
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
