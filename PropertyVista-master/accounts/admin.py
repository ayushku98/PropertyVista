from django.contrib import admin
from .models import Property
from .models import SliderProperty
from .models import PropertyAgent
from .models import ExploreProperties
from .models import RentalProperty

admin.site.register(Property)
admin.site.register(SliderProperty)
admin.site.register(PropertyAgent)
@admin.register(ExploreProperties)
class ExplorePropertiesAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'price', 'location', 'owner_name', 'created_at')
@admin.register(RentalProperty)
class RentalPropertyAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'price', 'location', 'image', 'category', 'owner_name', 'owner_contact', 'created_at')

