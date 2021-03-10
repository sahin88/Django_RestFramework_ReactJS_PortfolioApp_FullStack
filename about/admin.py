from django.contrib import admin
from .models import About, Programms


class aboutAdmin(admin.ModelAdmin):
    list_display = ('about_image', 'about_exp1', 'about_exp1')
    list_display_links = ('about_exp1',)
    search_fields = ('about_exp1',)
    list_per_page = 25


admin.site.register(About, aboutAdmin)


class programmAdmin(admin.ModelAdmin):
    list_display = ('name', 'percentage', 'icon')
    list_display_links = ('name', 'percentage',)
    orderin=('percentage',)
    search_fields = ('name', 'percentage',)
    list_per_page = 25


admin.site.register(Programms, programmAdmin)
