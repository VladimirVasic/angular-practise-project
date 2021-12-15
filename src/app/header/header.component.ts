import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;

  isAuthenticated = false;

  constructor(
    private dsService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      // this.isAuthenticated = user != null;
      this.isAuthenticated = !!user;
    });
  }
  onSaveData() {
    this.dsService.storeRecipes();
  }
  onFetchData() {
    this.dsService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
