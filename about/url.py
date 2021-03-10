from django.urls import path
from .views import AboutView, ProgrammsView


urlpatterns = [path('about-view/', AboutView.as_view()),
               path('programms-view/', ProgrammsView.as_view())]
