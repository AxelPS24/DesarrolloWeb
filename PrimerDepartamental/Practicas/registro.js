// registro.js
function validarDatos() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    var materia1 = document.getElementById('materia1').value;
    
    // Verificar que el campo de nombre no esté vacío
    if (nombre.trim() === '') {
        alert('Por favor ingresa tu nombre.');
        return;
    }

    // Verificar que el campo de correo no esté vacío y contenga un correo válido
    if (correo.trim() === '') {
        alert('Por favor ingresa tu correo electrónico.');
        return;
    } else if (!validarCorreo(correo)) {
        alert('Por favor ingresa un correo electrónico válido.');
        return;
    }

    // Verificar que el campo de teléfono no esté vacío, contenga solo números y tenga exactamente 10 dígitos
    if (telefono.trim() === '') {
        alert('Por favor ingresa tu número de teléfono.');
        return;
    } else if (!(/^\d+$/.test(telefono))) {
        alert('Por favor ingresa solo números en el campo de teléfono.');
        return;
    } else if (telefono.length !== 10) {
        alert('Por favor ingresa un número de teléfono válido (10 dígitos).');
        return;
    }

    // Si todos los campos son válidos, mostrar detalles de compra en la columna derecha
    mostrarDetallesCompra(nombre, correo, telefono, materia1);
}

// Función para validar el formato de correo electrónico
function validarCorreo(correo) {
    var expresion = /\S+@\S+\.\S+/;
    return expresion.test(correo);
}

// Función para mostrar detalles de compra en la columna derecha
function mostrarDetallesCompra(nombre, correo, telefono, materia1) {
    var columnaDerecha = document.querySelector('.right');
    columnaDerecha.innerHTML = '<h2>Detalles de compra</h2>' +
                                '<p>Nombre: ' + nombre + '</p>' +
                                '<p>Correo: ' + correo + '</p>' +
                                '<p>Teléfono: ' + telefono + '</p>' +
                                '<p>Tipo de entrada: ' + materia1 + '</p>' +
                                '<p>¡Registro exitoso!</p>';
}
