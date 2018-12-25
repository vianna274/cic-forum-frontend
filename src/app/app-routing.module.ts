import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/auth-guard.service';
import { HomeComponent } from './domain/home/home.component';
import { LoginComponent } from './domain/login/login.component';
import { SignupComponent } from './domain/signup/signup.component';
import { ForumHomeComponent } from './domain/forum-home/forum-home.component';
import { CreatePostComponent } from './domain/create-post/create-post.component';
import { MessagesComponent } from './domain/messages/messages.component';
import { NotificationsComponent } from './domain/notifications/notifications.component';
import { FriendsComponent } from './domain/friends/friends.component';
import { FavoritesComponent } from './domain/favorites/favorites.component';
import { ClassComponent } from './domain/class/class.component';
import { PostComponent } from './domain/post/post.component';
import { OwnPostsComponent } from './domain/own-posts/own-posts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'login' },
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { animation: 'signup' },
  },
  {
    path: 'semesters',
    component: ForumHomeComponent,
    canActivate: [AuthGuardService],
    data: { animation: 'semesters' },
  },
  {
    path: 'my-posts',
    component: OwnPostsComponent,
    canActivate: [AuthGuardService],
    data: { animation: 'my-posts' },
  },
  {
    path: 'create-post',
    canActivate: [AuthGuardService],
    component: CreatePostComponent,
    data: { animation: 'create-post' },
  },
  {
    path: 'messages',
    canActivate: [AuthGuardService],
    component: MessagesComponent,
    data: { animation: 'messages' },
  },
  {
    path: 'notifications',
    canActivate: [AuthGuardService],
    component: NotificationsComponent,
    data: { animation: 'notifications' },
  },
  {
    path: 'friends',
    canActivate: [AuthGuardService],
    component: FriendsComponent,
    data: { animation: 'friends' },
  },
  {
    path: 'favorites',
    canActivate: [AuthGuardService],
    component: FavoritesComponent,
    data: { animation: 'favorites' },
  },
  {
    path: 'post/:id',
    canActivate: [AuthGuardService],
    component: PostComponent,
    data: { animation: 'post' },
  },
  {
    path: 'class/:id',
    canActivate: [AuthGuardService],
    component: ClassComponent,
    data: { animation: 'class' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
