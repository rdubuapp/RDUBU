import { Component } from '@angular/core';

import { Platform, NavController, ToastController, AlertController  } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';

import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  termL = '';
  termI = '';
  showSplash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private network: Network,
    private navCtrl: NavController,
    public toastController: ToastController,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.checkTerm();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // timer(3000).subscribe(() => this.showSplash = false);
    });
  }
  async checkTerm() {
    this.storage.get('termI').then((termI) => {
      this.termL = localStorage.getItem('termL');
      if (this.termL === 'true') {
        this.navCtrl.navigateRoot('register');
      } else {
        this.navCtrl.navigateRoot('terms');
      }
      return console.log(termI);
    });
  }



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

      // if (termI === 'true' || this.termL === 'true') {
      //   this.navCtrl.navigateRoot('register');
      // } else {
      //   this.navCtrl.navigateRoot('terms');
      // }
