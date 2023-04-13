import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompaniesListComponent} from "./companies-list/companies-list.component";
import {VacanciesByCompanyComponent} from "./vacancies-by-company/vacancies-by-company.component";

const routes: Routes = [
  {path: 'companies', component: CompaniesListComponent },
  {path: 'companies/:companyId', component: VacanciesByCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
