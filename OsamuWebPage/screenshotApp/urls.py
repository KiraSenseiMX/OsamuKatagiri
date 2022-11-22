from django.urls import path

# Import some views from your Django app
from . import views

app_name = 'screenShotApp'
urlpatterns = [
    path("screenshot/", views.html_to_image, name="screenshotApp"),
]