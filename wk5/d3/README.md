# WELCOME TO WK5 D3!

## Today we will practice building model classes
## Tomorrow code review - Login & Reg + Dojos & Ninjas OR Semi Restful TV Shows

- [Events] - http://learn.codingdojo.com/m/172/8193/55816
  <img src="recipes.png" alt="mockup">

- Couple changes:
  - show all recipes in the table
  - show Actions to Edit and Delete if recipe belongs to logged in user
  - Add button to Like a recipe to other users
  - Create method to show if other users has tried the recipe
  - Make a table to show all the recipes user has tried
  - on the show Recipe page, add a link to go back to /recipes

## Build Full App - Recipes

- [] Login app
- [] Add relationships
  - One to Many - One User can post Many Recipes
  - Many to Many - Many Users can like and try Many Recipes
- [] Use Boolean Field
  - Only user who posted the Recipe can choose if Recipe is faster than 30 minute (isFast = True)
  - If User tried the Recipe, then show Recipe in separate table
- [] Show Liked button to other users, and can only like once
  - Show Unlike button if Liked
