import { Component, ViewChild } from '@angular/core';
import {AlertController, NavController, NavParams, Content} from 'ionic-angular';
import {Post} from "../../providers/post";
import {SORTINGS} from "../../domain/SORTINGS";

/*
  Generated class for the Subreddit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-subreddit',
  templateUrl: 'subreddit.html'
})
export class SubredditPage {
  @ViewChild(Content) content: Content;
  subreddit: string = "popular";
  sorting: string = SORTINGS.HOT();
  posts: any[] = [];
  showTextbox: boolean = false;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private postService: Post) {
    this.postService.getSubredditPosts(this.subreddit, this.sorting)
      .subscribe(posts =>{
        this.posts = posts;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubredditPage');
    if (window.indexedDB) {
      console.log("I'm in WKWebView!");
    } else {
      console.log("I'm in UIWebView");
    }
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Header Pressed',
      subTitle: 'You have successfully pressed the header!',
      buttons: ['OK']
    });
    alert.present();
  }

  doInfinite(infiniteScroll){
    console.log('infinite Scroll activated');
    this.postService.getNextSubredditPosts(this.subreddit, this.sorting, this.posts.length, this.posts[this.posts.length-1].data.id).subscribe(posts =>{
      posts.forEach(post =>{
        this.posts.push(post);
      });
      infiniteScroll.complete();
      console.log('infinite Scroll completed');
    })
  }

  goToSubreddit(subreddit: string){
    this.postService.getSubredditPosts(subreddit, this.sorting)
      .subscribe(posts =>{
        this.posts = posts;
        this.content.scrollToTop();
      }, err =>{
        console.log(err);
      }, () =>{
        this.subreddit = subreddit;
        this.showTextbox = false;
      });
  }

}
