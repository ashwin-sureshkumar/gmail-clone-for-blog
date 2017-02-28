import { Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';

export const routes: Routes = [
  {
    path: ':id',
    component: EmailComponent
  },
  {
    path: ':subSection/:id',
    component: EmailComponent
  }
];


