
const coin = document.querySelector("#coin");
const button = document.querySelector("#flip");

let headsCount = 0;
let tailsCount = 0;

function flipCoin(){

    const random = Math.random();
    const result = random < 0.5 ? 'heads' : 'tails';

    setTimeout(() => {
            coin.setAttribute('class','animate-' + result);

            setTimeout(() => {
                    processResult(result);
            }, 2900);

    }, 100);
}

button.addEventListener("click",flipCoin);