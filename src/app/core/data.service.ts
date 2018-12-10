import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
        return this.httpClient.get(environment.API_URL + '/users/');
  }

  getUserById(id: number) {
      return this.httpClient.get(environment.API_URL + '/user/' + id);
  }

  registerUser(user: User) {
      return this.httpClient.post(environment.API_URL + '/user', user);
  }

  signinUser(username: string, password: string) {
    return this.httpClient.get(environment.API_URL + `/signin?username=${username}&password=${password}`);
  }

  updateUser(user: User) {
      return this.httpClient.put(environment.API_URL + '/user/' + user.id, user);
  }

  deleteUser(id: number) {
      return this.httpClient.delete(environment.API_URL + '/user/' + id);
  }
}
