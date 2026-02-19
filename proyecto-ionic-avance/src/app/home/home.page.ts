import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton],
  template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>Inicio</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h2>Bienvenido al Proyecto Final</h2>
    <ion-button expand="block" (click)="irRegistro()">Ir a Registro</ion-button>
  </ion-content>
  `
})
export class HomePage {
  constructor(private router: Router) {}
  irRegistro() {
    this.router.navigate(['/registro']);
  }
}