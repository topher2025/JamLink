from django.shortcuts import render
from .models import User
from .serializers import UserSerializer
from rest_framework import generics, permissions

# Create your views here.

class UserList(generics.ListAPIView):
    queryset = User.objects.all
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]