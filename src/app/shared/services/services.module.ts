import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailService } from './email/email.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [EmailService]
})
export class ServicesModule { }


export {
  EmailService
}
