class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(array = this.cards) {
    // ... write your code here
    if (!array) return undefined

    for (let index = array.length; index; index--) {
      const randomIndex = Math.floor(Math.random() * index)
      const el = array[index - 1];

      array[index - 1] = array[randomIndex];
      array[randomIndex] = el;
    }

    return array;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    const numberOfpairs = this.cards.length / 2;
    if (this.pairsGuessed === numberOfpairs) {
      return true;
    } else {
      return false;
    }
  }
}