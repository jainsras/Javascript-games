
let game={
    'you':{'scoreSpan':'#your-result', 'div':'#your-box', 'score':0},
    'dealer':{'scoreSpan':'#dealer-result', 'div':'#dealer-box', 'score':0},
    'cards':['2', '3', '4','5','6','7','8','9','10','J','Q','K','A'],
    'values':{'2':2, '3':3, '4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':[1,11]}
};
const You= game['you'];
const Dealer= game['dealer'];
const hitSound= new Audio('sounds/swish.m4a');
const winSound= new Audio('sounds/cash.mp3');
const lose= new Audio('sounds/aww.mp3');
document.querySelector('#hit-button').addEventListener('click', blackjackhit);
document.querySelector('#stand-button').addEventListener('click', dealerLogic);
document.querySelector('#deal-button').addEventListener('click', blackjackDeal);


function blackjackhit(){
   let card= randCard();
   console.log(card);
   showCard(card,You);
   updateScore(card, You);
   showScore(You);
}
function randCard(){
    let index= Math.floor(Math.random()*13);
    return game['cards'][index];
}
function showCard(card, activePlayer)
{
    if(activePlayer['score']<21){
    let cardimage = document.createElement('img');
    cardimage.src= 'images/'+card+'.png';
    document.querySelector(activePlayer['div']).appendChild(cardimage);
    hitSound.play();
    }
}
function blackjackDeal(){
    let winner= computWinner();
    showResult(winner);
    let yourimage= document.querySelector('#your-box').querySelectorAll('img');
    console.log(yourimage);
    for(let i=0; i<yourimage.length; i++)
    yourimage[i].remove();
    let dealerimage= document.querySelector('#dealer-box').querySelectorAll('img');
    for(let i=0; i<dealerimage.length; i++)
    dealerimage[i].remove();
    You['score']=0;
    Dealer['score']=0;
    document.querySelector('#your-result').textContent=0;
    document.querySelector('#dealer-result').textContent=0;
    document.querySelector('#your-result').style.color='#ffffff';
    document.querySelector('#dealer-result').style.color='#ffffff'; 
    
}
function updateScore(card, activePlayer){
    if(card === 'A' && 21-activePlayer['score']<11)
    activePlayer['score']+=1;
    else if(card === 'A')
    activePlayer['score']+=11;
    else
    activePlayer['score']+=game['values'][card];

}
function showScore(activePlayer){
    if(activePlayer['score']>21)
    {
        document.querySelector(activePlayer['scoreSpan']).textContent='BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color='red';
    }
    else
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
}

function dealerLogic(){
    let card= randCard();
    showCard(card,Dealer);
    updateScore(card, Dealer);
    showScore(Dealer);
    
}
function computWinner(){
    let winner;
    if(You['score']<=21)
    {
        if (You['score']>Dealer['score'] || Dealer['score']>21)
        winner=You;
        else if(You['score']<Dealer['score'] )
        winner= Dealer;
        else if(You['score'] === Dealer['score'] )
        console.log('draw');

    }
    else if(You['score']>21 && Dealer['score']<=21 )
    winner= Dealer;
    else
    console.log('draw');

    return winner;

}
function showResult(winner)
{
    let message, msgcolor;
    if(winner===You){
        message= 'You Won!';
        msgcolor= 'green';
        winSound.play();
    }
    else if(winner === Dealer)
    {
        message='You Lost!';
        msgcolor='red';
        lose.play();

    }
    else{
        message='Match Draw';
        msgcolor='black';
    }
    document.querySelector('#blackjack').textContent=message;
    document.querySelector('#blackjack').style.color=msgcolor;
}