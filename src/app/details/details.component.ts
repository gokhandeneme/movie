import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  des = sessionStorage.getItem('movieid');
  description: any;

  similar: any;
  len: any;
  constructor(private http: HttpClient, private route: Router) {
    //des
    http
      .get(
        `https://api.themoviedb.org/3/movie/${this.des}?api_key=fdb4494c3f989916f8b96295c0215907&language=en-US`
      )
      .subscribe((response) => {
        this.description = response;
        console.log(this.description);
        this.len = this.description.genres.length;
      });
    //similar
    http
      .get(
        `https://api.themoviedb.org/3/movie/${this.des}/similar?api_key=fdb4494c3f989916f8b96295c0215907&language=en-US&page=1`
      )
      .subscribe((response) => {
        this.similar = response;
      });
  }

  getMovieID(id: any) {
    sessionStorage.setItem('movieid', id);
    window.location.reload();
  }
  ngOnInit(): void {}
}
