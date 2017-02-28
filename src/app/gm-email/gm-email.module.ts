import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { MdIconModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { routes } from './gm-email.routing';
@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmailComponent]
})
export class GmEmailModule { }
