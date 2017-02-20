import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmSideNavComponent } from './gm-side-nav/gm-side-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GmSideNavComponent],
  exports: [GmSideNavComponent]
})
export class GmSideNavModule { }
