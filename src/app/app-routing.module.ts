import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { InboxComponent } from './gm-detail/inbox/inbox.component';
import { SentComponent } from './gm-detail/sent/sent.component';
import { ImportantComponent } from './gm-detail/important/important.component';
import { TrashComponent } from './gm-detail/trash/trash.component';
import { StarredComponent } from './gm-detail/starred/starred.component';
import { DraftsComponent } from './gm-detail/drafts/drafts.component';
import { PrimaryComponent } from './gm-detail/inbox/primary/primary.component';
import { SocialComponent } from './gm-detail/inbox/social/social.component';
import { PromotionsComponent } from './gm-detail/inbox/promotions/promotions.component';
import { CustomPreloadingStrategy } from './preloading-strategy';

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
    loadChildren: './gm-settings/gm-settings.module#GmSettingsModule'
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
    path: ':section',
    loadChildren: './gm-email/gm-email.module#GmEmailModule',
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }
