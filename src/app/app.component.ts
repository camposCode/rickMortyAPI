import { Component } from '@angular/core';
import { PersonajesService } from './personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arrPersonajes: any[];

  constructor(private personajesService: PersonajesService) {}

  ngOnInit(){
    this.personajesService.getAll()
    .then(response => {
      this.arrPersonajes = response['results'];
    })
  }
}
