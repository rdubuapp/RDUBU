import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { AngularFireDatabase } from '@angular/fire/database';
import { Answer } from 'src/app/model/answer';

@Component({
  selector: 'app-assess-da',
  templateUrl: './assess-da.page.html',
  styleUrls: ['./assess-da.page.scss'],
})
export class AssessDaPage implements OnInit {

  public yes: boolean;
  public no: boolean;
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
    if (this.yes === true) {
      this.navController.navigateForward('assess-ba');
    }
    if (this.no === true) {
      this.navController.navigateForward('assess-e');
    }
  }

  clickCancel() {
    this.navController.navigateBack('home2');
  }

  clickYes() {
    const time = moment().format('YYYY-MM-DD-HH:mm:ss');
    const date = moment().format('YYYY-MM-DD');
    this.answer.อุจจาระร่วงเฉียบพลัน = 'ใช่';
    this.answer.อาการแสดงเด่น = 'อุจจาระร่วงเด่น';
    this.answer.อาการผู้ป่วย = 'ถ่ายมีเป็นมูกหรือมีเลือดปน';
    this.answer.อุจจาระร่วงจากการเดินทาง = 'ใช่';
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

  clickNo() {
    const time = moment().format('YYYY-MM-DD-HH:mm:ss');
    const date = moment().format('YYYY-MM-DD');
    this.answer.อุจจาระร่วงเฉียบพลัน = 'ใช่';
    this.answer.อาการแสดงเด่น = 'อุจจาระร่วงเด่น';
    this.answer.อาการผู้ป่วย = 'ถ่ายมีเป็นมูกหรือมีเลือดปน';
    this.answer.อุจจาระร่วงจากการเดินทาง = 'ไม่ใช่';
    this.answer.ผลลัพธ์ = 'พิจารณาการใช้ยา Antibiotics ร่วมกับ ORS เพื่อป้องกันการรักษาภาวะขาดน้ำและเกลือแร่';
    this.answer.เวลา = time;
    // const itemRef = this.db.list(`Questionnaire/${date}`);
    // itemRef.push(this.answer).then(() => {
    //   this.navController.navigateForward('assess-e');
    // });
    const itemRef = this.db.database.ref(`Questionnaire/${date}`);
    itemRef.child(`${time}`).set(this.answer).then(() => {
      this.navController.navigateForward('assess-e');
    });
  }

}
