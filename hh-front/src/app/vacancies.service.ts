import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(
    private client: HttpClient
  ) { }

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/hh-back/companies/${companyId}/vacancies`);
  }
}
