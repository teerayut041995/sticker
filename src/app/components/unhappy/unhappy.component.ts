import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unhappy',
  templateUrl: './unhappy.component.html',
  styleUrls: ['./unhappy.component.scss']
})
export class UnhappyComponent implements OnInit {

  public happening: Happening[] = [
    {
      link: 'sad',
      name: 'รู้สึกไม่ชอบ',
      image: '/assets/happening/sad.png'
    },
    {
      link: 'bed',
      name: 'เตียงนอน',
      image: '/assets/happening/bed.png'
    },
    {
      link: 'sick',
      name: 'มีไข้',
      image: '/assets/happening/thermometer.png'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

interface Happening {
  link: string;
  name: string,
  image: string,
}