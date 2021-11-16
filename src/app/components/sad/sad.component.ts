import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sad',
  templateUrl: './sad.component.html',
  styleUrls: ['./sad.component.scss']
})
export class SadComponent implements OnInit {

  public options: Options[] = [
    {
      link: 'dont',
      name: 'ไม่ค่ะ',
      image: '/assets/options/dont.jpg'
    },
    {
      link: 'angry',
      name: 'โกรธแล้วนะ',
      image: '/assets/options/angry.jpg'
    },
    {
      link: 'cry',
      name: 'เสียใจนะ',
      image: '/assets/options/cry.jpg'
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