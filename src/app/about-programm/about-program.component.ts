import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-about-program',
  templateUrl: './about-program.component.html',
  styleUrls: ['./about-program.component.scss']
})
export class AboutProgramComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/main']);
    }
  }
}
