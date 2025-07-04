async function makeProduct(event) {
    event.preventDefault();
    
    const form = new FormData(document.getElementById("form"));
    
    try {
    
    let object = {};
    form.forEach((value, key) => (object[key] = value));
    
    const response = await fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(object),
    });

    const newProduct = await response.json();
    alert("Usuario creado:", newProduct);
    } catch (error) {
        console.error("Error creating new product:", error);
    }
}

async function obtainProducts() {
    try {
    const response = await fetch(`http://localhost:3000/productos`);
    const obtainProducts = await response.json();

        obtainProducts.forEach(element => {
            const fila = document.createElement("tr")
            fila.innerHTML = `
            <td>${element.product}</td>
            <td>${element.quantity}</td>
            <td>${element.price}</td>
            <td><button onclick="deleteProduct('${element.id}', '${element.product}')">Delete</button></td>
            <button onclick="openUpdate('${element.id}', '${element.product}', '${element.quantity}', '${element.price}')">Edit</button>
            ` 
            
            document.getElementById("body-table").appendChild(fila)
        });
} catch (error) {
    console.error("Error getting products:", error);
}
}

document.addEventListener("DOMContentLoaded", function () {
    obtainProducts();
});

async function deleteProduct(id, product) {
    debugger
    const confirmChange = window.confirm(`Are you sure delete this product "${product}"?`);
    if (!confirmChange) {
        return;
    }

    const url = `http://localhost:3000/productos/${id}`;
    try {
        const response = await fetch(url, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        debugger
        const json = await response.json();
        console.log("Product delete", json);
        await obtainProducts()
        debugger
        window.location.reload();
    } catch (error) {
        console.error(error.message);
    }
}

let currentEditId = null;
function openUpdate(id, product, quantity, price){
    currentEditId = id;
    document.getElementById('editProduct').value = product;
    document.getElementById('editQuantity').value = quantity;
    document.getElementById('editPrice').value = price;
    document.getElementById('editModal').style.display = "block";
}

function closeUpdate() {
    document.getElementById("editModal").style.display = "none";
}

document
    .getElementById("saveChangesBtn")
    .addEventListener("click", async () => {
        const updatedProduct = {
            product: document.getElementById("editProduct").value,
            quantity: parseInt(document.getElementById("editQuantity").value),
            price: parseFloat(document.getElementById("editPrice").value),
        };

        const url = `http://localhost:3000/productos/${currentEditId}`;

        try {
            const response = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            });

            if (!response.ok) {
                throw new Error(`Error status: ${response.status}`);
            }

            console.log("Product updated!");
            closeModal();
            window.location.reload();
        } catch (error) {
            console.error(error.message);
        }
    });