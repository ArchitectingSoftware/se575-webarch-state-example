import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Rx from 'rxjs';
import { Post } from '../models/post.model';
import * as PostActions from '../actions/post.actions';


interface AppState {
  post: Post;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  post: Rx.Observable<Post>
  text: string; /// form input val
  postHistoryProperty: string[];

  constructor(private store: Store<AppState>) { 
    this.post = this.store.select('post');
  }

  ngOnInit() {

    this.store.subscribe( stateChange => 
      this.postHistoryProperty = stateChange.post.history);
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text) )
  }
  resetPost() {
    this.store.dispatch(new PostActions.Reset())
  }
  upvote() {
    this.store.dispatch(new PostActions.Upvote())
  }
  downvote() {
    this.store.dispatch(new PostActions.Downvote())
  }

}
