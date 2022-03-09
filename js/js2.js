const numeros = [10,20,30,40,50]

console.log(numeros)
console.table(numeros)
console.log(numeros[2])

const meses2 = new Array ('Enero', 'Febrefo', 'Marzo','Abril','Junio')
console.log(meses2)
console.log(typeof(meses2))
console.log(meses2[2])
console.log(meses2.length)

meses2.splice(2,1)
console.log(meses2)

meses2.splice(3,0,'Mayo')
console.log(meses2)
meses2.splice(2,0,'MARZO')
console.log(meses2)

meses2[2]='Marzo'
meses2.forEach(function(meses2){
    console.log(meses2)
})

meses2.push('Julio')
console.log(meses2)

const mesesAno = [...meses2,'Agosto']
console.log(mesesAno)

const carrito = [
    {nombre:'Monitor', precio:200},
    {nombre:'Tablet', precio:300},
    {nombre:'Portatil', precio:500}
]
console.table(carrito)

const resultado = carrito.includes('Monitor')
console.log(resultado) //returns false althought it exist

const resultado2 = carrito.some(function(producto){
    return producto.nombre === 'Monitor'
})
console.log(resultado2)

const total = carrito.reduce(function(total, producto){
    return total+producto.precio
},0)
console.log(total)