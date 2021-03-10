from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Projects
from .serializers import ProjectsSerializers
from rest_framework.response import Response
from rest_framework import permissions


# Create your views here.

class ProjectView(ListAPIView):
    queryset = Projects.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = ProjectsSerializers
