import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GigListComponent } from './gig-list/gig-list.component';
import { QuoteComponent } from './quote/quote.component';
import {ClaimComponent} from './claim/claim.component';
import {PolicyComponent} from './policy/policy.component';


const routes: Routes = [
  { path: 'home', component: GigListComponent },
  { path: 'quote/:gigId', component: QuoteComponent },
  { path: 'claim', component: ClaimComponent },
  { path: 'policy/:gigId', component: PolicyComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
