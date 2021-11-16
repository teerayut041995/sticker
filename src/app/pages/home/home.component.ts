import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  starter: boolean = true;

  public student: Student[] = [
    {
      link: 'learning',
      name: 'กำลังเรียน',
      image: '/assets/student/learning.png'
    },
    // {
    //   link: 'happy',
    //   name: 'มีความสุข',
    //   image: '/assets/student/happy.png'
    // },
    {
      link: 'unhappy',
      name: 'รู้สึกไม่มีความสุข',
      image: '/assets/student/feelbad.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout (() => {
      this.starter = false;
    }, 2400);
  }

}

interface Student {
  link: string;
  name: string,
  image: string,
}
