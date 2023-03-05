import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {
  constructor(
    private client: HttpClient
  ) {}

  getJoke() {
      return this.client.get<Observable<any>>(`https://v2.jokeapi.dev/joke/Dark?type=single`);
  }
}
