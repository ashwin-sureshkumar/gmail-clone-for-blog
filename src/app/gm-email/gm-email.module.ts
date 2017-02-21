import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email/email.component';
import { MdIconModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule
  ],
  declarations: [EmailComponent]
})
export class GmEmailModule { }
