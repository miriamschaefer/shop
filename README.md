# Shop App 🛒

## Objetivo

El principal objetivo de este ejercicio consiste en renderizar una categoría de una tienda online siguiendo un diseño pautado, e implementar la lógica del carrito en React sin ningún framework de CSS.

[<img alt="alt_text" width="40px" src="https://imgur.com/a/TAJxvh4" />](https://imgur.com/a/TAJxvh4)

## Primer paso

El primer paso que realicé fue la llamada a la API y la creación de un Hook que setease en el estado mis productos.

## Estructura de componentes

Una vez conseguida la llamada, desarrollé una estructura sencilla de componentes. En la carpeta `common` incluí todos los componentes genéricos y reutilizables, como puede ser `Modal`, `Button` o `Title` entre otros.

En la carpeta Layout incluí todos los componentes que dan estructura al diseño, en este caso `Header` y `Nav`, aunque me planteo si la modal estaría mejor ubicada en esta carpeta.

Y por último dejé a primer nivel los componentes con la mayor parte de la lógica: `App`, `Cart`, `ProductList` y `ProductCart`.

Normalmente todos los proyectos que he hecho en React separaban los estilos a una carpeta `stylesheets`, donde los parciales se nombraban de igual manera que el elemento o según el tipo de elemento al que afectasen. Ahora mismo, y tras estar trabajando con Angular este último año, creo que cambiaría la estructura a componente + `.scss` en el mismo nivel.

## Lógica del carrito

Decidí dejar en el componente principal `App.js` la lógica que añade y resta elementos al carrito y pasar los arrays y productos concretos por props a otros componentes.

## Diseño responsive

Aposté por utilizar `grid` para todo el display de la página de productos, donde sería más obvio el cambio a responsive. Aunque se especificaba en el diseño el display a cinco columnas, opté por utilizar la función `repeat` con `auto-fill`, que crea una plantilla donde el espacio se va ajustando automáticamente al espacio disponible.

## A mejorar

Aquí un par de puntos en los que me hubiese gustado tener más tiempo para dejar todo fino, fino, finísimo.

- Refactorizar la función `updateCart`, ya que la veo bastante repetitiva.
- Implementar Typescript, lo uso a diario y lo he echado de menos, pero no lo he utilizado todavía en ningún proyecto con React y me hubiese restado tiempo. Aún así, creé una carpeta common con modelos para utilizar cierto "tipado" y no hardcodear variables en el código.
- Pulir la maquetación de la modal en el carrito. Al reutilizar el componente `productCard` en varios lugares y tener diferentes maquetaciones creo que debería haber afinado más sus estilos en el caso del carrito, así como su vista responsive (que no tiene mucho cariño, no nos vamos a engañar).

## ¡Y eso es todo! 🙃

¡Muchas gracias por vuestro tiempo!

Por si os interesa, realicé este proyecto escuchando en bucle el disco CINEMA de The Marias 🎶
