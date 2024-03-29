import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Conditional } from './conditional.component';
import { PersonList } from './person-list.component';

@NgModule({
  declarations: [AppComponent, Conditional, PersonList], // components
  imports: [BrowserModule], // modules
  providers: [], // services
  bootstrap: [AppComponent], // root component, that starts the application
})
export class AppModule {}
