from .views import RegisterAPI,LoginAPI,DetailsViewSet
from knox import views as knox_views
from django.urls import path,include
from myApp import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('details', views.DetailsViewSet)
router.register('profile',views.ProfileViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
     path('getdetail/',views.getdetail,name="getdetail"),
    

]



