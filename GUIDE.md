# COSAS BASICAS DE JAVASCRIPT
Javascript es un lenguaje de programación que se utiliza principalmente para crear páginas web dinámicas.

## Variables
Las variables se utilizan para almacenar valores. En este ejemplo, x, y, y z, son variables, declaradas con la palabra clave "var", "let" o "const".

Las variables pueden tener numbers, strings, arrays, objects, etc.

### Tipos de datos
En JavaScript, los datos se pueden almacenar como valores de texto, numéricos, listas(arrays) u objetos.

```
    var x = 5; // number
    let str = "Hola"; // string
    const arr = [1,2,3,4,5]; // array
    const obj = { 
        nombre: "Juan",
        apellido: "Perez",
        edad: 20
    }; // object

```

### Operadores

Tenemos diferentes tipos de operadores en javascript, los cuales son:

- Operadores aritméticos: +(suma), -(resta), *(multiplicación), /(división), %(módulo), ++(incremento), --(decremento)
- Operadores de asignación: =(igual), +=(suma y asigna), -=(resta y asigna), *=(multiplicación y asigna), /=(división y asigna), %=(módulo y asigna)
- Operadores de comparación: ==(igual), ===(estrictamente igual), !=(no igual), !==(estrictamente no igual), >(mayor que), <(menor que), >=(mayor o igual que), <=(menor o igual que)
- Operadores lógicos: &&(y), ||(o), !(no)

### Condicionales

Los condicionales son estructuras de control que nos permiten tomar decisiones en el código. Estas decisiones se toman a partir de una condición, la cual evalúa si algo es verdadero o falso.

```
    if (condicion) {
        // código a ejecutar si la condición es verdadera
    } else {
        // código a ejecutar si la condición es falsa
    }

```

### Ciclos

Los ciclos son estructuras de control que nos permiten repetir un bloque de código un número determinado de veces.

```
    for (let i = 0; i < 10; i++) {
        // código a ejecutar
    }

    while (condicion) {
        // código a ejecutar
    }

    do {
        // código a ejecutar
    } while (condicion)

```

### Funciones

Las funciones son bloques de código que se pueden ejecutar en cualquier momento y desde cualquier lugar del código. Estas funciones pueden recibir parámetros y devolver un valor.

```
    function nombreFuncion(parametro1, parametro2) {
        // código a ejecutar
        return valor;
    }

```

### Objetos

Los objetos son estructuras de datos que nos permiten almacenar diferentes tipos de datos. Estos datos se almacenan en pares de clave:valor.

```
    const obj = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 20
    };

    console.log(obj.nombre); // Juan
    console.log(obj.apellido); // Perez
    console.log(obj.edad); // 20

```

### Arrays

Los arrays son estructuras de datos que nos permiten almacenar diferentes tipos de datos. Estos datos se almacenan en una lista.

```
    let frutas = ["manzana", "pera", "naranja", "banana"];
```

### Métodos de arrays

Los arrays tienen diferentes métodos que nos permiten modificarlos.

```
    let frutas = ["manzana", "pera", "naranja", "banana"];

    frutas.push("sandía"); // agrega un elemento al final del array
    frutas.pop(); // elimina el último elemento del array
    frutas.unshift("sandía"); // agrega un elemento al principio del array
    frutas.shift(); // elimina el primer elemento del array
    frutas.indexOf("pera"); // devuelve el índice de un elemento
    frutas.splice(1, 2); // elimina elementos de un array
    frutas.slice(1, 2); // devuelve elementos de un array
    frutas.reverse(); // invierte el orden de los elementos de un array
    frutas.sort(); // ordena los elementos de un array

```

### Métodos de strings

Los strings tienen diferentes métodos que nos permiten modificarlos.

```
    let str = "Hola mundo";

    str.length; // devuelve la cantidad de caracteres de un string
    str.indexOf("mundo"); // devuelve el índice de un string
    str.slice(1, 2); // devuelve caracteres de un string
    str.replace("mundo", "amigos"); // reemplaza un string por otro
    str.toUpperCase(); // convierte un string a mayúsculas
    str.toLowerCase(); // convierte un string a minúsculas

```

### Métodos de objetos

Los objetos tienen diferentes métodos que nos permiten modificarlos.

```
    const obj = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 20
    };

    obj.nombre = "Pedro"; // modifica un valor de un objeto
    obj.apellido = "Gomez"; // modifica un valor de un objeto
    obj.edad = 30; // modifica un valor de un objeto
    obj["nombre"] = "Pedro"; // modifica un valor de un objeto
    obj["apellido"] = "Gomez"; // modifica un valor de un objeto
    obj["edad"] = 30; // modifica un valor de un objeto
```

# Bibliografía
- Github copilot
- Mozilla Developer Network