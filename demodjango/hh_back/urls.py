from django.urls import path, include

from . import views

urlpatterns = [
    path('vacancies/', views.VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', views.VacancyDetailAPIView.as_view()),
    path('companies/', views.company_list),
    path('companies/<int:pk>/', views.company_retrieve),
    path('companies/<int:pk>/vacancies', views.vacancies_by_company)
]
