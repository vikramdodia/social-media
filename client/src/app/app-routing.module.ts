import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent} from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ConnectionComponent } from './connection/connection.component';
import { ChatComponent } from './chat/chat.component';
import { FeedsComponent } from './feeds/feeds.component';
import { AllPostComponent } from './all-post/all-post.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
{path:'', pathMatch:'full', redirectTo:'log-in'},
{path: 'sign-up', component:SignUpComponent },
{path: 'log-in', component:LogInComponent },
{path: 'personal-profile', component:PersonalProfileComponent},
{path: 'connection', component: ConnectionComponent},
{path: 'chat', component: ChatComponent},
{path: 'feeds', component: FeedsComponent},
{path: 'posts', component: AddPostComponent},
{path: 'all-posts', component: AllPostComponent},
{path: 'search', component: SearchComponent}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
