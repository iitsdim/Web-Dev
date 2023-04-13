import { Component, OnInit } from '@angular/core';
import {Vacancy} from "../models";
import {VacanciesService} from "../vacancies.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vacancies-by-company',
  templateUrl: './vacancies-by-company.component.html',
  styleUrls: ['./vacancies-by-company.component.css']
})
export class VacanciesByCompanyComponent implements OnInit {
  vacancies = [] as Vacancy[];
  id: number | undefined;

  constructor(
    private vacanciesService: VacanciesService,
    private route: ActivatedRoute,
  ) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('companyId');
      if(_id) {
        this.id = +_id;
        this.vacanciesService.getVacanciesByCompany(this.id).subscribe((vacancies) => {
          this.vacancies = vacancies;
        });
      }
    });
  }

}
