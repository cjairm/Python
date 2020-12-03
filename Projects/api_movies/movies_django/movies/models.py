from django.db import models


# Create your models here.
class Movie(models.Model):
    release_year = models.SmallIntegerField()
    title = models.CharField(max_length=200, default='')
    origin = models.CharField(max_length=200, default='')
    director = models.CharField(max_length=200, default='')
    cast = models.TextField(null=True, blank=True, default='')
    genre = models.CharField(max_length=200, default='')
    url = models.URLField(default='')
    plot = models.TextField()
