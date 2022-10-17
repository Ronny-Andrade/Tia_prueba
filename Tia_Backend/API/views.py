from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
from .models import reviews

# Create your views here.
class reviewsView(View):

    def get(self,request):
        rev = list(reviews.objects.values())
        if len(rev)>0:
            datos = {'message':'success','reviews':rev}
        else:
            datos = {'message':'reviews not found..'}
        return JsonResponse(datos)

    def post(self,request):
        pass
    
    def put(self,request):
        pass
    
    def delete(self,request):
        pass
    

