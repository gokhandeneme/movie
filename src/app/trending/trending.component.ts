import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  trending: any;
  trendingMovies: any;
  posts: any;
  constructor(private http: HttpClient, private route: Router) {
    //popular
    http
      .get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=fdb4494c3f989916f8b96295c0215907'
      )
      .subscribe((response) => {
        this.trending = response;
      });
  }

  getMovieID(id: any) {
    sessionStorage.setItem('movieid', id);
    this.route.navigate(['details']);
  }

  ngOnInit(): void {}
}
