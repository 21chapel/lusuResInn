import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TbayComponent } from './tbay/tbay.component';
import { OrilliaComponent } from './orillia/orillia.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
  { path: 'thunderbay', component: TbayComponent},
  { path: 'thunderbay/:id', component: EventDetailComponent},
  { path: 'orillia', component: OrilliaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
