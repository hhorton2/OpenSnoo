import {Component, Input} from '@angular/core';

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

  constructor() {
  }

  getPostSourceThumbnail(post: any): string{
    // post = post.data;
    // if(post.hasOwnProperty("preview")){
    //   post = post.preview;
    //   if(post.hasOwnProperty("images")){
    //     post = post.images[0];
    //   }if(post.hasOwnProperty("resolutions")){
    //     return post.resolutions[0].url;
    //   }
    // }
    // return "";
    console.log(post.data.thumbnail);
    return post.data.thumbnail;
  }

}
