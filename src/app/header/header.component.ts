import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../app.component';
import { ServiceService } from '../service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    this.getUser();
  }

  service = inject(ServiceService);
  router = inject(Router);

  user: User = new User();
  userId = localStorage.getItem('userid');
  icon1 = faBars;
  icon2 = faPlus;
  icon3 = faEye;
  icon4 = faXmark;

  getUser() {
    this.service.getUser(this.userId).subscribe((res) => {
      if (res) {
        this.user = res;
      }
    });
  }

  menuOpen = false;
  openClose() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    let isLogout = confirm('Are you sure?');
    if (isLogout) {
      localStorage.removeItem('userid');
      this.router.navigate(['login']);
    }
  }
}
