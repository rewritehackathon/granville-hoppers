import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GigListComponent } from './gig-list/gig-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { QuoteComponent } from './quote/quote.component';
import { ClaimComponent } from './claim/claim.component';
import { PolicyComponent } from './policy/policy.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    AppComponent,
    GigListComponent,
    QuoteComponent,
    ClaimComponent,
    PolicyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
