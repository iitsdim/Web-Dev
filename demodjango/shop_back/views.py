import json

from django.shortcuts import render, get_object_or_404

from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product, Category
from .serialzers import ProductSerializer, CategorySerializer


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def product_retrieve(request, pk):
    product = get_object_or_404(Product, pk=pk)
    serializer = ProductSerializer(product)
    return Response(serializer.data)


@api_view(['GET'])
def category_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def category_retrieve(request, pk):
    category = get_object_or_404(Category, pk=pk)
    serializer = CategorySerializer(category)
    return Response(serializer.data)


@api_view(['GET'])
def products_by_categories(request, pk):
    products = Product.objects.filter(categories__pk=pk)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
