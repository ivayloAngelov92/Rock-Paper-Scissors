    function rockPaperScissors(){
    let playerTurn
    const rock='ROCK'
    const paper="PAPER"
    const scissors= 'SCISSORS'
    if (playerTurn== 'r'||playerTurn=="ROCK"){
        playerTurn=rock
        console.log("You chose Rock");
    }else if(playerTurn=='p'||playerTurn=='PAPER'){
        playerTurn=paper
        console.log("You chose Paper");
    }else if(playerTurn=='s'||playerTurn=='SCISSORS'){
        playerTurn=scissors
        console.log("You chose Scissors");
    }else{
        console.log('Invalid input, try r, p, or s');
    }
    let computerNumber=Math.floor(Math.random()*3)+1
    
    switch(computerNumber){
        case 1: computerNumber=rock; break;
        case 2:computerNumber=paper;break;
        case 3:computerNumber=scissors;break;
    }
    console.log(`The computer chose ${computerNumber}.`);

    if((playerTurn===rock&& computerNumber===scissors)||
    (playerTurn===paper&&computerNumber===rock)||
    (playerTurn===scissors&&computerNumber===paper)){
        console.log("You WIN!!!");
    }else if ((playerTurn===paper&& computerNumber===scissors)||
    (playerTurn===scissors&&computerNumber===rock)||
    (playerTurn===rock&&computerNumber===paper)){
        console.log("You LOSE!!!");
    }else{
        console.log("Round is Draw ?!?");
    }
}
rockPaperScissors()