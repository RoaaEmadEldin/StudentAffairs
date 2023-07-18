from django.db import models

# Create your models here.
class Admin(models.Model):
    admin_email = models.CharField(primary_key=True, max_length=25)
    password = models.CharField(max_length=30)