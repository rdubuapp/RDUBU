import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-assess-cb',
  templateUrl: './assess-cb.page.html',
  styleUrls: ['./assess-cb.page.scss'],
})
export class AssessCbPage implements OnInit {

  public blood: boolean;
  public watery: boolean;

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

  clickNext() {
    if (this.blood === true) {
      this.navController.navigateForward('assess-da');
    }
    if (this.watery === true) {
      this.navController.navigateForward('assess-db');
    }
  }

  clickCancel() {
    this.navController.navigateBack('home2');
  }

  clickBlood() {
    this.navController.navigateForward('assess-da');
  }
  clickWatery() {
    this.navController.navigateForward('assess-db');
  }

}
