import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<User>(null);
  constructor(private dataService: DataService) { }

  public insertUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  public updateCurrentUser() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.user.next(user);
  }

  public updateUser() {
    this.dataService.getUserById(this.user.getValue().id).subscribe(res => {
      this.user.next(res);
    });
  }

  public deleteCurrentUser() {
    this.user.next(null);
    localStorage.removeItem('currentUser');
  }

  public getUser() {
    return this.user;
  }

  public getCurrentUser() {
    return this.user.getValue();
  }
}
