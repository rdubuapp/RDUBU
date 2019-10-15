import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async openAssess() {
    this.navController.navigateForward('assess-a');
  }
  async openInfo() {
    this.navController.navigateForward('info');
  }
  async openSuggest() {
    this.navController.navigateForward('suggest');
  }
  async openAbout() {
    this.navController.navigateForward('about');
  }

}
