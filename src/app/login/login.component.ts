import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/interfaces';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    public auth: AuthService,
    private route: Router
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const user: User = {
        email: this.form.value.email,
        password: this.form.value.password
      };
      this.form.reset();
      this.auth.login(user).subscribe(() => {
        this.route.navigate(['/main']);
      });
    }
  }

}
