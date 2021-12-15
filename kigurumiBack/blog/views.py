from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Post
from .serializers import PostSerializers
from rest_framework import generics, serializers

class PostCreate(generics.CreateAPIView):
    serializer_class = PostSerializers

class PostList(generics.ListAPIView):
    serializer_class = PostSerializers
    queryset = Post.objects.all()

class PostDetail(generics.RetrieveAPIView):
    serializer_class = PostSerializers
    queryset = Post.objects.all()

class Blog(APIView):
    permissions_classes = [IsAuthenticated]
 
    def get(self, request):
        content = {'tittle':'My first blog'}
        return Response(content)
