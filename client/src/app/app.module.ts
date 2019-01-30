import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LogInComponent } from './log-in/log-in.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ConnectionComponent } from './connection/connection.component';
import { ChatComponent } from './chat/chat.component';
import { FeedsComponent } from './feeds/feeds.component';
import { AllPostComponent } from './all-post/all-post.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogInComponent,
    PersonalProfileComponent,
    SignUpComponent,
    AddPostComponent,
    ConnectionComponent,
    ChatComponent,
    FeedsComponent,
    AllPostComponent,
    SearchComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
