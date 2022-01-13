import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { CombattantService } from './combattant/combattant.service';

import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),AngularFireModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, CombattantService, MediaCapture, FileOpener],
  bootstrap: [AppComponent],
})
export class AppModule {}
