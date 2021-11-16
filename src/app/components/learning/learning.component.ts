import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {

  public happening: Happening[] = [
    {
      link: 'happy',
      name: 'มีความสุข',
      image: '/assets/happening/smile.png'
    },
    {
      link: 'noon',
      name: 'ตอนเที่ยงวัน',
      image: '/assets/happening/clock.png'
    },
    {
      link: 'sun',
      name: 'อากาศร้อน',
      image: '/assets/happening/sun.png'
    },
    {
      link: 'bathroom',
      name: 'ห้องน้ำ',
      image: '/assets/happening/bathroom.png'
    },
    {
      link: 'play',
      name: 'ของเล่น',
      image: '/assets/happening/play.png'
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
