import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import * as moment from 'moment';
import { AngularFireDatabase } from '@angular/fire/database';
import { Answer } from 'src/app/model/answer';

@Component({
  selector: 'app-assess-a',
  templateUrl: './assess-a.page.html',
  styleUrls: ['./assess-a.page.scss'],
})
export class AssessAPage implements OnInit {

  public checkY = false;
  public checkN = false;
  public database = firebase.database();
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
    if (this.checkY === true) {
      this.navController.navigateForward('assess-bb');
    }
    if (this.checkN === true) {
      this.navController.navigateForward('assess-ba');
    }
  }

  clickCancel() {
    this.navController.navigateBack('home2');
  }

  clickYes() {
    this.navController.navigateForward('assess-bb');
  }
  clickNo() {
    const time = moment().format('YYYY-MM-DD-HH:mm:ss');
    const date = moment().format('YYYY-MM-DD');
    this.answer.อุจจาระร่วงเฉียบพลัน = 'ไม่ใช่';
    this.answer.ผลลัพธ์ = 'แนะนำให้ผู้รับบริการไปพบแพทย์ใกล้บ้านทันที เพื่อหาสาเหตุที่ชัดเจน';
    this.answer.เวลา = time;
    // const itemRef = this.db.list(`Questionnaire/${date}`);
    // itemRef.push(this.answer).then(() => {
    //   this.navController.navigateForward('assess-ba');
    // });
    const itemRef = this.db.database.ref(`Questionnaire/${date}`);
    itemRef.child(`${time}`).set(this.answer).then(() => {
      this.navController.navigateForward('assess-ba');
    });
  }

}

