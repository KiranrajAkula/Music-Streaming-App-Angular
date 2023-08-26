import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
email:string = "";
password:any = "";

val:any;

submit(val:any){
  console.log(val);
}
}
