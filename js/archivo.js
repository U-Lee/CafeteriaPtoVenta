

window.alert("¡Bienvenidas mujeres emprendedoras!");
window.confirm("​¿Deseas saber acerca de autonomía económica de las mujeres?");
var nombre = window.prompt("¿Cuál es tu nombre?","Mujer");
window.alert("Hola "+nombre+" te invitamos a ser emprendedora y a desarrollar tu autonomía económica.");

//console.table({ Nombre : "Norfi", Apellido : "Carrodeguas" });

function error(){    
    console.error("La fecha y la hora están sincronizadas con la de tu equipo de computo, por lo que no lo podrás modificar desde la página web");
}



(function(){
    var actualizarHora=function(){
        var fecha=new Date(),
            horas=fecha.getHours(),
            ampm,
            minutos=fecha.getMinutes(),
            segundos=fecha.getSeconds(),
            diaSemana=fecha.getDay(),
            dia=fecha.getDate(),
            mes=fecha.getMonth(),
            year=fecha.getFullYear();

        var pHoras=document.getElementById('horas'),
            pAMPM=document.getElementById('ampm'),
            pMinutos=document.getElementById('minutos'),
            pSegundos=document.getElementById('segundos'),
            pDiaSemana=document.getElementById('diaSemana'),
            pDia=document.getElementById('dia'),
            pMes=document.getElementById('mes'),
            pYear=document.getElementById('year');
        
        //var semana=['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        //pDiaSemana.textContent=semana[diaSemana];
        
        pDia.textContent=dia;

        //var meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        //pMes.textContent=meses[mes];
        pMes.textContent=mes;
        pYear.textContent=year;
        
        if(horas>=12){
            horas=horas-12;
            ampm='PM';
        }else{
            ampm='AM';
        }

        if(horas==0){
            horas=12;
        }
        pHoras.textContent=horas;
        //pAMPM.textContent=ampm;

        if(minutos<10){
            minutos="0"+minutos;
        }
        if(segundos<10){
            segundos="0"+segundos;
        }

        pMinutos.textContent=minutos;
        pSegundos.textContent=segundos;
    };
    actualizarHora();
    var intervalo=setInterval(actualizarHora,1000);
}())


var productos =  ["Cafe americano", "Cafe express", "Té", "Sandwich", "Cuernitos"];
productos.length;
//productos.push();

function MostrarArreglo(){
    for (var i = 0; i < productos.length; i++) {            
        console.log(productos[i]);         
        }
        
}

function Capturar(){
   /* let lstNumero = document.getElementsByClassName("form"),
        arrayGuardar = [];         
    for (var i = 0; i < lstNumero.length; i++) {    
        productos[i] = lstNumero[i].value;
        console.log (lstNumero[i].value);     
        }       */
    var obtenNombre = document.getElementById("nombre");
    productos.push(obtenNombre.value);
    }

/*
var catalogo={};

var catalogo= {
    id:[1,2,3],
    nombre:['Cafe americano','Cafe express','Limonada'],
    precio:[15,12,18],
    cantidad:[5,7,9]
};
*/

var catalogo = [
    { nombre: 'Café Americano', precio: 14.00, cantidad: 19},
    { nombre: 'Café Express', precio: 12.00, cantidad: 11},
    { nombre: 'Té', precio: 12.00, cantidad: 4},
    { nombre: 'Sandwich', precio: 20.50, cantidad: 4},
    { nombre: 'Cuernito', precio: 25.00, cantidad: 8 },
    { nombre: 'Crepas', precio: 32.50, cantidad: 6}
];

class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
    }
    
    //Definicion de metodos
    impresion(){
        return null;
    }
}

function MostrarCatalogo(){
    
let tablaCatalogo = document.getElementById('tablaCatalogo');

//Para recorrer el catálogo
for (let i = 0; i < catalogo.length; i++) {

    //Las columnas que mostraran el catalogo en pantalla
    let nombre = `<td>${catalogo[i].nombre}        </td>    `;
    let precio = `<td>$${catalogo[i].precio}       </td>`;
    let cantidad = `<td>${catalogo[i].cantidad}    </td>`;

    tablaCatalogo.innerHTML += `<tr>${nombre   +precio + cantidad }</tr>`;
}
}

//Validar los campos y guardar el producto
function GuardarEnCatalogo(){
    var nombre = document.getElementById("nombre").value;
    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;

    //Validando que ningún campo este vacío
    if(nombre=="" || precio=="" ||cantidad==""){
        window.alert("Algún campo esta vacio")
        return false
    }else{
        var producto = new Producto(nombre,precio,cantidad);
        catalogo.push(producto);
        window.alert("Se ha agregado el producto "+nombre+ " al catálogo");
    }

    
     }


   




