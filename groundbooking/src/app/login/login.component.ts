import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  gotoloanid(){
    this.router.navigate(['register'])
  }
  
  constructor(private fb:FormBuilder,private router:Router) { }
  loginForm = this.fb.group({
    
    email: ['',[Validators.required]], 
    password:[''],
    
    
  });

  ngOnInit(): void {
  }



 

}
