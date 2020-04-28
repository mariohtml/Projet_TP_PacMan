  // Je créé mon tableau d'objets
let x = 2;
let maGrille = [ 

    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,x,x,x,x,x,x,x,x,0,x,x,x,x,x,x,x,x,0],
    [0,x,0,0,x,0,0,0,x,0,x,0,0,x,0,0,0,x,0],
    [0,x,0,0,x,0,0,0,x,0,x,0,0,x,0,0,0,x,0],
    [0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0],
	[0,x,0,0,x,0,x,0,0,0,0,0,x,0,x,0,0,x,0],
	[0,x,x,x,x,0,x,x,x,0,x,x,x,0,x,x,x,x,0],
	[0,0,0,0,x,0,0,0,x,0,x,0,0,0,x,0,0,0,0],
	[0,1,1,0,x,0,x,x,x,1,x,x,x,0,x,0,1,1,0],
	[0,0,0,0,x,0,x,0,0,1,0,0,x,0,x,0,0,0,0],
	[x,x,x,x,x,x,x,0,1,1,1,0,x,x,x,x,x,x,x],
	[0,0,0,0,x,0,x,0,0,1,0,0,x,0,x,0,0,0,0],
	[0,1,1,0,x,0,x,x,x,x,x,x,x,0,x,0,1,1,0],
	[0,0,0,0,x,0,x,0,0,0,0,0,x,0,x,0,0,0,0],
	[0,x,x,x,x,x,x,x,x,0,x,x,x,x,x,x,x,x,0],
	[0,x,0,0,x,0,0,0,x,0,x,0,0,0,x,0,0,x,0],
	[0,x,x,0,x,x,x,x,x,x,x,x,x,x,x,0,x,x,0],
	[0,0,x,0,x,0,x,0,0,0,0,0,x,0,x,0,x,0,0],
	[0,x,x,x,x,0,x,x,x,0,x,x,x,0,x,x,x,x,0],
	[0,x,0,0,0,0,0,0,x,0,x,0,0,0,0,0,0,x,0],
	[0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	];
    
	
/*
function afficheGrille()
{
	let monElem = document.createElement('div')
}
*/

var fin = true;


function start()
{
	fin = false  //on debute le pacman du coup le var fin=true qui est au debut passe en false;;;	
}


function clavier(event)
{
if (fin==true)  // si var fin=true  fin de function et apres on clique start et var fin passe en false;;;
		return; 
}

console.log(fin)


  let pacman = {
    //position de départ de Pacman sur la grille
    y: 2,
    x: 1,
    //direction de départ de pacman (haut:4, bas:2, gauche:3, droite:1)
    direction: 1
}


	let fantome0 = {
  //position de départ de fantome0 sur la grille
   y:11, 
   x:2,
  //direction de départ de fantome0 (haut :4 , bas : 2, gauche : 3, droite : 1)
   direction: 1
 }
 
  let score = 0

function afficheGrille(){
   document.getElementById('grille').innerHTML = " "

for (let i in maGrille) {
    
    for (let j in maGrille[i]) {
        var affGrille = document.createElement('div')
        if (maGrille[i][j]==0) {
            affGrille.classList.add('mur');
        }
            else if (maGrille[i][j]==1) {
                affGrille.classList.add('sol');
            }
                else if (maGrille[i][j]==x) {
                    affGrille.classList.add('bonbon');
                }
    affGrille.style.gridRow=parseInt(i)+1
    affGrille.style.gridColumn=parseInt(j)+1
    document.getElementById('grille').appendChild(affGrille)    
    }
    
}
}

function affichePacman(){
    var monPacman = document.createElement('div') //créé une div
    monPacman.classList.add('pacman') //ajout de la classe pacman a la div
    monPacman.style.gridRow=pacman.y   // permet d'écrire comme si c'était dans le css
    monPacman.style.gridColumn=pacman.x
    document.getElementById('grille').appendChild(monPacman) //on ajoute la div pacman dans grille
    
}


 function afficheFantome0(){
  var monfantome0 = document.createElement('div'); // création d'une div
  monfantome0.classList.add('fantome0'); // nom class de la div
  monfantome0.style.gridRow=fantome0.y // écrire en css
  monfantome0.style.gridColumn=fantome0.x
  document.getElementById('grille').appendChild(monfantome0); // ajoute div fantome en fin de grille
}



function bougePacman(){

    
    if (pacman.direction == 1){
        pacman.x++
    }

    else if (pacman.direction ==2) {
        pacman.y++
    }

    else if (pacman.direction ==3) {
        pacman.x--
    }

    else if (pacman.direction ==4) {
        pacman.y--
    }
        
    if(maGrille[pacman.y-1][pacman.x-1]==0)
{
    if (pacman.direction == 1){
        pacman.x--
    }

    else if (pacman.direction ==2) {
        pacman.y--
    }

    else if (pacman.direction ==3) {
        pacman.x++
    }

    else if (pacman.direction ==4) {
        pacman.y++
    }  // là pacman est dans un mur
}

    if(pacman.x>maGrille[0].length){ //pour faire passer pacman par le couloir de droite car il va plus loin que la grille
        pacman.x=1
    }

    if(pacman.x<1){    // pour faire passer pacman dans le couloir de gauche a droite car la grille ne peut pas etre inferieure
        pacman.x=maGrille[0].length
    }

    if(maGrille[pacman.y-1][pacman.x-1]==x){
        maGrille[pacman.y-1][pacman.x-1]=1
        score=score+1  //ou score++
    }
    
}

function appuiTouche(e){  //pour faire déplacer en appuyant sur les touches
    console.log(e.key)
    if(e.key=="z"){
        pacman.direction=4
    }
    else if(e.key=="q"){
        pacman.direction=3
    }
    else if(e.key=="s"){
        pacman.direction=2
    }
    else if(e.key=="d"){
        pacman.direction=1
    }
}

function afficheScore(){
    document.getElementById('score').innerHTML = score;

}



function refresh(){
    setTimeout(refresh, 1000);
    bougePacman();
    afficheGrille();
    affichePacman() ;   
    afficheScore();
	afficheFantome0();
    
}
refresh();
document.body.addEventListener("keydown",appuiTouche);
/*console.log("je rafraichi ma page");*/

function GameOver(){
    if(pacman.x==fantome0.x || pacman.y==fantome0.y) {
        //pacman is dead
    }
}