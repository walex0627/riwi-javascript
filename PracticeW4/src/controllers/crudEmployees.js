import axios from "axios";

let currentEditId = null

const employeeURL = "http://localhost:3000/employees"

export async function getData(){
    const params = {
        is_active: true,
    }

    try {
        const resp= await axios.get(employeeURL, {params: params});

        const data = resp.data;

        return data.sort(function(a, b) {
            return new Date (b.created) - new Date(a.created);
        });
    }catch (error){
        console.log(error);
        return "Algo salio mal";
    }
}

export function setId(id){
    currentEditId=id
}

export function clearEditId(){
    currentEditId = null
}

export async function updateEmployee(formData){
    if(!currentEditId) return alert("")

}