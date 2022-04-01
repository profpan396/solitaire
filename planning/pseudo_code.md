## 1. Define required constants and modules

### 1.1 Classes

- Game Class
- Table Class
- Card Pile Class
- Foundation Class
- Deck Class
- Card Class

### 1.2 Constants

- No. of Cards for Card Dealt Each Turn (1 or 3)
- Card Ranks and Values - Part of building a deck
- Deck Size
- Number of Piles - Piles size increased as they are created

## 2. Define required variables used to track the state of the game

### 2.1 Changeable variables

- Table object with card piles - multiple arrays
- clicked card
- Move counter
- Time Tracker
- Game Won Status - part of game object

## 3. Store elements on the page that will be accessed in code more than once.

### 3.1 

- Pile Element(s)
- Deck Element
- Discard Element
- Foundation Element(s)
- Game Status Element - ror Time
- New Deal Element 
- Undo Element

## 4. Upon loading the app should:

### 4.1 Initialize the state variables

- Game object is initialized
- Method call to ask player for card draw amount 1 or 3 (stored in Game object)
- Set moves to 0
- Timer is set to 0
- Build deck object using card objects
- Shuffle deck using deck shuffle method
- Initialize the piles with the right amount of cards dealt from the deck and add them to the table object
    - The top card on the main piles revealed = true
    - Everything else - revealed = false
- Set the foundation object properties (one for each suit) to piles of 4 empty arrays

### 4.2 Render values to the page

### 4.3 Wait for the user touch/click a card

## 5. Handle a player clicking
- timer starts (even if no legitimate move is made) when a card is tapped
- card value is held to 
- Main interaction is a player double clicking the card to automatically place in the right pile/foundation
    - Foundation gets priority
    - Then priority goes from left to right of piles
- clicked card is compared to card foundation and card piles and is moved if there is a legitimate move
- Ideal feature would be to allow for dragging of the card elements across the game board and compare to the card below using x, y coordinate overlapping
- game is won when all cards from deck are used and no facedown cards remain

## 6. Handle a player clicking the replay button

- Player can do a new game at any point when clicking new game