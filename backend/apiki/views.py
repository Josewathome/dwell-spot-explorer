from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions
from .models import CustomUser, Building, Room
from .serializers import UserSerializer, BuildingSerializer, RoomSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class BuildingViewSet(viewsets.ModelViewSet):
    queryset = Building.objects.all()
    serializer_class = BuildingSerializer

class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

