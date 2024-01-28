//1.-  Crear una función que tome como parámetro un arreglo, retornar el último 
    //elemento del arreglo.
    //Ejm: Entrada: [4, 8, 5, 3] 
    //Salida: 3 
        //SOLUCION:
            // function ultimoElemento(arreglo) {
            //     return arreglo[arreglo.length - 1];
            // }

            // let miArreglo = [4, 8, 5, 3];
            // let obtenerultimoElemento =  ultimoElemento(miArreglo);

            // console.log(obtenerultimoElemento);

//2.- Crear una función que tome como parámetro un arreglo y un número, retornar
    // un nuevo arreglo con todos los elementos y el número agregado al final del
    // arreglo. (usar el operador spread)
    // Ejm: Entrada: 
    // Arreglo: [2, 7, 5, 11] 
    // Número: 9
    // Salida:  
    // NuevoArreglo: [2, 7, 5, 11, 9]  
         //SOLUCION:
            //  function agregarNumero(arreglo, numero) {
            //     return [...arreglo, numero];
            //   }
            //   let miArreglo = [2, 7, 5, 11];
            //   let nuevoArreglo = agregarNumero(miArreglo, 9);
            //   console.log(nuevoArreglo);

//3.-   Crear una función que tome como parámetro un arreglo de números, retornar el
    //   promedio de todos los elementos del arreglo.
    //   Entrada: [2, 6, 1, 8] 
    //   Salida:
    //   Promedio: 4.25
         //SOLUCION:
            // function calcularPromedio(arreglo) {
            //     let suma = arreglo.reduce(function (total, numero){
            //         return total + numero;
            //     }, 0);
            //     let promedio = suma / arreglo.length;
            //     return promedio;
            // }
               
            //    let miArreglo = [2, 6, 1, 8];
            //    let promedio = calcularPromedio(miArreglo);

            //    console.log(promedio);

//4.-   Crear una función que tome como parámetro un arreglo de números, retornar un
    //   dato de tipo número con la suma de todos los números pares.
    //   Entrada: [1, 2, 5, 8, 9, 12, 2, 3] 
    //   Salida: 2+8+12+2 = 24
         //SOLUCION:
        //  function sumaNumerosPares(arreglo) {
        //     let suma = arreglo.reduce(function(total, numero) {
        //       if (numero % 2 === 0) {
        //         return total + numero;
        //       } else {
        //         return total;
        //       }
        //     }, 0);
        //     return suma;
        //   }
          
        //   let miArreglo = [1, 2, 5, 8, 9, 12, 2, 3];
        //   let sumaPares = sumaNumerosPares(miArreglo);
        //   console.log(sumaPares);

//5.-   Crear una función con el nombre de booleanoArray() que tome dos arreglos de
    //   números como parámetro y que retorne un booleano, unir los dos arreglos en uno
    //   solo, si la longitud del nuevo arreglo es mayor o igual a 10 que retorne true si es
    //   menor a 10 que retorne false.
    //   Entrada: 
    //   Arreglo1: [2, 5, 2, 3, 7, 2] 
    //   Arreglo2: [1, 5, 3, 3] 
        //SOLUCION:
            // function booleanoArray(arreglo1, arreglo2) {
            //     let nuevoArreglo = arreglo1.concat(arreglo2);
            //     if (nuevoArreglo.length >= 10) {
            //       return true;
            //     } else {
            //       return false;
            //     }
            //   }
            //   let arreglo1 = [2, 5, 2, 3, 7, 2];
            //   let arreglo2 = [1, 5, 3, 3];
            //   let resultado = booleanoArray(arreglo1, arreglo2);
            
            //   console.log(arreglo1.concat(arreglo2));
            //   console.log(resultado); 

//6.-   Crear una función con el nombre de funcionArray() que tome dos arreglos de
    //   números enteros como parámetro y retornar un único arreglo, cada elemento
    //   del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].
    //   Ejm: 
    //   Entrada: 
    //   Arreglo1: [2, 5, 2] 
    //   Arreglo2: [1, 5, 3] 
    //   Salida:  
    //   ArregloNuevo: [4, 10, 4, 2, 10, 6] 
        //SOLUCION:
            // function funcionArray(arreglo1, arreglo2) {
            //     return [...arreglo1, ...arreglo2].map(elemento => elemento*2);
            // }
            // let arreglo1 = [2, 5, 2];
            // let arreglo2 = [1, 5, 3];

            // let resultado = funcionArray(arreglo1, arreglo2);
            // console.log(resultado);

//7.- Escribir un programa que almacene la cadena de caracteres “password” en una
    // variable, pregunte al usuario por la contraseña e imprima por pantalla si la
    // contraseña introducida por el usuario coincide con la guardada en la variable sin
    // tener en cuenta mayúsculas y minúsculas. 
    // Ejm: 
    // Entrada: 
    // Introduce la contraseña: ” password” 
    // Salida: 
    // La contraseña es correcta 

            // let contraseñaGuardada = "password";
            // let contraseñaUsuario = prompt("Introduce la contraseña:");
            // if (contraseñaUsuario.toLowerCase() === contraseñaGuardada.toLowerCase()) {
            // console.log("La contraseña es correcta.");
            // } else {
            // console.log("La contraseña es incorrecta.");
            // }

//8.- Escribir un programa para una empresa que tiene salas de juegos para todas las
    // edades y quiere calcular de forma automática el precio que debe cobrar a sus
    // clientes por entrar. El programa debe preguntar al usuario la edad del cliente y
    // mostrar el precio de la entrada. Si el cliente es menor de 4 años puede entrar
    // gratis, si tiene entre 4 y 18 años debe pagar 5€ y si es mayor de 18 años, 10€. 
    // Ejm: 
    // Entrada: 
    // Introduce tu edad: 16 
    // Salida: El costo de la entrada es 5€

            // let edadUsuario = prompt("Introduce tu edad:");
            // if (edadUsuario < 4) {
            // console.log("Puede entrar GRATIS.");
            // } else if (edadUsuario >=4 && edadUsuario <= 18) {
            // console.log("El costo de la entrada es: 5€");
            // } else if (edadUsuario > 18){
            //     console.log("El costo de la entrada es: 10€");
            // }


//9.- Para tributar un determinado impuesto se debe ser mayor de 18 años y tener un
    // ingreso igual o superior a 1000 € mensuales. Escribir un programa que pregunte
    // al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario
    // tiene que tributar o no. 
    // Ejm: 
    // Entrada: 
    // Introduce tu edad: 21 
    // ¿Cuáles son tus ingresos mensuales?: 1350 € 
    // Salida: Sí tienes que tributar 

        // let edadUsuario = prompt("Introduce tu edad:");
        // let ingresoMensual = prompt("¿Cuáles son tus ingresos mensuales?:");
        // if (edadUsuario > 18 && ingresoMensual >= 1000) {
        // console.log("Sí tienes que tributar.");
        // } else {
        //     console.log("No tienes que tributar");
        // }

//10.-  Crea un programa que pida al usuario el diámetro de una rueda y su grosor (en
    //     metros).  
        
    //     a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un
    //     vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el
    //     mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de
    //     las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es
    //     para un vehículo pequeño”. 
        
    //     b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, o si el diámetro es
    //     menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá
    //     mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado” 
    //     Ejm: 
    //     Entrada: 
    //     Ingrese el diámetro de una rueda = 1.1 
    //     Ingrese el grosor de la rueda = 0.24 
    //     Salida: 
    //     La rueda es para un vehículo mediano. 
    //     Su grosor es inferior al recomendado. 

        //  let diametroRueda = prompt("Ingrese el diámetro de una rueda:(en metros)");
        //  let grosorRueda = prompt("Ingrese el grosor de la rueda:(en metros)");
        //  if (diametroRueda > 1.4) {
        //  console.log("La rueda es para un vehículo grande.");
        //  } else if (diametroRueda <=1.4 && diametroRueda > 0.8){
        //      console.log("La rueda es para un vehículo mediano");
        //  } else {
        //     console.log("La rueda es para un vehículo pequeño")
        //  }
 
        //     if ((diametroRueda > 1.4 && grosorRueda < 0.4) || (diametroRueda <= 1.4 && diametroRueda > 0.8 && grosorRueda < 0.25)) {
        //         console.log("El grosor para esta rueda es inferior al recomendado.");
        //       }

//11.- Se tienen los datos de cinco personas, crear funciones para:
    // • Hallar quienes tienen el salario mayor a 1200.
    // • Hallar quien es el primero que tiene como hobby cantar.
    // • Devolver un booleano sí al menos uno de ellos le gusta leer.
    //  let personas = [
    //      { nombre: 'boris', hobby: 'correr', salario: 2000 },
    //      { nombre: 'luis', hobby: 'cantar', salario: 1500 },
    //      { nombre: 'carmen', hobby: 'cocinar', salario: 800 },
    //      { nombre: 'percy', hobby: 'cantar', salario: 1100 },
    //      { nombre: 'rosa', hobby: 'leer', salario: 3000 },
    //    ]; 

    //    function salarioMayor (personas){
    //         return personas
    //         .filter(persona => persona.salario >1200)
    //         .map(persona => persona.nombre); //para devolver solo el nombre al usar filter
    //    }
    //    let personasSalarioMayor = salarioMayor(personas);
    //    console.log("Personas con salario mayor a 1200:", personasSalarioMayor);


    //    function primerCantante(personas) {
    //     return personas
    //     .find(persona => persona.hobby === 'cantar')
    //     ?.nombre; //para devolver solo el nombre al usar find
    //   }
    //   let primerCantanteEncontrado = primerCantante(personas);
    //   console.log("Primer persona que le gusta cantar:", primerCantanteEncontrado);


    //   function gustaLeerAlguno(personas) {
    //     return personas.some(persona => persona.hobby === 'leer');
    //   }
    //   let algunoGustaLeer = gustaLeerAlguno(personas);
    //   console.log("¿Al menos uno gusta leer?", algunoGustaLeer);


//12.-  Un servicio de atención al cliente tiene establecido turnos semanales para sus
    // empleados de manera que cada día de la semana se encarga del servicio una
    // persona: 
    // lunes - María, Martes - Luis, Miércoles - Antonia, Jueves - Pedro, Viernes - Marisa.
    // Usa un array para almacenar los datos del servicio.
    // Crea una función que retorne el nombre de la persona encargada del servicio
    // sabiendo el día. Si el día no existe deberá decir que no hay servicio. El día debe ser
    // consultado por prompt.
    // Si le pido servicio('Lunes') me debería decir "Este día se encarga María" 

    // function obtenerEncargadoServicio(dia) {
    //     let diaLowerCase = dia.toLowerCase(); //convertir dia a minusculas
      
    //     let servicioSemana = [
    //       { dia: 'lunes', encargado: 'María' },
    //       { dia: 'martes', encargado: 'Luis' },
    //       { dia: 'miércoles', encargado: 'Antonia' },
    //       { dia: 'jueves', encargado: 'Pedro' },
    //       { dia: 'viernes', encargado: 'Marisa' },
    //     ];
      
    //     // Buscar el encargado en el día indicado
    //     let encargadoEncontrado = servicioSemana.find(servicio => servicio.dia === diaLowerCase);
      
    //     if (encargadoEncontrado) {
    //        return `Este día se encarga ${encargadoEncontrado.encargado}`;

    //     } else {
    //       return "No hay servicio este día.";
    //     }
    //   }
      
    //   let diaUsuario = prompt("Ingresa el día de la semana:");
      
    //   let resultado = obtenerEncargadoServicio(diaUsuario);
    //   console.log(resultado);
      



//13.-  Una tienda vende monitores, teclados y ratones. Los precios se almacenan en una
    // estructura array donde cada elemento es un par producto - precio.
    // Diseña una función que reciba como argumento el nombre de un producto que
    // previamente ha sido consultado por prompt y devuelva su precio.
    // Si la lista de precios es monitor: 200€, teclado: 20€ ratón: 10€, al pedir precio('monitor') me
    // devolverá 200.
    
    // function obtenerPrecio(producto) {
    //     let listaPrecios = [
    //       { producto: 'monitor', precio: 200 },
    //       { producto: 'teclado', precio: 20 },
    //       { producto: 'ratón', precio: 10 },
    //     ];
    //     let productoLowerCase = producto.toLowerCase();
      
    //     let precioEncontrado = listaPrecios.find(item => item.producto === productoLowerCase);
      
    //     if (precioEncontrado) {
    //       return precioEncontrado.precio;
    //     } else {
    //       return "No encontrado en la lista de precios.";
    //     }
    //   }
      
    //   let productoUsuario = prompt("Ingresa el nombre del producto:");
      
    //   let resultado = obtenerPrecio(productoUsuario);
    //   console.log("el precio del " + productoUsuario + " es: " + resultado + "€");
      