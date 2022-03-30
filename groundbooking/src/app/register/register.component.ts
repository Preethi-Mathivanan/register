import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  get userName(){
    return this.registrationForm.get('userName');
  }
  gotoloanid(){
    this.router.navigate(['login'])
  }

  constructor(private fb:FormBuilder,private router:Router) { }
  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required]], 
    password:[''],
    confirmPassword:[''],
    mobilenumber:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    address: this.fb.group({
      ADDRESS:[''],
      city: [''],
      state: [''],
      pinCode:['']
    })
  },{validator: PasswordValidator});


  ngOnInit(): void {
  }

}
