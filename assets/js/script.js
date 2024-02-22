function iniciar(){
    var nombre = prompt("Ingresa tu nombre completo");
    var carrera = prompt("Ingresa el nombre de la carrera");
    if (nombre-carrera !=''){
        alert('Para continuar rellena la tabla de notas porfavor y presiona "Calcular"')
        document.getElementById("nombrec").innerHTML= "Nombre: "+nombre+".";
        document.getElementById("carrerac").innerHTML= "Carrera: "+carrera+".";
    }    
}
function PromCalc(){
    var v1 = document.getElementById("nota1").value;
    var v2 = document.getElementById("nota2").value;
    var v3 = document.getElementById("nota3").value;
    var prom = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3))/3;
    document.getElementById("respuesta").innerHTML = prom;
}
function PromCalc2(){
    var v1 = document.getElementById("nota1").value;
    var v2 = document.getElementById("nota2").value;
    var v3 = document.getElementById("nota3").value;
    var prom = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3))/3;
    document.getElementById("respuesta2").innerHTML = prom;
}
function PromCalc3(){
    var v1 = document.getElementById("nota1").value;
    var v2 = document.getElementById("nota2").value;
    var v3 = document.getElementById("nota3").value;
    var prom = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3))/3;
    document.getElementById("respuesta3").innerHTML = prom;
}

function calcularPromedio() {
    var no1 = parseFloat(prompt("Introducir nota 1"));
    var no2 = parseFloat(prompt("Introducir nota 2"));
    var no3 = parseFloat(prompt("Introducir nota 3"));
    var promedio = (no1 + no2 + no3) / 3;

    if (!isNaN(promedio)) {
        document.getElementById("nota10").innerHTML = "Nota 1: " + no1;
        document.getElementById("nota20").innerHTML = "Nota 2: " + no2;
        document.getElementById("nota30").innerHTML = "Nota 3: " + no3;
        document.getElementById("promediopromt").innerHTML = "Promedio: " + promedio.toFixed(2);
    } else {
        alert("Por favor, ingresa notas validas");
    }
}
