# Projet transversal F1 — Python → Java → JavaScript

Pack complet : énoncé, données, squelettes, tests, extensions et corrigés.

```
ENONCE.md                    l'énoncé étudiant (à lire en premier)
donnees/resultats.csv        l'export brut du championnat
01-python/ingestion.ipynb    maillon 1 — à compléter
02-java/src/                 maillon 2 — Classement.java à compléter
03-js/                       maillon 3 — app.js à compléter, index.html à ouvrir
secours/                     résultats de référence, en cas de blocage
extensions/E1 à E4           les extensions et leurs tests
formateur/                   corrigés, grille, générateur — À RETIRER avant distribution
```

Prérequis : Python 3 avec Jupyter, un JDK (`javac -version`), un navigateur.

## Processus

### 01-python/ingestion.ipynb

1. '1:33.996' -> 93.996 (float, arrondi à 3 décimales).
Une chaîne vide ou ne contenant que des espaces est censée retourner None.
Pour cette condition, j’ai utilisé la méthode strip, qui retire les espaces au début et à la fin de la variable texte. Ainsi, si la chaîne est vide ou ne contient que des espaces, le résultat de strip sera forcément une chaîne vide. Ensuite, j’ai créé une variable split en utilisant la méthode split, basée sur le caractère ":", afin de diviser la chaîne en deux parties. J’ai ensuite créé les variables minutes et secondes, auxquelles j’ai affecté chaque morceau grâce à l’indexation (split[0] et split[1]). Étant donné qu’une minute équivaut à 60 secondes, j’ai effectué le calcul en convertissant les minutes en entier, puis en multipliant par 60, avant d’ajouter les secondes converties en float.

2. Lit le CSV brut et renvoie une liste de dictionnaires
Pour ouvrir et lire le fichier CSV, j’ai utilisé with open, auquel j’ai passé le chemin du fichier ainsi que le mode 'r', qui signifie lecture seule. Pour sauter la première ligne, j’ai utilisé next(f), puis une boucle for pour parcourir toutes les lignes restantes. J’ai utilisé split avec le caractère ";" pour découper chaque ligne en colonnes, stockées dans la variable morceaux. J’ai attribué chaque élément de morceaux à la variable correspondante (course, pilote, écurie, position, temps, statut). J’ai ajouté une condition if pour vérifier le statut : si le pilote est en ABANDON, alors la position doit être 0. Sinon, on convertit la position en entier. J’ai également ajouté une condition pour le temps brut : si c’est une chaîne vide, la fonction doit retourner None. Sinon, on utilise la fonction temps_en_secondes pour convertir le temps en secondes. Enfin, il est essentiel d’utiliser resultats.append(...) pour ajouter chaque dictionnaire à la liste. Sans append, la fonction renverrait une liste vide.

3. Écrit le CONTRAT 1 : en-tête course;pilote;ecurie;position;temps_tour
Pour écrire le contrat 1, j’ai également utilisé with open, qui permet de manipuler un fichier. La procédure est la même que pour la lecture, à la différence que cette fois j’ai utilisé le mode 'w' au lieu de 'r'. Le mode 'w' permet d’écrire dans le fichier en écrasant les anciennes données, contrairement au mode 'a' qui ajoute du contenu à la suite. J’ai donc écrit la ligne d’en‑tête avec f.write, sans oublier le retour à la ligne \n à la fin de la chaîne de caractères. Ensuite, pour chaque ligne, j’ai attribué à chaque variable la chaîne de caractères correspondante. Avec un if, j’ai vérifié si temps_tour était None. Si oui, je retourne une chaîne vide ; sinon, je formate le temps avec trois décimales grâce à f"{temps_tour:.3f}". Enfin, j’écris chaque ligne à la suite de l’en‑tête avec : f.write(f"{course};{pilote};{ecurie};{position};....\n)


### 02-java/src/ 

1. pointsPourPosition(position) : points marqués pour cette position.
jai utiliser un switch case pour gerer les position de 1 a 10. avec 0 par defaut.

2. classementPilotes(lignes)

3. classementEcuries(pilotes)

4. positionMoyenne(lignes, pilote)



### 03-js/ 

1. trierParPoints(liste) : renvoie une NOUVELLE liste triée par points

La liste reçue ne doit pas être modifiée. J’ai donc créé une copie de cette liste dans la variable copie grâce à l’opérateur spread : const copie = [...liste]. Ensuite, j’ai utilisé la méthode .sort() pour trier cette copie. La fonction de comparaison permet d’ordonner les éléments selon les points décroissants. il verifie d'abord l'inegalite de point et en cas d’égalité de points une seconde condition les départage en fonction du nombre de victoires.

2. remplirTableau(idCorps, liste) : remplit le <tbody> dont l'id est fourni.