# Generated by Django 4.2.1 on 2023-05-24 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Admin",
            fields=[
                (
                    "admin_email",
                    models.CharField(max_length=25, primary_key=True, serialize=False),
                ),
                ("password", models.CharField(max_length=30)),
            ],
        ),
    ]
