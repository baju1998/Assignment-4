import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dog } from '../models/dog';
import { DogHandler } from '../models/dog-handler';
import { Token } from '../models/token';
import { Users } from '../models/users';
import { catchError, map, Observable, of } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class commentmakerService {

  @Output() userLoggedIn = new EventEmitter<boolean>();
  @Output('CurrentRoute') currRoute= new EventEmitter<string>();
  @Output('XClusiveEvent') XClusive= new EventEmitter<string>();
  myDogArray:Dog[] = [];
  
    currentUser:Token|undefined;
  http: any;
  headers: any;
  static getUser: any;
  constructor(private httpClient:HttpClient) {
   // this.myDogArray=[];
   
   // this.myDogArray.push(new Dog( 0,new Date ,"tEST  " ," TEST " ," TEST "  ,new Date ," TEST "));
  
    let tokenInstance = localStorage.getItem('token');
    this.currentUser = tokenInstance?JSON.parse(tokenInstance):null;
    if(this.currentUser)
    {
      var decoded = jwt_decode(this.currentUser.token);
      console.log(decoded);
    }
  }

  getUser(){
    if(this.currentUser!==undefined){



      
      let decoded: any =jwt_decode(this.currentUser.token);
      console.log(decoded.userId);
      return decoded.userId;
    } else {
      return undefined;
    }
  }

  
  


  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }



  GetDogs()
  {
    return this.myDogArray;
  }

  AddDog(dog:Dog)
  {
    this.myDogArray.push(dog);
    let myCurrentTokenString=localStorage.getItem('token');
    let header=new HttpHeaders();
    if(myCurrentTokenString)
    {
      let myCurrentTokenObj: Token = JSON.parse(myCurrentTokenString) as Token;
      
      header=header.set('Authorization',`Bearer ${myCurrentTokenObj.token}`);
      
    }
    return this.httpClient.post(`${environment.serverEndpoint}/Dog`,dog,{headers:header});
    
    
  }

  Login(userId:string, pwd:string)
  {
    return this.httpClient.post<Token>(`${environment.serverEndpoint}/Handler/login`,{userName:userId,password:pwd});
  }

  SetCurrentUser(token:Token)
  {
    this.currentUser = token;
    localStorage.setItem('token',JSON.stringify(token));
    this.userLoggedIn.emit(true);
  }

  GetCurrentUser()
  {
    return this.currentUser;
  }

  LogoutUser()
  {
    this.currentUser=undefined;
    this.userLoggedIn.emit(false);
  }

  CreateHandler(userId:String,firstName:String,lastName :String,emailAddress :String ,password:String)
  {

    console.log("in service");
    let newUser= {userId:userId,firstName:firstName,lastName:lastName,emailAddress:emailAddress,password:password};
console.log("in service");
    return this.httpClient.post<DogHandler>(`${environment.serverEndpoint}/Handler`,newUser);
}
}
