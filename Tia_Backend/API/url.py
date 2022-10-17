from django.urls import path
from .views import reviewsView

urlpatterns = [
    path('reviews/', reviewsView.as_view(),name='reviews_list')
]
