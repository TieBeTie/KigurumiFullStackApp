from django.db.models import fields
from rest_framework import serializers
from .models import Kigurumi

class PostSerializers(serializers.ModelSerializer):
    class Meta:
        model = Kigurumi
        fields = "__all__"