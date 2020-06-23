/*
SCRIPT PARA EL PROYECTO DEL CAJERO
RICARDO ANDRES VILLALOBOS MARULANDA
DICIEMBRE 18 DE 2019
*/

// Clase BILLETE
class Billete {
    constructor(valorBillete, cantidad) {
        this.valor = valorBillete;
        this.cantidad = cantidad;
    }
}
// A TRAVES DE UN CILIC SE EJECUTA EL METODO ENTREGAR DINERO
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
//FUNCION ENTREGAR DINERO
function entregarDinero() {
    // EN EL HTML HAY UNA ENTRADA CON EL ID DINERO EL CUAL TOMA EL DATO INTRODUCIDO POR EL USUARIO
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    // SE LIMPIA EL RESULTADO ANTERIOR PARA QUE SOLO SE MUESTR EL ACTUAL
    resultado.innerHTML = '';
    //SE ITERA LA CANTIDAD DE DENOMINACION DE BILLETES
    for (var bi of caja) {
        //CONDICION PARA VALIDAR EL DATO INTRODUCIDO POR EL USUARIO
        if (dinero >= 0) {
            //LA CANTIDAD DIGITADA DE DINERO SE DIVIDE POR LA PRIMERA DENOMINACION Y SE REDONDE HACIA ABAJO CON LA FUNCION
            div = Math.floor(dinero / bi.valor);
            //SI LA CANTIDAD ES MAYOR QUE EL NUMERO DE BILLETES SE GUARDAD LA CANTIDAD DE ESTOS BILLETES
            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                //SI NO SE IGUALA ESA CANTIDAD
                papeles = div;
            }
            //SE INGRESA A LA VARIABLE EL VALOR DE LA DENOMINACION ACTUAL Y LA CANTIDAD DE BILLETES
            entregado.push(new Billete(bi.valor, papeles));
            //SI ES MAYOR LA CANTIDAD INTRODUCIDA SE RESTA LOS BILLETES SACADOS A EL DINERO INRODUCIDO 
            dinero = dinero - (bi.valor * papeles);
        } else if (dinero < 0) {
            //SI EL USUARIO INGRESA VALORES NEGATIVOS SE SALE DEL CICLO Y UESTRA ALERTA
            alert("Ingrese valores positivos")
            break
        }
    }
    
    if (dinero > 0) {
        //SI EL DINERO ES MAYOR A 0 QUIERE DECIR QUE NO HAY DINERO DESPUES DE REALIZAR LAS ITERACCIONES
        resultado.innerHTML = ("No tengo dinero");
    } else {
        for (var e of entregado) {
            /*
            SE ITERA LA CANTIDAD DE VECES DE DINERO ENTREGADO Y SOLO SE MUESTRA SI SE TIENE CANTIDAD
            DE BILLETES QUE SEA MAYOR A 0
            */
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