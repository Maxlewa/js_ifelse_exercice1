// // 1

// console.log(`1 == "1" = ${1 == '1'}`);
// console.log(`1 == "1" = ${1 == 1}`);

// // 2

// console.log(`1 === "1" = ${1 === '1'}`);
// console.log(`1 === "1" = ${1 === 1}`);


// 3

// let prenom = prompt("Prénom ?")
// console.log(prenom.length);

// if (prenom.length > 5) {
//     alert(`Hello ${prenom} !`);
// } else if (prenom.length < 5) {
//     alert("Ton prénom est trop court !");
// }

// 4

// let addition = prompt("1 + 1 = ?")

// if (addition == 2) {
//     alert("Bravo !")
// } else {
//     alert("Incorrect ...")
// }

// 5

// let multiplication = prompt("3 x 3 = ?")

// if (multiplication == 9) {
//     alert(`Bravo ! La réponse était bien ${multiplication} :)`);
// } else if (multiplication !== 9) {
//     parseInt(multiplication)
//     alert(`Zut, tu étais à ${Math.abs(multiplication - 9)} unités de la réponse juste`);
// }

// 6

// let tab = []
// let ask

// if (tab.length == 3) {
//     alert(`Miam, merci ! J'ai maintenant une sacrée liste : ${tab}`)
// } else {
//     ask = prompt("Un ingrédient ?");
//     tab.push(ask);
// } 

// if (tab.length == 3) {
//     alert(`Miam, merci ! J'ai maintenant une sacrée liste : ${tab}`)
// } else {
//     ask = prompt("Un ingrédient ?");
//     tab.push(ask);
// } 

// if (tab.length == 3) {
//     alert(`Miam, merci ! J'ai maintenant une sacrée liste : ${tab}`)
// } else {
//     ask = prompt("Un ingrédient ?");
//     tab.push(ask);
// } 

// if (tab.length == 3) {
//     alert(`Miam, merci ! J'ai maintenant une sacrée liste : ${tab}`)
// } else {
//     ask = prompt("Un ingrédient ?");
//     tab.push(ask);
// } 

// console.log(tab);

// 7

// nb1 = prompt("Valeur de x ?")
// nb2 = prompt("Valeur de x ?")
// nb3 = prompt("Valeur de x ?")
// let grandsNombres = []
// let petitsNombres = []

// if (nb1 >= 12) {
//     grandsNombres.push(nb1);
// } else if (nb1 < 12) {
//     petitsNombres.push(nb1);
// }
// if (nb2 >= 12) {
//     grandsNombres.push(nb2);
// } else if (nb2 < 12) {
//     petitsNombres.push(nb2);
// }
// if (nb3 >= 12) {
//     grandsNombres.push(nb3);
// } else if (nb3 < 12) {
//     petitsNombres.push(nb3);
// }

// alert(`Plus grand ou égal à 12 : ${grandsNombres} ; plus petit que 12 : ${petitsNombres}`);

// 8

let jour = prompt("Jour de la semaine ?")

if (jour == 'lundi' || jour == 'mardi' || jour == 'mercredi') {
    console.log("Tu es en e-learning");
}

else if (jour == 'jeudi' || jour == 'vendredi') {
    console.log("Tu es présentiel"); 
} 

else {
    console.log("Demande erronée");
}
