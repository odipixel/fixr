import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TournamentComponent } from './tournament/tournament.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PostHeaderComponent } from './post-header/post-header.component';
import { RegisterComponent } from './register/register.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TournamentComponent,
    FooterComponent,
    HomeComponent,
    PostHeaderComponent,
    RegisterComponent,
    TournamentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdwI7Rn-pQ6p8EDdXBwaxzk-WDeDDB4G0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
