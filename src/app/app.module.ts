import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrilliaComponent } from './orillia/orillia.component';
import { TbayComponent } from './tbay/tbay.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventService } from './event.service';

@NgModule({
  declarations: [
    AppComponent,
    OrilliaComponent,
    TbayComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ EventService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
