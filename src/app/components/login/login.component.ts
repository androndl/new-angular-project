import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsersService,
    //private _authService: AuthService
    ) {}

  ngOnInit(): void {
    debugger;
  }

  login() {
    console.log(this.username);
    console.log(this.password);

    this._router.navigateByUrl('/main');

    const user = {username: this.username, password: this.password};
/*
    this._userService.login(user).subscribe( (data: any) => {
      console.log(data);
      this._router.navigateByUrl('main');
    },
      error => {
      console.log(error);
    });
    */
  }

}
