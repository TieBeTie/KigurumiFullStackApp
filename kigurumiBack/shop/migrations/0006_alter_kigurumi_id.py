# Generated by Django 4.0 on 2021-12-15 00:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0005_alter_kigurumi_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kigurumi',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
