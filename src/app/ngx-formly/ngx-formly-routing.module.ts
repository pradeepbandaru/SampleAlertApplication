import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxFormlyComponent } from './ngx-formly.component';

const routes: Routes = [{ path: '', component: NgxFormlyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxFormlyRoutingModule { }
