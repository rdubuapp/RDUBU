import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-assess-ec',
  templateUrl: './assess-ec.page.html',
  styleUrls: ['./assess-ec.page.scss'],
})
export class AssessEcPage implements OnInit {

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
