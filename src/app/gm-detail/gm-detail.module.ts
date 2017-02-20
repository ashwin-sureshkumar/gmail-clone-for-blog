import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { ImportantComponent } from './important/important.component';
import { TrashComponent } from './trash/trash.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InboxComponent, SentComponent, ImportantComponent, TrashComponent],
  exports: []
})
export class GmDetailModule { }
