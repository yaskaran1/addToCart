import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  constructor(private loginUser: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value)
    const user=this.loginUser.loginUser(this.loginForm.value);
    console.log(user);
    let login;
    if(user){
      this.router.navigate(['/home']);
      login="true";
      localStorage.setItem('login',login)
    }
    else{
      alert("Email or password wrong");
      login="false";
    }
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

}
