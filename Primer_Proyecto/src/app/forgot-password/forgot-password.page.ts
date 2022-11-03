import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private alertController: AlertController) { }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Informacion',
      subHeader: '',
      message: 'Le llegara un mensaje al correo',
      buttons: ['ENTENDIDO'],
    });
    await alert.present();
  }
  ngOnInit() {
  }
}