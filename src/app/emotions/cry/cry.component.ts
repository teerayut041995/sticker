import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cry',
  templateUrl: './cry.component.html',
  styleUrls: ['./cry.component.scss']
})
export class CryComponent implements OnInit {

  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  toggleVideo() {
      this.videoPlayer.nativeElement.play();
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
