from django.contrib import admin
from .models import UserAccount
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

# Register your models here.


class AdminUserModel(BaseUserAdmin):
    class Meta:
        model = UserAccount
    list_display = ('email', 'email', 'name', 'is_admin')
    list_filter = ()
    fieldsets = (
        (None, {
            'fields': ('email', 'password')
        }),
        ('Personal info', {
            'fields': ('last_login', )
        }),
        ('Permissions', {
            'fields':
            ('name', 'is_admin', 'is_active',
             'is_staff', 'is_superuser', 'is_verified')
        }),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = ((None, {
        'classes': ('wide', ),
        'fields': ('email', 'password')
    }), )
    search_fields = ('email', )
    ordering = ('email', )
    filter_horizontal = ()


admin.site.register(UserAccount, AdminUserModel)
