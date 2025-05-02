import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'RideCircle';
}

export class User {
  id: any;
  name: string;
  email: string;
  password: string;
  review: Reviewer[];
  constructor() {
    this.id = undefined;
    this.name = '';
    this.email = '';
    this.password = '';
    this.review = [];
  }
}

export class Reviewer {
  reviewerName: string;
  reviewMessage: string;
  rating: number;
  constructor() {
    this.reviewerName = '';
    this.reviewMessage = '';
    this.rating = 0;
  }
}

export class Ride {
  id: any;
  driverName: string;
  driverEmail: string;
  driverId: any;
  from: string;
  to: string;
  member: number;
  booked: number;
  available: number;
  carname: string;
  via1: string;
  via2: string;
  via3: string;
  formtoVia1: number;
  via1oVia2: number;
  via2oVia3: number;
  via3toEnd: number;
  total: number;
  request: AcceptedRequest[];
  date: Date;
  constructor() {
    this.id = undefined;
    this.driverName = '';
    this.driverEmail = '';
    this.from = '';
    this.to = '';
    this.member = 0;
    this.booked = 0;
    this.available = 0;
    this.carname = '';
    this.via1 = '';
    this.via2 = '';
    this.via3 = '';
    this.request = [];
    this.formtoVia1 = 0;
    this.via1oVia2 = 0;
    this.via2oVia3 = 0;
    this.via3toEnd = 0;
    this.total = 0;
    this.date = new Date();
  }
}

export class AcceptedRequest {
  requestFrom: string;
  from: string;
  to: string;
  fee: number;
  member: number;
  total: number;
  date: Date;
  constructor() {
    this.requestFrom = '';
    this.from = '';
    this.to = '';
    this.fee = 0;
    this.member = 0;
    this.total = 0;
    this.date = new Date();
  }
}

export class Request {
  id: any;
  rideId: any;
  requestFrom: string;
  requestFromId: any;
  requestTo: string;
  requestToId: any;
  from: string;
  to: string;
  fee: number;
  member: number;
  total: number;
  date: Date;
  accepted: string;
  markASC: boolean;
  sent: boolean;
  constructor() {
    this.rideId = undefined;
    this.requestFrom = '';
    this.requestTo = '';
    this.from = '';
    this.to = '';
    this.fee = 0;
    this.member = 0;
    this.total = 0;
    this.date = new Date();
    this.accepted = 'Pending';
    this.markASC = false;
    this.sent = false;
  }
}
