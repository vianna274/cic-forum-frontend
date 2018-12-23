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

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      data: { animation: 'home'}
    },
    {
      path: 'login',
      component: LoginComponent,
      data: { animation: 'login'}
    },
    {
      path: 'signup',
      component: SignupComponent,
      data: { animation: 'signup'}
    },
    {
      path: 'semesters',
      component: ForumHomeComponent,
      canActivate: [AuthGuardService],
      data: { animation: 'semesters'}
    },
    {
      path: 'create_post',
      canActivate: [AuthGuardService],
      component: CreatePostComponent
    },
    {
      path: 'messages',
      canActivate: [AuthGuardService],
      component: MessagesComponent
    },
    {
      path: 'notifications',
      canActivate: [AuthGuardService],
      component: NotificationsComponent
    },
    {
      path: 'friends',
      canActivate: [AuthGuardService],
      component: FriendsComponent
    },
    {
      path: 'favorites',
      canActivate: [AuthGuardService],
      component: FavoritesComponent
    },
    {
      path: 'class/:id',
      canActivate: [AuthGuardService],
      component: ClassComponent,
    },
    {
      path: '**',
      redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
