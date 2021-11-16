import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tired',
  templateUrl: './tired.component.html',
  styleUrls: ['./tired.component.scss']
})
export class TiredComponent implements OnInit {

  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  toggleVideo() {
      this.videoPlayer.nativeElement.play();
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
