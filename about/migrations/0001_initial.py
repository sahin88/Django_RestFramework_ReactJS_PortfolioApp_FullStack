# Generated by Django 3.0 on 2021-03-10 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('about_image', models.ImageField(upload_to='about/')),
                ('about_exp1', models.TextField(blank=True, null=True)),
                ('about_exp2', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Programms',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('icon', models.CharField(max_length=255)),
                ('percentage', models.CharField(blank=True, max_length=25, null=True)),
            ],
        ),
    ]
