import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.page.html',
  styleUrls: ['./menuadmin.page.scss'],
})
export class MenuadminPage implements OnInit {

  pages = [
    { title: 'Menu', url: '/menuadmin/admin', icon: 'home'},
    { title: 'Profile', url: '/menuadmin/profile', icon: 'logo-ionitron'}
  ];

  selectedPath = '';

  constructor(private navController: NavController, private router: Router) { }

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
  async openAssess(){
    this.navController.navigateForward('listanswer-admin');
  }

  logout() {
    this.navController.navigateRoot('register');
  }
}
