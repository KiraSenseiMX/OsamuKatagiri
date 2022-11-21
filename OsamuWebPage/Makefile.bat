@ECHO OFF
:: This batch file is to deploy the static output of a Django project to Cloudflare pages with with django-distill
:: See https://github.com/meeb/django-distill-example.git as an example

TITLE Building your Django project

:: ECHO CLEANING Build
:: rmdir /sq .\public
:: rmdir /s /q .\static

:: ECHO CREATE new directories
:: mkdir public
:: mkdir static

ECHO RUNNING collectstatic
python manage.py collectstatic --noinput

ECHO RUNNING distill-local
python manage.py distill-local --force