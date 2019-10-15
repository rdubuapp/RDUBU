import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-d',
  templateUrl: './info-d.page.html',
  styleUrls: ['./info-d.page.scss'],
})
export class InfoDPage implements OnInit {

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
