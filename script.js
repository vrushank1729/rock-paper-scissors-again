document.addEventListener('DOMContentLoaded', function() {
    function getComputerChoice() {
        const randomNum = Math.floor(Math.random()*3)
    
        if (randomNum === 0) {
            return "ROCK"
        } else if (randomNum === 1) {
            return "PAPER"
        } else if (randomNum === 2) {
            return "SCISSORS"
        }
    }
    
    
    
    function playRound(player, computer) {
        
        if(player === computer) {
            console.log(`${player} and ${computer}, It's a Tie`)
        } else if (player === "ROCK" && computer === "PAPER") {
            console.log("PAPER beats ROCK, you Lost!")
        } else if (player === "ROCK" && computer === "SCISSORS") {
            console.log("ROCK beats SCISSORS, you Won!")
        } else if (player === "PAPER" && computer === "ROCK") {
            console.log("PAPER beats ROCK, you Won!")
        } else if (player === "PAPER" && computer === "SCISSORS") {
            console.log("SCISSORS beat PAPER, you Lost!")
        } else if (player === "SCISSORS" && computer === "PAPER") {
            console.log("SCISSORS beat PAPER, you Won!")
        } else if (player === "SCISSORS" && computer === "ROCK") {
            console.log("ROCK beats SCISSORS, you Lost!")
        }
    }
    
    
    
    function game() {
        const buttons = document.querySelectorAll('button')
    
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                let computerChoice = getComputerChoice()
                playRound(button.id, computerChoice)
            })
        })
    }

    game()
    
})