let imageSource=['/diceimg/1.png','/diceimg/2.png','/diceimg/3.png','/diceimg/4.png','/diceimg/5.png','/diceimg/6.png']
let diceImageLeft=document.getElementById('left-dice-image');
let diceImageRight=document.getElementById('right-dice-image');
let leftDiceDiv=document.getElementById('left-dice');
let rightDiceDiv=document.getElementById('right-dice');
let showResult=document.getElementById('diceResult');
let leftDiceNumber,rightDiceNumber;
function rollDice(){
    leftDiceNumber=randomNumber();
    rightDiceNumber=randomNumber();
// Result
    let total=Number(leftDiceNumber+rightDiceNumber);
    showResult.innerHTML=`Its ${total},Move ${total} Steps Forward`;
    displayImage(imageSource[leftDiceNumber-1],diceImageLeft,leftDiceDiv);
    displayImage(imageSource[rightDiceNumber-1],diceImageRight,rightDiceDiv);
// Display Dice Image
function displayImage(srcImage,dice,container) {
    dice.style.display="block";
   
// Rotation Animation
    container.classList.add('rotate');
    setTimeout(() => {
        container.classList.remove('rotate');
    }, 400);
    dice.src=srcImage;
   }
// Getting Random Number
function randomNumber(){
    return Math.floor(Math.random()*6+1);
    }
}
