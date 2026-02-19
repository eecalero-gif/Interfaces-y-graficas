import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonButton],
  template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>Registro</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-input label="Nombre" placeholder="Ingrese su nombre"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input label="Correo" placeholder="Ingrese su correo"></ion-input>
    </ion-item>
    <ion-button expand="block">Guardar</ion-button>
  </ion-content>
  `
})
export class RegistroPage {}