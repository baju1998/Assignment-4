import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Dog } from '../models/dog';
import { Users } from '../models/users';
import { commentmakerService } from '../services/commentmaker.service';

@Component({
  selector: 'app-newdog',
  templateUrl: './newdog.component.html',
  styleUrls: ['./newdog.component.css']
})
export class NewdogComponent implements OnInit {

  newDog:Dog;
  constructor(private dogKeeperInstance:commentmakerService, private titleSvc:Title) { 
    this.newDog = new Dog(0 , new Date ,'','','', new Date, dogKeeperInstance.getUser()  ); // pass the user as an argument to the constructor
    this.titleSvc.setTitle('New Dog Page');
  }






  ngOnInit(): void {
   
  }
  
  MakeMeADog()
  {
    this.dogKeeperInstance.AddDog(this.newDog).subscribe({
      next: (data) => {
        console.log(data);
        alert('Dog Added');
      },
      error: (err) => {
        console.log(err);
      }
    })
    
  }
}
