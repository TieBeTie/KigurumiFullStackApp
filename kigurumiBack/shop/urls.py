from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('get_all_kigurumi/', KigurumiPostList.as_view()),
    path('get_filltered_kigurumi/', KigurumiFilteredPostListByName.as_view()),
    path('get_all_orders/', OrderPostList.as_view()),
    path('create_order/', OrderPostCreate.as_view())
]