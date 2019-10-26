import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Answer } from 'src/app/model/answer';
import * as firebase from 'firebase';
import { NavController, NavParams } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ListanswerDetailPage } from '../listanswer-detail/listanswer-detail.page';

@Component({
  selector: 'app-listanswer-admin',
  templateUrl: './listanswer-admin.page.html',
  styleUrls: ['./listanswer-admin.page.scss'],
})
export class ListanswerAdminPage implements OnInit {

  items: Array<Observable<any>>;
  item: Observable<any>;
  item2: Observable<any>;
  answer = {} as Answer;
  d: Observable<any>;
  os: Observable<any>;
  ov: Observable<any>;
  ls: Observable<any>;
  lv: Observable<any>;

  result: Observable<any>;

  constructor(private db: AngularFireDatabase, private navCtrl: NavController, private router: Router) {

    // this.item = this.db.list(`Questionnaire/`).snapshotChanges();
    // this.item.subscribe((data) => {
    //   console.log(data);
    //   this.items = data;
    //   console.log(this.items);
    // });

    // this.os = this.db.object(`Questionnaire/`).snapshotChanges();
    // this.os.subscribe(data =>
    //   console.log(data)
    // );
    // this.ov = this.db.object(`Questionnaire/`).valueChanges();
    // this.ov.subscribe(data =>
    //   console.log(data)
    // );
    this.ls = this.db.list(`Questionnaire/`).snapshotChanges();
  }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  open(key: string) {
    // console.log(key)
    const navigationExtras: NavigationExtras = {
      queryParams: {
        date: JSON.stringify(key)
      }
    };

    this.router.navigate(['listanswer-detail'], navigationExtras);
    // this.navController.navigateForward('listanswer-admin');
  }

  goTo(key: string) {
    this.navCtrl.navigateForward('listanswer-detail');
  }


}
