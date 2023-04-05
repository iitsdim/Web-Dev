from django.urls import path, include

from . import views

urlpatterns = [
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:pk>/', views.vacancy_retrieve),
    path('companies/', views.company_list),
    path('companies/<int:pk>/', views.company_retrieve),
    path('companies/<int:pk>/vacancies', views.vacancies_by_company)
]
