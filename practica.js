var nombre = prompt("¿Cual es tu nombre?")
var c = 0
var i = 0
alert("Bienvenido/a al cuestionario sobre las olimpiadas " + nombre + ", ya podemos empezar")

var p1 = prompt("¿Cuándo se realizará la inauguración de las Olimpiadas?\nA.Lunes 02 de octubre\nB. Viernes 29 de setiembre\nC. Jueves 28 de setiembre")

if(p1 == "B"){
    c = c + 1;
}else if(p1 == "A"){
    i = i + 1;
}else if(p1 == "C"){
    i = i + 1
}else{
    alert("Opción no valida");
}

var p2 = prompt("¿De qué color es la prompoción de 2do de secundaria?\nA. Celeste o Turquesa\nB. Rojo\nC. Morado")

if(p1 == "A"){
    c = c + 1;
}else if(p1 == "B"){
    i = i + 1;
}else if(p1 == "C"){
    i = i + 1
}else{
    alert("Opción no valida");
}

var p3 = prompt("¿Nuevo deporte incluido este año?\nA. Futsal femenino\nB. Balonmano\nC. Marcha atlética")

if(p1 == "C"){
    c = c + 1;
}else if(p1 == "A"){
    i = i + 1;
}else if(p1 == "B"){
    i = i + 1
}else{
    alert("Opción no valida");
}

if(c > i){
    document.write(nombre + ", lo has hecho bien<br>");
    document.write(nombre + ", Correctas: "+ c + "<br>");
    document.write(nombre + ", Incorrectas: "+ i + "<br>");
}
if(c < i){
    document.write(nombre + ", lo has intentado<br>");
    document.write(nombre + ", Correctas: "+ c + "<br>");
    document.write(nombre + ", Incorrectas: "+ i + "<br>");
}