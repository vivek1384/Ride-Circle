import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from '../service.service';
import { User } from '../app.component';

@Component({
  selector: 'app-profile',
  imports: [HeaderComponent, FontAwesomeModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    this.getUser();
    this.getRidelist();
    this.getReqlist();
  }

  service = inject(ServiceService);

  userId = localStorage.getItem('userid');
  letter: string[] = [];
  icon = faEye;
  icon2 = faEyeSlash;
  rides = 0;
  requests = 0;
  user: User = new User();

  passOpen = false;

  passOpenFun() {
    this.passOpen = !this.passOpen;
  }

  getUser() {
    this.service.getUser(this.userId).subscribe((res) => {
      if (res) {
        this.user = res;
        this.letter = this.user.name.split('');
      }
    });
  }
  getRidelist() {
    this.service.getRideListUser(this.userId).subscribe((Res) => {
      if (Res) {
        this.rides = Res.length;
      }
    });
  }
  getReqlist() {
    this.service.getReqlistUserid(this.userId).subscribe((Res) => {
      if (Res) {
        console.log(Res);
        this.requests = Res.length;
      }
    });
  }
}
