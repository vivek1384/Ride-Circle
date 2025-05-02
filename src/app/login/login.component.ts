import { Component, inject } from '@angular/core';
import { User } from '../app.component';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  service = inject(ServiceService);
  router = inject(Router);

  user: User = new User();
  isSignUp = false;

  onClick() {
    this.isSignUp = !this.isSignUp;
  }

  signUp() {
    if (!this.user.name || !this.user.email || !this.user.password) {
      alert('Something is missing.');
    } else {
      this.service.signUp(this.user).subscribe((res) => {
        if (res) {
          this.login();
        }
      });
    }
  }

  login() {
    if (!this.user.email || !this.user.password) {
      alert('Something is missing.');
    } else {
      this.service
        .login(this.user.email, this.user.password)
        .subscribe((res) => {
          if (res.length == 1) {
            alert('Login success.');
            localStorage.setItem('userid', res[0].id);
            this.router.navigate(['home']);
            this.user = new User();
          } else if (res.length == 0) {
            alert('Email or password is incorrect.');
          }
        });
    }
  }
}
