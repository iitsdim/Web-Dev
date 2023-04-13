import {Component, OnInit} from '@angular/core';
import {Company} from "../models";
import {CompaniesService} from "../companies.service";

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  companies = [] as Company[];

  constructor(
    private companyService: CompaniesService
  ) {
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  private getCompanies() {
    this.companyService.getCompanies().subscribe((companies) => {
      console.log(companies);
      this.companies = companies;
    });
  }
}
