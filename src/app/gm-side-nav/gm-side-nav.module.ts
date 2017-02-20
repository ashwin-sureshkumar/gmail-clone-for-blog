import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmSideNavComponent } from './gm-side-nav/gm-side-nav.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [GmSideNavComponent],
  exports: [GmSideNavComponent]
})
export class GmSideNavModule { }
