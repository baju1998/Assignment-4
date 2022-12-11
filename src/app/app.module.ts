import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DogcardComponent } from './dogcard/dogcard.component';
import { NewdogComponent } from './newdog/newdog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
//import { HighlightDirective } from './directives/highlight.directive';
//import { HtmlPlayComponent } from './html-play/html-play.component';
import { AppendHtmlDirective } from './directives/append-html.directives.directive';
import { commentmakerService } from './services/commentmaker.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DogcardComponent,
    NewdogComponent,
    LoginComponent,
    RegisterComponent,
  //  HighlightDirective,
  //  HtmlPlayComponent,
AppendHtmlDirective,
    
  ],
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatCardModule,
  ],
  providers: [
    commentmakerService
  ]
  
})
export class AppModule { }
