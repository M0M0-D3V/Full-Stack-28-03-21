# Generated by Django 3.2 on 2021-04-20 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playlist_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='song',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='song',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
