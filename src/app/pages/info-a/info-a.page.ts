import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-a',
  templateUrl: './info-a.page.html',
  styleUrls: ['./info-a.page.scss'],
})
export class InfoAPage implements OnInit {

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
