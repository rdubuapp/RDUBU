import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  users ='';
  password = '';
  error :any;
  
  constructor(public afAuth: AngularFireAuth, public user: UserService, private navController: NavController, private db: AngularFireDatabase,private toastController: ToastController) { 

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
  async showToastOnImage() {
    const toast = await this.toastController.create({
      message: 'On MouseOver event on an image',
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }
  async login() {

    const { username, password } = this;
    // const controller = document.querySelector('ion-toast-controller');
    // try {
      // kind of a hack. 
      // const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@wombat.com', password);

      // if (res.user) {
      //   this.user.setUser({
      //     username,
      //     uid: res.user.uid
      //   });
      //   this.navController.navigateForward('menuadmin');
      // }

      if(username == ""){
        let toast =   toastController.create({
          message: 'Please insert username.',
          duration: 2000,
          position: 'bottom'
      });
      (await toast).present();
      } else if(password == ""){
        let toast =   toastController.create({
          message: 'Please insert password.',
          duration: 2000,
          position: 'bottom'
      });
      (await toast).present();
      } else{
        if(username =="admin"){
          this.users= username + '@wombat.com';
        } else {
          // this.users= username + '@gmail.com';
          this.users= username;
        }
      this.afAuth.auth.signInWithEmailAndPassword(this.users, password).then((res) => {
        this.db.database.ref(`user/${res.user.uid}/profile`).update({token:res.user.refreshToken});

        // var status = this.db.object(`users/${res.user.uid}/status`).valueChanges();
        // status.subscribe(data => {
        //   console.log(data);
        //   if(data == "admin"){
        //     this.router.navigate(['adminPage']);
        //   }else if (data == "staff"){
        //     this.router.navigate(['staffPage']);
        //   }
        //});
        }).catch(async function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        if (errorCode === 'auth/invalid-email') {
          errorMessage = 'Invalid Email.';
          let toast =   toastController.create({
            message: errorMessage,
            duration: 2000,
            position: 'bottom'
        });
        (await toast).present();
        } else if(errorCode === 'auth/invalid-password'){
          errorMessage = 'Invalid Password.';
          let toast =   toastController.create({
            message: errorMessage,
            duration: 2000,
            position: 'bottom'
        });
        (await toast).present();
        } else if(errorCode === 'auth/user-not-found'){
          errorMessage = 'User not found.';
          let toast =   toastController.create({
            message: errorMessage,
            duration: 2000,
            position: 'bottom'
        });
        (await toast).present();
        } else if(errorCode === 'auth/wrong-password'){
          errorMessage = 'Wrong Password.';
          let toast =   toastController.create({
            message: errorMessage,
            duration: 2000,
            position: 'bottom'
        });
        (await toast).present();
        } else {
          errorMessage = errorMessage;  
          let toast =   toastController.create({
            message: errorMessage,
            duration: 2000,
            position: 'bottom'
        });
        (await toast).present();
        }
    }); 
  }

}
  
}