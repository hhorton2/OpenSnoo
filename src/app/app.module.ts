import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PostComponent} from "../components/post/post";
import {SubredditPage} from "../pages/subreddit/subreddit";
import {Post} from "../providers/post";
import {Md} from "../pipes/md";

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    SubredditPage,
    PostComponent,
    Md
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    SubredditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Post,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
