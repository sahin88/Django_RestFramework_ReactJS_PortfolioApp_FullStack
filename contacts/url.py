from .views import contactCreateandMailSend
from django.urls import path

urlpatterns = [
    path('mails/', contactCreateandMailSend.as_view())
]
