from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    CategoryViewSet,
    FaqViewSet,
    FavoritesViewSet,
    LocationViewSet,
    MyScheduleViewSet,
    PresenterViewSet,
    ScheduleViewSet,
    SponsorViewSet,
    VendorViewSet,
    VendorDetailViewSet,
)

router = DefaultRouter()
router.register("category", CategoryViewSet)
router.register("vendordetail", VendorDetailViewSet)
router.register("myschedule", MyScheduleViewSet)
router.register("favorites", FavoritesViewSet)
router.register("presenter", PresenterViewSet)
router.register("sponsor", SponsorViewSet)
router.register("schedule", ScheduleViewSet)
router.register("location", LocationViewSet)
router.register("faq", FaqViewSet)
router.register("vendor", VendorViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
