import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-b',
  templateUrl: './info-b.page.html',
  styleUrls: ['./info-b.page.scss'],
})
export class InfoBPage implements OnInit {

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
