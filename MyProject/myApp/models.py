from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

role	=	(('customer','customer'),('worker','worker'))

class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    role=models.CharField(max_length=255,default='customer',choices=role)
    cost=models.CharField(max_length=255,default="")

class Detail(models.Model): 
    username = models.OneToOneField(User, on_delete=models.CASCADE, default=None)
    contact= models.CharField(max_length=30)
    address=models.CharField(max_length=255,default="")
    city=models.CharField(max_length=255,default="")
    pincode=models.CharField(max_length=30)
    def __str__(self):
        return self.username.username
    

    
        