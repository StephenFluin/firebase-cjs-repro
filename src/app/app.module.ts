import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBxDW1Vy5g8GXyt6iY0S7nw_tRnjOJRvEo',
      authDomain: 'sunstar-views.firebaseapp.com',
      databaseURL: 'https://sunstar-views.firebaseio.com',
      projectId: 'sunstar-views',
      storageBucket: 'sunstar-views.appspot.com',
      messagingSenderId: '213571294940',
      appId: '1:213571294940:web:679930766d51f0f6930619',
      measurementId: 'G-JSG6T6RZMH',
    }),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
