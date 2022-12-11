import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebcommService {
@Output() public onMessage: EventEmitter<string> = new EventEmitter<any>();
  constructor() { }

  public SendAuthenticatedRequest(){
let token = "xx";
return this.httpC.get("https://localhost:44300/api/values", {}, {headers:{Authorization:"Bearer "+token}});


  }
}
