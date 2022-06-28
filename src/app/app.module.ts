import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Evento } from './modelos/evento';
import { EventosComponentComponent } from './eventos/eventos.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [Evento],
  declarations: [AppComponent, EventosComponentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
