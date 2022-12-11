import { Component, Input, OnInit, Output } from '@angular/core';
import { Dog } from '../models/dog';
import { Users } from '../models/users';
import { commentmakerService } from '../services/commentmaker.service';




@Component({
  selector: 'app-dogcard',
  templateUrl: './dogcard.component.html',
  styleUrls: ['./dogcard.component.css']
})
export class DogcardComponent implements OnInit {


  @Input() color:string='';
  @Input() CurrentDog:Dog|undefined;
  @Input()  AddDirective!: boolean;
  @Input() CurrentUser:Users|undefined;



  currentUserId= commentmakerService.getUser();

  constructor(private dogSvc: commentmakerService) {
     this.currentUserId = this.dogSvc.getUser();
  }
  ngOnInit(): void {
    
  }

  GetDirective()
  {
    return this.AddDirective;
  }
}