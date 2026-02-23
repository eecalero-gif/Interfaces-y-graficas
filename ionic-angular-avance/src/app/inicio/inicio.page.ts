
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html'
})
export class InicioPage {
  constructor(private router: Router) {}
  irDetalle() {
    this.router.navigate(['/detalle']);
  }
}
