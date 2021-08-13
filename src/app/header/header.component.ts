import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    constructor(
        private router: Router,
        public auth: AuthService
    ) { }

    ngOnInit(): void {
    }

    goLogin(): void {
        this.router.navigate(['/login']);
    }
    goLogout(): void {
        this.auth.logout();
        this.router.navigate(['/']);
    }

}
