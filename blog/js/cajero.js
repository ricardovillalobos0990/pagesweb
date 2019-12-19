class Billete {
    constructor(valorBillete, cantidad) {
        this.valor = valorBillete;
        this.cantidad = cantidad;
    }
}

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero() {
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    resultado.innerHTML = '';

    for (var bi of caja) {

        if (dinero >= 0) {
            div = Math.floor(dinero / bi.valor);

            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }

            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        } else if (dinero < 0) {
            alert("Ingrese valores positivos")
            break
        }
    }

    if (dinero > 0) {
        resultado.innerHTML = ("No tengo dinero");
    } else {
        for (var e of entregado) {
            if (e.cantidad > 0) {
                resultado.innerHTML += e.cantidad + " Billetes con valor $ " + e.valor + "</br>";
            }
        }
        entregado = []; 
    }
}

var entregado = [];
var caja = [];

caja.push(new Billete(100, 10));
caja.push(new Billete(50, 20));
caja.push(new Billete(20, 50));
caja.push(new Billete(10, 100));
caja.push(new Billete(5, 5));

var dinero = 0;
var div = 0;
var papeles = 0;