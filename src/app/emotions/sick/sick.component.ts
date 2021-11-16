import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sick',
  templateUrl: './sick.component.html',
  styleUrls: ['./sick.component.scss']
})
export class SickComponent implements OnInit {

  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  toggleVideo() {
      this.videoPlayer.nativeElement.play();
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
