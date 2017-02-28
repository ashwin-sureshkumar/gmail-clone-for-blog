import { Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { GeneralComponent } from './general/general.component';
import { InboxComponent } from './inbox/inbox.component';
import { LabelsComponent } from './labels/labels.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ChatComponent } from './chat/chat.component';
import { LabsComponent } from './labs/labs.component';
import { ThemesComponent } from './themes/themes.component';

export const routes: Routes = [
  {
    path: '',
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
        component: InboxComponent
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
      }]
  }
];


