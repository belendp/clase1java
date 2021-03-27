let nombre = prompt('Ingrese su nombre y apellido')
let edad = prompt('Ingrese su edad')
let ciudad = promt('Ingrese su ciudad')
let date = new Date()
let year = date.getFullYear()

// console.log(year)
// console.log( typeof edad )

edad = parseInt(edad)
let dateUser = year - edad

// console.log( typeof edad)


alert('Hola ' + nombre + '. Usted nacio en ' + dateUser)



