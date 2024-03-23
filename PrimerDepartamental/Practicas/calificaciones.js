function validarDatos() {
    var matricula = document.getElementById("matricula").value;
    var nombre = document.getElementById("nombre").value;
    var materia1 = document.getElementById("materia1").value;
    var calificacion1 = parseFloat(document.getElementById("calificacion1").value);
    var materia2 = document.getElementById("materia2").value;
    var calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    var materia3 = document.getElementById("materia3").value;
    var calificacion3 = parseFloat(document.getElementById("calificacion3").value);
    var materia4 = document.getElementById("materia4").value;
    var calificacion4 = parseFloat(document.getElementById("calificacion4").value);

    if (matricula === "" || nombre === "" || calificacion1 === "" || calificacion2 === "" || calificacion3 === "" || calificacion4 === "") {
        alert("Por favor complete todos los campos.");
        return false;
    }

    if (isNaN(calificacion1) || calificacion1 < 0 || calificacion1 > 100 ||
        isNaN(calificacion2) || calificacion2 < 0 || calificacion2 > 100 ||
        isNaN(calificacion3) || calificacion3 < 0 || calificacion3 > 100 ||
        isNaN(calificacion4) || calificacion4 < 0 || calificacion4 > 100) {
        alert("Por favor ingrese calificaciones válidas entre 0 y 100.");
        return false;
    }

    dartabla();
    return true;
}

function dartabla() {
    var matricula = document.getElementById("matricula").value;
    var nombre = document.getElementById("nombre").value;
    var materia1 = document.getElementById("materia1").value;
    var calificacion1 = parseFloat(document.getElementById("calificacion1").value);
    var materia2 = document.getElementById("materia2").value;
    var calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    var materia3 = document.getElementById("materia3").value;
    var calificacion3 = parseFloat(document.getElementById("calificacion3").value);
    var materia4 = document.getElementById("materia4").value;
    var calificacion4 = parseFloat(document.getElementById("calificacion4").value);

    var promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;

    var tablaHTML = "<table border='1'>";
    tablaHTML += "<tr><td>Matrícula</td><td>Nombre</td><td>Materia</td><td>Calificación</td></tr>";
    tablaHTML += "<tr><td rowspan='4'>" + matricula + "</td><td rowspan='4'>" + nombre + "</td><td>" + materia1 + "</td><td>" + calificacion1 + "</td></tr>";
    tablaHTML += "<tr><td>" + materia2 + "</td><td>" + calificacion2 + "</td></tr>";
    tablaHTML += "<tr><td>" + materia3 + "</td><td>" + calificacion3 + "</td></tr>";
    tablaHTML += "<tr><td>" + materia4 + "</td><td>" + calificacion4 + "</td></tr>";
    tablaHTML += "<tr><td colspan='3'>Promedio</td><td>" + promedio.toFixed(2) + "</td></tr>";
    tablaHTML += "</table>";

    document.getElementById("tabla").innerHTML = tablaHTML;
}