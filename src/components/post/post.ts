import {Component, Input} from '@angular/core';
import {ModalController} from "ionic-angular";
import {ImageModalComponent} from "../image-modal/image-modal";
import {VideoModalComponent} from "../video-modal/video-modal";

/*
  Generated class for the Post component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {
  @Input() posts: any[] = [];
  imageExtensions: string[] = [".jpg", ".jpeg", ".png", ".gif", ".svg", ".bmp", ".tiff"];

  constructor(public modalCtrl: ModalController) {
  }

  getPostSourceThumbnail(post: any): string{
    return post.data.thumbnail;
  }

  showFullscreenImage(post: any){
    let imageModal = this.modalCtrl.create(ImageModalComponent, { url : post.data.url });
    imageModal.present();
  }

  showFullscreenVideo(post: any){
    let videoModal = this.modalCtrl.create(VideoModalComponent, { url : post.data.url });
    videoModal.present();
  }

  determineTypeAndLoad(post: any){
    let foundImage = false;
    this.imageExtensions.forEach(type =>{
      if((post.data.url + "" ).endsWith(type)){
        foundImage = true;
      }
    });
    if(foundImage){
      this.showFullscreenImage(post);
    }else{
      this.showFullscreenVideo(post);
    }
  }

}
