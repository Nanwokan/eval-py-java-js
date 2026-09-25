/* =========================================================================
   MAILLON 3 — JAVASCRIPT : l'interface
   Les données arrivent du maillon Java, dans donnees.js :
     PILOTES = [{nom, ecurie, points, victoires}, ...]
     ECURIES = [{nom, points, victoires}, ...]
   Complétez les trois fonctions, puis ouvrez index.html dans le navigateur.
   ========================================================================= */

// 1. trierParPoints(liste) : renvoie une NOUVELLE liste triée par points
//    DÉCROISSANTS. La liste reçue ne doit pas être modifiée.
//    À points égaux, celui qui a le plus de victoires passe devant.
function trierParPoints(liste) {
  const copie = [...liste];
  copie.sort(( a, b ) => {
    if (b.points !== a.points) {
        return b.points - a.points;
    }

    return b.victoires - a.victoires;
  })

  return copie;
}

// 2. remplirTableau(idCorps, liste) : remplit le <tbody> dont l'id est fourni.
//    Une ligne <tr> par entrée, avec dans l'ordre les cellules <td> :
//      rang (1, 2, 3...) | nom | écurie (chaîne vide si absente) | points | victoires
//    Chaque <tr> porte l'attribut data-nom. Un nouvel appel REMPLACE le contenu.
function remplirTableau(idCorps, liste) {
  const corps = document.getElementById(idCorps);

  corps.innerHTML = "";

  liste.forEach((element, index) => {
    
    const tr = document.createElement("tr")

    tr.dataset.nom = element.nom;

    const position = document.createElement("td");
    position.textContent = index + 1;

    const pilote = document.createElement("td");
    pilote.textContent = element.nom;
    
    const ecurie = document.createElement("td");
    ecurie.textContent = element.ecurie || ""; //écurie (chaîne vide si absente)

    const pts = document.createElement("td");
    pts.textContent = element.points

    const victoires = document.createElement("td");
    victoires.textContent = element.victoires

    tr.appendChild(position)
    tr.appendChild(pilote)
    tr.appendChild(ecurie)
    tr.appendChild(pts)
    tr.appendChild(victoires)

    corps.appendChild(tr)

  });
}

// 3. marquerPodium(idCorps) : ajoute la classe CSS "podium" aux TROIS PREMIÈRES
//    lignes du tableau, et la retire de toutes les autres.
function marquerPodium(idCorps) {

  const corps = document.getElementById(idCorps);

  const tr = corps.querySelectorAll("tr")

  for (let i = 0; i < tr.length; i++) {

    if (i < 3) {tr[i].classList.add("podium");}

    else {tr[i].classList.remove("podium");}
  }
  
}

/* --- FOURNI — NE PAS MODIFIER : affichage de la saison ------------------- */
function afficherSaison() {
  if (typeof PILOTES === "undefined") {
    return;
  }
  remplirTableau("corps-pilotes", trierParPoints(PILOTES));
  marquerPodium("corps-pilotes");
  remplirTableau("corps-ecuries", trierParPoints(ECURIES));
  marquerPodium("corps-ecuries");
}
