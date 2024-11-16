from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import CustomUser, Building, Room

admin.site.register(CustomUser)
admin.site.register(Building)
admin.site.register(Room)
