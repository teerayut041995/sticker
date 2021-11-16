import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noon',
  templateUrl: './noon.component.html',
  styleUrls: ['./noon.component.scss']
})
export class NoonComponent implements OnInit {

  public options: Options[] = [
    {
      link: 'hungry',
      name: 'ข้าว',
      image: '/assets/options/rice.png'
    },
    {
      link: 'hungry',
      name: 'ขนม',
      image: '/assets/options/candy.png'
    },
    {
      link: 'hungry',
      name: 'นม',
      image: '/assets/options/milk.png'
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