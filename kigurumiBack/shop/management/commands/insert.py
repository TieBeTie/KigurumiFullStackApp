from django.http import HttpResponse
from django.template import loader
from ...models import *

from django.core.management.base import BaseCommand
from django.utils import timezone

class Command(BaseCommand):
    def handle(self, *args, **options):
        kigurumies = [
            ['Енот', 'S, M, L, XXL', '5000'],
            ['Пикачу', 'S, M, L, XXL', '7000'],
            ['Снорлакс', 'S, M, L, XXL', '6000'],
            ['Цербер', 'S, M, L, XXL', '4000'],
            ['Чармандер', 'S, M, L, XXL', '5500']
        ]
        for k in kigurumies:
            insert(k[0], k[1], int(k[2]), k[0] + '.png')
        