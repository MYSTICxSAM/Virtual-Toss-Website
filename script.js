
const coin = document.querySelector("#coin");
const button = document.querySelector("#flip");

let headsCount = 0;
let tailsCount = 0;

function flipCoin(){

    const random = Math.random();
    const result = random < 0.5 ? 'heads' : 'tails';

    coin.classList.remove("animate-heads", "animate-tails");

    void coin.offsetWidth;

    coin.classList.add("animate-" + result);
    
    console.log(result)
    setTimeout(() => {
            coin.setAttribute('class','animate-' + result);

            setTimeout(() => {
                    processResult(result);
            }, 2900);

    }, 100);
}

button.addEventListener("click",flipCoin);