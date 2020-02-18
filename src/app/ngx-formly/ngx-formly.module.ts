import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

import { NgxFormlyRoutingModule } from './ngx-formly-routing.module';
import { NgxFormlyComponent } from './ngx-formly.component';
import { NgSimpleAlertModule } from 'ng-simple-alert_p';


@NgModule({
  declarations: [NgxFormlyComponent],
  imports: [
    CommonModule,
    NgxFormlyRoutingModule,
    ReactiveFormsModule,
    NgSimpleAlertModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyBootstrapModule,
  ]
})
export class NgxFormlyModule { }
