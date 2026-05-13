/*2. Sistema de descuentos en una tienda
Una tienda ofrece descuentos dependiendo del monto de compra y si el cliente tiene membresía.
Reglas:
Si la compra es mayor a 100:
obtiene 10% de descuento.
Pero si además tiene membresía premium:
obtiene 20%.
Si la compra supera 300:
y tiene membresía premium:
obtiene 30%.
Debe mostrar:
subtotal
descuento aplicado
total final*/
// let monto = parseFloat(prompt("Ingrese monto de su compra: "))
// let membresia = prompt("Tiene membresia? (Y/N) ")
// let total = monto;


// if (monto > 100) {
//     if(membresia === "Y"){
//         if (monto >= 300) {
//             total = monto * 0.7
//         } else {
//             total = monto * 0.8
//         }
//     } else {
//         total = monto * 0.9
//     }
// }

// alert(`
//     Subtotal: ${monto}
//     `)


// 
// 
//Bucles
// 
// 

for (let i = 0; i < 5; i++) {
    console.log(i)
}

// cuenta regresiva o reversa es posible pero es confuso no es la mejor forma
// for (let i = 5; i < 0; i--) {
//     console.log(i)
// }


let user = "diego"
let userName;

for (let i = 0; userName !== user; i++) {
    alert("intento numero: " + (i + 1))
}


