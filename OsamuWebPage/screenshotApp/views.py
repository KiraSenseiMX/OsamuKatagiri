from django.shortcuts import render, redirect
from django.core.files.base import File

from html2image import Html2Image
import re
import string

from . import models

# Create your views here.

def html_to_image(request):
    url_str = "https://osamukatagiri.me/"
    url_clean_str = re.sub('[^a-zA-Z0-9]', '', url_str) # remove special chars from url
    image_name = f'{url_clean_str}.png'
    hti = Html2Image(size = (1920, 1080))
    img = hti.screenshot(
        url = url_str,
        save_as = image_name) # saves within the app directory
    image_instance = models.Screenshot()
    image_instance.photo.save(
        image_name,
        File(open(img[0], 'rb')) # saves in the media directory
    )
    return redirect("/")

