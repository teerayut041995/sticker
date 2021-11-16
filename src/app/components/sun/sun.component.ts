import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sun',
  templateUrl: './sun.component.html',
  styleUrls: ['./sun.component.scss']
})
export class SunComponent implements OnInit {

  public options: Options[] = [
    {
      link: 'hot',
      name: 'พัดลม',
      image: '/assets/happening/fan.png'
    },
    {
      link: 'hot',
      name: 'แอร์',
      image: '/assets/happening/air.png'
    },
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
