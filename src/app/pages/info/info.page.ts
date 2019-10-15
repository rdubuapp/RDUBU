import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { InfoAPage } from '../info-a/info-a.page';
import { InfoBPage } from '../info-b/info-b.page';
import { InfoCPage } from '../info-c/info-c.page';
import { InfoDPage } from '../info-d/info-d.page';
import { InfoEPage } from '../info-e/info-e.page';
import { InfoFPage } from '../info-f/info-f.page';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(public modalController: ModalController, private navController: NavController, private router: Router) { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  openA() {
    this.navController.navigateForward('info-a');
  }
  openB() {
    this.navController.navigateForward('info-b');
  }
  openC() {
    this.navController.navigateForward('info-c');
  }
  openD() {
    this.navController.navigateForward('info-d');
  }
  openE() {
    this.navController.navigateForward('info-e');
  }
  openF() {
    this.navController.navigateForward('info-f');
  }


  async openModalA() {
    const modal = await this.modalController.create({
      component: InfoAPage
    });
    return await modal.present();
  }
  async openModalB() {
    const modal = await this.modalController.create({
      component: InfoBPage
    });
    return await modal.present();
  }
  async openModalC() {
    const modal = await this.modalController.create({
      component: InfoCPage
    });
    return await modal.present();
  }
  async openModalD() {
    const modal = await this.modalController.create({
      component: InfoDPage
    });
    return await modal.present();
  }
  async openModalE() {
    const modal = await this.modalController.create({
      component: InfoEPage
    });
    return await modal.present();
  }
  async openModalF() {
    const modal = await this.modalController.create({
      component: InfoFPage
    });
    return await modal.present();
  }

}
