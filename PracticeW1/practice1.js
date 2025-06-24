// //Ejercicios 

// // INICIALIZACION DEL PROGRAMA
// console.log("Bienvenido al Sistema Interactivo de Mensajes 📨");

// // CAPTURA DATOS DEL USUARIO Y VALIDA LA ENTRADA
// let nombre = prompt("Por favor, Ingrese su Nombre:");

// let edad;
// do {
//     edad = parseInt(prompt("Por favor, Ingrese su Edad:"));
//     if (isNaN(edad)) { 
//         alert("Por favor, ingrese una edad válida (solo números).");
//     }
// } while (isNaN(edad)); 

// if (edad >0 && edad <18) {
//     alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
// } else if (edad > 18){
//     alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
// }else { 
//     alert("Ingrese un numero positivo")
// }

// console.log("¡Gracias por usar el sistema!");

// // if-else con uso de operadores de comparación, Operadores de asignación con
// //Resta y asignación, y algún método de string:

// let Numero1 = parseFloat(prompt(`Ingrese el numero 1:`))
// let Numero2 = parseFloat(prompt(`Ingrese el numero 2:`))
// let resultado = Numero1 - Numero2
// if (Numero1 > Numero2) {
//     console.log(`El numero 1 es mayor que el numero 2 y el resultado de la resta es ${resultado}`)
// }else{
//     console.log(`El numero 2 es mayor que el numero 1 y no se puede realizar la operacion `)
// }

// // switch case con uso de operadores de comparación, Método Math y
// // Number.parseFloat(text):
// function sumar(a,b){
//     return a + b;
// }

// function multiplicar(a, b){
//     return a * b;
// }

// function division(a, b){
//     return a/b;
// }

// function resta(a,b){
//     return a - b;
// }
    
// let Menu;
// do{
//  Menu = parseInt(prompt("Calculadora\nSeleccione una operacion\n1. Sumar\n 2. Restar\n3. Multiplicar\n 4. Dividir"));
//  if (isNaN(Menu)){
//      alert("Ingrese el nuero de la opcion")
//  }

// }while (isNaN(Menu));

// let Numero1;
// do{
//     Numero1 = parseFloat(prompt(`Ingrese el numero 1:`))
//     if(isNaN(Numero1)){
//         alert("Ingrese un numero entero")
//     }
// }while(isNaN(Numero1));
    

// let Numero2;
// do{
//     Numero2 = parseFloat(prompt(`Ingrese el numero 2:`))
//     if(isNaN(Numero2)){
//         alert("Ingrese un numero entero")
//     }
// }while(isNaN(Numero2));

// switch (Menu){
//     case 1 :
//         console.log(sumar(Numero1,Numero2));
//         break;
//     case 2:
//         if (Numero1>Numero2){
//             console.log(resta(Numero1,Numero2))
//         }else{
//             console.log(`No se puede realizar la operacion debido aque el numero 1 es mayor que el numero 2`)
//         };
//         break;
//     case 3:
//         console.log(multiplicar(Numero1,Numero2));
//         break;
//     case 4:
//         console.log(division(Numero1,Numero2));
//         break
//     default:
//         console.log("Elija una opcion correcta")
//     }

// Ejercicios de Array.prototype

const usuarios = [
    {
        id: 1,
        nombre: "Ana Torres",
        edad: 28,
        ciudad: "Bogotá",
        correo: "ana.torres@example.com",
        compras: [
            { producto: "Laptop", precio: 3500 },
            { producto: "Mouse", precio: 50 }
        ]
    },
    {
        id: 2,
        nombre: "Carlos Ruiz",
        edad: 35,
        ciudad: "Medellín",
        correo: "carlos.ruiz@example.com",
        compras: [
            { producto: "Celular", precio: 1200 },
            { producto: "Audífonos", precio: 200 }
        ]
    },
    {
        id: 3,
        nombre: "Laura Gómez",
        edad: 22,
        ciudad: "Cali",
        correo: "laura.gomez@example.com",
        compras: [
            { producto: "Tablet", precio: 800 },
            { producto: "Funda", precio: 30 }
        ]
    },
    {
        id: 4,
        nombre: "Mateo Fernández",
        edad: 42,
        ciudad: "Bogotá",
        correo: "mateo.fernandez@example.com",
        compras: [
            { producto: "Monitor", precio: 1000 }
        ]
    },
    {
        id: 5,
        nombre: "Sofía Martínez",
        edad: 30,
        ciudad: "Barranquilla",
        correo: "sofia.martinez@example.com",
        compras: [
            { producto: "Teclado", precio: 80 },
            { producto: "Mousepad", precio: 20 }
        ]
    }
];


// Listar los nombres de todos los usuarios.
// usuarios.forEach((item)=> console.log(`${item.nombre}`))


// Filtrar usuarios que vivan en Bogotá.
// const bogotanos = usuarios.filter((item) => item.ciudad === "Bogotá");

// Obtener un arreglo con los correos electrónicos.

// const correos = usuarios.map((item) => item.correo)

// Sumar las edades de todos los usuarios.

// let edad = 0 
// const sumaEdad = usuarios.reduce((accumulator, item) => accumulator + item.edad, edad);


// Encontrar el usuario con mayor edad.

// const sumaEdad = usuarios.reduce((edadMayor, usuarioActual) => {
//     return usuarioActual.edad > edadMayor.edad ? usuarioActual : edadMayor
// })

// console.log(sumaEdad)


// Verificar si algún usuario tiene menos de 25 años.

// const edadMenor = usuarios.filter((item)=> item.edad <= 25) ;

// Agregar una nueva compra al usuario con ID 3.

// const nuevaCompra = {producto : "Mouse Logitech", precio : 28};
// const usuarioActualizar = usuarios.find(usuarios => usuarios.id === 3 );

// if (usuarioActualizar){
//     usuarioActualizar.compras.push(nuevaCompra)
//     console.log(`El item ${nuevaCompra} ha sido agregado satisfactoriamente.`)

// }else{ 
//     console.log("No se encontro ningun usuario con el ID 3")
// };

// console.log(usuarioActualizar);

// Calcular el total gastado por cada usuario.
// const resumenGastosPorUsuario = usuarios.map(usuarios => {
//     const totalGastado = usuarios.compras.reduce((suma, compra) => suma + compra.precio, 0);
//     return{
//         nombre : usuarios.nombre,
//         totalGastado: totalGastado
//     };
// });

// console.log(resumenGastosPorUsuario)

// Crear un nuevo arreglo con el nombre y ciudad de cada usuario.

// const infoUsuario = usuarios.map(usuarios=>{
//     return{
//         nombre : usuarios.nombre,
//         ciudad : usuarios.ciudad
//     };
// });

// console.log(infoUsuario)

// Ordenar los usuarios por edad de menor a mayor.

// const usuarioPorEdad = usuarios.sort((a, b)=>{
//     return a.edad - b.edad;
// });

// console.log(usuarioPorEdad)

// Contar cuántos usuarios hay por ciudad.
// const usuariosPorCiudad = usuarios.reduce((accumulator, usuarios)=>{
//     const ciudadActual = usuarios.ciudad
//     if (accumulator[ciudadActual]){
//         accumulator[ciudadActual]++;
//     }else{
//         accumulator[ciudadActual] = 1;
//     }
//     return accumulator
// },{});

// console.log(usuariosPorCiudad);

// Eliminar al usuario con ID 2.
// const idEliminar = 2
// const indiceUsuario = usuarios.findIndex(usuarios => usuarios.id === idEliminar);
// if (indiceUsuario !== -1){
//     usuarios.splice(indiceUsuario, 1)
// };
// console.log(usuarios)

// Modificar el correo del usuario llamado "Mateo Fernández".}

// const usuarioNombre = "Mateo Fernández";
// const correoNuevo = "mateo123@gmail.com"
// const usuarioActualizar = usuarios.find(usuarios => usuarios.nombre === usuarioNombre);
// if (usuarioActualizar){
    
//     usuarioActualizar.correo = correoNuevo;
//     console.log(`Se modifico el correo del usuario ${usuarioNombre}`)
// } else{
//     console.log("No se encontro ningun usuario con ese nombre")
// }

// console.log(usuarios.find(u => u.nombre === usuarioNombre));



// Buscar el primer usuario que compró un “Mouse”.

// Crear una función que reciba un nombre y devuelva las compras de ese usuario.

