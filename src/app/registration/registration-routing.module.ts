import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StartRegistrationComponent } from './start-registration/start-registration.component';
import { SuccessRegistrationComponent } from './success-registration/success-registration.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                redirectTo: 'start-registration',
                pathMatch: 'full'
            },
            {
                path: 'start-registration',
                component: StartRegistrationComponent
            },
            {
                path: 'success-registration',
                component: SuccessRegistrationComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class RegistrationRoutingModule { }