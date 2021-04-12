# Listen to this! https://www.youtube.com/watch?v=sA7qYWH-UvU
# But watch this! https://www.youtube.com/watch?v=5xK36K3DV5Y

# WE ARE UNDER ATTACK!
# **Giant Dinosaurs** have appeared since over 100 years and are attacking our castle walls! They have breached the outer wall but the military has defended!

# The military is planning on dispatching Troups to :zap:***ATTACK ON DINOSAURS***:zap:!

# The below are artifacts and manuals that were found with information about Dinosaurs, The Castle Walls, and the Soldier recruiting process.

# Work in your teams to help the castle defend and attack

# Choose Your Mission (Each Team choose at least 3):
# 1. Train Soldiers who can Fight to become stronger
# 2. Group Soldiers together into a Troop with a Captain
# 3. Discover Special Ability for Soldier to turn into a Dinosaur!
# 4. Pursue and hunt at least 1 Dinosaur, create a battle log
# 5. Become evil and create more Dinosaurs to attack!
# 6. Go rogue and take matters in your own hands to do what you want!
# 7. Fortify the Castle defense by adding more Citizens and Troops


#### Do as much as you'd like, I'd like each member to instantiate at least 3 Objects, create at least 1 class and method, and use at least 1 method.
#### hope you enjoy this Attackathon!:star2:
#*****************************************************

import random

# ********************** PEOPLE ********************


class Citizen:
    # suggested starter code
    def __init__(self, name="Citizen", home="Castle"):
        self.name = name
        self.home = home
    
    def build_wall(self, castle):
        # create a way to restore castle wall to full health
        pass


class Soldier(Citizen):
    # suggested starter code
    def __init__(self, abilities="3D Maneuver", name="Soldier", speed=5, defense=5, power=5):
        Citizen.__init__(self)
        self.name = name
        self.title = "Scout"
        self.abilities = abilities
        self.speed = speed
        self.defense = defense
        self.power = power

    def training(self):
        # [] create a way for soldiers to gain speed, power, and defense
        pass

    def attack(self, dinosaur):
        pass

    def turn_into_dinosaur(self):
        pass


class Captain(Soldier):
    def __init__(self, abilities, name="Captain"):
        # [] fix this child class so the constructor can create a unique Captain that is different from Soldier or Human with a default name of Captain instead of Soldier or Citizen and default speed, defense, and power is 10
        self.name = name
        self.title = "Captain"

    def order(self):
        print(f"you fools!")


class Troop:
    # [] Create a Troop class that has a list of Soldiers and 1 Captain
    def __init__(self, captain, soldiers=[]):
        self.captain = captain
        self.soldiers = soldiers

    def total_power(self):
        # [] Create a method that calculates all the power from each captain and soldiers
        pass

    def hunt_dinosaur(self, dinosaur):
        # [] Send the troop out to attack a direct dinosaur, calcuate damage from all soldiers. Bonus: use random library
        pass

    def protect_castle(self, castle):
        # [] create a method for all Troops/Soldiers to protect the castle.
        pass

#******************** CASTLE **********************
class Castle:
    # [] use this Castle class to create at least 1 Castle where Citizens and Soldiers live. Create a troops (attribute) to take a list of Troops
    def __init__(self, name="Castle", wall_health=1500, citizens=[]):
        self.name = name
        self.wall_health = wall_health
        self.citizens = citizens

# **************** DINOSAUR ********************


class Dinosaur:
    # [] use this Dinosaur class to create Dinosaurs as well as Child classes to inherit this Dinosaur's attributes and to create unique attributes and override methods for the child class
    def __init__(self, name, power=100, speed=30, height=30):
        self.name = name
        self.power = power
        self.speed = speed
        self.height = height

    def roar(self):
        print(f"RRROOOAAAARRRRR!!!")
        return self

    def attack_castle(self, castle):
        # [] have different attack strengths for the different Child classes
        attack = random.randrange(1, self.power, 5)
        print(f"{self.name} is attacking the {castle.name} for {attack} damage!")

    def eat_citizen(self, citizen):
        # [] create a method that makes the dinosaur eat a citizen, this can be citizen, or soldier, or captain. hint: make attribute in Citizen called isAlive
        print(f"{self.name} has eaten {citizen.name}!")
        return self
