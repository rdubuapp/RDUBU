import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { AngularFireDatabase } from '@angular/fire/database';
import { Answer } from 'src/app/model/answer';

@Component({
  selector: 'app-assess-db',
  templateUrl: './assess-db.page.html',
  styleUrls: ['./assess-db.page.scss'],
})
export class AssessDbPage implements OnInit {

  public A = false;
  public B = false;
  public C = false;
  public D = false;
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

  clickNext() { }

  clickCancel() {
    this.navController.navigateBack('home2');
  }

  async clickOK() {
    const time = moment().format('YYYY-MM-DD-HH:mm:ss');
    const date = moment().format('YYYY-MM-DD');
    switch  (true){
      case (this.A==true && this.B==false && this.C==false && this.D==true):
        this.answer.อุจจาระร่วงเฉียบพลัน = 'ใช่';
        this.answer.อาการแสดงเด่น = 'อุจจาระร่วงเด่น';
        this.answer.อาการผู้ป่วย = 'อุจจาระเหลวเป็นน้ำ';
        this.answer.ประเมินภาวะการสูญเสียน้ำ = 'ไม่อ่อนเพลีย, ไม่กระหายน้ำ และ ไม่มีภาวะปลายมือ ปลายเท้าซีด';
        this.answer.ผลลัพธ์ = 'ไม่รุนแรง หรือ รุนแรงปานกลาง ไม่จำเป็นต้องใช้ยา Antibiotics';
        this.answer.เวลา = time;
        // this.db.list(`Questionnaire/${date}`).push(this.answer).then(() => {
        //   this.navController.navigateForward('assess-ea');
        // });
        this.db.database.ref(`Questionnaire/${date}`).child(`${time}`).set(this.answer).then(() => {
          this.navController.navigateForward('assess-ea');
        });
        break;
      case (this.A==true && this.B==false && this.C==true && this.D==false):
        this.answer.อุจจาระร่วงเฉียบพลัน = 'ใช่';
        this.answer.อาการแสดงเด่น = 'อุจจาระร่วงเด่น';
        this.answer.อาการผู้ป่วย = 'อุจจาระเหลวเป็นน้ำ';
        this.answer.ประเมินภาวะการสูญเสียน้ำ = 'ไม่อ่อนเพลีย, ไม่กระหายน้ำ และ มีภาวะปลายมือ ปลายเท้าซีด';
        this.answer.ผลลัพธ์ = 'รุนแรง จำเป็นต้องใช้ยา Antibiotics';
        this.answer.เวลา = time;
        // this.db.list(`Questionnaire/${date}`).push(this.answer).then(() => {
        //   this.navController.navigateForward('assess-ec');
        // });
        this.db.database.ref(`Questionnaire/${date}`).child(`${time}`).set(this.answer).then(() => {
          this.navController.navigateForward('assess-ec');
        });
        break;
      case (this.A==false && this.B==true && this.C==false && this.D==true):
        this.answer.อุจจาระร่วงเฉียบพลัน = 'ใช่';
        this.answer.อาการแสดงเด่น = 'อุจจาระร่วงเด่น';
        this.answer.อาการผู้ป่วย = 'อุจจาระเหลวเป็นน้ำ';
        this.answer.ประเมินภาวะการสูญเสียน้ำ = 'มีอาการอ่อนเพลีย, ไม่กระหายน้ำ และ ไม่มีภาวะปลายมือ ปลายเท้าซีด';
        this.answer.ผลลัพธ์ = 'รุนแรง จำเป็นต้องใช้ยา Antibiotics';
        this.answer.เวลา = time;
        // this.db.list(`Questionnaire/${date}`).push(this.answer).then(() => {
        //   this.navController.navigateForward('assess-ec');
        // });
        this.db.database.ref(`Questionnaire/${date}`).child(`${time}`).set(this.answer).then(() => {
          this.navController.navigateForward('assess-ec');
        });
        break;
      case (this.A==false && this.B==true && this.C==true && this.D==false):
        this.answer.อุจจาระร่วงเฉียบพลัน = 'Yes';
        this.answer.อาการแสดงเด่น = 'อุจจาระร่วงเด่น';
        this.answer.อาการผู้ป่วย = 'อุจจาระเหลวเป็นน้ำ';
        this.answer.ประเมินภาวะการสูญเสียน้ำ = 'มีอาการอ่อนเพลีย, ถ่ายแต่ละครั้งมีปริมาณมาก และ มีภาวะปลายมือ ปลายเท้าซีด';
        this.answer.ผลลัพธ์ = 'รุนแรง จำเป็นต้องใช้ยา Antibiotics';
        this.answer.เวลา = time;
        // this.db.list(`Questionnaire/${date}`).push(this.answer).then(() => {
        //   this.navController.navigateForward('assess-ec');
        // });
        this.db.database.ref(`Questionnaire/${date}`).child(`${time}`).set(this.answer).then(() => {
          this.navController.navigateForward('assess-ec');
        });
        break;
      case (this.A==true && this.B==false && this.C==false && this.D==false):
        this.answer.อุจจาระร่วงเฉียบพลัน = 'ใช่';
        this.answer.อาการแสดงเด่น = 'อุจจาระร่วงเด่น';
        this.answer.อาการผู้ป่วย = 'อุจจาระเหลวเป็นน้ำ';
        this.answer.ประเมินภาวะการสูญเสียน้ำ = 'ไม่อ่อนเพลีย, ไม่กระหายน้ำ';
        this.answer.ผลลัพธ์ = 'ไม่รุนแรง หรือ รุนแรงปานกลาง ไม่จำเป็นต้องใช้ยา Antibiotics';
        this.answer.เวลา = time;
        // this.db.list(`Questionnaire/${date}`).push(this.answer).then(() => {
        //   this.navController.navigateForward('assess-ea');
        // });
        this.db.database.ref(`Questionnaire/${date}`).child(`${time}`).set(this.answer).then(() => {
          this.navController.navigateForward('assess-ea');
        });
        break;
      case (this.A==false && this.B==true && this.C==false && this.D==false):
        this.answer.อุจจาระร่วงเฉียบพลัน = 'ใช่';
        this.answer.อาการแสดงเด่น = 'อุจจาระร่วงเด่น';
        this.answer.อาการผู้ป่วย = 'อุจจาระเหลวเป็นน้ำ';
        this.answer.ประเมินภาวะการสูญเสียน้ำ = 'มีอาการอ่อนเพลีย, ถ่ายแต่ละครั้งมีปริมาณมาก';
        this.answer.ผลลัพธ์ = 'รุนแรง จำเป็นต้องใช้ยา Antibiotics';
        this.answer.เวลา = time;
        // this.db.list(`Questionnaire/${date}`).push(this.answer).then(() => {
        //   this.navController.navigateForward('assess-ec');
        // });
        this.db.database.ref(`Questionnaire/${date}`).child(`${time}`).set(this.answer).then(() => {
          this.navController.navigateForward('assess-ec');
        });
        break;
      case (this.A==false && this.B==false && this.C==true && this.D==false):
        this.answer.อุจจาระร่วงเฉียบพลัน = 'ใช่';
        this.answer.อาการแสดงเด่น = 'อุจจาระร่วงเด่น';
        this.answer.อาการผู้ป่วย = 'อุจจาระเหลวเป็นน้ำ';
        this.answer.ประเมินภาวะการสูญเสียน้ำ = 'มีภาวะปลายมือ ปลายเท้าซีด';
        this.answer.ผลลัพธ์ = 'รุนแรง จำเป็นต้องใช้ยา Antibiotics';
        this.answer.เวลา = time;
        // this.db.list(`Questionnaire/${date}`).push(this.answer).then(() => {
        //   this.navController.navigateForward('assess-ec');
        // });
        this.db.database.ref(`Questionnaire/${date}`).child(`${time}`).set(this.answer).then(() => {
          this.navController.navigateForward('assess-ec');
        });
        break;
      case (this.A==false && this.B==false && this.C==false && this.D==true):
        this.answer.อุจจาระร่วงเฉียบพลัน = 'ใช่';
        this.answer.อาการแสดงเด่น = 'อุจจาระร่วงเด่น';
        this.answer.อาการผู้ป่วย = 'อุจจาระเหลวเป็นน้ำ';
        this.answer.ประเมินภาวะการสูญเสียน้ำ = 'ไม่มีภาวะปลายมือ ปลายเท้าซีด';
        this.answer.ผลลัพธ์ = 'ไม่รุนแรง หรือ รุนแรงปานกลาง ไม่จำเป็นต้องใช้ยา Antibiotics';
        this.answer.เวลา = time;
        // this.db.list(`Questionnaire/${date}`).push(this.answer).then(() => {
        //   this.navController.navigateForward('assess-ea');
        // });
        this.db.database.ref(`Questionnaire/${date}`).child(`${time}`).set(this.answer).then(() => {
          this.navController.navigateForward('assess-ea');
        });
        break;
    }
  }

}
