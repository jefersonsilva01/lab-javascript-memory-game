const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
memoryGame.cards = memoryGame.shuffleCards();

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  const pairsClicked = document.querySelector('#pairs-clicked');
  const pairsGuessed = document.querySelector('#pairs-guessed');
  const title = document.querySelector('h1');

  function updateScore() {
    pairsClicked.innerHTML = memoryGame.pairsClicked;
    pairsGuessed.innerHTML = memoryGame.pairsGuessed;

    if (memoryGame.checkIfFinished()) {
      title.innerHTML = 'Parabéns você terminou!'
    };
  }

  function turnCards(bool, card1, card2) {

    if (bool) {
      document.querySelectorAll(`[data-card-name="${card1}"]`).forEach(card => {
        card.setAttribute('disabled', true);
      })
    } else {
      document.querySelectorAll(`[data-card-name="${card1}"]`).forEach(card => {
        if (card.classList.contains('turned')) {
          card.classList.remove('turned');
        }
      })

      document.querySelectorAll(`[data-card-name="${card2}"]`).forEach(card => {
        if (card.classList.contains('turned')) {
          card.classList.remove('turned');
        }
      })
    }

    memoryGame.pickedCards = [];
    updateScore();
  }

  function checkSameCards() {
    const nameCard1 = memoryGame.pickedCards[0]
    const nameCard2 = memoryGame.pickedCards[1]

    const response = memoryGame.checkIfPair(nameCard1, nameCard2)

    turnCards(response, nameCard1, nameCard2)
  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here

      card.classList.toggle('turned');

      const name = card.getAttribute('data-card-name')

      memoryGame.pickedCards.push(name);

      if (memoryGame.pickedCards.length === 2) {
        setTimeout(function () {
          checkSameCards();
        }, 1000);
      }
    });
  });
});


