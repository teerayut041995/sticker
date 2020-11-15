import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sticker';

  public select: Sticker;

  public sticker: Sticker[] = [
    {
      id: '1',
      name: 'หิว',
      path: '/assets/images/sticker-1.gif'
    },
    {
      id: '2',
      name: 'ดีใจ',
      path: '/assets/images/sticker-2.gif'
    },
    {
      id: '2',
      name: 'โกรธ',
      path: '/assets/images/sticker-3.gif'
    }
  ];
  public image: string = '/assets/images/sticker-1.gif';
  constructor() { }

  ngOnInit(): void {

  }

  selectSticker(sticker) {
    this.select = sticker;
    console.log(this.select);
  }

  clearSticker() {
    this.select = null;
  }

}

interface Sticker {
  id: string,
  name: string,
  path: string
}
