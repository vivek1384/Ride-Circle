import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AcceptedRequest, Request, Ride } from '../app.component';
import { ServiceService } from '../service.service';
import { DatePipe, NgStyle } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-request',
  imports: [HeaderComponent, DatePipe, NgStyle, FooterComponent],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css',
})
export class RequestComponent implements OnInit {
  ngOnInit(): void {
    this.getRide();
    this.getRequestList();
  }

  service = inject(ServiceService);

  rideI = localStorage.getItem('rideid');
  ride: Ride = new Ride();
  request: Request = new Request();
  reqList: Request[] = [];
  acceptedReq: AcceptedRequest = new AcceptedRequest();

  getRide() {
    this.service.getRidebyId(this.rideI).subscribe((res) => {
      if (res) {
        this.ride = res;
      }
    });
  }

  getRequestList() {
    this.service.getReqlistRideId(this.rideI).subscribe((res) => {
      if (res) {
        this.reqList = res;
      }
    });
  }

  acceptReq(item: Request) {
    item.accepted = 'Accepted';
    debugger;
    this.service.editReq(item.id, item).subscribe((res) => {
      if (res) {
        debugger;
        this.acceptedReq.requestFrom = item.requestFrom;
        this.acceptedReq.from = item.from;
        this.acceptedReq.to = item.to;
        this.acceptedReq.fee = item.fee;
        this.acceptedReq.member = item.member;
        this.acceptedReq.total = item.total;
        this.acceptedReq.date = item.date;
        this.ride.booked = item.member;
        this.ride.available = this.ride.member - this.ride.booked;
        this.ride.request.push(this.acceptedReq);
        this.service.editRide(this.rideI, this.ride).subscribe((Res) => {
          debugger;
          if (Res) {
            alert('Request accepted.');
            this.getRide();
            this.getRequestList();
          }
        });
      }
    });
  }

  declineReq(item: Request) {
    item.accepted = 'Declined';
    this.service.editReq(item.id, item).subscribe((res) => {
      if (res) {
        alert('Request declined.');
        this.getRequestList();
        this.getRide();
      }
    });
  }
}
