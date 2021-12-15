from django.apps import AppConfig

class BlogConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'blog'

class AccountsConfig(AppConfig):
    name = 'accounts'

    def ready(self):
        import accounts.signals