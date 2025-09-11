import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink ,FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
 client={
  name:'',
  username:'',
  email:'',
  password:''
 }
  

 register(){
  console.log(this.client)
 }
}
