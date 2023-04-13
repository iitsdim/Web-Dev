import public as public
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import views
from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
import json

from rest_framework.views import APIView

from hh_back.models import Vacancy, Company
from hh_back.serializers import VacancySerializer, CompanySerializer, ReadCompanySerializer


class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return JsonResponse(serializer.data)


class VacancyDetailAPIView(APIView):
    def get(self, request, pk):
        vacancy = get_object_or_404(Vacancy, pk=pk)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, pk):
        vacancy = get_object_or_404(Vacancy, pk=pk)
        data = json.loads(request.body)
        serializer = VacancySerializer(instance=vacancy, data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return JsonResponse(serializer.data)

    def delete(self, request, pk):
        vacancy = get_object_or_404(Vacancy, pk=pk)
        vacancy.delete()
        return Response({'deleted': True})


@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = ReadCompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return JsonResponse(serializer.data)


@csrf_exempt
def company_retrieve(request, pk):
    try:
        company = get_object_or_404(Company, pk=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        serializer = ReadCompanySerializer(company)
        return JsonResponse(serializer.data)
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = CompanySerializer(instance=company, data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return JsonResponse(serializer.data)


@api_view(['GET'])
def vacancies_by_company(request, pk):
    vacancies = Vacancy.objects.filter(company__pk=pk).order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)
