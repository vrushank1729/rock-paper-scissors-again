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
        var p = document.createElement('p')
        const results = document.querySelector('.results')
        
        if(player === computer) {
            p.textContent = `${player} and ${computer}, It's a Tie`
            results.appendChild(p)
            return [0,0]
        } else if (player === "ROCK" && computer === "PAPER") {
            p.textContent = "PAPER beats ROCK, you Lost!"
            results.appendChild(p)
            return [0,1]
        } else if (player === "ROCK" && computer === "SCISSORS") {
            p.textContent = "ROCK beats SCISSORS, you Won!"
            results.appendChild(p)
            return [1,0]
        } else if (player === "PAPER" && computer === "ROCK") {
            p.textContent = "PAPER beats ROCK, you Won!"
            results.appendChild(p)
            return [1,0]
        } else if (player === "PAPER" && computer === "SCISSORS") {
            p.textContent = "SCISSORS beat PAPER, you Lost!"
            results.appendChild(p)
            return [0,1]
        } else if (player === "SCISSORS" && computer === "PAPER") {
            p.textContent = "SCISSORS beat PAPER, you Won!"
            results.appendChild(p)
            return [1,0]
            console.log("PAPER beats ROCK, you Lost!")
        } else if (player === "SCISSORS" && computer === "ROCK") {
            p.textContent = "ROCK beats SCISSORS, you Lost!"
            results.appendChild(p)
            return [0,1]
        }
    }




    function game() {
        const buttons = document.querySelectorAll('button')
        console.log("SCISSORS beat PAPER, you Lost!")
        var scores
        var playerScore = 0
        var computerScore = 0
        const results = document.querySelector('.results')

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                if(playerScore === 5 || computerScore === 5) {
                    return 0
                }
                let computerChoice = getComputerChoice()
                scores = playRound(button.id, computerChoice)
                playerScore += scores[0]
                computerScore += scores[1]

                const p1 = document.createElement('p')
                const p2 = document.createElement('p')
                const h1 = document.createElement('h1')
                p1.textContent = `Player : ${playerScore}`
                results.appendChild(p1)
                p2.textContent = `Computer : ${computerScore}`
                results.appendChild(p2)

                if(playerScore === 5) {
                    h1.textContent = 'You Won the game!'
                    results.appendChild(h1)
                }
                if(computerScore === 5) {
                    h1.textContent = 'Computer Won the game!'
                    results.appendChild(h1)
                }
                
            })
        })
    }

    game()
    
})