import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-assess-eb',
  templateUrl: './assess-eb.page.html',
  styleUrls: ['./assess-eb.page.scss'],
})
export class AssessEbPage implements OnInit {

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

  clickHome() {
    this.navController.navigateBack('home2');
  }

}
