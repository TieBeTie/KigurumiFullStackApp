# Generated by Django 4.0 on 2021-12-14 23:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_remove_kigurumi_id_kigurumi_img_alter_kigurumi_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='kigurumi',
            name='id',
            field=models.IntegerField(default=1, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='kigurumi',
            name='name',
            field=models.CharField(default='', max_length=100),
        ),
    ]
