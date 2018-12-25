import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from 'src/app/animations/router.animation';
import { speedDialFabAnimations } from 'src/app/animations/fab-button.animation';
import { HeaderComponent } from './header/header.component';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [routerTransition, speedDialFabAnimations],
})
export class LayoutComponent implements OnInit {
  @ViewChild(HeaderComponent) header: HeaderComponent;
  private fabButtons = [
    {
      icon: 'sms',
      link: 'messages',
    },
    {
      icon: 'notifications',
      link: 'notifications',
    },
    {
      icon: 'person_add',
      link: 'friends',
    },
    {
      icon: 'star',
      link: 'favorites',
    },
    {
      icon: 'add_box',
      link: 'create-post',
    },
  ];
  private buttons = [];
  private fabTogglerState = 'inactive';
  private userLogged = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((res) => {
      if (res !== null) {
        this.userLogged = true;
      } else {
        this.userLogged = false;
      }
    });
  }

  toggleMenu() {
    if (this.header.sidenav.opened) {
      this.header.sidenav.toggle();
    }
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

}
