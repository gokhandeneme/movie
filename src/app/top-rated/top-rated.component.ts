import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css'],
})
export class TopRatedComponent implements OnInit {
  toprated: any;

  constructor(private http: HttpClient, private route: Router) {
    //top rated
    http
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=fdb4494c3f989916f8b96295c0215907&language=en-US&page=1'
      )
      .subscribe((response) => {
        this.toprated = response;
        console.log(response);
      });
  }
  getMovieID(id: any) {
    sessionStorage.setItem('movieid', id);
    this.route.navigate(['details']);
  }

  ngOnInit(): void {}
}
