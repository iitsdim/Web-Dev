import public as public
from django.shortcuts import render
from rest_framework import views
from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from hh_back.models import Vacancy, Company
from hh_back.serializers import VacancySerializer, CompanySerializer


@api_view(['GET'])
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def vacancy_retrieve(request, pk):
    vacancy = get_object_or_404(Vacancy, pk=pk)
    serializer = VacancySerializer(vacancy)
    return Response(serializer.data)


@api_view(['GET'])
def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def company_retrieve(request, pk):
    company = get_object_or_404(Company, pk=pk)
    serializer = CompanySerializer(company)
    return Response(serializer.data)


@api_view(['GET'])
def vacancies_by_company(request, pk):
    vacancies = Vacancy.objects.filter(company__pk=pk).order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)
