from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission


from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

class CustomUser(AbstractUser):
    is_landlord = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    groups = models.ManyToManyField(
        Group,
        related_name="custom_user_set",
        blank=True,
        help_text="The groups this user belongs to.",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="custom_user_permissions",
        blank=True,
        help_text="Specific permissions for this user.",
    )


# Building Model
class Building(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    town = models.CharField(max_length=100)
    street = models.CharField(max_length=255)
    landlord = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="buildings")

    def __str__(self):
        return self.name


# Room Model
class Room(models.Model):
    STATUS_CHOICES = [("available", "Available"), ("occupied", "Occupied")]

    building = models.ForeignKey(Building, on_delete=models.CASCADE, related_name="rooms")
    room_number = models.PositiveIntegerField()
    price = models.FloatField()
    floor_level = models.PositiveIntegerField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)

    def __str__(self):
        return f"Room {self.room_number} in {self.building.name}"
