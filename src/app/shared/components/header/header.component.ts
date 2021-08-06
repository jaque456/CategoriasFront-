import { Component, EventEmitter, OnDestroy ,OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/pages/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy = new Subject<any>();
  isLogged = false;
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private authSvc: AuthService) { 
  }

  ngOnInit(): void {
    this.authSvc.isLogged
    .pipe(takeUntil(this.destroy))
    .subscribe(res => this.isLogged = res)
  }

  ngOnDestroy(): void {
    this.destroy.next({});
    this.destroy.complete();
  }

  onToggleSidenav(): void {
    this.toggleSidenav.emit();

  }

  onLogout(): void {
    this.authSvc.logout();
  }

}