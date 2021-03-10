from django.db import models


class About(models.Model):
    about_image = models.ImageField(upload_to="about/")
    about_exp1 = models.TextField(blank=True, null=True)
    about_exp2 = models.TextField(blank=True, null=True)


class Programms(models.Model):
    name = models.CharField(max_length=255)
    icon = models.CharField(max_length=255)
    percentage = models.CharField(max_length=25, blank=True, null=True)
