

async function makeProduct(event) {
    event.preventDefault();
    
    const form = new FormData(document.getElementById("form"));
    
    try {
    
    let object = {};
    form.forEach((value, key) => (object[key] = value));
    
    const response = await fetch("http://localhost:4000/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(object),
    });

    const newProduct = await response.json();
    debugger
    alert(`The product "${newProduct.product}" has been added succesfully`);
    } catch (error) {
        console.error("Error creating new product:", error);
    }
}

async function obtainProducts() {
    try {
        const response = await fetch(`http://localhost:4000/products`);
        const obtainProducts = await response.json();

        const tbody = document.getElementById("body-table");
        tbody.innerHTML = "";

        obtainProducts.forEach(element => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">${element.product}</th>
                <td class="px-6 py-4">${element.quantity}</td>
                <td class="px-6 py-4">${element.price}</td>
                <td class="px-6 py-4">
                    <button class="btn-delete focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                    <button class="btn-edit focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Edit</button>
                </td>
            `;

            tbody.appendChild(fila);

            const btnDelete = fila.querySelector('.btn-delete');
            const btnEdit = fila.querySelector('.btn-edit');


            btnDelete.addEventListener('click', () => {
                deleteProduct(element.id, element.product);
            });

            btnEdit.addEventListener('click', () => {
                openUpdate(element.id, element.product, element.quantity, element.price);
            });
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

    const url = `http://localhost:4000/products/${id}`;
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

        const url = `http://localhost:4000/products/${currentEditId}`;

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
            closeUpdate();
            window.location.reload();
        } catch (error) {
            console.error(error.message);
        }
    });