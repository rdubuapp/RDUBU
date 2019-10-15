import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

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
  async openAssess() {
    this.navController.navigateForward('listanswer-admin');
  }

}
