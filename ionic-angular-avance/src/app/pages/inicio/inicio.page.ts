import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-inicio',
  imports: [RouterLink],
  template: `
    <h1>Página Inicio</h1>
    <p>Bienvenido al proyecto Ionic + Angular.</p>
    <a routerLink="/detalle">Ir a Detalle</a>
  `
})
export class InicioPage {}