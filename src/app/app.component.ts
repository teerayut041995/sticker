import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  title = 'sticker';

  public select: Sticker;

  public sticker: Sticker[] = [
    {
      name: 'ห้องน้ำ',
      path: '/assets/video/video-1.mp4',
      gif: '/assets/gif/sticker-1.gif'
    },
    {
      name: 'เสียใจนะ',
      path: '/assets/video/video-2.mp4',
      gif: '/assets/gif/sticker-2.gif'
    },
    {
      name: 'ปวดหัวจังเลย',
      path: '/assets/video/video-3.mp4',
      gif: '/assets/gif/sticker-3.gif'
    },
    {
      name: 'เหนื่อยจัง',
      path: '/assets/video/video-4.mp4',
      gif: '/assets/gif/sticker-4.gif'
    },
    {
      name: 'ไม่ค่ะ',
      path: '/assets/video/video-5.mp4',
      gif: '/assets/gif/sticker-5.gif'
    },
    {
      name: 'ชอบมากเลยค่ะ',
      path: '/assets/video/video-6.mp4',
      gif: '/assets/gif/sticker-6.gif'
    },
    {
      name: 'ร้อนจังเลย',
      path: '/assets/video/video-7.mp4',
      gif: '/assets/gif/sticker-7.gif'
    },
    {
      name: 'เค้าโกรธแล้วนะ',
      path: '/assets/video/video-8.mp4',
      gif: '/assets/gif/sticker-8.gif'
    },
    {
      name: 'หิวจังเลย',
      path: '/assets/video/video-9.mp4',
      gif: '/assets/gif/sticker-9.gif'
    },
    {
      name: 'ดีใจจังเลย',
      path: '/assets/video/video-10.mp4',
      gif: '/assets/gif/sticker-10.gif'
    }
  ];
  public image: string = '/assets/images/sticker-1.gif';

  constructor() { }

  ngOnInit(): void {
    Feather.replace();
  }

  selectSticker(sticker) {
    this.select = sticker;
    console.log(this.select);
    this.toggleVideo();
  }

  clearSticker() {
    this.select = null;
  }

  toggleVideo() {
    this.videoplayer?.nativeElement.play();
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  scrollDown(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}

interface Sticker {
  name: string,
  path: string,
  gif: string,
}
