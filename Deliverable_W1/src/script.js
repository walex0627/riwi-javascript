// // INICIALIZACION DEL PROGRAMA
console.log("Bienvenido al Sistema Interactivo de Mensajes 📨");

// // CAPTURA DATOS DEL USUARIO Y VALIDA LA ENTRADA
let nombre = prompt("Por favor, Ingrese su Nombre:");

let edad;
do {
    edad = parseInt(prompt("Por favor, Ingrese su Edad:"));
    if (isNaN(edad)) { 
        alert("Por favor, ingrese una edad válida (solo números).");
    }
} while (isNaN(edad)); 
if (edad >0 && edad <18) {
    alert(`Hola ${nombre}, eres menor de edad. ¡Lista para descubrir este basto mundo de la programacion!.`);
} else if (edad > 18){
    alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
}else { 
    alert("Ingrese un numero positivo")
}