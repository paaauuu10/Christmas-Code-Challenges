#01

Santa has received a list of gifts, but some are defective. A gift is defective if its name contains the # character.
Help Santa by writing a function that takes a list of gift names and returns a new list that only contains the non-defective gifts.

Examples: 

const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']

const gifts2 = ['#broken', '#rusty']
const good2 = filterGifts(gifts2)
console.log(good2)
// []

const gifts3 = []
const good3 = filterGifts(gifts3)
console.log(good3)
// []


📁 Estructura de soluciones 📁 
Para este ejercicio he incluido dos archivos diferentes, cada uno representando una etapa distinta del proceso de resolución:
1. firstSolution.js
Este archivo contiene mi primera implementación de la función.
Es la solución inicial tal como la resolví de forma lógica y directa, sin aplicar aún optimizaciones ni mejoras.
Refleja el razonamiento original y el enfoque más básico para cumplir con los requisitos del ejercicio.
2. optimized.js
Después de revisar comentarios del calendario, analizar otras posibles formas de resolver el problema e investigar mejores prácticas, creé esta versión optimizada.
Aquí aplico métodos más modernos y eficientes de JavaScript para conseguir una solución más limpia, más corta y más performante.
Representa mi proceso de mejora y aprendizaje sobre el ejercicio.