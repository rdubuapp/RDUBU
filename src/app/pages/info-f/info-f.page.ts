import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-f',
  templateUrl: './info-f.page.html',
  styleUrls: ['./info-f.page.scss'],
})
export class InfoFPage implements OnInit {

  constructor() { }

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
