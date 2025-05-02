import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ServiceService } from '../service.service';
import { Request, Reviewer, User } from '../app.component';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-history',
  imports: [HeaderComponent, NgStyle, FormsModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit {
  ngOnInit(): void {
    this.getReqlistByUser();
  }

  service = inject(ServiceService);

  userId = localStorage.getItem('userid');
  reqList: Request[] = [];
  user: User = new User();
  review: Reviewer = new Reviewer();
  openBox = false;
  driverId = '';

  getReqlistByUser() {
    this.service.getReqlistUserid(this.userId).subscribe((Res) => {
      if (Res) {
        this.reqList = Res;
        console.log(this.reqList);
      }
    });
  }

  markAsRead(item: Request) {
    let isDel = confirm('Are you sure?');
    if (isDel) {
      item.markASC = true;
      this.service.editReq(item.id, item).subscribe((res) => {
        if (res) {
          this.getReqlistByUser();
        }
      });
    }
  }
  unSendReq(i: any) {
    let isDel = confirm('Are you sure?');
    if (isDel) {
      this.service.deleteReq(i).subscribe((res) => {
        if (res) {
          this.getReqlistByUser();
        }
      });
    }
  }

  onReview(i: any) {
    this.openBox = true;
    this.driverId = i;
  }

  closeReview() {
    this.openBox = false;
    this.driverId = '';
  }

  addReview() {
    this.service.getUser(this.driverId).subscribe((res) => {
      if (res) {
        this.user = res;
        this.user.review.push(this.review);
        this.service.editUser(this.user.id, this.user).subscribe((Res) => {
          if (Res) {
            alert('Review added.');
            this.openBox = false;
          }
        });
      }
    });
  }
}
