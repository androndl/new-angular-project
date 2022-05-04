import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'evolve-frontend';
  isAuthenticated = false;
  constructor(public router: Router) {}

  ngOnInit(): void {
    let login = "";
    if(login) {
      this.router.navigateByUrl('/');
    }
  }
  public logout(): void {
    // todo
  }

}
