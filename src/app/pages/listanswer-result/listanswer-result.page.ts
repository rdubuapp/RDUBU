import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Router, ActivatedRoute, NavigationExtras} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Answer } from 'src/app/model/answer';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-listanswer-result',
  templateUrl: './listanswer-result.page.html',
  styleUrls: ['./listanswer-result.page.scss'],
})
export class ListanswerResultPage implements OnInit {
  dataa: string;
  datas: string;
  item: Observable<any>;
  keys: string;
  answer = {} as Answer;
  result: string;
  items: Observable<any>;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private router: Router, public navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      if (params && params.key && params.date) {
        this.keys = JSON.parse(params.key);
        this.dataa = JSON.parse(params.date);
      }
      this.item = this.db.list(`Questionnaire/${this.dataa}/${this.keys}`).snapshotChanges();
      this.item.subscribe((data) => {
        console.log(data);
        this.result = data;
        // console.log(JSON.stringify(data));
      });
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
}
