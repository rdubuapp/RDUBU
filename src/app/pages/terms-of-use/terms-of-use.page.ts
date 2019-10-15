import { Component, OnInit } from '@angular/core';

import { NavController , AlertController, ToastController  } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.page.html',
  styleUrls: ['./terms-of-use.page.scss'],
})
export class TermsOfUsePage implements OnInit {

  public checked = false;
  public term = '';

  constructor(private navController: NavController, private storage: Storage, private network: Network) { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  clickNext() {
    localStorage.setItem('termL', 'true');
    this.storage.set('termI', 'true').then((t) =>
      console.log(t)
    );

    // console.log(this.storage.get('termI'));
    this.navController.navigateRoot('register');
    // this.navController.navigateForward('register');
  }

}
