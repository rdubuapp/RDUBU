import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listanswer',
  templateUrl: './listanswer.page.html',
  styleUrls: ['./listanswer.page.scss'],
})
export class ListanswerPage implements OnInit {

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
