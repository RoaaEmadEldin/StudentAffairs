from django.db import models

# Create your models here.
class Student(models.Model):
    student_id = models.CharField(primary_key=True, max_length=8)
    name = models.CharField(max_length=30)
    gpa = models.DecimalField(max_digits=3, decimal_places=2)
    level = models.IntegerField()
    status = models.CharField(max_length=8)
    department = models.CharField(max_length=2)
    email = models.EmailField()
    phone_number = models.CharField(max_length=11)
    dob = models.DateField()
    gender = models.CharField(max_length = 6)