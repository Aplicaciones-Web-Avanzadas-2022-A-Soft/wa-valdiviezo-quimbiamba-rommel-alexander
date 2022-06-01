interface Usuario{
    // variables
    nombre: string;
    apellido: string;
    edad?: number | undefined;
    sueldo?: number;
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN'
    // funciones
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
}

let user: Usuario = {
    nombre: 'Rommel',
    apellido: 'Valdiviezo',
    casado: 0,
    sueldo: 11.5,
    estado: 'AC',
    imprimirUsuario: (msg: string) => 'El mensaje es: ' + msg,
    calcularImpuesto: impuesto => this.sueldo + this.sueldo + impuesto,
    estadoActual: () => {
        switch (this.estado){
            case 'AC':
                return 'AP'
            case 'IN':
                return 'AF'
            case 'BN':
                return 'AT'
        }
    }


}