import { Component, OnInit, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  post: any = {};
  postId: string;

  constructor( public activatedRoute: ActivatedRoute, public ngZone: NgZone) {
    let postid  = this.activatedRoute.snapshot.paramMap.get("postid");

    this.postId = postid

   
      firebase.firestore().collection("posts").doc(postid).get().then((docSnapshot) => {
        this.ngZone.run(() => {
          this.post = docSnapshot.data(); 
          })

    })
  }

  ngOnInit(): void {
  }

}
