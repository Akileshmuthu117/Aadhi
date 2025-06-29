import { Component, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  imports: [
    NgSelectModule, FormsModule, IonicModule, CommonModule, RouterLink, NgClass
  ]
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  pageClass = 'page-entering';

  ionViewWillEnter() {
    this.pageClass = 'page-entering';
    setTimeout(() => {
      this.pageClass = 'page-entered';
    }, 500);
  }

  empName: string = "";
  mobileNo: string = "";
  empLoc: number | null = null;
  locationList = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' }
  ];

  submissionMessage: string = '';

  submit() {
    if (this.empName && this.mobileNo && this.empLoc) {
      this.submissionMessage = 'பதிவு வெற்றிகரமாக முடிந்தது!';
    } else {
      this.submissionMessage = 'தயவுசெய்து அனைத்து விவரங்களையும் நிரப்பவும்.';
    }
  }

}
