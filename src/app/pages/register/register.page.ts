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
    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.disconnectedToast();
    });
    this.network.onConnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.connectedToast();
    });
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

  // loading() {
  //   let time = 3000;
  //   setTimeout(function() {
  //     this.navController.navigateForward('login');
  //     time = 0;
  //   }, time);
  // }

  async disconnectedToast() {
    const toast = await this.toastController.create({
      message: 'network was disconnected :-(',
      duration: 2000
    });
    toast.present();
  }

  async connectedToast() {
    const toast = await this.toastController.create({
      message: 'we got a wifi connection, woohoo!',
      duration: 2000
    });
    toast.present();
  }

}
