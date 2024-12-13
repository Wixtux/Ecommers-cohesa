export interface Product {
    //id: string
    name: string
    slug: string
    imagen: string
    section: 'delantero' | 'trasero'
    description: string
    descripcionIn: string
    categoria: string
    formato: string
    specs: {
        Cgrasa: string
        PesoPieza: string
        Cortespieza: string
        promedioPeso: string
        cortesPorCaja: string
        KgCaja: string
        maduracion: string
        temperatura: string
        preparacion: string
        caracteristicas: string
    }
}