from movies.models import Movie
from rest_framework import serializers


class MovieSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    release_year = serializers.IntegerField()
    title = serializers.CharField(max_length=200, required=True)
    origin = serializers.CharField(max_length=200, required=True)
    director = serializers.CharField(max_length=200, required=True)
    cast = serializers.CharField(required=False, allow_blank=True)
    genre = serializers.CharField(max_length=200, required=True)
    url = serializers.URLField(
            max_length=200,
            required=False,
            allow_blank=True
        )
    plot = serializers.CharField(required=True)

    def create(self, validated_data):
        return Movie.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.release_year = validated_data.get(
            'release_year',
            instance.release_year
        )
        instance.title = validated_data.get(
            'title',
            instance.title
        )
        instance.origin = validated_data.get(
            'origin',
            instance.origin
        )
        instance.director = validated_data.get(
            'director',
            instance.director
        )
        instance.cast = validated_data.get(
            'cast',
            instance.cast
        )
        instance.genre = validated_data.get(
            'genre',
            instance.genre
        )
        instance.url = validated_data.get(
            'url',
            instance.url
        )
        instance.plot = validated_data.get(
            'plot',
            instance.plot
        )

        instance.save()
        return instance
