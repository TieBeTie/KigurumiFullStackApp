from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('blog/', Blog.as_view()),
    path('create/', PostCreate.as_view()),
    path('get_all/', PostList.as_view()),
    path('drop/<int:pk>', PostDetail.as_view()),
]
