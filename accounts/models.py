from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
# Create your models here.


class UserAccountManager(BaseUserManager):
    def create_user(self,
                    email,
                    name,
                    password=None,
                    is_active=True,
                    is_admin=False,
                    is_staff=False,
                    is_superuser=False,
                    is_verified=False):
        if name is None:
            raise ValueError('Username field is necessary please fill out')
        if email is None:
            raise ValueError('Fuck Trump Erdogan Putin and their voters')
        user = self.model(email=self.normalize_email(email), name=name)
        user.set_password(password)
        user.is_admin = is_admin
        user.is_active = is_active
        user.is_staff = is_staff
        user.is_verified = is_verified
        user.is_superuser = is_superuser
        user.save(using=self._db)
        return user

    def create_superuser(self,
                         email,
                         name,
                         password):
        user = self.create_user(email=self.normalize_email(
            email), name=name, password=password, is_active=True, is_admin=True, is_staff=True, is_superuser=True, is_verified=False)
        user.is_active = True
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.is_verified = False
        print('haci hüsrev')

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    objects = UserAccountManager()
    is_active = models.BooleanField(default=True)
    is_verified = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']
    objects = UserAccountManager()

    def get_full_name(self):
        return self.name

    def __str__(self):
        return self.email

    def __str__(self):
        return self.email

    def has_perm(self, perms, obj=None):
        return self.is_admin
