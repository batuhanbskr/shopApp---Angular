import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice } from 'src/app/model/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private authService: Authservice){}


  login(form: NgForm){
    if(form.valid){
      this.authService.authenticate(this.username, this.password).subscribe(response =>{
        if(response){
          this.router.navigateByUrl('admin/main');
        }
        this.errorMessage = 'HATALI USERNAME VEYA PAROLA';
      })
    }else {
      this.errorMessage = 'Bilgiler Eksik'
    }
  }
}
