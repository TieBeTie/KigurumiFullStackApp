from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('get_all/', PostList.as_view()),
    path('get_filltered/', FilteredPostListByName.as_view())
]