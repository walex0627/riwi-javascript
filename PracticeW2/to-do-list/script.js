const API_URL = "http://localhost:5000/tareas"

//Funcion de botones
async function desactivar(id,tarea){
    const confirmChange = window.confirm(`¿Estás seguro de desactivar al usuario "${tarea}"?asdasd`);
    if(!confirmChange) {
        return;
    }
    try{
        const response = await fetch(`http://localhost:5000/tareas/${id}`, {
            method: "PATCH",
            headers: {"Conten-Type": "application/json"},
            body: JSON.stringify({is_active:false})
        });
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log("Tarea desactivada", json);
        debugger
        await obtenerTareasActivas()
    }catch (Error){
    console.log(Error);
    }

}  
async function obtenerTareasActivas() {
    try {
        const response = await fetch(`http://localhost:5000/tareas?is_active=true`);
        const obtenerTareas = await response.json()
        
        obtenerTareas.forEach(element => {
            const fila = document.createElement("tr")
            fila.innerHTML = `
            <td>${element.tarea}</td>
            <td>${element.estado}</td>
            <td>${element.description}</td>
            <td><button onclick="desactivar('${element.id}', '${element.tarea}')">Desactivar</button></td>
            ` 
            
            document.getElementById("body-table").appendChild(fila)
        });
        
    }catch (error){
        console.error("no", error);
        
    }
}
document.addEventListener("DOMContentLoaded", function () {
    obtenerTareasActivas();
});

async function crearTarea(event) {
    event.preventDefault();

    const form = new FormData(document.getElementById("form"))

    try {
        form.append("is_active", true)
        let object = {}
        form.forEach((value, key)=>(object[key]=value));
        const response = await fetch("http://localhost:5000/tareas", {
            method: "POST",
            headers: { "Conte-Type": "application/json"},
            body: JSON.stringify(object)
        })
        const nuevaTarea = await response.json()
        alert("Tarea creada:", nuevaTarea)
    }catch{
        console.error("Error al crear usuario:", error);
    }
    
}
// async function obtenerTareasActivas() {
    //     try{
        //         const response = await fetch(`${API_URL}`);
        //         const users = response.json()
        //         users.forEach((element) =>{
            
            //             const fila = document.createElement("tr");
            //             fila.innerHTML =`
            //             <td>${element.tarea}</td>
            //             <td>${element.status}</td>
            //             <td>${element.description}</td>
            //             `
            //         });
            //         const button = document.createElement("button")
            
            //         button.setAttribute("data-id",`${element.id}`);
            //         button.setAttribute("class", "boton-desactivar");
            //         button.setAttribute("onclick", `eventClick(${element.id}, ${JSON.stringify(element.tarea)})`);
            //         document.getElementById("body-table").appendChild(tr)
            //         fila.insertAdjacentElemen("afterend", button);
            //         console.log()
            //     }catch (error){
                //     console.error("Error al obtener usuarios:", error)
                //     }
                // document.addEventListener("DOMContentLoaded", 
                // function (){
                    //     obtenerTareasActivas();
//     console.log('Inicio');
    
// })};
// console.log(obtenerTareasActivas());

// async function crearTarea(event) {
//     event.preventDefault()
//     const form = new FormData(document.getElementById("form"))


//     try{
//         form.append("is_active", true);
//         let object = {}
//         form.forEach((value,key)=> (object[key]=value));
//         const response= await fetch(API_URL,{
//             method: "POST",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(object)


//         });
//     const nuevaTarea = await response.json();
//     alert("Tarea creada", nuevaTarea)
//     }catch (error){
//         console.error("Error al crear la tarea", error)
//     }   
// }
// async function desactivarTarea(id, tarea) {
//     const confirmChange = window.confirm(`¿Estás seguro de desactivar al usuario "${tarea}}"?`);
//     if (!confirmChange) {
//         return;
//     }

//     const url = `http://localhost:3000/usuarios/${id}`;
//     try {
//         const response = await fetch(url, {
//             method: "PATCH",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ is_active: false }),
//         });

//         if (!response.ok) {
//             throw new Error(`Response status: ${response.status}`);
//         }

//         const json = await response.json();
//         console.log(json);
//         window.location.reload();
//     } catch (error) {
//         console.error(error.message);
//     }
// }}

