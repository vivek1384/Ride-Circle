import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ServiceService } from '../service.service';
import { Ride, User } from '../app.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ride',
  imports: [HeaderComponent, FormsModule, DatePipe],
  templateUrl: './add-ride.component.html',
  styleUrl: './add-ride.component.css',
})
export class AddRideComponent implements OnInit {
  ngOnInit(): void {
    this.userId = localStorage.getItem('userid');
    this.getRideList();
    this.getUser();
  }

  service = inject(ServiceService);
  router = inject(Router);

  userId: any;
  ride: Ride = new Ride();
  rideList: Ride[] = [];
  user: User = new User();

  getRideList() {
    this.service.getRideListUser(this.userId).subscribe((res) => {
      if (res) {
        this.rideList = res;
      }
    });
  }

  getUser() {
    this.service.getUser(this.userId).subscribe((res) => {
      if (res) {
        this.user = res;
        console.log(this.user);
      }
    });
  }

  addRide() {
    if (
      this.ride.from &&
      this.ride.to &&
      this.ride.date &&
      this.ride.member &&
      this.ride.carname &&
      this.ride.via1 &&
      this.ride.via2 &&
      this.ride.via3 &&
      this.ride.formtoVia1 &&
      this.ride.via1oVia2 &&
      this.ride.via2oVia3 &&
      this.ride.via3toEnd
    ) {
      this.ride.driverName = this.user.name;
      this.ride.driverId = this.user.id;
      this.ride.driverEmail = this.user.email;
      this.ride.available = this.ride.member;
      this.ride.total =
        this.ride.formtoVia1 +
        this.ride.via1oVia2 +
        this.ride.via2oVia3 +
        this.ride.via3toEnd;
      this.service.addRide(this.ride).subscribe((res) => {
        if (res) {
          alert('Ride offer successfully.');
          this.getRideList();
          this.ride = new Ride();
        }
      });
    }
  }

  seeRequest(i: any) {
    localStorage.setItem('rideid', i);
    this.router.navigate(['request']);
  }
}
