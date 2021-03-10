from django.contrib import admin
from .models import Projects
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


class ProjectsAdmin(admin.ModelAdmin):

    list_display = ('id', 'name', 'description', 'image')
    list_display_links = ('id', 'name', 'description')
    search_fields = ('name',)
    list_per_page = 24


admin.site.register(Projects)
