$(document).ready(function() {
    console.log('Developed by: J Abdel')
    scoreU();
    scoreC();
})
var computer = [];
var user = [];
function computerChoice(choice) {
    var win = 0;
    var winC = 0;
    $('#winner').html('') 
    // computer's options array
    var array = ['Rock','Paper','Scissors'];
    // generate random item
    var item = array[Math.floor(Math.random()*array.length)];
    // set values to users
    $('#computer').html(item)
    $('#user').html(choice)
    if(choice == item) {
        $('#winner').html('Tied!')
    }
    else if(choice == 'Scissors' && item == 'Paper') {
        $('#winner').html('You win!')
        win++;
        user.push(win)
        scoreU(win);
    }
    else if(item == 'Scissors' && choice == 'Paper') {
        $('#winner').html('You lose!')
        winC++;
        computer.push(winC)
        scoreC(winC);
    }
    else if(choice == 'Rock' && item == 'Paper') {
        $('#winner').html('You lose!')
        winC++;
        computer.push(winC)
        scoreC(winC);
    }
    else if(choice == 'Paper' && item == 'Rock') {
        $('#winner').html('You win!')
        win++;
        user.push(win)
        scoreU(win);
    }
    else if(item == 'Rock' && choice == 'Scissors') {
        $('#winner').html('You lose!')
        winC++;
        computer.push(winC)
        scoreC(winC);
    }
    else if(item == 'Scissors' && choice == 'Rock') {
        $('#winner').html('You win!')
        win++;
        user.push(win)
        scoreU(win);
    }
    
}
// function score user
function scoreU(win) {
    $('#scoreU').html(user.length)
}
// function score computer
function scoreC(win) {
    $('#scoreC').html(computer.length)
}
// get button value
function start(button) {
    var choice = button.value;
    computerChoice(choice);
}
// restart and clean array's 
function restart() {
    user = [];
    computer = [];
    $('#scoreC').html(computer.length)
    $('#scoreU').html(user.length)
    $('#winner').html('')
    $('#computer').html('')
    $('#user').html('')

}