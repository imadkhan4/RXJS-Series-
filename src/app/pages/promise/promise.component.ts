import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  promiseVal!: any;
  dell = {
    name: 'Dell',
    hdDisk: '1 TB',
    color: 'Black'
  }
  hp = {
    name: 'HP',
    hdDisk: '2 TB',
    color: 'Silver'
  }
  notAvail = {
    name: 'Not Available',
    hdDisk: 'Not Available',
    color: 'Not Available',
  }
  constructor() { }

  isDellAvailable() {
    return true;
  }

  isHpAvailable() {
    return false;
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.isDellAvailable()) {
        return setTimeout(() => {
          // resolve('Dell  is purchased');
          resolve(this.dell)
        }, 3000);
      } else if (this.isHpAvailable()) {
        return setTimeout(() => {
          // resolve('Hp is purchased');
          resolve(this.hp)
        }, 3000);
      } else {
        return setTimeout(() => {
          // reject('No laptop found.');
          reject(this.notAvail)
        }, 3000);
      }
    });

    buyLaptop.then(res => {
      console.log('success ==>', res);
      this.promiseVal = res;
    }).catch(res => {
      console.log('failed ==>', res);
      this.promiseVal = res;
    });
  }

}
