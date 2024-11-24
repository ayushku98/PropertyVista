from django.urls import path,include
from .views import RegisterView, LoginView, UserProfileView
from .views import slider_properties, update_rating
from .views import PropertyListView
from .views import user_logout
from .views import ExplorePropertiesViewSet
from . import views
from rest_framework.routers import DefaultRouter
from . views import  RentalPropertyListView


router = DefaultRouter()
router.register(r'exploreproperties', ExplorePropertiesViewSet)
router = DefaultRouter()


urlpatterns = [
    
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('api/properties/', PropertyListView.as_view(), name='property-list'),
    path('api/slider/', slider_properties, name='slider_properties'),
    path('api/slider/<int:slider_id>/rate/', update_rating, name='update_rating'),
     path('api/agents/', views.get_agents, name='get_agents'),
    path('logout/', user_logout, name='logout'),
    path('exploreproperties/', views.get_explore_properties, name='get_explore_properties'),
    path('api/', include(router.urls)),  # This line will map your API routes to the viewset
    path('api/rentalproperties/', RentalPropertyListView.as_view(), name='property-list'),
  
    
  

 
]
