const m = 8;
const maxAttempts = 3;
let count = maxAttempts;
let thing = confirm('Do you want to play a game?');
let game = true;
let won = false;
let bonus = 0;
let sum = 0;
let prizeMultiplier = 1;
if( thing === true) {
    while(game) {
        let random = Math.random() * (m+bonus);
        if(count > 0) {
            let prize;
            switch(count) {
                case 3: 
                    prize = 100*prizeMultiplier;
                    break;
                case 2: 
                    prize = 50*prizeMultiplier;
                    break;
                case 1: 
                    prize = 25*prizeMultiplier;
                    break;
                default:
                    break;    
            }
            let msg = `Choose a roulette pocket number from 0 to ${m+bonus} \nAttepts left: ${count}`;
            let msg1 = `\nTotal prize: ${sum}$ \nPossible prize on current attempt:${prize}$`
            let playernumber = prompt(msg + msg1, '');
            if(!playernumber) {
                game = false;
                alert('You did not become a billionaire, but can.');
            }
            if(parseInt(playernumber) === random) {
                won = true;
                alert('You won '+prize+'$');
                sum += prize;
                bonus += 4;
                prizeMultiplier *= 2;
                count = 0;
                continue;
            }
            count--;
        } else {
            let retry = confirm('retry?');
            if(retry) { 
                game = true;
                count = maxAttempts;
            } else {
                game = false;
                alert('You did not become a billionaire, but can.');
            }
        }
    }

} else {
    alert('You did not become a billionaire, but can.');
}
