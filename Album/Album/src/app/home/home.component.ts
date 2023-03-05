import { Component } from '@angular/core';
import {JokeApiService} from "../joke-api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  joke: Observable<any> | undefined

  constructor(
    private jokeApiService: JokeApiService
  ) {
    this.jokeApiService.getJoke().subscribe((joke) => {
      this.joke = joke;
    });
  }
}
