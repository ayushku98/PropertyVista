# Generated by Django 5.1.3 on 2024-11-22 14:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0014_alter_propertyinteriorhome_image_delete_favorite'),
    ]

    operations = [
        migrations.DeleteModel(
            name='PropertyInteriorHome',
        ),
    ]
