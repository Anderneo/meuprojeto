import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController) {

  }
  
  itemUm() {
    this.toastController.create({
      message: 'Você escolheu Pokémon Yellow.',
      duration: 1500
    }).then((toast) => {
      toast.present();
    });
  }  

  itemDois() {
    this.toastController.create({
      message: 'Você escolheu Mega Man X.',
      duration: 1500
    }).then((toast) => {
      toast.present();
    });
  }  

  itemTres() {
    this.toastController.create({
      message: 'Você escolheu The Legend of Zelda.',
      duration: 1500
    }).then((toast) => {
      toast.present();
    });
  }  
  
  itemQuatro() {
    this.toastController.create({
      message: 'Você escolheu Pac-Man.',
      duration: 1500
    }).then((toast) => {
      toast.present();
    });
  }    

  itemCinco() {
    this.toastController.create({
      message: 'Você escolheu Super Mario World.',
      duration: 1500,
    }).then((toast) => {
      toast.present();
    });
  }  

}
