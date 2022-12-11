import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {  Router } from '@angular/router';
import { Token } from '../models/token';
import { Users } from '../models/users';
import { commentmakerService } from '../services/commentmaker.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 /* instructor feedback: WOW your stuff is neat!
 */
 
  constructor(private dogSvc:commentmakerService, private router:Router) { }
  currentUser:Token|undefined;
  ngOnInit(): void {
    this.currentUser=this.dogSvc.GetCurrentUser();
    
    this.dogSvc.userLoggedIn.subscribe((data)=>{
      if(data)
      {
        this.currentUser=this.dogSvc.GetCurrentUser();
      }
      else
      {
        this.currentUser=undefined;
        this.router.navigate(['/']);
      }
    });
    this.dogSvc.currRoute.subscribe((data)=>{
      console.log(`Route Received at Nav: ${data}`);
    });
  }

  LogoutUser()
  {
    this.dogSvc.LogoutUser();
  }

  

}
