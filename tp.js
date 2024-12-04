function calculSomme() {	
	let valeur1 = document.getElementById("valeur1").value; // "12"
	let valeur1Entiere = parseFloat(valeur1);
	
	let valeur2 = document.getElementById("valeur2").value; // "12"
	let valeur2Entiere = parseFloat(valeur2);
	
	let somme = valeur1Entiere + valeur2Entiere;
	
	console.log("result: " + somme);
	
	
	
	document.getElementById("resultat").innerHTML = somme;
	
}