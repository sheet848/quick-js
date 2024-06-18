// DOM variables

var buttons = document.getElementsByClassName('btn');
var reset = document.getElementById('reset-btn');
var playerType = document.getElementById('player-type');

// Game flow variables

var playerNumber = 1; //denoting player -1
var filledGrid = [];  // player board
var fillerCells = 0;  //no of cells that are filled

for(let i=0; i<6; i++) {
    var arr = [-1, -1, -1, -1, -1, -1, -1]; // default value of each space when unfilled
    filledGrid.push(arr);
}

// Event Listeners for Buttons

reset.addEventListener('click', function() {
    resetBoard(); // Function 1
});

for(let i=0; i<buttons.length; i++) {
    //handling event on button click

    buttons[i].addEventListener('click', function() {

        //make a move and disable the button
        var buttonNo = this.classList[1];
        makeMove(this, buttonNo.slice(4)); //Function 2
    });
}

//Function 1 
function resetBoard() {
    //remove disabled button and styling
    for(let i=0; i<buttons.length; i++) {
        buttons[i].disabled = false;
        buttons[i].classList.remove('btn-player-1');
        buttons[i].classList.remove('btn-player-2');
    }

    // Changing default to player 1
    playerNumber = 1;
    playerType.textContent = 'Player - 1';

    //Filled Cells is changed to 0
    filledCells = 0;

    //keeping default value to -1
    for(let i=0; i<6; i++) {
        for(let j=0; j<7; j++) {
            filledGrid[i][j] = -1;
        }
    }
}

//Function 2
function makeMove(button, buttonNo) {
    var row = buttonNo % 7 === 0 ? Math.floor(buttonNo / 7) - 1 : Math.floor(buttonNo / 7);
    var col = buttonNo % 7 === 0 ? 6 : (buttonNo % 7) - 1;

    if(playerNumber === 1) {
        button.classList.add('btn-player-1');
        filledGrid[row][col] = 1;
        filledCells++;

        if(playerWon(row, col, 1) === true) {  //Function 3
            setTimeout(function() {
                alert('Game Over: Green Wins');
                resetBoard();
            }, 200);
        }

        //Update the player
        playerNumber = 2;
        playerType.textContent = 'Player -2';

    } else {
        button.classList.add('btn-player-2');
        filledGrid[row][col] = 2;
        filledCells++;

        if(playerWon(row, col, 2) === true) { //Function 3
            setTimeout(function() {
                alert('Game Over: Red Wins');
                resetBoard();
            }, 200);
        }

        //Update the player
        playerNumber = 1;
        playerType.textContent = 'Player -1';

    }

    //if all cells are filled

    if(filledCells === 42) {
        setTimeout(function() {
            alert('Game Draw');
            resetBoard();
        }, 200);
        return;
    }

    //Disable the button on which move is made

    setTimeout(function() {
        button.disabled = true;
    }, 10);
}

//Function 3
function playerWon(row, col, player) {
    var count = 0;

    //Check for columns

    for(let i=0; i<7; i++) {
        if(filledGrid[row][i] === player) {
            count++;
            if(count === 4) return true;
        } else {
            count = 0;
        }
    }

    count = 0;

    // Check for primary diagonal

	if(row >= col) {

		var i = row - col;
		var j = 0;

		for(; i <= 5; i++ , j++) {
			if(filledGrid[i][j] === player) {
				count++;
				if(count == 4) return true;
			} else {
				count = 0;
			}
		}
	} else {

		var i = 0;
		var j = col - row;

		for(; j <= 6; i++ , j++) {
			if(filledGrid[i][j] === player) {
				count++;
				if(count == 4) return true;
			} else {
				count = 0;
			}
		}

	}

	count = 0;

	// Check for secondary diagonal

	if(row + col <= 5) {

		var i = row + col;
		var j = 0;

		for(; i >= 0 && j <= row + col; i-- , j++) {
			if(filledGrid[i][j] === player) {
				count++;
				if(count == 4) return true;
			} else {
				count = 0;
			}
		}

	} else {

		var i = 5;
		var j = row + col - 5;

		for(; j <= 6; j++ , i--) {
			if(filledGrid[i][j] === player) {
				count++;
				if(count == 4) return true;
			} else {
				count = 0;
			}
		}

	}
	return false;
}