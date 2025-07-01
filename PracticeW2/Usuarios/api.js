async function obtenerConsejo (){
    const peticion = await fetch("https://api.adviceslip.com/advice")
    const resultado =  await peticion.json()

    document.getElementById("result").textContent = resultado.slip.advice
    console.log(resultado.slip.advice)


}


let button = document.getElementById("btn")

button.addEventListener("click", async ()=>{
    const peticion = await fetch("https://api.chucknorris.io/jokes/random")
    const resultado = await peticion.json()

    document.getElementById("result1").textContent = resultado.value
    
})





let button2 = document.getElementById("btn2")

button2.addEventListener("click", async ()=>{
    const peticion = await fetch("https://dog.ceo/api/breeds/image/random");
    const confirmar = await peticion.json();
    document.getElementById("perro").src = confirmar.message
})











