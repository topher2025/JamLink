from django.urls import path
from .views import UserList, UserDetail, LoginView, RegisterView, ReactAppView

urlpatterns = [
    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('', ReactAppView.as_view(), name='react-app'),
]