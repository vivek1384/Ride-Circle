import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Request, Ride, User } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  http = inject(HttpClient);
  url = 'http://192.168.1.75:3000';

  signUp(d: User) {
    return this.http.post(`${this.url}/user`, d);
  }
  login(email: string, password: string) {
    return this.http.get<User[]>(
      `${this.url}/user?email=${email}&password=${password}`
    );
  }
  getUser(i: any) {
    return this.http.get<User>(`${this.url}/user/${i}`);
  }
  getRideList() {
    return this.http.get<Ride[]>(`${this.url}/ride`);
  }
  getRideListUser(i: any) {
    return this.http.get<Ride[]>(`${this.url}/ride?driverId=${i}`);
  }
  addRide(d: Ride) {
    return this.http.post(`${this.url}/ride`, d);
  }
  getRidebyId(i: any) {
    return this.http.get<Ride>(`${this.url}/ride/${i}`);
  }
  addRequest(d: Request) {
    return this.http.post(`${this.url}/request`, d);
  }
  getReqlistRideId(i: any) {
    return this.http.get<Request[]>(`${this.url}/request?rideId=${i}`);
  }
  editReq(i: any, d: Request) {
    return this.http.put(`${this.url}/request/${i}`, d);
  }
  editRide(i: any, d: Ride) {
    return this.http.put(`${this.url}/ride/${i}`, d);
  }
  getReqlistUserid(i: any) {
    return this.http.get<Request[]>(`${this.url}/request?requestFromId=${i}`);
  }
  deleteReq(i: any) {
    return this.http.delete(`${this.url}/request/${i}`);
  }
  editUser(i: any, d: User) {
    return this.http.put(`${this.url}/user/${i}`, d);
  }
}
