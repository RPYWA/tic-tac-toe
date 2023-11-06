let cell = document.querySelectorAll('.test');
let resetBtn = document.querySelector('.restart');
let gameContainer = document.querySelector('.game-container');
let hi = document.querySelector('.hi')


function handelClick(){
    let cell = document.querySelectorAll('.test');
    let gameContainer = document.querySelector('.game-container');
    let turns = document.querySelector('.turns');
    let player = 1;

    cell.forEach(item => {
        item.addEventListener('click', (e) => {
            if(player === 1 && item.textContent === ""){
            item.textContent = 'X';
            player++
            turns.textContent = 'Player Turn: Player 2'
            checkWinner()
            }
            else if(player === 2 && item.textContent === ""){
            item.textContent = 'O';
            player--
            turns.textContent = 'Player Turn: Player 1'
            checkWinner()
            }
        })
    })
}

const checkTie = () => {
    const cells = document.querySelectorAll('.test');
    let winnerText = document.querySelector('.winnerText');
  
    const availableMoves = Array.from(cells).filter(cell => !cell.textContent);
    
    if(!availableMoves.length){
    winnerText.textContent = "Its a tie";  
    }
  
    
    }

function reset(){
    let cell = document.querySelectorAll('.test');
    let winnerText = document.querySelector('.winnerText');

    cell.forEach(item =>{
     item.textContent = '';
     winnerText.textContent = '';
     hi.style.display = 'block';
    })
}

function checkWinner(){
    let cells1 = document.querySelectorAll('.test')
    let winnerText = document.querySelector('.winnerText')
    let turns = 0;
    let winningNumber = [  [0, 1, 2],
[3, 4, 5],
[6, 7, 8],

// vertical
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],

// diagonal
[0, 4, 8],
[2, 4, 6],]

for(let item of winningNumber){
    // make sure each game board cell has either x or o as content
    if (cells1[item[0]].textContent && cells1[item[2]].textContent && cells1[item[2]].textContent) {
      // check that each cell content is exactly the same
      if (cells1[item[0]].textContent === cells1[item[1]].textContent && cells1[item[1]].textContent === cells1[item[2]].textContent){
          // if all are the same symbol, set true and exit loop
          matchCount = true;
          turns++
          let winningSymbol = cells1[item[0]].textContent;
          console.log(winningSymbol, ' is the winner');
          winnerText.textContent = winningSymbol + " is the winner" 
          hi.style.display = 'none';
      }
      else{
      checkTie();
      }
    }
}
}

resetBtn.addEventListener('click', reset);

handelClick();

