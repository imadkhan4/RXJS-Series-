import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  operators = [
    {
      title: 'Promise',
      link: 'promise'
    },
    {
      title: 'Async & Await',
      link: 'async-await'

    },
    {
      title: 'Form Event',
      link: 'form-event'

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
