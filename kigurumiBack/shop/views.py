from django.http import request
from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Kigurumi, Order
from .serializers import PostSerializersKigurumi, PostSerializersOrder
from rest_framework import generics, serializers


class KigurumiPostList(generics.ListAPIView):
    serializer_class = PostSerializersKigurumi
    queryset = Kigurumi.objects.all()

class KigurumiFilteredPostListByName(generics.ListAPIView):
        serializer_class = PostSerializersKigurumi
        
        def get_queryset(self):
            return Kigurumi.objects.filter(name=self.request.name)


class OrderPostList(generics.ListAPIView):
    serializer_class = PostSerializersOrder
    queryset = Order.objects.all()

class OrderPostCreate(generics.CreateAPIView):
    serializer_class = PostSerializersOrder
