import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { Semester } from '../models/semester.model';
import { Class } from '../models/class.model';
import { Post, PostRequest } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient
      .get(`${environment.API_URL}/users/`);
  }

  getUserById(id: number) {
    return this.httpClient
      .get<User>(`${environment.API_URL}/user/${id}`);
  }

  registerUser(user: User) {
    return this.httpClient
      .post(`${environment.API_URL}/user`, user);
  }

  signinUser(username: string, password: string) {
    return this.httpClient
      .get(`${environment.API_URL}/signin?username=${username}&password=${password}`);
  }

  updateUser(user: User) {
    return this.httpClient
      .put(`${environment.API_URL}/user/${user.id}`, user);
  }

  deleteUser(id: number) {
    return this.httpClient
      .delete(`${environment.API_URL}/user/${id}`);
  }

  deletePost(id: number | string) {
    return this.httpClient
      .delete(`${environment.API_URL}/post/${id}`);
  }

  getSemesters() {
    return this.httpClient
      .get<Semester[]>(`${environment.API_URL}/semesters`);
  }

  getClass(id: number | string) {
    return this.httpClient
      .get<Class>(`${environment.API_URL}/class/${id}`);
  }

  createPost(data: PostRequest) {
    return this.httpClient
      .post<PostRequest>(`${environment.API_URL}/post`, data);
  }

  getPost(id: number | string) {
    return this.httpClient
      .get<Post>(`${environment.API_URL}/post/${id}`);
  }
}
