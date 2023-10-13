//ejercicio 20


// var Tareas = []
// let repetir = true;
// let opcion;

// function agregarTareas(Tarea) {
//     Tareas.push(Tarea)
//     console.log(Tareas)
// }
// function listarTareas() {
//     for(let i = 0; i < Tareas.length; i++) {
//         console.log((i+1) + ". " + Tareas[i]);
//     }
// }

// function iniciarSesion() {
//     let usuario = prompt("Ingrese su usuario: ");
//     let contrasena = prompt("Ingrese su contraseña: ");
//     if ((usuario == "a" && contrasena == "11") || (usuario == "e" && contrasena == "22") ) {
//         alert("Sesion iniciada")
//         while (repetir) {
//           opcion = Number(
//             prompt(
//               "Seleccione:\n1 Agregar Tarea\n2 Listar Tareas\n3 Salir"
//             )
//           );
//           switch (opcion) {
//             case 1:
//             let Tarea = prompt("Ingrese una tarea");
//               agregarTareas(Tarea)
//               break;
//             case 2:
//               listarTareas();
//               break;
//             case 3:
//               repetir = false;
//               break;
//             default:
//               break;
//           }
//         }
//       } else {
//         console.log("Credenciales incorrectas");
//       }      
// }

// iniciarSesion();


// ejercicio 21

var gastos = []
var gasto = {}
var repetir = true;
var suma = 0;
var opc

function calculadora() {
    gasto = {
        valor: Number(prompt("Ingrese el valor")),
        fecha: (prompt("ingresar la fecha en formato YYYYMMDD")),
        categoria: (prompt("Escriba categoria: comida, ocio, transporte"))
    } 
    gastos.push(gasto)
    suma = suma + gasto.valor
    
    if(suma >= 4500){
            repetir = false
            restante = suma - 4500
            console.log("Su total gastado fue: " + suma)
            console.log("su restante fue: " + restante)
            console.log(gastos)
  }
}


function gestionFinanzas() {
    for (let index = 0; index < 30; index++) {
       while (repetir) {
        opc = Number(prompt("Seleccione: \n1. Para registrar tu gasto del dia de hoy\n2. Salir"))
            if(opc == 1){
                alert("Recuerde que su tope maximo sera de $5000")
               calculadora()
            }
            if (opc == 2) {
                repetir = false
                console.log("Su total gastado fue: " + suma)
                console.log(gastos[index])
            }
        } 
    }
}

gestionFinanzas();
