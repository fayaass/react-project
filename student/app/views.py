from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets
# Create your views here.

class main(viewsets.ModelViewSet):
    serializer_class=student_serializer
    queryset=student.objects.all()