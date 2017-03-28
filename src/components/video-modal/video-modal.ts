import {Component} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";
import {InAppBrowser} from '@ionic-native/in-app-browser';
/*
 Generated class for the VideoModal component.

 See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
  selector: 'video-modal',
  templateUrl: 'video-modal.html'
})
export class VideoModalComponent {
  src: string;

  constructor(public viewCtrl: ViewController, params: NavParams, private iab: InAppBrowser) {
    this.src = params.get("url");
    let browser = iab.create(this.src, "_system", "location=no");
    browser.close();
    viewCtrl.dismiss();
  }

}
