from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index),
    path('/products/', views.product_list),
    path('product/<int:pk>/', views.product_retrieve),
    path('categories/', views.category_list),
    path('categories/<int:pk>', views.category_retrieve),
    path('categories/<int:pk>/products', views.products_by_categories),
]
