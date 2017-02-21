import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdTabsModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { ImportantComponent } from './important/important.component';
import { TrashComponent } from './trash/trash.component';
import { StarredComponent } from './starred/starred.component';
import { DraftsComponent } from './drafts/drafts.component';
import { PrimaryComponent } from './inbox/primary/primary.component';
import { SocialComponent } from './inbox/social/social.component';
import { PromotionsComponent } from './inbox/promotions/promotions.component';
import { SharedComponentsModule } from '../shared/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    MdTabsModule,
    MdListModule,
    RouterModule,
    SharedComponentsModule
  ],
  declarations: [
    InboxComponent,
    SentComponent,
    ImportantComponent,
    TrashComponent,
    StarredComponent,
    DraftsComponent,
    PrimaryComponent,
    SocialComponent,
    PromotionsComponent
  ],
  exports: []
})
export class GmDetailModule { }
