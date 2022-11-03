import { Component } from '@angular/core';
import { FormGroup,
  FormControl,
  Validator, 
  FormBuilder,
  Form,
  Validators} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formularioHome: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioHome = fb.group({
        'nombre': new FormControl("", Validators.required),
        'password': new FormControl("", Validators.required),
    })
  }
  ngOnInit() {
  }
  async ingresar(){
    var f = this.formularioHome.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('inicio');
      

    }else{
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Usuario o contraseña incorrectas',
        buttons: ['Aceptar']
      });
      await alert.present();
    }

  }
}
