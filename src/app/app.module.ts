import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PostComponent} from "../components/post/post";
import {SubredditPage} from "../pages/subreddit/subreddit";
import {Post} from "../providers/post";
import {Md} from "../pipes/md";
import {ImageModalComponent} from "../components/image-modal/image-modal";
import {VideoModalComponent} from "../components/video-modal/video-modal";
import {Safe} from "../pipes/safe";
import {InAppBrowser} from "@ionic-native/in-app-browser";
@NgModule({
  declarations: [
    MyApp,
    SubredditPage,
    PostComponent,
    Md,
    Safe,
    ImageModalComponent,
    VideoModalComponent,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SubredditPage,
    ImageModalComponent,
    VideoModalComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Post,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
