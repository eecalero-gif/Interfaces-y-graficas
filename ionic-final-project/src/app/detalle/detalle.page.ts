import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage {
  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/']);
  }
}
