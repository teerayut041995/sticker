import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  public options: Options[] = [
    {
      link: 'toy',
      name: 'ลูกบอล',
      image: '/assets/options/ball.png'
    },
    {
      link: 'toy',
      name: 'ตุ๊กตา',
      image: '/assets/options/doll.png'
    },
    {
      link: 'toy',
      name: 'รถของเล่น',
      image: '/assets/options/car.png'
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
