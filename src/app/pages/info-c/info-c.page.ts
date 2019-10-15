import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-c',
  templateUrl: './info-c.page.html',
  styleUrls: ['./info-c.page.scss'],
})
export class InfoCPage implements OnInit {

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
