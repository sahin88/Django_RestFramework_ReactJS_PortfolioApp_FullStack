from .views import ProjectView
from django.urls import path


urlpatterns = [

    path('', ProjectView.as_view(), name='projects')
]
