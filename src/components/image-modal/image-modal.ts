import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'image-modal',
  templateUrl: 'image-modal.html'
})
export class ImageModalComponent {

  src: string;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    this.src = params.get("url");
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
