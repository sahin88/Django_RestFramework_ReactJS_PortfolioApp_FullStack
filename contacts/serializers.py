from rest_framework import serializers
from .models import Contacts
from django.core.mail import send_mail


class contactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = '__all__'
