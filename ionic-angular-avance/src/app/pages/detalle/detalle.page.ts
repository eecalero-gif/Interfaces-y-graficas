import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-detalle',
  imports: [RouterLink],
  template: `
    <h1>Página Detalle</h1>
    <p>Esta es la segunda página funcional.</p>
    <a routerLink="/inicio">Volver a Inicio</a>
  `
})
export class DetallePage {}