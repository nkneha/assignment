from rest_framework import serializers
from django.contrib.auth.models import User
from . import models
from myApp.models import Detail,Profile

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')
        
# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user

class DetailSerializer(serializers.ModelSerializer):
   # username=UserSerializer()
   # username = serializers.ReadOnlyField(source='username.user.username')
    class Meta:
        model=Detail
        fields=['id','username','contact','address','city','pincode']

class ProfileViewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Profile
        fields=['id','user','role','cost']        
        