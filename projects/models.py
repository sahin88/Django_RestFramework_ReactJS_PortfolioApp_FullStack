from django.db import models

#


class Projects(models.Model):
    name = models.CharField(max_length=1000, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(blank=True, upload_to='project/%Y/%m/')
    url_field = models.URLField(max_length=500)
