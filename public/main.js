import {createGame, getSprite} from "./game.js";

const codeElement = document.getElementById("code");
let scriptContainerElement;

const starterCode = `from mymodule import sleep
import asyncio
from js import __getGame
game = __getGame()`;

window.__getGame = function(){
    return {
        getSprite: getSprite
    }
}

function run(){
    const code = starterCode + '\n' + codeElement.innerText;
    if (scriptContainerElement) {
        scriptContainerElement.remove();
    }
    scriptContainerElement = document.createElement("div");
    scriptContainerElement.innerHTML = `<py-script id='pyscript' output="output">${code}</py-script>`;
    const scriptElement = scriptContainerElement.firstChild;
    document.body.appendChild(scriptContainerElement);
    try {
        scriptElement.evaluate();
    }
    catch (error) {
        console.error(error);
    }
}

// set the initial value for simplicity
codeElement.innerText = `dog = game.getSprite("dog")
print("walkies!")
dog.walk()
await sleep(5)
print("good boy, sit.")
dog.sit()
await sleep(5)
print("shhh sleep")
dog.sleep()
await sleep(5)
print("run!")
dog.run()
`;

// create the phaser game
createGame();

//listen to the click
const runButton = document.getElementById("run");
runButton.addEventListener("click", run);