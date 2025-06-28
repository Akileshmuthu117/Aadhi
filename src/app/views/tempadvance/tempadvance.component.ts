import { Component, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tempadvance',
  templateUrl: './tempadvance.component.html',
  styleUrls: ['./tempadvance.component.scss'],
  imports: [
    NgSelectModule, FormsModule, IonicModule, CommonModule, RouterLink, NgClass
  ]
})
export class TempadvanceComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  pageClass = 'page-entering';

  ionViewWillEnter() {
    this.pageClass = 'page-entering';
    setTimeout(() => {
      this.pageClass = 'page-entered';
    }, 500);
  }

  employeeData = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' }
  ];

  advanceTypes = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' }
  ];

  employee: number | null = null;
  selectedAdvance: number | null = null;
  amount: number | null = null;

  selectedDate = 'today';
  messageText = '';
  messageColor = 'red';

  selectDate(value: string) {
    this.selectedDate = value;
  }

  submit() {
    if (!this.employee || !this.amount || !this.selectedAdvance) {
      this.messageText = 'எல்லா விவரங்களையும் உள்ளிடவும்!';
      this.messageColor = 'red';
      return;
    }

    this.messageText = 'விவரங்கள் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டன!';
    this.messageColor = 'green';

    // this.formData = { worker: '', date: '', amount: null };
  }
}