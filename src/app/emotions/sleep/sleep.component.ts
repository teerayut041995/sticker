import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.scss']
})
export class SleepComponent implements OnInit {

  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  toggleVideo() {
      this.videoPlayer.nativeElement.play();
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
