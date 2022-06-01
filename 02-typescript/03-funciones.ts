function sumarNumeros(
    init: number,
    ...nums: number[]
): number{
    return init
}
function imprimir(mensaje:string){
    console.log('Hola' + mensaje)
}

const arregloNumeros: number[] = [1,2]
const arregloNumeroDos: Array<number> = [1,2]
const arreglosNumerosTres: (number | string | boolean)[] = [1,'dos',true]
const arregloNumerosCuatro: Array<number | string | boolean> = [1,'dos',false]
let arregloNumerosCinco: number[] | string[] = [1,2]
arregloNumerosCinco = ['1','2']