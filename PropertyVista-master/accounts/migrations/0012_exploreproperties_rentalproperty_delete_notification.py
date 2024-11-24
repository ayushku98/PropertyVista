# Generated by Django 5.1.2 on 2024-11-22 06:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0011_notification'),
    ]

    operations = [
        migrations.CreateModel(
            name='ExploreProperties',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('category', models.CharField(choices=[('Apartment', 'Apartment'), ('Villa', 'Villa'), ('Studio', 'Studio')], max_length=50)),
                ('location', models.CharField(max_length=200)),
                ('owner_name', models.CharField(max_length=100)),
                ('owner_contact', models.CharField(max_length=15)),
                ('image', models.ImageField(upload_to='explore_properties_images/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='RentalProperty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('location', models.CharField(max_length=255)),
                ('image', models.ImageField(upload_to='property_images/')),
                ('category', models.CharField(max_length=100)),
                ('owner_name', models.CharField(max_length=100)),
                ('owner_contact', models.CharField(max_length=15)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Notification',
        ),
    ]