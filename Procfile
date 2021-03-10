release: python manage.py migrate
release: python manage.py makemigrations

web: gunicorn  profil_app.wsgi --log-file -
