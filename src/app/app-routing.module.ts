import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

const routes: Routes = [{path:'' , component:HomeComponent },
                        {path:'home', component:HomeComponent},
                        { path:'song-card' , component:SongCardComponent},
                        { path:'sign-up' , component:SignUpComponent},
                        { path:'login' , component:LoginComponent},
                        { path:'playlist', component:PlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
