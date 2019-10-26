import { Component } from '@angular/core';

import { Platform, NavController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';

import { timer, Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  termL:string = '';
  termI :string = '';

  loading: any;
  loadingF: any;

  disconnectSubscription: Subscription;

  connectSubscriptionF: Subscription;
  disconnectSubscriptionF: Subscription;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private network: Network,
    private navCtrl: NavController,
    public toastController: ToastController,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.firstConnect();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkTerm();
      this.isConnect();
    });
  }

  async firstConnect() {
    this.disconnectSubscription = this.network.onDisconnect().pipe(take(1)).subscribe(async (data) => {
      console.log(data.type);
      this.firstLoading();
    });
  }

  async isConnect() {
    this.disconnectSubscription = this.network.onDisconnect().subscribe(async (data) => {
      console.log(data.type);
      this.presentLoading();
    });
  }

  async firstLoading() {
    this.loadingF = await this.loadingController.create({
      message: 'No Internet Connection!',
      mode: 'md'
    });
    await this.loadingF.present().then(() => {
      this.connectSubscriptionF = this.network.onConnect().subscribe(async (data) => {
        await this.loadingF.dismiss().then(() => {
          console.log('dismiss connected');
        }).then(() => {
          this.connectSubscriptionF.unsubscribe();
        });
      });
      this.disconnectSubscriptionF = this.network.onDisconnect().subscribe(async (data) => {
        await this.loadingF.dismiss().then(() => {
          console.log('dismiss disconnected');
        }).then(() => {
          this.disconnectSubscriptionF.unsubscribe();
        });
      });
    });
  }


  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'No Internet Connection!',
      mode: 'md'
    });
    await this.loading.present().then(() => {
      const connectSubscription = this.network.onConnect().subscribe(async (data) => {
        await this.loading.dismiss().then(() => {
          console.log('dismiss connected');
        }).then(() => {
          connectSubscription.unsubscribe();
        });
        await this.loadingF.dismiss().then(() => {
          console.log('dismiss F connected');
        }).then(() => {
          this.connectSubscriptionF.unsubscribe();
        });
      });
      const disconnectSubscription = this.network.onDisconnect().subscribe(async (data) => {
        await this.loading.dismiss().then(() => {
          console.log('dismiss disconnected');
        }).then(() => {
          disconnectSubscription.unsubscribe();
        });
        await this.loadingF.dismiss().then(() => {
          console.log('dismiss F conncected');
        }).then(() => {
          this.disconnectSubscriptionF.unsubscribe();
        });
      });
    });
  }



  // `${this.duration}`


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


}
