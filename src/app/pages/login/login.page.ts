import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';

  constructor(public afAuth: AngularFireAuth, public user: UserService, private navController: NavController
  ) { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async login() {
    const { username, password } = this;
    try {
      // kind of a hack. 
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@wombat.com', password);

      if (res.user) {
        this.user.setUser({
          username,
          uid: res.user.uid
        });
        this.navController.navigateForward('menuadmin');
      }

    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/user-not-found') {
        console.log('User not found');
      }
    }
  }

}