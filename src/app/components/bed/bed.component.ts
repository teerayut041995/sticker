import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.scss']
})
export class BedComponent implements OnInit {

  public options: Options[] = [
    {
      link: 'tired',
      name: 'เหนื่อย',
      image: '/assets/options/tired.jpg'
    },
    {
      link: 'sleep',
      name: 'ง่วง',
      image: '/assets/options/sleep.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

interface Options {
  link: string;
  name: string,
  image: string,
}
