import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterLink } from '@angular/router';
import { Ride } from '../app.component';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FormsModule, DatePipe, RouterLink, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.getRidelist();
  }

  router = inject(Router);
  service = inject(ServiceService);

  ride: Ride = new Ride();
  rideList: Ride[] = [];
  rideList2: Ride[] = [];
  from = '';
  to = '';
  date: Date = new Date();
  member = 0;
  message = 'Search your ride...';



  onClickRide(i: any) {
    localStorage.setItem('rideid', i);
    localStorage.setItem('to', this.to);
    localStorage.setItem('from', this.from);
    localStorage.setItem('member', this.member.toString());
    this.router.navigate(['ride']);
  }

  getRidelist() {
    this.service.getRideList().subscribe((res) => {
      if (res) {
        this.rideList = res;
        console.log(this.rideList);
      }
    });
  }

  onSearch() {
    this.rideList2 = [];
    if (this.from && this.to && this.date && this.member) {
      debugger;
      for (let index = 0; index < this.rideList.length; index++) {
        debugger
        if (
          this.rideList[index].from
            .toLowerCase()
            .includes(this.from.toLowerCase()) &&
          this.rideList[index].available >= this.member
        ) {
          debugger;
          if (
            this.rideList[index].via1
              .toLowerCase()
              .includes(this.to.toLowerCase()) ||
            this.rideList[index].via2
              .toLowerCase()
              .includes(this.to.toLowerCase()) ||
            this.rideList[index].via3
              .toLowerCase()
              .includes(this.to.toLowerCase()) ||
            this.rideList[index].to
              .toLowerCase()
              .includes(this.to.toLowerCase())
          ) {
            this.rideList2.push(this.rideList[index]);
          }
        } else if (
          this.rideList[index].via1
            .toLowerCase()
            .includes(this.from.toLowerCase()) &&
          this.rideList[index].available >= this.member
        ) {
          debugger;
          if (
            this.rideList[index].via2
              .toLowerCase()
              .includes(this.to.toLowerCase()) ||
            this.rideList[index].via3
              .toLowerCase()
              .includes(this.to.toLowerCase()) ||
            this.rideList[index].to
              .toLowerCase()
              .includes(this.to.toLowerCase())
          ) {
            this.rideList2.push(this.rideList[index]);
          }
        } else if (
          this.rideList[index].via2
            .toLowerCase()
            .includes(this.from.toLowerCase()) &&
          this.rideList[index].available >= this.member
        ) {
          debugger;
          if (
            this.rideList[index].via3
              .toLowerCase()
              .includes(this.to.toLowerCase()) ||
            this.rideList[index].to
              .toLowerCase()
              .includes(this.to.toLowerCase())
          ) {
            this.rideList2.push(this.rideList[index]);
          }
        } else if (
          this.rideList[index].via3
            .toLowerCase()
            .includes(this.from.toLowerCase()) &&
          this.rideList[index].available >= this.member
        ) {
          debugger;
          if (
            this.rideList[index].to
              .toLowerCase()
              .includes(this.to.toLowerCase())
          ) {
            this.rideList2.push(this.rideList[index]);
          }
        }
      }
      console.log(this.rideList2);
      this.date = new Date();
    } else if (this.rideList2.length == 0) {
      debugger;
      this.message = 'No ride availabel for this route at the time.';
    } else {
      debugger;
      alert('Please enter all the details to find a ride.');
    }
  }
}
