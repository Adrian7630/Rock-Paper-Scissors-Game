let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");         // get the p from the class .result and write what i want ! 
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice()
{
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];

}

function convertToWord(letter)
{
    if(letter === 'r') return "&#x270A";
    if(letter === 'p') return "&#x270B";
        return "&#x2702";
}

function win(userChoice, computerChoice)
{
    userScore++;
    userScore_span.innerHTML = userScore;   // give from the id the score from here ! 
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice);

    const smallUserWord = "(Human)".fontsize(3).sup();
    const smallCompWord = "(AI)".fontsize(3).sup();

    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord}. You win ! 	&#x1F525 `;

    // i click on this div and change the shadow glow 

    document.getElementById(userChoice).classList.add('green-glow');           // add the css style to this id  , no  -> . <-

    setTimeout(() => userChoice_div.classList.remove('green-glow'), 800);


}

function lose(userChoice, computerChoice)
{
    computerScore++;
    userScore_span.innerHTML = userScore;   
    computerScore_span.innerHTML = computerScore;   // give from the id the score from here ! 
    const userChoice_div = document.getElementById(userChoice);

    const smallUserWord = "(Human)".fontsize(3).sup();
    const smallCompWord = "(AI)".fontsize(3).sup();

    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} loses to ${convertToWord(computerChoice)} ${smallCompWord}. You lost ! &#x1F915`;

    document.getElementById(userChoice).classList.add('red-glow');

    document.getElementById(userChoice).classList.add('red-glow');           // add the css style to this id  , no  -> . <-

    setTimeout(() => userChoice_div.classList.remove('red-glow'), 800);

}

function draw(userChoice, computerChoice)
{ 
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "(Human)".fontsize(3).sup();
    const smallCompWord = "(AI)".fontsize(3).sup();

    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals ${convertToWord(computerChoice)} ${smallCompWord}. It's a draw ! &#x1F937`;

    document.getElementById(userChoice).classList.add('gray-glow'); 

    document.getElementById(userChoice).classList.add('gray-glow');           // add the css style to this id  , no  -> . <-

    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 800);

}

function game(userChoice)
{
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice)
    {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main()
{

    rock_div.addEventListener('click', () => game("r"));
    
    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));
}

main();

setTimeout(function() { console.log("hello"), 2000});   // it appears after 2 seconds  !

setTimeout(() => console.log("test"), 2000);   // it appears after 2 seconds with no brackets if it's on the same line ! 