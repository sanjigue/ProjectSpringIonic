import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { AddPage } from '../pages/add/add';
import { ReadAllPage } from '../pages/read-all/read-all';
import { ReadPage } from '../pages/read/read';
import { DeletePage } from '../pages/delete/delete';

import { AddPageModule } from '../pages/add/add.module';
import { ReadPageModule } from '../pages/read/read.module';
import { ReadAllPageModule } from '../pages/read-all/read-all.module';
import { DeletePageModule } from '../pages/delete/delete.module';

import { PizzaService } from '../providers/pizza-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage,
    ReadPage,
    ReadAllPage,
    DeletePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AddPageModule,
    ReadPageModule,
    ReadAllPageModule,
    DeletePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage,
    ReadAllPage,
    ReadPage,
    DeletePage
  ],
  providers: [PizzaService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
