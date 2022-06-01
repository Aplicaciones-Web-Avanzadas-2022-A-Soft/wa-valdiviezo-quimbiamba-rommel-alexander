// Variables
let nombre: String = 'Rommel'
let nombre2: string = 'Rommel'
let nombre3 = 'Rommel'
let edad: number = 24
let cansado: boolean = true
let fecha = new Date()
let sueldo: number
sueldo = 20.05

//Duck Typing (Dynamic type assignation)
let apellido = 'Valdiviezo'
apellido.toLowerCase() // valdiviezo

let marihuana: any = 2;
marihuana = '2'
marihuana = true
marihuana = () => '2'

let edadMultiple: number | string | Date = '2'
edadMultiple = 'veinte'
edadMultiple = 20
let nUnico: number = 255

// Casting
nUnico = edadMultiple as number