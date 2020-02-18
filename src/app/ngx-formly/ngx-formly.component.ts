import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {NgSimpleAlertService,NgSimpleAlertComponent } from 'ng-simple-alert_p'
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ngx-formly',
  templateUrl: './ngx-formly.component.html',
  styleUrls: ['./ngx-formly.component.css']
})
export class NgxFormlyComponent implements OnInit {
  constructor(private alertService: NgSimpleAlertService) {}

  public createSuccessMessage(): void {
    this.alertService.createSuccessAlert('Sample success message');
  }

  public createDangerMessage(): void {
    this.alertService.createDangerAlert('Sample danger message');
  }

  public createWarningMessage(): void {
    this.alertService.createWarningAlert('Sample warning message');
  }

  public createInfoMessage(): void {
    this.alertService.createInfoAlert('Sample info message');
  }
  ngOnInit() { }
  // constructor() { }

  // ngOnInit() {
  // }
  // form = new FormGroup({});
  // model = { email: 'email@gmail.com', firstName:'Bandaru Pradeep' };
  // options: FormlyFormOptions = {};
  // fields: FormlyFieldConfig[] = [{
  //   key: 'email',
  //   type: 'input',
  //   className:'col-sm-6',
  //   templateOptions: {
  //     label: 'Email address',
  //     placeholder: 'Enter email',
  //     required: true,
  //   }
  // },
  // {
  //   key: 'firstName',
  //   type: 'input',
  //   className:'col-sm-6',
  //   templateOptions: {
  //     label: 'First Name',
  //     placeholder: 'Enter First Name',
  //     required: true,
  //   }
  // }];

  // submit(model) {
  //   console.log(model);
  // }
}
