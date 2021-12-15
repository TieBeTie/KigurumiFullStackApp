from django.http import HttpResponse
from django.template import loader
from ...models import *

from django.core.management.base import BaseCommand
from django.utils import timezone

class Command(BaseCommand):
    def handle(self, *args, **options):
        Kigurumi.objects.all().delete()
