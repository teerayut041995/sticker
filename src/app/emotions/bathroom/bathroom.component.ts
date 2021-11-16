import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrls: ['./bathroom.component.scss']
})
export class BathroomComponent implements OnInit {

  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  toggleVideo() {
      this.videoPlayer.nativeElement.play();
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
