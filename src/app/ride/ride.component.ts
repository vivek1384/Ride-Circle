import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ServiceService } from '../service.service';
import { Request, Ride, User } from '../app.component';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-ride',
  imports: [HeaderComponent, DatePipe, FooterComponent],
  templateUrl: './ride.component.html',
  styleUrl: './ride.component.css',
})
export class RideComponent implements OnInit {
  ngOnInit(): void {
    this.getRide();
    this.getUser();
    setTimeout(() => {
      this.calculate();
    }, 100);
  }

  service = inject(ServiceService);
  router = inject(Router);

  rideId = localStorage.getItem('rideid');
  userId = localStorage.getItem('userid');
  to = localStorage.getItem('to');
  from = localStorage.getItem('from');
  member = localStorage.getItem('member');
  request: Request = new Request();
  total = 0;

  ride: Ride = new Ride();
  user: User = new User();
  fee = 0;

  calculate() {
    if (this.from?.toLowerCase() == this.ride.from.toLowerCase()) {
      if (this.to?.toLowerCase() == this.ride.via1.toLowerCase()) {
        this.fee = +this.ride.formtoVia1;
      } else if (this.to?.toLowerCase() == this.ride.via2.toLowerCase()) {
        this.fee = +this.ride.formtoVia1 + this.ride.via1oVia2;
      } else if (this.to?.toLowerCase() == this.ride.via3.toLowerCase()) {
        this.fee =
          +this.ride.formtoVia1 + this.ride.via1oVia2 + this.ride.via2oVia3;
      } else {
        this.fee = +this.ride.total;
      }
    } else if (this.from?.toLowerCase() == this.ride.via1.toLowerCase()) {
      debugger;
      if (this.to?.toLowerCase() == this.ride.via2.toLowerCase()) {
        this.fee = +this.ride.via1oVia2;
      } else if (this.to?.toLowerCase() == this.ride.via3.toLowerCase()) {
        this.fee = +this.ride.via1oVia2 + this.ride.via2oVia3;
      } else {
        this.fee = +this.ride.total - this.ride.formtoVia1;
      }
    } else if (this.from?.toLowerCase() == this.ride.via2.toLowerCase()) {
      debugger;
      if (this.to?.toLowerCase() == this.ride.via3.toLowerCase()) {
        this.fee = +this.ride.via2oVia3;
      } else {
        this.fee = +this.ride.via2oVia3 + this.ride.via3toEnd;
      }
    } else if (this.from?.toLowerCase() == this.ride.via3.toLowerCase()) {
      debugger;
      this.fee = +this.ride.via3toEnd;
    }

    if (this.member) {
      this.total = this.fee * +this.member;
    }
  }

  getRide() {
    this.service.getRidebyId(this.rideId).subscribe((res) => {
      if (res) {
        this.ride = res;
      }
    });
  }
  getUser() {
    this.service.getUser(this.userId).subscribe((res) => {
      if (res) {
        this.user = res;
      }
    });
  }

  senRequest() {
    if (this.from && this.to && this.member) {
      this.request.rideId = this.rideId;
      this.request.requestFrom = this.user.name;
      this.request.requestFromId = this.user.id;
      this.request.from = this.from;
      this.request.to = this.to;
      this.request.fee = this.fee;
      this.request.member = +this.member;
      this.request.total = this.total;
      this.request.date = this.ride.date;
      this.request.sent = true;
      this.request.requestTo = this.ride.driverName;
      this.request.requestToId = this.ride.driverId;
      if (this.user.name == this.ride.driverName) {
        alert("You can't send request to yourself.");
      } else {
        this.service.addRequest(this.request).subscribe((res) => {
          if (res) {
            alert(`Request sent to ${this.ride.driverName}`);
            this.router.navigate(['history']);
          }
        });
      }
    }
  }
}
