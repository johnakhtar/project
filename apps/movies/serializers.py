from .models import Movies
from rest_framework import serializers


class MovieSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)
    image_mobile = serializers.ImageField(allow_null=True)


    class Meta:
        model = Movies
        fields = '__all__'