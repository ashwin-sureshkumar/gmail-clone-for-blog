import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// App components
import { AppComponent } from './app.component';
import { GmSideNavModule } from './gm-side-nav/gm-side-nav.module';
import { GmTopNavModule } from './gm-top-nav/gm-top-nav.module';
import { GmDetailModule } from './gm-detail/gm-detail.module';
import { GmEmailModule } from './gm-email/gm-email.module';
import { SharedModule } from './shared/shared.module';
//Third Party libraries
import { MaterialModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    GmTopNavModule,
    GmDetailModule,
    GmSideNavModule,
    GmEmailModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
