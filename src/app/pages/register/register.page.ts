import { Component, OnInit } from '@angular/core';

import { NavController, ToastController, AlertController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private navController: NavController,
    public toastController: ToastController,
    public alertController: AlertController,
    public network: Network) {

  }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  clickUser() {
    this.navController.navigateRoot('home2');
  }

  clickLogin() {
    this.navController.navigateForward('login');
  }

}
