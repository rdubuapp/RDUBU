import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Answer } from 'src/app/model/answer';
import * as moment from 'moment';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-assess-bb',
  templateUrl: './assess-bb.page.html',
  styleUrls: ['./assess-bb.page.scss'],
})
export class AssessBbPage implements OnInit {

  public vomit: boolean;
  public diarrhea: boolean;
  answer: Answer = new Answer();

  constructor(private navController: NavController, private db: AngularFireDatabase) { }

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
    if (this.vomit === true) {
      this.navController.navigateForward('assess-ca');
    }
    if (this.diarrhea === true) {
      this.navController.navigateForward('assess-cb');
    }
  }

  clickCancel() {
    this.navController.navigateBack('home2');
  }

  clickVomit() {
    const time = moment().format('YYYY-MM-DD-HH:mm:ss');
    const date = moment().format('YYYY-MM-DD');
    this.answer.อุจจาระร่วงเฉียบพลัน = 'ใช่';
    this.answer.อาการแสดงเด่น = 'อาเจียนเด่น';
    this.answer.ผลลัพธ์ = 'รักษาตามอาการ เช่น การใช้ยา Domperidone, Loperamide เป็นต้น';
    this.answer.เวลา = time;
    // const itemRef = this.db.list(`Questionnaire/${date}`);
    // itemRef.push(this.answer).then(() => {
    //   this.navController.navigateForward('assess-ca');
    // });
    const itemRef = this.db.database.ref(`Questionnaire/${date}`);
    itemRef.child(`${time}`).set(this.answer).then(() => {
      this.navController.navigateForward('assess-ca');
    });
  }
  clickDiarrhea() {
    this.navController.navigateForward('assess-cb');
  }

}
