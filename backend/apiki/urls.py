from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, BuildingViewSet, RoomViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'buildings', BuildingViewSet)
router.register(r'rooms', RoomViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
