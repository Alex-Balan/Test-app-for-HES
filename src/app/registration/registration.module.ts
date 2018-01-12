import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';

import { StartRegistrationComponent } from './start-registration/start-registration.component';
import { SuccessRegistrationComponent } from './success-registration/success-registration.component';

export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [StartRegistrationComponent, SuccessRegistrationComponent]
})
export class RegistrationModule { }
