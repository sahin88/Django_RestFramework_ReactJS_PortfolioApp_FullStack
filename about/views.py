from django.shortcuts import render

from rest_framework.generics import ListAPIView
from rest_framework import permissions
from .serializers import AboutSerializer, ProgrammsSerializer
from .models import About, Programms

# Create your views here.


class AboutView(ListAPIView):
    queryset = About.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = AboutSerializer


class ProgrammsView(ListAPIView):
    queryset = Programms.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = ProgrammsSerializer
