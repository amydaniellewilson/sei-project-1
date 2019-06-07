# Mastermind - Pulp Fiction Edition
## SEI 41 - Project 1

### Timespan 
7 days

### Technologies Used
* HTML5
* HTML Audio
* CSS
* Javascript ES6
* Git

### The Game
Mastermind was originally the 1970's boardgame and now has many online versions to be played. It involves the computer picking a random selection of four colours in a certain sequence and hiding these at the top of the board. 

There are eight colours to choose from and the player must guess the four colours used and what sequence they were used in. The computer will never pick two of the same color in this version, so it will always be four different colors. 

The aim of the game is to guess the colour code before the end of the board, the player gets 10 guesses.

### How My Game Works
1. The player presses play which triggers the starting theme from Pulp Fiction to play and generates four random colors at the top of the board. During play, these four colours are covered so the player cannot see. 
2. The player is to click each colour they think is correct. Everytime they click a colour, it will appear on the board in the relevant place. 
3. Each time the player has selected four colours, the hints panel on the right will alert how many colors are correct, in the correct place and incorrect. A peg will turn red for however many correct colours are in the right place. A peg will turn white for however many colours are correct, but not in the right place. For all colours that are not correct or in the right place, the pegs will stay black. 
4. If the player gets to the top of the board and has not guessed the correct colour, they lose. At this point, a window alert comes up telling the player they are dead and advising them to click the reset button to play again. The 'Zed's Dead' quote from the movie also plays at this point. 
5. If the player guesses the correct colour code before the 10 guesses are up, a window alert is promted advising them that they have won and telling them to press the reset button to play again. The 'Big Brain on Brett' quote from the movie is played at this point. 

### Challenges
* Getting a start point of how to design the grid was one of the biggest hurdles. I researched on W3 and found a CSS method which I ended up using in combination with Javascript to create my layout.
* Preventing the computer from picking doubles.
* The logic to check for matches was difficult. I ended up making an empty array which the matches, or non-matches were pushed into. The computer was then able to check the array to push colours into the hints section. This took up quite a bit of my time to figure out. 

### Wins
* Reading back through my code and making comments so I knew that I fully understood everything I had done. 
* The styling of the page and triggering audio at the right times. 

### Future Features
* Add difficulty levels where there are less guesses. 
* Add prettier alerts of winning or losing, rather than just normal window alerts.
* Add a start page with an instructions and start button options. 
