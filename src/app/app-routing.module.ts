import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './gm-detail/inbox/inbox.component';
import { SentComponent } from './gm-detail/sent/sent.component';
import { ImportantComponent } from './gm-detail/important/important.component';
import { TrashComponent } from './gm-detail/trash/trash.component';
import { StarredComponent } from './gm-detail/starred/starred.component';
import { DraftsComponent } from './gm-detail/drafts/drafts.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/inbox',
    pathMatch: 'full'
  },
  {
    path: 'inbox',
    component : InboxComponent
  },
    {
    path: 'important',
    component : ImportantComponent
  },
    {
    path: 'sent',
    component : SentComponent
  },
    {
    path: 'trash',
    component : TrashComponent
  },
    {
    path: 'starred',
    component : StarredComponent
  },
    {
    path: 'drafts',
    component : DraftsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
