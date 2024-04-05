/*Fonctions de manipulation de chaînes :*/

/*Inverser une chaîne : écrivez une fonction qui inverse une chaîne donnée.*/
function restr(str){
  console.log(str.split("").reverse().join(''));
}

const string = "Hello les gens";

restr( string);


/*Compter les caractères : créez une fonction qui compte le nombre de caractères dans une chaîne. */

function conte (str) {
  let lw = str.split(" ");
  let arr = []
  for (let i = 0; i < lw.length; i++) {
    console.log(lw[i] , lw[i].length)
    arr.push(lw[i].length);
  }

  console.log(arr);
}

let txt = "le javascript";

conte(txt);


/* Mettre les mots en majuscule : implémentez une fonction qui met en majuscule la première lettre de chaque mot dans une phrase. */


function strong(str) {
  let vo = str.toLowerCase().split(" ");
  let arr = [];
  vo.forEach(vos => {
    
     let flt = vos[0].charAt(0).toUpperCase();
     let remp = vos.replace(vos.charAt(0) ,flt);

     arr.push(remp);
     
  }); 
  console.log(arr.join("    "));

  
}
 let mot = "salUt lEs gEns";
strong(mot)


/* Fonctions du tableau :*/

/* Rechercher le maximum et le minimum : écrivez des fonctions pour rechercher les valeurs maximales et minimales dans un tableau de nombres. */

function num (nbr) {
 
  console.log(Math.min(...tab) , Math.max(...tab));
}

let tab = [1,2,3,4,5];

num(tab)

/*Somme du tableau : créez une fonction qui calcule la somme de tous les éléments d'un tableau. */

const arr= [1,2,3];

let sun =0;
 for (let i = 0; i < arr.length; i++) {
  sun+= arr[i];
  
 }

 console.log(sun)


 


 /*Filtrer le tableau : implémentez une fonction qui filtre les éléments d'un tableau en fonction d'une condition donnée.*/
/*

const words = ["r","fait","parfait"];

const result = words.filter((word) => word.length > 6);

console.log(result);*/





function nam(str) {
  let converts = str.split(" ");
  console.log(converts.filter((convert) => convert.length > 6));
}


let lettre = "Parfait tu es devenu un montre de la productivité";

nam(lettre);


/*Fonctions mathématiques :*/

/* Factorielle : écrivez une fonction pour calculer la factorielle d'un nombre donné. */

function fact(nbr) {
  var i , nbr, f = 1;

  for (i = 1; i <= nbr; i++) {
    f = f * i;
    
  }
  return f;
}

console.log(  fact(3))


/* Vérification des nombres premiers : créez une fonction pour vérifier si un nombre est premier ou non. */


function nbrPremier(nbr) {
  for(var i = 2; i < nbr; i++)
    if(nbr%i === 0){
      return "n'est pas premier";

    } else{
      return  "est premier";
    }
 
}

console.log(nbrPremier(4));


/*Séquence de Fibonacci : implémentez une fonction pour générer la séquence de Fibonacci jusqu'à un nombre donné de termes. (recherche sur le net)*/


function fibonacci(nbr) {

  var n1 = 0;
  var n2 = 1;
  var somme = 0;

  for(let i = 2; i <= nbr; i++){
     //somme des deux derniers nombres
     somme = n1 + n2; 

     //assignation la dernière valeur à la première
     n1 = n2; 

     //attribution la somme au dernier
     n2 = somme; 
  }

  return nbr ? n2 : n1;
}

console.log(fibonacci(5));



 