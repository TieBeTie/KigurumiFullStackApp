from django.db import models

class Post(models.Model):
    tittle = models.CharField(verbose_name='Заголовок',max_length=36)
    text = models.TextField(verbose_name='Текст')

    def __str__(self):
        return self.tittle
