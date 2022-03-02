const n1 = 100
const n2 = 200
const a = "300"

console.log(n1)
console.log(n2)
console.log(a)

console.log(`la suma de n1 ${n1} y n2 ${n2} es ${n1+n2}`)
console.log(`la division de n1 ${n1} y n2 ${n2} es ${n1/n2}`)
console.log(`el resto de de n1 ${n1} entre n2 ${n2} es ${n1%n2}`)

console.log(Math.PI)

//let r = Math.round(2.5)

//let r = Math.floor(2.5)
//console.log(r)

let n_fotos = 77
let mostrar = 25
let r = Math.floor(n_fotos / mostrar)
console.log(r)
const raiz = 81
console.log(Math.sqrt(raiz))
console.log(Math.max(3,4,6,5))

console.log(Math.floor(Math.random()*10))

console.log((20+30)*2)

const x = 200
const y = 300
console.log((x+y)*2)

let puntos = 0
puntos++ //sumar 1
puntos+=10 //suma 10
console.log(puntos)

const bool = true //solo para true o false
console.log(bool)

//objects

const producto20 = {
    nombre:'Monitor',
    precio:300,
    disponible:true
}

console.log(producto20)
console.log(producto20.precio)
console.log(producto20["nombre"])

producto20.marca = 'HP'

console.log(producto20)

// delete producto20.precio

// console.log(producto20)

producto20.precio= 20

const valorPrecio = producto20.precio

console.log(valorPrecio)

const {precio} = producto20
console.log(precio)

Object.freeze(producto20) //disables object edditing

producto20.precio = 50

console.log(producto20)

const alumno = {
    nombre:'Adrian',
    apellido:'Duque',
    curso:'3C'
}

console.log(alumno)
console.log(alumno.apellido)

Object.freeze(alumno)

alumno.nombre = 'juan'
console.log(alumno)

const medidas = {
    peso: '1kg',
    altura:'1m'
}

console.log(medidas)

const lasMedidas = {...alumno, ...medidas}
console.log(lasMedidas)

const coche = {
    marca:'ferrari',
    modelo:'458 italia',
    motor:'500 caballos',
    color:'rojo'
}

console.log(coche)

const num = [10,20,30,40,50]

console.log(num)

console.table(num)

const meses = new Array ('enero', 'febrero', 'marzo')

console.log(meses)
console.log(meses[1])

const nombres = ['antonio', 'juan', 'maria']

console.table(nombres)

const array = ['string', 100, true, null, [1,2,3], moto={marca:'vespa', motor:'125CC'}]

console.log(array)