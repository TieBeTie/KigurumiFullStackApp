from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Kigurumi
from .serializers import PostSerializers
from rest_framework import generics, serializers


class PostList(generics.ListAPIView):
    serializer_class = PostSerializers
    queryset = Kigurumi.objects.all()

class FilteredPostListByName(generics.ListAPIView):
        serializer_class = PostSerializers
        
        def get_queryset(self):
            return Kigurumi.objects.filter(name=self.request.name)