import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { LoginComponent } from 'src/app/admin/auth/login/login.component';
import { SignupComponent } from 'src/app/admin/auth/signup/signup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open(LoginComponent)
  }
  openSignUp(){
    this.dialog.open(SignupComponent)
  }
}
