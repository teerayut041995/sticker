import { Component, OnInit, ViewChild, ElementRef , TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { allIcons } from 'ngx-bootstrap-icons';
import { SharedAnimations } from 'src/assets/animations/shared-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SharedAnimations]
})
export class AppComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  starter: boolean = true;
  content: boolean = false;
  isPlay: boolean = false;
  title = 'sticker';

  public select: Sticker;

  public sticker: Sticker[] = [
    {
      name: 'ห้องน้ำ',
      path: '/assets/video/video-1.mp4',
      image: '/assets/gif/sticker-1.jpg'
    },
    {
      name: 'เสียใจนะ',
      path: '/assets/video/video-2.mp4',
      image: '/assets/gif/sticker-2.jpg'
    },
    {
      name: 'ปวดหัวจังเลย',
      path: '/assets/video/video-3.mp4',
      image: '/assets/gif/sticker-3.jpg'
    },
    {
      name: 'เหนื่อยจัง',
      path: '/assets/video/video-4.mp4',
      image: '/assets/gif/sticker-4.jpg'
    },
    {
      name: 'ไม่ค่ะ',
      path: '/assets/video/video-5.mp4',
      image: '/assets/gif/sticker-5.jpg'
    },
    {
      name: 'ชอบมากเลยค่ะ',
      path: '/assets/video/video-6.mp4',
      image: '/assets/gif/sticker-6.jpg'
    },
    {
      name: 'ร้อนจังเลย',
      path: '/assets/video/video-7.mp4',
      image: '/assets/gif/sticker-7.jpg'
    },
    {
      name: 'เค้าโกรธแล้วนะ',
      path: '/assets/video/video-8.mp4',
      image: '/assets/gif/sticker-8.jpg'
    },
    {
      name: 'หิวจังเลย',
      path: '/assets/video/video-9.mp4',
      image: '/assets/gif/sticker-9.jpg'
    },
    {
      name: 'ดีใจจังเลย',
      path: '/assets/video/video-10.mp4',
      image: '/assets/gif/sticker-10.jpg'
    }
  ];
  // public image: string = '/assets/images/sticker-1.gif';

  constructor(private modalService: BsModalService) { }


  ngOnInit(): void {
    
    // Feather.replace();
    setTimeout (() => {
      this.starter = false;
    }, 2400);
      setTimeout (() => {
        this.content = true;
    }, 2600);
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
      top: 110, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  scrollDown(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg modal-dialog-centered'});
  }

}

interface Sticker {
  name: string,
  path: string,
  image: string,
}
