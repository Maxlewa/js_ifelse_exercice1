// 1

// let un = 1

// if (un = 1) {
//     console.log("if");
// } else {
//     console.log("else");
// }

// 2

// if (un == 1) {
//     console.log("if");
// } else {
//     console.log("else");
// }

// 3

// let prenom = prompt("Prénom ?")

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
//     alert(`Zut, tu étais à ${Math.abs(9 - multiplication)} unités de la réponse juste`);
// }

// 6

// let tab = ["pâtes"]
// let six = prompt("Ajoute un ingrédient stp bg :")
// let addElement = tab.push(six)
// let tabComplet = tab + addElement

// if (tab.length < 3) {
//     addElement = prompt("Encore un ingrédient stp ? :")
// } else if (tab.length == 3) {
//     alert(`Miam, merci ! J'ai maintenant une sacrée liste : ${tabComplet}`)
// }

// let tab = ["pâtes"]

// if (tab.length < 3) {
//     tab.push(prompt("Un ingrédient ?"));
//     tab.push(prompt("Un ingrédient supplémentaire ?"));
// } 

// if (tab.length == 3) {
//     alert(`Miam, merci ! J'ai maintenant une sacrée liste : ${tab}`)
// }

// console.log(tab);

// 7

nb1 = prompt("Valeur de x ?")
nb2 = prompt("Valeur de x ?")
nb3 = prompt("Valeur de x ?")
let grandsNombres = []
let petitsNombres = []

if (nb1 >= 12) {
    grandsNombres.push(nb1);
} else if (nb1 < 12) {
    petitsNombres.push(nb1);
}
if (nb2 >= 12) {
    grandsNombres.push(nb2);
} else if (nb2 < 12) {
    petitsNombres.push(nb2);
}
if (nb3 >= 12) {
    grandsNombres.push(nb3);
} else if (nb3 < 12) {
    petitsNombres.push(nb3);
}

alert(`Grands nombres : ${grandsNombres} ; et petits nombres ${petitsNombres}`);

// console.log(grandsNombres);
// console.log(petitsNombres);

// 8


