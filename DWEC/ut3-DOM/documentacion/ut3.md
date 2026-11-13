# Funciones y jQuery

## Funciones
> Es un bloque de código con un nombre que realiza una tarea específica y se puede usar varias veces.

### Partes de una función

| Parte | Descripción |
|-------|-------------|
| Nombre | Identifica a la función. |
| Parámetros | Datos que recibe para trabajar. |
| Cuerpo | Instrucciones que ejecuta. |
| Retorno | Resultado que devuelve mediante `return`. |

### Declaración y llamada

```javascript
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado); // 8
```

### Formas de crear funciones

| Forma | Ejemplo |
|-------|---------|
| Declaración | `function saludar() { ... }` |
| Expresión | `const saludar = function() { ... };` |
| Función flecha | `const sumar = (a, b) => a + b;` |
| Función anónima | `function() { ... }` (se usa, por ejemplo, como argumento) |

### Conceptos importantes

| Concepto | Descripción |
|----------|-------------|
| `return` | Devuelve un valor y termina la ejecución de la función. |
| Parámetro | Variable indicada al definir la función. |
| Argumento | Valor que se pasa al llamar a la función. |
| Valor por defecto | Valor usado cuando no se proporciona un argumento o se pasa `undefined`. |
| Callback | Función que se pasa a otra función para que esta la ejecute. |

```javascript
function saludar(nombre = "usuario") {
    return "Hola, " + nombre;
}
console.log(saludar("Ana")); // Hola, Ana
```

## jQuery
> Es una biblioteca de JavaScript que facilita seleccionar y modificar elementos HTML, gestionar eventos y crear efectos.

**Nota:** el documento original no incluye apuntes de jQuery; esta sección es una ampliación introductoria, no una transcripción del tema.

### Uso básico

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>
    $(function() {
        $("#titulo").text("Hola");
    });
</script>
```

`$()` permite seleccionar elementos o ejecutar una función cuando el DOM está listo.

### Selectores

| Selector | Descripción |
|----------|-------------|
| `$("p")` | Seleccionar todos los párrafos. |
| `$("#id")` | Seleccionar un elemento por su ID. |
| `$(".clase")` | Seleccionar elementos por su clase. |
| `$("input")` | Seleccionar campos de entrada. |
| `$("div p")` | Seleccionar párrafos dentro de `div`. |
| `$(this)` | Seleccionar el elemento actual dentro de un evento. |

### Métodos

| Método | Descripción |
|--------|-------------|
| `text()` | Obtener o cambiar el texto de un elemento. |
| `html()` | Obtener o cambiar su contenido HTML. |
| `val()` | Obtener o cambiar el valor de un formulario. |
| `attr()` | Obtener o modificar un atributo. |
| `prop()` | Obtener o modificar una propiedad, como `checked`. |
| `css()` | Obtener o modificar estilos CSS. |
| `addClass()` | Añadir una clase CSS. |
| `removeClass()` | Eliminar una clase CSS. |
| `toggleClass()` | Añadir o quitar una clase CSS. |
| `hide()` | Ocultar un elemento. |
| `show()` | Mostrar un elemento. |
| `toggle()` | Alternar entre mostrar y ocultar. |
| `append()` | Añadir contenido al final de un elemento. |
| `prepend()` | Añadir contenido al principio de un elemento. |
| `remove()` | Eliminar el elemento del documento. |
| `empty()` | Vaciar el contenido de un elemento. |
| `find()` | Buscar elementos descendientes. |

### Eventos

| Evento / método | Descripción |
|-----------------|-------------|
| `click` | Pulsar un elemento. |
| `dblclick` | Hacer doble clic. |
| `mouseenter` | Entrar con el ratón en un elemento. |
| `mouseleave` | Salir con el ratón de un elemento. |
| `keydown` | Pulsar una tecla. |
| `keyup` | Soltar una tecla. |
| `change` | Cambiar el valor de un campo. |
| `submit` | Enviar un formulario. |
| `on()` | Asociar un evento a un elemento. |
| `off()` | Quitar un manejador de evento. |

### Ejemplo de evento

```javascript
$(function() {
    $("#boton").on("click", function() {
        $("#mensaje").text("Has pulsado el botón");
        $(this).addClass("activo");
    });
});
```

### Efectos

| Método | Descripción |
|--------|-------------|
| `fadeIn()` | Mostrar con un efecto de aparición. |
| `fadeOut()` | Ocultar con un efecto de desaparición. |
| `fadeToggle()` | Alternar aparición y desaparición. |
| `slideDown()` | Desplegar un elemento. |
| `slideUp()` | Plegar un elemento. |
| `slideToggle()` | Alternar desplegado y plegado. |

### Ejemplo con formulario

```javascript
$(function() {
    $("#formulario").on("submit", function(evento) {
        evento.preventDefault(); // Evita el envío normal
        let nombre = $("#nombre").val();
        $("#resultado").text("Hola, " + nombre);
    });
});
```
