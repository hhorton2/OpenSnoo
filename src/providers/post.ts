import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

/*
 Generated class for the Post provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Post {

  constructor(public http: Http) {
    console.log('Hello Post Provider');
  }

  getSubredditPosts(subreddit: string, sorting: string): Observable<any> {
    return this.http.get("https://www.reddit.com/r/" + subreddit + "/" + sorting + "/.json").map(res => res.json().data.children);
  }

  getNextSubredditPosts(subreddit: string, sorting: string, postCount: number, lastPostID: string): Observable<any> {
    return this.http.get("https://www.reddit.com/r/" + subreddit + "/" + sorting + "/.json" + "?count=" + postCount + "&after=t3_" + lastPostID).map(res => res.json().data.children);
  }

}
