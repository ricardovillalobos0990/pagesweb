document.addEventListener("load", dibujarLinea);
document.addEventListener("mousedown", dibujarMouse);
document.addEventListener("mousemove", dibujarMouse);

var cuadrito = document.getElementById("papelito");
var papel = cuadrito.getContext("2d");
var buttons = 1;

function dibujarLinea(color, x_inicial, y_incial, x_final, y_final, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_incial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath(); 
}

function dibujarMouse(click){
    var colorlinea = "blue";
    var x_inicial = click.layerX;
    var y_inicial = click.layerY;
    var x_final = click.movementX;
    var y_final = click.movementY;

    if(click.buttons == buttons){
        dibujarLinea(colorlinea, x_inicial, y_inicial, x_inicial-x_final, y_inicial-y_final, papel);
    }
}
    
dibujarLinea("red", 1, 1, 1, 699, papel);    
dibujarLinea("red", 1, 699, 699, 699, papel);    
dibujarLinea("red", 1, 1, 699,1, papel);  
dibujarLinea("red", 699, 1, 699, 699, papel);