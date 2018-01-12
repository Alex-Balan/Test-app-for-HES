import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-success-registration',
  templateUrl: './success-registration.component.html',
  styleUrls: ['./success-registration.component.css']
})
export class SuccessRegistrationComponent implements OnInit {
  nameUser: string;
  selectedLang: any;

  constructor(private router: Router, private translate: TranslateService) { }

  ngOnInit() {
    this.selectedLang = this.translate.currentLang;
    this.nameUser = sessionStorage.getItem('nameUser');
  }

  onSelect(lang) {
    this.selectedLang = lang;
  }

  goBack() {
    this.router.navigate(['start-registration']);
  }
}
