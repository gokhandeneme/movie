import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  popular: any;

  constructor(private http: HttpClient, private route: Router) {
    //popular
    http
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=fdb4494c3f989916f8b96295c0215907&language=en-US&page=1'
      )
      .subscribe((response) => {
        this.popular = response;
        console.log(response);
      });
  }

  getMovieID(id: any) {
    sessionStorage.setItem('movieid', id);
    this.route.navigate(['details']);
  }

  ngOnInit(): void {}
}
