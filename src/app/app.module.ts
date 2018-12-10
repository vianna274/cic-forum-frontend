import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CustomMaterialModule } from './shared/custom-material.module';
import { FriendsComponent } from './components/friends/friends.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { UiModule } from './components/ui/ui.module';
import { ForumModule } from './components/forum/forum.module';
import { SharedModule } from './shared/shared.module';
import { DataService } from './core/data.service';
import { AuthGuardService } from './core/auth-guard.service';
import { AuthService } from './core/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    FriendsComponent,
    FavoritesComponent,
    NotificationsComponent,
    MessagesComponent,
    CreatePostComponent,
  ],
  imports: [
    ForumModule,
    CustomMaterialModule,
    BrowserModule,
    HttpClientModule,
    UiModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    DataService,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
