import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {
  }

  login(user: any) {
    this.authService.login(user).subscribe(resp => {
      this.authService.setAuthToken(resp.headers.get('Authorization'));
      this.router.navigateByUrl('app/home');
    });
  }
}
