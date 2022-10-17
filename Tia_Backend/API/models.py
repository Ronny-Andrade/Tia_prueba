from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
class reviews(models.Model):
    product = models.CharField(max_length=50)
    userR = models.CharField(max_length=50)
    profileName = models.CharField(max_length=50)
    helpfulness = models.CharField(max_length=10)
    score = models.DecimalField( 
                         max_digits = 2, 
                         decimal_places = 1)