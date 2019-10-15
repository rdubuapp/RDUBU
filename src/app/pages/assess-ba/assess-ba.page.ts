import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-assess-ba',
  templateUrl: './assess-ba.page.html',
  styleUrls: ['./assess-ba.page.scss'],
})
export class AssessBaPage implements OnInit {

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
