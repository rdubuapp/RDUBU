import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-e',
  templateUrl: './info-e.page.html',
  styleUrls: ['./info-e.page.scss'],
})
export class InfoEPage implements OnInit {

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
