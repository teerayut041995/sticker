import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-happy',
  templateUrl: './happy.component.html',
  styleUrls: ['./happy.component.scss']
})
export class HappyComponent implements OnInit {

  public options: Options[] = [
    {
      link: 'good',
      name: 'มีความสุข',
      image: '/assets/options/happy.jpg'
    },
    {
      link: 'like',
      name: 'ชอบมาก',
      image: '/assets/options/like.jpg'
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