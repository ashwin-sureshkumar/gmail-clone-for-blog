import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './gm-detail/inbox/inbox.component';
import { SentComponent } from './gm-detail/sent/sent.component';
import { ImportantComponent } from './gm-detail/important/important.component';
import { TrashComponent } from './gm-detail/trash/trash.component';
import { StarredComponent } from './gm-detail/starred/starred.component';
import { DraftsComponent } from './gm-detail/drafts/drafts.component';
import { PrimaryComponent } from './gm-detail/inbox/primary/primary.component';
import { SocialComponent } from './gm-detail/inbox/social/social.component';
import { PromotionsComponent } from './gm-detail/inbox/promotions/promotions.component';
import { EmailComponent } from './gm-email/email/email.component';
import { SettingsComponent } from './gm-settings/settings/settings.component';
import { GeneralComponent } from './gm-settings/general/general.component';
import { InboxComponent as SettingsInboxComponent } from './gm-settings/inbox/inbox.component';
import { LabelsComponent } from './gm-settings/labels/labels.component';
import { AccountsComponent } from './gm-settings/accounts/accounts.component';
import { ChatComponent } from './gm-settings/chat/chat.component';
import { LabsComponent } from './gm-settings/labs/labs.component';
import { ThemesComponent } from './gm-settings/themes/themes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inbox/primary',
    pathMatch: 'full'
  },
  {
    path: 'inbox',
    component: InboxComponent,
    children: [
      {
        path: '',
        redirectTo: 'primary',
        pathMatch: 'full'
      },
      {
        path: 'primary',
        component: PrimaryComponent
      },
      {
        path: 'social',
        component: SocialComponent
      },
      {
        path: 'promotions',
        component: PromotionsComponent
      }
    ]
  },
    {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full'
      },
      {
        path: 'general',
        component: GeneralComponent
      },
      {
        path: 'inbox',
        component: SettingsInboxComponent
      },
      {
        path: 'labels',
        component: LabelsComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      },
      {
        path: 'themes',
        component: ThemesComponent
      },
      {
        path: 'labs',
        component: LabsComponent
      },
      {
        path: 'accounts',
        component: AccountsComponent
      }
    ]
  },
  {
    path: 'important',
    component: ImportantComponent
  },
  {
    path: 'sent',
    component: SentComponent
  },
  {
    path: 'trash',
    component: TrashComponent
  },
  {
    path: 'starred',
    component: StarredComponent
  },
  {
    path: 'drafts',
    component: DraftsComponent
  },
  {
    path: ':section/:id',
    component : EmailComponent
  },
  {
    path: ':section/:subSection/:id',
    component: EmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
