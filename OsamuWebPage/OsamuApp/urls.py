from django.urls import path

# Import some views from your Django app
from . import views

app_name = 'OsamuApp'
urlpatterns = [
    path("", views.IndexView, name="index"),
]