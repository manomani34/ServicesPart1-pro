import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddAccuntComponent } from './add-accunt/add-accunt.component';
import { AccuntsService } from './accunts.service';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AddAccuntComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccuntsService , LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
