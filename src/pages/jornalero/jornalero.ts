import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

    jornalero = {
      code: 1,
      name: "Pepito Perez",
      email: "example@example.com",
      date: "1987/07/07",
      weight: 80,
    };

  constructor(private alertCtrl: AlertController, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
        
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

  updateJornalero(jornalero){
    let paramUpdate = {
      title: 'Actualizar Jornalero',
      update: true,
      jornalero:jornalero
    };
    let modal = this.modalCtrl.create(this.FormJornalero, paramUpdate);
    modal.present();
  }
  
  deleteJornalero(){
    let alert = this.alertCtrl.create({
      title: 'Eliminar Jornalero',
      message: '¿Desea eliminar el Jornalero?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            //console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
