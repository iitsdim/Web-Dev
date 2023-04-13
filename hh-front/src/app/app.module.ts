import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { VacanciesByCompanyComponent } from './vacancies-by-company/vacancies-by-company.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesListComponent,
    VacanciesByCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
