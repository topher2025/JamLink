from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    instruments = models.CharField(max_length=255, blank=True)
    styles = models.CharField(max_length=255, blank=True)

