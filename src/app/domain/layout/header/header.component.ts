import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/data.service';
import { UserService } from 'src/app/core/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  mode = new FormControl('over');
  menu: Object;
  menuNormal: Object;
  user: any;
  subscription: Subscription;

  constructor(
    private router: Router,
    private dataService: DataService,
    private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.userService.getUser().subscribe(user => this.user = user);
    this.userService.updateCurrentUser();
    this.menu = [
      {
        link: '',
        name: 'Home'
      },
      {
        link: 'about',
        name: 'About'
      },
      {
        link: 'semesters',
        name: 'Semesters'
      }
    ];
    this.menuNormal = [
        {
          link: '',
          name: 'Home'
        },
        {
          link: 'about',
          name: 'About'
        },
        {
          link: 'login',
          name: 'Login'
        },
        {
          link: 'signup',
          name: 'Sign Up'
        }
      ];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.userService.deleteCurrentUser();
    this.router.navigate(['/']);
  }
}
