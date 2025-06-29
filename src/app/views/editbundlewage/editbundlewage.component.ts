import { Component, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-editbundlewage',
  templateUrl: './editbundlewage.component.html',
  styleUrls: ['./editbundlewage.component.scss'],
  imports: [
    NgSelectModule, FormsModule, IonicModule, CommonModule, RouterLink, NgClass
  ]
})
export class EditbundlewageComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  pageClass = 'page-entering';

  ionViewWillEnter() {
    this.pageClass = 'page-entering';
    setTimeout(() => {
      this.pageClass = 'page-entered';
    }, 500);
  }

  currentRate: number = 6;
  newRate: number | null = null;
  submissionMessage: string = '';

  submit() {
    if (this.newRate) {
      this.submissionMessage = 'பதிவு வெற்றிகரமாக முடிந்தது!';
    } else {
      this.submissionMessage = 'தயவுசெய்து அனைத்து விவரங்களையும் நிரப்பவும்.';
    }
  }

}
