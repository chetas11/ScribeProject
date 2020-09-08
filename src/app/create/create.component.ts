import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { menu, placeholder, schema, NgxEditorModule  } from 'ngx-editor';
import 'firebase/auth';
import * as firebase from 'firebase';
import 'firebase/firestore';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  editorConfig:  any;
  title: string;
  postContent: string;
  @Output('postCreated') postCreated = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  createPost(){

    firebase.firestore().settings({
      timestampsInSnapshots: true
    })


    firebase.firestore().collection("posts").add({
      title: this.title,
      postContent: this.postContent,
      owner: firebase.auth().currentUser.uid,
      created:firebase.firestore.FieldValue.serverTimestamp()
    }).then((data)=>{
      console.log(data);
      this.postCreated.emit();
    }).catch((error) =>{
      console.log(error);
    })

  }

}
