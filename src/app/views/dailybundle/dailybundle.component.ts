import { Component, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController } from '@ionic/angular';
import { CommonModule, NgClass } from '@angular/common';  
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dailybundle',
  templateUrl: './dailybundle.component.html',
  styleUrls: ['./dailybundle.component.scss'],
  imports: [
    NgSelectModule, FormsModule, IonicModule, CommonModule, RouterLink, NgClass
  ]
})  
export class DailybundleComponent  implements OnInit {

  options = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Date' },
  { id: 5, name: 'Elderberry' }
];
  
  employee: number | null = null;
  leafCount: number | null = null;
  selectedDate = 'today';
  submissionMessage = '';
  isSuccess = false;
  isError = false;
  

  constructor(private loadingCtrl: LoadingController) { 
  }
  ngOnInit(){

  }
/*
  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      spinner: 'circles'
    });
    await loading.present();
    await loading.onDidDismiss();
  }
*/

  pageClass = 'page-entering';

  ionViewWillEnter() {
    this.pageClass = 'page-entering';
    setTimeout(() => {
      this.pageClass = 'page-entered';
    }, 500);
  }

  selectDate(value: string) {
    this.selectedDate = value;
  }

  submit() {
    if (!this.employee || this.leafCount === null || this.leafCount < 0) {
      this.submissionMessage = 'தயவு செய்து செல்லுபடியாகும் விவரங்களை உள்ளிடவும்.';
    } else {
      this.submissionMessage = 'விவரங்கள் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!';
    }
  }

}
