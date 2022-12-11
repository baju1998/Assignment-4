import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { commentmakerService } from '../services/commentmaker.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
{
  responseError=false;
  ErrorMsg='';
  emailFormControl = new FormControl('lol@lol.com', [Validators.required, Validators.email]);
  registrationFormGrp = new FormGroup(
    {
      frmuserId: new FormControl('', [Validators.required]),
      frmfirstName: new FormControl('', [Validators.required]),
      frmlastName: new FormControl('', [Validators.required]),
      frmemailAddress: new FormControl('', [Validators.required]),
      frmpassword: new FormControl('', [Validators.required]),
    }
  );
  tooltipBtn = "Here";
  constructor(private _snackBar: MatSnackBar, private commentmakerService: commentmakerService, private router:Router) { }

  ngOnInit(): void
  {
  }
   async RegisterUser()
  {

    this.registrationFormGrp.markAllAsTouched();
    if (this.registrationFormGrp.valid)
    {

      console.log("here");

      let userId = this.registrationFormGrp.get('frmuserId')?.value;
      let firstName =this.registrationFormGrp.get('frmfirstName')?.value;
      let lastName =this.registrationFormGrp.get('frmlastName')?.value;
      let emailAddress =this.registrationFormGrp.get('frmemailAddress')?.value;
      let password = this.registrationFormGrp.get('frmpassword')?.value;
    if(userId && firstName && lastName  && emailAddress && password)
     {

console.log(userId);
        console.log(firstName);
        console.log(lastName);
        console.log(emailAddress);
        console.log(password);

       (await this.commentmakerService.CreateHandler(userId, firstName, lastName, emailAddress, password)).subscribe(
          {
            next: (data: any) =>
            {
              this._snackBar.open(`User: ${data} has been created successfully`,'Close',{duration:3000});
              //this.router.navigate(['/Login',{userName:userId}]);
            },
            error: (err: { Message: string; })=>
            {
             this.responseError=true;
             this.ErrorMsg=err.Message;
              this._snackBar.open(`Error: ${JSON.stringify(err)}`);
            }
          }
        )
      
      }
  }
 

  }

  Clear()
  {
    this.registrationFormGrp.reset();
  }
}
