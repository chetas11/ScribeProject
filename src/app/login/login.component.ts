import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  errorMsg: any;

  constructor(public fb:FormBuilder, public authService: AuthService, public router: Router) { 
    this.myForm = this.fb.group({
      email: ['', [Validators.email,Validators.required]],
      password: ['', [Validators.required]],
  })
}

  ngOnInit(): void {
  }

  onSubmit(form){
    this.authService.login( form.value.email, form.value.password).
    then((date)=>{
      console.log(date);
      this.message = "You have been logged in successfully!"

      this.router.navigate(['/myblogs'])
      
    }).catch((error)=>{
      console.log(error);
      this.errorMsg = error;

    })
  }

}
