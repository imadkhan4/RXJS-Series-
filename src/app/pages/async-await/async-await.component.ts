import { promise } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit {

  promise: any;
  constructor() { }

  ngOnInit(): void {

    this.promise = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve('Data Received');
      }, 2000);

    });


    this.getData();
  }

  async getData() {
    let response = await this.promise;
    console.log(response)
  }

}
