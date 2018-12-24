import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { DataService } from './core/data.service';
import { AuthGuardService } from './core/auth-guard.service';
import { AuthService } from './core/auth.service';
import { SignupComponent } from './domain/signup/signup.component';
import { LoginComponent } from './domain/login/login.component';
import { HomeComponent } from './domain/home/home.component';
import { FriendsComponent } from './domain/friends/friends.component';
import { FavoritesComponent } from './domain/favorites/favorites.component';
import { NotificationsComponent } from './domain/notifications/notifications.component';
import { MessagesComponent } from './domain/messages/messages.component';
import { CreatePostComponent } from './domain/create-post/create-post.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { ForumHomeComponent } from './domain/forum-home/forum-home.component';
import { ForumCategoryComponent } from './domain/forum-home/forum-category/forum-category.component';
import { ForumSubCategoryComponent } from './domain/forum-home/forum-category/forum-sub-category/forum-sub-category.component';
import { HeaderComponent } from './domain/layout/header/header.component';
import { LayoutComponent } from './domain/layout/layout.component';
import { FooterComponent } from './domain/layout/footer/footer.component';
import { ClassComponent } from './domain/class/class.component';
import { DateService } from './core/date.service';
import { DatePipe } from '@angular/common';
import { PostComponent } from './domain/post/post.component';
import { OwnPostsComponent } from './domain/own-posts/own-posts.component';

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
    ForumHomeComponent,
    ForumCategoryComponent,
    ForumSubCategoryComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ClassComponent,
    PostComponent,
    OwnPostsComponent,
  ],
  imports: [
    CustomMaterialModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    DataService,
    AuthGuardService,
    AuthService,
    DateService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
