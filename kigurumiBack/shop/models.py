from typing import Text
from django.db import models

class Kigurumi(models.Model):
    id=models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100, default='')
    sizes = models.CharField(max_length=100, default='')
    price = models.IntegerField(default=0)
    img = models.CharField(max_length=256, default='')

def insert(name, sizes, price, img):
    kigurumi = Kigurumi()
    kigurumi.name = name
    kigurumi.sizes = sizes
    kigurumi.price = price
    kigurumi.img = img
    kigurumi.save()

class Order(models.Model):
    country = models.CharField(max_length=100, default='')
    region = models.CharField(max_length=100, default='')
    city = models.CharField(max_length=100, default='')
    address = models.CharField(max_length=300, default='')
    index = models.IntegerField(default=0)
    name = models.CharField(max_length=200, default='')
    phone = models.CharField(max_length=100, default='')
    kigurumi_id = models.IntegerField(default=-1)
