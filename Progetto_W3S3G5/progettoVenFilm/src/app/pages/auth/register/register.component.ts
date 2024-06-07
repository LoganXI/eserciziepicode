import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { iUser } from '../../../models/i-user';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {



  newUser:Partial<iUser> = {}

  constructor(private authSvc:AuthService,
    private router:Router
  ){}

  register(){this.authSvc.register(this.newUser).subscribe(()=>{this.router.navigate(['/login'])})}



















}
