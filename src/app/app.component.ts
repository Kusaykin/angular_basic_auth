import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // signedin1 = false;

  signedin$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit(): void {
    // this.authService.signedin$.subscribe((signedin) => {
    //   this.signedin1 = signedin;
    // });


    this.authService.checkAuth().subscribe( ()=> {});
    // setTimeout(() => {
    //   this.authService.signout().subscribe( ()=> {});
    // },5000);
    

  }

}
