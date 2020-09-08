import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as firebase from 'firebase/app'
import 'firebase/auth';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

var firebaseConfig = {
  apiKey: "AIzaSyB4PFLiCWahUSA-XhKJyYvm3Ao9clqdvFc",
  authDomain: "scribe-2d048.firebaseapp.com",
  databaseURL: "https://scribe-2d048.firebaseio.com",
  projectId: "scribe-2d048",
  storageBucket: "scribe-2d048.appspot.com",
  messagingSenderId: "1040056818175",
  appId: "1:1040056818175:web:b50e106573313b4899efca",
  measurementId: "G-YYTKPT24JX"
};

firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    AppComponent,
    SignupformComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditprofileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
