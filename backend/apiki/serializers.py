from rest_framework import serializers
from .models import CustomUser, Building, Room

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "username", "email", "is_landlord", "is_admin"]

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = "__all__"

class BuildingSerializer(serializers.ModelSerializer):
    rooms = RoomSerializer(many=True, read_only=True)

    class Meta:
        model = Building
        fields = ["id", "name", "city", "town", "street", "landlord", "rooms"]
