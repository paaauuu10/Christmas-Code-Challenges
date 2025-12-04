In Santa’s workshop there’s an intern elf who is learning to wrap gifts 🎁.
They’ve asked the elf to wrap boxes using only text… and they do it more or less correctly.
They are given two parameters:
size: the size of the square gift
symbol: the character the elf uses to make the border (when they don’t mess it up 😅)
The gift must meet these requirements:
It must be a size x size square.
The inside is always empty (filled with spaces), because the elf “doesn’t know how to draw the filling yet”.
If size < 2, return an empty string: the elf tried, but the gift got lost.
The final result must be a string with newline characters \n.
Yes, it’s an easy challenge… but we don’t want the intern to get fired. Right?

Example:

const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
console.log(g4)
// ""  poor intern…

📁 Estructura de soluciones 📁 
Para este ejercicio he incluido dos archivos diferentes, cada uno representando una etapa distinta del proceso de resolución:
1. firstSolution.js
Este archivo contiene mi primera implementación de la función.
Es la solución inicial tal como la resolví de forma lógica y directa, sin aplicar aún optimizaciones ni mejoras.
Refleja el razonamiento original y el enfoque más básico para cumplir con los requisitos del ejercicio.
2. optimized.js
Después de revisar comentarios del calendario, analizar otras posibles formas de resolver el problema e investigar mejores prácticas, creé esta versión optimizada.
Aquí aplico métodos más modernos y eficientes de JavaScript para conseguir una solución más limpia, más corta y más performante.
Representa mi proceso de mejora y aprendizaje sobre el ejercicio.4