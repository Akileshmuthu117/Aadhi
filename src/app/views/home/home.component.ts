import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterLink, IonicModule, NgClass]
})
export class HomeComponent implements OnInit {

  menuList: any;

  constructor() { }

  ngOnInit() {
    this.menuList = [
      { title: 'தினசரி கத்தை விவர உள்ளீடு', url: '/dailybundle' },
      { title: 'தற்காலிக முன்பண விவர உள்ளீடு', url: '/tempadvance' },
      { title: 'நிரந்தர முன்பண விவர உள்ளீடு', url: '/permadvance' },
      { title: 'New Employee Creation', url: '/employee' },
    ];

  }

  pageClass = 'page-entering';

  ionViewWillEnter() {
    this.pageClass = 'page-entering';
    setTimeout(() => {
      this.pageClass = 'page-entered';
    }, 500);
  }

}
