from rest_framework import serializers
from .models import Category

class CategorySerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)
    class Meta:
        model = Category
        fields = '__all__'