// alert('hello');
function ageindays(){
    let year= prompt('What year were you born?');
    let age= (2021-year)*365;
    var h1 = document.createElement('h1');
    var ans= document.createTextNode("You are "+age + " days old");
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(ans);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(age);

}
function reset(){
    document.getElementById('ageindays').remove();
   
}
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

function rpsgame(choice){
    var human, bot;
    human= choice.id;
    bot = numtochoice(rand());
    result = decideWinner(human, bot);
    console.log(result);
    msg= finalmsg(result);
    console.log(msg);
    rpsFrontend(choice.id, bot, msg);

}
function rand(){
    return Math.floor(Math.random()*3);
}
function numtochoice(number){
    return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(choice, bot){
    var data={
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
    }
    var yourscore = data[choice][bot];
    var botscore= data[bot][choice];
    return [yourscore, botscore];
}
function finalmsg([yourscore, botscore]){
    if(yourscore === 0)
    return {'msg':'You Lost!', 'color':'red'};
    else if(yourscore === 0.5)
    return {'msg':'Game Tied', 'color':'rgb(255, 195, 0)'};
    else
    return {'msg':'You Won!', 'color':'green'};
}

function rpsFrontend(choice, bot, finalmsg){
    var images = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src

    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var msgdiv = document.createElement('div');

    humandiv.innerHTML = "<img src='"+ images[choice]+"' height= 150 width=150 style='box-shadow: 0px 10px 50px 0px rgba(31,175,219,1);'>";
    msgdiv.innerHTML="<h1 style='color: "+ finalmsg.color+ "; font-size:60px; padding:30px;'> "+ finalmsg.msg+ "</h1";
    document.getElementById('flex-box-rps-div').appendChild(humandiv);

    botdiv.innerHTML = "<img src='"+ images[bot]+"' height= 150 width=150 style='box-shadow: 0px 10px 50px 0px rgba(168,64,119,1);'>";
    document.getElementById('flex-box-rps-div').appendChild(msgdiv);
   
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
    


}
function resetgame(){
    // document.getElementById('flex-box-rps-div').innerHTML="";
    // $('#flex-box-rps-div').html(old);
   document.location.href="";
}

var allbuttons = document.getElementsByTagName('button');
let copyAllButtons= [];
for(let i=0; i<allbuttons.length; i++)
{
    copyAllButtons.push(allbuttons[i].classList[1]);
}
console.log(copyAllButtons);

function colorchange(buttonColor){
    if(buttonColor.value === 'red')buttonred();
    else if (buttonColor.value === 'green')buttongreen();
    else if (buttonColor.value === 'reset')buttonreset();
    else if (buttonColor.value === 'yellow')buttonyellow();
    else if (buttonColor.value === 'blue')buttonblue();

    else if (buttonColor.value === 'random')randomcolor();


}
function buttonred(){
    for(let i=0; i<allbuttons.length; i++)
{
   allbuttons[i].classList.remove(allbuttons[i].classList[1]);
   allbuttons[i].classList.add('btn-danger');
  
}
}
function buttongreen(){
    for(let i=0; i<allbuttons.length; i++)
{
   allbuttons[i].classList.remove(allbuttons[i].classList[1]);
   allbuttons[i].classList.add('btn-success');
}
}function buttonblue(){
    for(let i=0; i<allbuttons.length; i++)
{
   allbuttons[i].classList.remove(allbuttons[i].classList[1]);
   allbuttons[i].classList.add('btn-primary');
}
}function buttonyellow(){
    for(let i=0; i<allbuttons.length; i++)
{
   allbuttons[i].classList.remove(allbuttons[i].classList[1]);
   allbuttons[i].classList.add('btn-warning');
}
}
function buttonreset(){
    for(let i=0; i<allbuttons.length; i++)
    {
       allbuttons[i].classList.remove(allbuttons[i].classList[1]);
       allbuttons[i].classList.add(copyAllButtons[i]);
    }
}
function randomcolor(){
    var choices= ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning', 'btn-info'];
    for(let i=0; i<allbuttons.length; i++)
    {
        let randomno = Math.floor(Math.random()*5);
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add(choices[randomno]);
    }
}