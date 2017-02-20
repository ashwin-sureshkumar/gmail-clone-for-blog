import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NavLogoComponent } from './nav-logo/nav-logo.component';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { NavProfileComponent } from './nav-profile/nav-profile.component';
import { MdToolbarModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule
  ],
  declarations: [NavComponent, NavLogoComponent, NavSearchComponent, NavProfileComponent],
  exports: [NavComponent]
})
export class GmTopNavModule { }
