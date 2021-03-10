from rest_framework import serializers
from .models import About, Programms


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'


class ProgrammsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programms
        fields = '__all__'
