import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the JornaleroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornalero',
  templateUrl: 'jornalero.html',
})
export class JornaleroPage {
  FormJornalero = 'FormJornaleroPage';
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    console.log(loader);
    loader.present();
  }
  
  createJornalero(){
    let paramModal = {
      title:'Crear Jornalero', 
      update:false, 
      jornalero:{} 
    };
    let modal = this.modalCtrl.create(this.FormJornalero, paramModal);
    modal.present();
  }

  updateJornalero(){

  }
}
