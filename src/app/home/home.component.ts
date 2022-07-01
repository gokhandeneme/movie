import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  upcoming: any;
  getid = 0;

  constructor(private http: HttpClient, private route: Router) {
    //upcoming
    http
      .get(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=fdb4494c3f989916f8b96295c0215907&language=en-US&page=1'
      )
      .subscribe((response) => {
        this.upcoming = response;
        console.log(this.upcoming);
      });
  }

  getMoviePlus() {
    if (this.getid >= 4) {
      this.getid = 0;
    } else {
      this.getid++;
    }
  }
  getMovieMinus() {
    if (this.getid <= 0) {
      this.getid = 4;
    } else {
      this.getid--;
    }
  }

  getMovie(value: any) {
    this.getid = value;
  }

  ngOnInit(): void {}
}
