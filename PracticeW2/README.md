# CRUD de Usuarios con JSON Server

Este proyecto es una aplicación simple en JavaScript puro que utiliza JSON Server como backend falso (fake REST API).
Permite crear usuarios, listar únicamente los activos y desactivarlos (eliminación lógica mediante PATCH).

------------------------------------------------------------
# Funcionalidades

- Crear usuario con nombre, edad, email y is_active: true.
- Listar solo usuarios activos.
- Desactivar usuario con confirmación.
- Botones "Desactivar" creados dinámicamente desde JavaScript.

------------------------------------------------------------
# Estructura del Código
1. ``crearUsuario(event)``
Crea un nuevo usuario al enviar el formulario. Agrega automáicamente is_active: true.
POST /usuarios

2. ``obtenerUsuariosActivos()``
Obtiene todos los usuarios activos (is_active: true) y los muestra en una lista. Por cada uno crea dinámicamente un botón "Desactivar".
GET /usuarios?is_active=true

3. ``eventClick(id, nombre)``
Función ejecutada al hacer clic en "Desactivar". Pregunta al usuario si desea desactivarlo y luego envía un PATCH.
PATCH /usuarios/:i``d

------------------------------------------------------------``
## ¿Cómo se crean los botones "Desactivar"?

Los botones se crean automáticamente desde JavaScript cada vez que se llama ``obtenerUsuariosActivos()``:

  const button = document.createElement("button");
  button.innerText = "Desactivar";
  button.setAttribute("onclick", `eventClick(${element.id}, ${JSON.stringify(element.nombre)})`);

------------------------------------------------------------
## Estructura HTML mínima
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD Usuarios</title>
</head>
<body>
  <form id="formulario" onsubmit="crearUsuario(event)">
    <input type="text" name="nombre" placeholder="nombre" required>
    <input type="number" name="edad" placeholder="edad" required>
    <input type="email" name="email" placeholder="email" required>
    <button type="submit">Guardar</button>
  </form>

  <ul id="my-list"></ul>

  <script src="conexiones.js"></script>
</body>
</html>
```
------------------------------------------------------------
# Cómo iniciar JSON Server

1. Instalar JSON Server globalmente
```npm install -g json-server```

2. Crear el archivo db.json

{
  "usuarios": []
}

3. Iniciar el servidor
```json-server --watch db.json --port 3000```

------------------------------------------------------------
 Ejemplo de estructura de usuario

```
{
  "id": 1,
  "nombre": "María López",
  "edad": 28,
  "email": "maria@example.com",
  "is_active": true
}
```

------------------------------------------------------------
 Requisitos

- Node.js y npm instalados
- JSON Server
- Navegador moderno
