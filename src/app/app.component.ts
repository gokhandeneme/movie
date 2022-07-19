import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchMovie: any;

  constructor(private route: Router, private http: HttpClient) {}

  goToHome() {
    this.route.navigate(['home']);
  }

  async inputChanged(movieName: any) {
    await this.http
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=fdb4494c3f989916f8b96295c0215907&language=en-US&query=${movieName.value}&page=1&include_adult=false`
      )
      .subscribe((response) => {
        this.searchMovie = response;
        console.log(response);
      });
    for (var i = 0; i < 20; i++)
      if (this.searchMovie.results[i].title === movieName.value) {
        sessionStorage.setItem('movieid', this.searchMovie.results[i].id);
        this.route.navigate(['details']);
        if (this.route.url === '/details') {
          window.location.reload();
        }
      }
  }

  goMovie() {
    console.log('clicked');
    sessionStorage.setItem('movieid', this.searchMovie.results[0].id);
    this.route.navigate(['details']);
    if (this.route.url === '/details') {
      window.location.reload();
    }
  }
}
