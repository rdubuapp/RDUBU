import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { toastController } from '@ionic/core';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.page.html',
  styleUrls: ['./menuadmin.page.scss'],
})
export class MenuadminPage implements OnInit {

  pages = [
    { title: 'Menu', url: '/menuadmin/admin', icon: 'home' },
    // { title: 'Profile', url: '/menuadmin/profile', icon: 'logo-ionitron'}
  ];

  selectedPath: string = '';

  constructor(public afAuth: AngularFireAuth, private navController: NavController, private router: Router, private toastController: ToastController, public alertController: AlertController) { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async openlink() {
    window.open('https://docs.google.com/forms/d/1WA2J6gJ2o0qFSWTOnOJLY1hqZgzwjXmhIj-Q-ldhun4/edit#responses', '_system', 'location=yes');
  }
  async openAssess() {
    this.navController.navigateForward('listanswer-admin');
  }

  async logout() {
    // this.afAuth.auth.signOut().then(function() {
    //   this.navController.navigateForward('register');
    // // Sign-out successful.
    // }).catch(function(error) {
    // console.log(error)
    // // An error happened
    // });

    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Do you want to sign out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async (blah) => {
            console.log('Confirm Cancel');
            let toast = toastController.create({
              message: "Cancel logout.",
              duration: 2000,
              position: 'bottom'
            });
            (await (toast)).present();
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            console.log('Confirm Okay');
            this.afAuth.auth.signOut();
            let toast = toastController.create({
              message: "Logout complete.",
              duration: 2000,
              position: 'bottom'
            });
            (await (toast)).present();
            this.navController.navigateRoot('register');
          }
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}
