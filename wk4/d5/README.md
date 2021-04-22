# Welcome to End of Python Week 2!

## Couple reminders...

- great work on assignments
- 1 on 1s - continue
- take initiative to read ahead
  - so that discussion can be time for clarification and productive coding
  - self-sufficient developer
  - bring your questions to discuss
- announce Champion today in afternoon

## So that means...

- Next Week is Exam! :scream:

## To get ready...

- We have been doing full stack for several days now!
- Continue with full CRUD Commands today
- continue Django today and over weekend

## Today's End of Day Goal - Semi Restful TV Shows

### App today is: Celebrities

### Model

```python
class Celebrity(models.Model):
name = models.CharField(max_length=100)
image = models.CharField(max_length=255)
occupation = models.CharField(max_length=45)
created_at = models.DateTimeField(auto_now_add=True)
updated_at = models.DateTimeField(auto_now=True)
```

## REST Routes

```python
# HTTP Method     Url                     Views functions       Purpose
# GET             /celebrities              celebrities_show        Display all Celebrities
# GET             /celebrities/new          locations_new         Show form to add new Location
# GET             /celebrities/:id          celebrities_show        Display one Celebrity
# GET             /celebrities/:id/edit     celebrities_edit        Show form to edit specific Location
# POST            /celebrities              celebrities_create      Create Celebrity
# PUT/PATCH       /celebrities/:id          celebrities_update      Update specific Celebrity
# DELETE          /celebrities/:id          celebrities_destroy     Delete specific Celebrity

# Render
path('celebrities', views.celebrities_show),
path('celebrities/new', views.locations_new),
path('celebrities/<int:location_id>/show', views.celebrities_show),
path('celebrities/<int:location_id>/edit', views.celebrities_edit),
# Redirect
path('celebrities/create', views.celebrities_create),
path('celebrities/<int:location_id>/update', views.celebrities_update),
path('celebrities/<int:location_id>/delete', views.celebrities_destroy),
```
## CRUD

### Create

Celebrity.objects.create(
    name="",
    image="",
    occupation=""
)

### Read

### Update

### Delete