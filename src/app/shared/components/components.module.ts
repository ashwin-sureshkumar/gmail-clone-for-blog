import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailListItemComponent } from './email-list-item/email-list-item.component';
import { MdCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCheckboxModule
  ],
  declarations: [EmailListItemComponent],
  exports: [EmailListItemComponent]
})
export class SharedComponentsModule { }
