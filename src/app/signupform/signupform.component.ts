import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app'
import 'firebase/firestore';
import { sign } from 'crypto';
import { userInfo } from 'os';


@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {

 
  name: string = "Internshala" ;

age: number = 18;
  myForm: FormGroup;
  message: string = "";
  errorMsg: any;

  constructor(public fb: FormBuilder, public authService: AuthService) { 
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email:['', [Validators.required]],
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    })
  }

  onSubmit(signupform){ 
    let email:string = signupform.value.email;
    let password:string  = signupform.value.password;
    let firstName:string = signupform.value.firstName;
    let lastName:string = signupform.value.lastName;


    this.authService.signup(email, password, firstName, lastName).then
    ((user: any) => {

      firebase.firestore().collection("users").doc(user.uid).set({
        firstName: signupform.value.firstName,
        lastName: signupform.value.lastName,
        email: signupform.value.email,
        photoURL: user.photoURL,
        interests: "",
        bio: "",
        hobbies: "",
      }).then(() =>{

        this.message = "You have successfully signed up, Please login from the login page"
      })  
    }).catch((error) =>{
      console.log(error);
      this.errorMsg = error;
      
    })

    
    
  }

  ngOnInit(): void {
  }

}
