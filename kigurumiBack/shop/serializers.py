from django.db.models import fields
from rest_framework import serializers
from .models import Kigurumi, Order

class PostSerializersKigurumi(serializers.ModelSerializer):
    class Meta:
        model = Kigurumi
        fields = "__all__"

class PostSerializersOrder(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"
