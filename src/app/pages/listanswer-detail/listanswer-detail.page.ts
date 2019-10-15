import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Answer } from 'src/app/model/answer';
import { NavController, NavParams } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listanswer-detail',
  templateUrl: './listanswer-detail.page.html',
  styleUrls: ['./listanswer-detail.page.scss'],
})
export class ListanswerDetailPage implements OnInit {

  dataa: any;
  datas: any;
  item: Observable<any>;
  keys: any;
  key: Array<Observable<any>>;

  test: Observable<any>;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private router: Router, public navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      if (params && params.date) {
        this.dataa = JSON.parse(params.date);

      }
      this.item = this.db.list(`Questionnaire/${this.dataa}/`).snapshotChanges();
      this.item.subscribe((data) => {
        this.key = data;
        console.log(data);
      });

      this.test = this.db.list(`Questionnaire/${this.dataa}/`).snapshotChanges();
      // this.test.subscribe(data => {
      //   console.log(data);
      // });

      this.itemsRef = db.list(`Questionnaire/${this.dataa}/`);
      // Use snapshotChanges().map() to store the key
      this.items = this.itemsRef.snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );

    });
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

  findDetail(key: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        date: JSON.stringify(this.dataa),
        key: JSON.stringify(key),
      }
    };

    this.router.navigate(['listanswer-result'], navigationExtras);
    // this.navController.navigateForward('listanswer-admin');
  }
}
