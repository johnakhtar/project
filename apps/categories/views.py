from django.shortcuts import render
from rest_framework import generics
from .models import Category

# Create your views here.


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.order_by('-created_at').all()
    