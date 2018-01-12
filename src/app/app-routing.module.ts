import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StartRegistrationComponent } from './registration/start-registration/start-registration.component';

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: '',
            redirectTo: 'start-registration',
            pathMatch: 'full'
        },
        {
            path: 'start-registration',
            component: StartRegistrationComponent
        }
    ])
],
    exports: [RouterModule]
})
export class AppRoutingModule { }