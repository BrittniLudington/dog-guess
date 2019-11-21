# Dog guesser (temporary name)

 A game app where the user tries to guess the breed of dog in a randomly selected photo. The faster they guess correctly, the higher their score.

## How To Play
### Selecting
 - User will be taken to main menu. Here they can select instructions, or to start the game.
 - Upon selecting to start the game, the following will happen
   - User will select difficulty
     - Easy (all dog breeds are in a drop down box)
     - Hard (need to correctly spell dog breed)
   - Select the number of photos to guess
     - 5, 10, or 15
### Basic game
 - A random photo of a purebred dog will be grabbed from the api.
 - The photo will be hidden behind a set of tiles.
 - The score starts at a maximum of 1000.
   - The score will slowly decrease overtime.
 - Over time the tiles will dissappear one by one, revealing more of the photo.
 - When the user thinks they know the breed, they press the answer button.
 - User then types in the name of the dog breed.
   - If correct, user will gain the remaining points left.
   - If incorrect, user will gain no points.
 - User is taken to next photo
 - Upon finishing the last photo, or choosing to quit, user is shown their final score.

 - IF POSSIBLE: create a high score list or achievements.

 ## Components needed

