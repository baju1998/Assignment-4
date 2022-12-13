import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { commentmakerService } from '../services/commentmaker.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit  {
  constructor(private dogKeeperSvc:commentmakerService, private router:Router, private activatedRoute:ActivatedRoute) { }

  userId='';
  password='';
  errorOccured=false;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      console.log(params);
      this.userId=params['userId'];
    });

  }

  Login()
  {
    this.dogKeeperSvc.Login(this.userId, this.password).subscribe({
      next: (data) => {
        this.dogKeeperSvc.SetCurrentUser(data);
        console.log(data);
      },
      error: (err) => {
        console.log(err);
        
      },
      complete: () => {
        console.log('Complete')
      }
    });

    // Old Hard Coded Login

    /*let result =this.dogKeeperSvc.Login(this.userName,this.password);
    if(result)
    {
        this.router.navigate(['/']);
    }
    else
    {
      this.errorOccured=true;
    }*/
  }

}
