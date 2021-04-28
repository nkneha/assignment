from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.models import User
from myApp.serializers import DetailSerializer,ProfileViewSerializer
from myApp.models import Detail,Profile
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.contrib.auth import login

from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        print(serializer)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        username=User.objects.get(username=user)
        userdata=UserSerializer(username)
        return Response(userdata.data)
        # return Response({
        # "user": UserSerializer(user, context=self.get_serializer_context()).data,
        # "token": AuthToken.objects.create(user)[1]
        # })
class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        username=User.objects.get(username=user)
        userdata=UserSerializer(username)
        return Response(userdata.data)
        # return super(LoginAPI, self).post(request, format=None)
        


class DetailsViewSet(viewsets.ModelViewSet):
    queryset=Detail.objects.all()
    serializer_class=DetailSerializer
    

@api_view(['GET', 'POST']) 
def getdetail(request):
    
    if request.method == "POST":
        data=request.data
        print(data)
        user=User.objects.get(id=data['username'])
        detail=Detail.objects.get(username=user)
        serializer=DetailSerializer(detail)
        return Response(serializer.data)
 

#

class ProfileViewSet(viewsets.ModelViewSet):
    queryset=Profile.objects.all()
    serializer_class=ProfileViewSerializer