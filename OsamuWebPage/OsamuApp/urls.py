# Replaces the standard django.urls.path, identical syntax
# from django.urls import path
from django_distill import distill_path

# Import some views from your Django app
from OsamuApp.views import IndexView

def get_index():
    return None

urlpatterns = [
    distill_path('',
                 IndexView.as_view(),
                 name='blog-index',
                 distill_func=get_index,
                 distill_file='index.html'),
]