import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { ImportantComponent } from './important/important.component';
import { TrashComponent } from './trash/trash.component';
import { StarredComponent } from './starred/starred.component';
import { DraftsComponent } from './drafts/drafts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InboxComponent, SentComponent, ImportantComponent, TrashComponent, StarredComponent, DraftsComponent],
  exports: []
})
export class GmDetailModule { }
