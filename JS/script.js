console.log("le script démarre");
var player = 1;
var cpt = 1;
var min = 1;
var max = 6;
var nba = Math.floor(Math.random()*(max - min + 1)) + min;
function debutpartie()
{
  document.getElementById("nbordi").classList.add("nbordiadd");
  document.getElementById("nbordi").textContent = "l'ordinateur à fait " + nba;
  document.getElementById("buttondebut").disabled = true;
  document.getElementById("droite").className = "player1";
  document.getElementById("droite").textContent = "Joueur 1, à toi de lancer le dé";
  console.log("tour du joueur 1");
}
function change()                                                     //FOnction qui change de joueur à chaque clique
{
  if(player == 1) {
    player = 2;
    document.getElementById("gauchehaut").textContent = "Joueur 2, à toi de lancer le dé";
    console.log("tour du joueur 2");
    document.getElementById("gauchehaut").className = "player2";
    document.getElementById("droite").classList.remove("player1");
  }
  else if(player == 2) {
    player = 1;
    document.getElementById("droite").textContent = "Joueur 1, à toi de lancer le dé";
    console.log("tour du joueur 1");
    document.getElementById("droite").className = "player1";
    document.getElementById("gauchehaut").classList.remove("player2");
}
}
function lancer()                                                     //fonction qui génére un chiffre aléatoire entre 1 et 6 à chaque clique
{
  var nb = Math.floor(Math.random()*(max - min + 1)) + min;
  cpt++;
  change();
  comparaison(nb, nba);
  console.log("tour " + cpt);
}
function comparaison(nb, nba)                                              //fonction qui compare les résultats
{
  if(nba == nb)
  {
    document.getElementById("button").disabled = true;
    victoire();
    return;
  }
  if(cpt == 10) {
    document.getElementById("button").disabled = true;
    document.getElementById("resultat").textContent = "Tu a utilisé toutes tes chances :(";
  }
  else
  {
    document.getElementById("resultat").classList.add("resultatadd");
    var faux = document.getElementById("resultat").textContent = "dommage le résultat du dé est " + nb;
  }
}
function victoire()                                                   //fonction qui créer le bon de réduction aléatoirement
{
  document.getElementById("resultat").textContent = "BRAVO ! tu as gagné un bon de réduction d'une valeur de 10€ valable sur tous les produits";
  document.getElementById("nbordi").textContent = ChaineAleatoire();
  document.getElementById("resultat").classList.add("resultatadd");
  ChaineAleatoire();
}
var ChaineAleatoire = function ChaineAleatoire()
{

  var ListeCar = "ABCDEFGHIJKLMNOPQRSTUVWYZ0123456789";
	var Chaine ='';
	for(i = 0; i < 12; i++)
	{
		Chaine = Chaine + ListeCar[Math.floor(Math.random()*ListeCar.length)];
    if (i == 3 || i == 7 || i == 11)
    {
      Chaine += "-";
    }
	}
	return Chaine +"2018";
}
