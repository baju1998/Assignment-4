import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor() { }
     name:string='BJ';
     btnDisabled=true;
    ngOnInIt():  void {
        setTimeout(()=>{
          this.name="Peter Parker";
          this.btnDisabled=false;
        },5000);
    }
  DisplayHello(eventArgs:any){

    alert('Wrong Password');
  }

}
