
// // CAPTURA DATOS DEL USUARIO Y VALIDA LA ENTRADA
let nombre;
do {
  nombre = prompt("Por favor, ingresa tu nombre:");
  if (nombre === null || nombre.trim() === "")  {
    alert("No haz ingresado tu nombre o dejaste en blanco el espacio, por favor intentalo de nuevo.")}
}while (nombre === null || nombre.trim() === "")
alert(`Bienvenido ${nombre} al Sistema Interactivo de Mensajes 📨`)

let edad;
do {
    edad = parseInt(prompt("Por favor, Ingrese su Edad:"));
    if (isNaN(edad)) { 
        alert("Por favor, ingrese una edad válida (solo números).");
    }
} while (isNaN(edad) || edad <= 0 ); 

if (edad >0 && edad <18) {
    alert(`Hola ${nombre}, eres menor de edad. ¡Lista para descubrir este basto mundo de la programacion!.`);
} else {
    alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
}

