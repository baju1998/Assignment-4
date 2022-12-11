import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogcardComponent } from './dogcard/dogcard.component';
import { HomeComponent } from './home/home.component';
//import { HtmlPlayComponent } from './html-play/html-play.component';
import { LoginComponent } from './login/login.component';
import { NewdogComponent } from './newdog/newdog.component';
import { RegisterComponent } from './register/register.component';
import { AuthGService } from './services/authg.service';
import { commentmakerService } from './services/commentmaker.service';
import { UserManagementComponent } from './user-management/user-management.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'usermanager',
    component: UserManagementComponent
  },
  {
    path: ' ',
   component: HomeComponent
  }, 
  {
    path:'NewDog',
    component: NewdogComponent,
    canActivate:[AuthGService]

  },
  
  {
    path:'Login',
    component: LoginComponent

  },
  {
    path:'Register',
    component: RegisterComponent,

  },
  /*{
    path:'html',
    component:HtmlPlayComponent
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
