import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutMovieComponent } from './about-movie/about-movie.component';
import { MostViewedComponent } from './most-viewed/most-viewed.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMovieComponent },
  { path: 'mostVieved', component: MostViewedComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AboutMovieComponent,
    MostViewedComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
