import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { AgmCoreModule } from '@agm/core';
import { S1Service } from './s1.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // AgmCoreModule.forRoot({
     // apiKey: 'AIzaSyDbj6COiiHLZ_S1a90ukf05tfg0ARLNkBk',
      // libraries: ['places']
    // })
  ],
  providers: [S1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
