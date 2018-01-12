import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { passwordValidator, areEqualValidator } from "../shared/custom-validators";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-start-registration',
  templateUrl: './start-registration.component.html',
  styleUrls: ['./start-registration.component.css']
})
export class StartRegistrationComponent implements OnInit {
  userForm: FormGroup;
  submittedForm: boolean = false;
  selectedLang: any;

  minLngthFld: number = 4;
  maxLngthFld: number = 30;
  minLngthPsw: number = 8;

  constructor(private router: Router, private translate: TranslateService) {  }
  
  ngOnInit() {
    this.translate.addLangs(['en', 'ru']);
    this.translate.use(this.translate.currentLang || this.translate.getBrowserLang());
    this.selectedLang = this.translate.currentLang || this.translate.getBrowserLang();

    this.buildForm();
  }

  buildForm() {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(this.minLngthFld),
        Validators.maxLength(this.maxLngthFld)
      ]),
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(this.minLngthFld),
        Validators.maxLength(this.maxLngthFld)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')
      ]),
      passwordsFld: new FormGroup({
        password: new FormControl('', [
          Validators.required,
          passwordValidator,
          Validators.minLength(this.minLngthPsw),
          Validators.maxLength(this.maxLngthFld)
        ]),
        repeatPassword: new FormControl('', [
          Validators.required
        ])
      }, { validators: areEqualValidator})
    }, { updateOn: 'submit' });
  }

  onSelect(lang) {
    this.selectedLang = lang;
  }

  onSubmit(e, form) {
    this.submittedForm = true;

    if (form.valid) {
      sessionStorage.setItem('nameUser', this.userForm.controls.name.value);
      this.router.navigate(['success-registration']);
    }
  }
}
