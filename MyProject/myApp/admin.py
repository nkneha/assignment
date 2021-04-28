from django.contrib import admin
from . import models

@admin.register(models.Detail)
class DetailsAdmin(admin.ModelAdmin):
    search_fields = ['username']
    list_display=['id', 'username','contact', 'address', 'city','pincode']
    list_filter = ['city']

@admin.register(models.Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display=['id', 'user','role','cost']