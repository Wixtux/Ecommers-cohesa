interface CutDetail {
    //TODO
    name: string
    slug: string
    imagen: string
    tipo: string
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


interface SeedData {
    products: CutDetail[]
}
export const initialData: SeedData = {
    products: [
        // Cortes del Cuarto Delantero
        {
            slug: 'plateada',
            name: 'Plateada',
            imagen: 'plateada.png',
            tipo: "Vacuno",
            section: 'delantero',
            description: 'Corte tradicional para preparaciones al horno',
            descripcionIn: ' Corte plano alargado, rojo claro. Conformado por los músculos dorsal ancho y porción toraxico del trapecio.',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 0,800 kg a 1,000 kg ',
                Cortespieza: '1',
                promedioPeso: 'De 0,800 kg a 1,000 kg',
                cortesPorCaja: '20 a 30',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '85-90°C',
                preparacion: 'Horno o cocción lenta',
                caracteristicas: 'Jugosa y tierna cuando se cocina lentamente'
            }
        },
        {
            slug: 'sobrecostilla',
            name: 'Sobrecostilla',
            imagen: 'sobrecostilla.png',
            tipo: "Vacuno",
            section: 'delantero',
            description: 'Corte sabroso ideal para asados',
            descripcionIn: ' Se prepara a partir del Chuck, por la eliminación de la parte del cuello por un corte recto en ángulo recto en las uniones de la séptima vértebra cervical y torácica primero. Conformado por los músculos, ventral cervical, tromboides parte cervical y porción dorsal del toráxico ventral. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 2,900 kg a 4,000 kg ',
                Cortespieza: '3',
                promedioPeso: 'De 0,800 kg a 1,400 kg',
                cortesPorCaja: '12 a 15',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '70-75°C',
                preparacion: 'Parrilla o brasa',
                caracteristicas: 'Buen marmoleo, sabor intenso'
            }
        },
        {
            slug: 'tapapecho',
            name: 'Tapapecho',
            imagen: 'tapapecho.png',
            tipo: "Vacuno",
            section: 'delantero',
            description: 'Ideal para preparaciones lentas',
            descripcionIn: 'Se prepara a partir de una falda siguiendo el borde caudal de la costilla especificado. El tejido graso situado entre los músculos pectorales se elimina en un 97%. Está conformado por los músculos: M. pectoral profundos (pectoral ascendente), M. pectoral superficial (pectoral descendente y transversal), M. serrato ventral del tórax, M. recto abdominal. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 3,100 kg a 4,200 kg ',
                Cortespieza: '3 a 4',
                promedioPeso: 'De 0,800 kg a 1,400 kg',
                cortesPorCaja: '12 a 18',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '85-90°C',
                preparacion: 'Cocción lenta, ahumado',
                caracteristicas: 'Muy jugoso cuando se cocina correctamente'
            }
        },
        {
            slug: 'huachalomo',
            name: 'Huachalomo',
            imagen: 'huachalomo.png',
            tipo: "Vacuno",
            section: 'delantero',
            description: 'Corte premium para parrilla',
            descripcionIn: 'Se prepara a partir del hueso del cuello. Se eliminan los huesos, cartílagos, tendones expuestos y ligamento nucal. Está conformado por los músculos cervical craneal, espinal y semiespinal cervical, longisismo cervical e intertransversos cervicales. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 2,600 kg a 4,000 kg ',
                Cortespieza: '3',
                promedioPeso: 'De 0,800 kg a 1,400 kg ',
                cortesPorCaja: '15 a 18',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '65-70°C',
                preparacion: 'Parrilla o guisos',
                caracteristicas: 'Textura firme, sabor equilibrado'
            }
        },
        {
            slug: 'choclillo',
            name: 'Choclillo',
            imagen: 'choclillo.png',
            tipo: "Vacuno",
            section: 'delantero',
            description: 'Excelente para preparaciones lentas',
            descripcionIn: 'Es un músculo forma cónica tumbado lateral al hueso de la paleta en el lado craneal de la cresta de la cuchilla y se extra de la paleta siguiendo la dirección natural. Conformado por músculo supraespinoso. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 0,800 kg a 1,350 kg ',
                Cortespieza: '1',
                promedioPeso: 'De 0,800 kg a 1,350 kg',
                cortesPorCaja: '16 a 20 ',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '75-80°C',
                preparacion: 'Guisos, estofados',
                caracteristicas: 'Tierno en cocción lenta'
            }
        },
        {
            slug: 'punta-paleta',
            name: 'Punta de Paleta',
            imagen: 'punta-paleta.png',
            tipo: "Vacuno",
            section: 'delantero',
            description: 'Versátil y sabroso',
            descripcionIn: 'Corte alargado del cuarto delantero. Se prepara a partir del grupo tríceps a lo largo de la fibra natural del músculo infra espinoso. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 1,700 kg a 2,500 kg',
                Cortespieza: '2',
                promedioPeso: 'De 0,800 kg a 1,400 kg',
                cortesPorCaja: '26 a 24',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '70-75°C',
                preparacion: 'Parrilla o guisos',
                caracteristicas: 'Buen balance de sabor'
            }
        },
        {
            slug: 'asado-carnicero',
            name: 'Asado del Carnicero',
            imagen: 'asado-carnicero.png',
            tipo: "Vacuno",
            section: 'delantero',
            description: 'Corte tradicional para asados',
            descripcionIn: ' Corte plano y alargado, fibroso. Conformado por músculo subescapular, músculo de la superficie medial del hueso escapular. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 1,600 kg a 2,000 kg ',
                Cortespieza: '2',
                promedioPeso: 'De 0,800 kg a 1,400 kg',
                cortesPorCaja: '20 a 24',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '70-75°C',
                preparacion: 'Parrilla o brasa',
                caracteristicas: 'Sabroso y jugoso'
            }
        },
        {
            slug: 'posta-paleta',
            name: 'Posta de Paleta',
            imagen: 'posta-paleta.png',
            tipo: "Vacuno",
            section: 'delantero',
            description: 'Ideal para guisos y estofados',
            descripcionIn: ' Corte triangular, se prepara siguiendo la fibra natural entre las costillas y el escapulario (M. dorsal ancho) y el músculo que recubre (M. Trapecio) y el músculo subyacente (M. Serrato ventral). Se encuentra caudal al húmero y por debajo de la espina de la escápula y se compone de una gran parte del grupo tríceps de los músculos. Está conformado por los músculos: M. tríceps braquial caput lateral, M. tríceps braquial caput longum, M. tríceps braquial caput medial. Los músculos Trunci cutáneo y dorsal ancho son retirados. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 3,000 kg a 4,000 kg ',
                Cortespieza: '3',
                promedioPeso: 'De 0,800 kg a 1,400 kg',
                cortesPorCaja: '15 a 18',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '80-85°C',
                preparacion: 'Cocción lenta',
                caracteristicas: 'Tierno en cocción prolongada'
            }
        },
        {
            slug: 'lomo-vetado',
            name: 'Lomo Vetado',
            imagen: 'lomo-vetado.png',
            tipo: "Vacuno",
            section: 'delantero',
            description: 'Uno de los cortes más premium',
            descripcionIn: 'Es a partir de un cuarto delantero y consiste en el músculo dorsi longissimus paralela a la columna vertebral y los músculos subyacentes a la cara dorsal de las costillas borde caudal, de la cuarta costilla. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 3 a 6% de Grasa Visible',
                PesoPieza: 'De 2,000 kg a 3,000 kg ',
                Cortespieza: '2 a 3',
                promedioPeso: 'De 0,800 kg a 1,400 kg',
                cortesPorCaja: '14 a 18',
                KgCaja: '15 kg a 25 kg',
                maduracion: '21-28 días',
                temperatura: '54-57°C',
                preparacion: 'Parrilla o plancha',
                caracteristicas: 'Alto marmoleo, muy jugoso'
            }
        },
        {
            slug: 'entrana',
            name: 'Entraña',
            imagen: 'entrana.png',
            tipo: "Vacuno",
            section: 'delantero',
            description: 'Corte muy sabroso y versátil',
            descripcionIn: ' En la falda (M. transverso abdominal) está situado en el interior de la pared abdominal y se extiende a la porción Naval Fin del pecho. Se quitan las escamas peritoneo y grasa. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 1,000 kg ',
                Cortespieza: '1',
                promedioPeso: 'De 1,000 kg ',
                cortesPorCaja: '12',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '57-63°C',
                preparacion: 'Parrilla rápida',
                caracteristicas: 'Sabor intenso y característico'
            }
        },
        // Cortes del Cuarto Trasero
        {
            slug: 'lomo-liso',
            name: 'Lomo Liso',
            imagen: 'lomo-liso.png',
            tipo: "Vacuno",
            section: 'trasero',
            description: 'Corte premium magro y versátil',
            descripcionIn: 'Es a partir de un cuarto trasero por un corte en la unión lumbosacra a la porción ventral. Se retira a una distancia especificada del músculo del ojo (M. longissimus dorsi) en ambos extremos craneal y caudal. Está conformado por M. cutáneo trunci, M. glúteo medio, M. iliocostal (sin. M. costarum longissimus), M. intercostales externo e interno, M. longissimus dorsi (M longissimus thoracis et lumbar), M. multífidos dorsal, M. oblicuo abdominal externo, M. serrato dorsal caudalis, M. spinalis dorsal, M. torácico trapecio. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 4,300 kg a 5,500 kg ',
                Cortespieza: '4',
                promedioPeso: 'De 0,800 a 1,400 kg',
                cortesPorCaja: '16 a 20',
                KgCaja: '15 kg a 25 kg',
                maduracion: '21-28 días',
                temperatura: '54-57°C',
                preparacion: 'Parrilla, horno o plancha',
                caracteristicas: 'Magro y tierno'
            }
        },
        {
            slug: 'filete',
            name: 'Filete',
            imagen: 'filete.png',
            tipo: "Vacuno",
            section: 'trasero',
            description: 'El corte más premium y tierno',
            descripcionIn: ' Lomo se prepara a partir del cuarto trasero y se retira en una sola pieza de la superficie ventral de las vértebras lumbares y la superficie lateral del ilion. El músculo correa lateral (M. psoas menor) permanece unida. Conformado por: M. ilíaco, M. psoas mayor, M. psoas menor. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 1,200 kg a 2,400 kg',
                Cortespieza: '1',
                promedioPeso: 'De 1,200 kg a 2,400 kg',
                cortesPorCaja: '10 a 12',
                KgCaja: '15 kg a 25 kg',
                maduracion: '21-28 días',
                temperatura: '52-57°C',
                preparacion: 'Plancha o parrilla',
                caracteristicas: 'Extremadamente tierno'
            }
        },
        {
            slug: 'punta-ganso',
            name: 'Punta de Ganso',
            imagen: 'punta-ganso.png',
            tipo: "Vacuno",
            section: 'trasero',
            description: 'Corte magro y versátil',
            descripcionIn: 'Corte magro y versátil',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 0,800 kg a 2,500 kg',
                Cortespieza: '1',
                promedioPeso: 'De 0,800 kg a 2,500 kg',
                cortesPorCaja: '16 a 24',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '63-68°C',
                preparacion: 'Parrilla o guisos',
                caracteristicas: 'Magro y sabroso'
            }
        },
        {
            slug: 'ganso',
            name: 'Ganso',
            imagen: 'ganso.png',
            tipo: "Vacuno",
            section: 'trasero',
            description: 'Excelente para asados',
            descripcionIn: 'Es a partir del cuarto trasero por la eliminación del músculo del talón (M. gastrocnemio) y el Pollo Ganso. El ganglio linfático poplíteo, que rodea el tejido graso y conjuntivo se eliminan. Conformado por Músculos bíceps femoral (Gluteobiceps). ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 3,900 kg a 5,500 kg',
                Cortespieza: '3 a 4',
                promedioPeso: 'De 0,800 kg a 1,400 kg ',
                cortesPorCaja: '12 a 16',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '65-70°C',
                preparacion: 'Parrilla o asado',
                caracteristicas: 'Textura firme'
            }
        },
        {
            slug: 'pollo-ganso',
            name: 'Pollo Ganso',
            imagen: 'pollo-ganso.png',
            tipo: "Vacuno",
            section: 'trasero',
            description: 'Ideal para preparaciones variadas',
            descripcionIn: 'Se prepara desde el exterior, siguiendo la fibra natural entre el exterior Músculos gluteobiceps y conformado por Músculo semitendinoso. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 1,700 kg a 2,500 kg ',
                Cortespieza: '2',
                promedioPeso: 'De 0,800 kg a 1,400 kg',
                cortesPorCaja: '16 a 24',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '65-70°C',
                preparacion: 'Parrilla o guisos',
                caracteristicas: 'Versátil'
            }
        },
        {
            slug: 'posta-negra',
            name: 'Posta Negra',
            imagen: 'posta-negra.png',
            tipo: "Vacuno",
            section: 'trasero',
            description: 'Excelente para mechados',
            descripcionIn: 'Desde arriba se encuentra caudal y medial al hueso del fémur y se une al hueso coxal, siguiendo la fibra natural entre el Silverside y Eyeround. Esta conformado por los músculos semimembranosos, sartorio, pectineos, abductor, gemelos y cuadrado femoral. El mismo debe estar libre de cartílagos, coagulos, ganglios linfáticos inguinales y de cualquier contaminación física. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 4,800 kg a 8,000 kg ',
                Cortespieza: '6',
                promedioPeso: '0,800 a 1,400 kg ',
                cortesPorCaja: '12 a 18',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '75-80°C',
                preparacion: 'Cocción lenta',
                caracteristicas: 'Magro y sabroso'
            }
        },
        {
            slug: 'posta-rosada',
            name: 'Posta Rosada',
            imagen: 'posta-rosada.png',
            tipo: "Vacuno",
            section: 'trasero',
            description: 'Ideal para guisos y asados',
            descripcionIn: 'se prepara del cuarto trasero quitando el músculo tapa (M. tensor de la fascia lata) y la grasa y los ganglios linfáticos subilíacos asociado. Conformado por los músculos: Recto femoral M., M. vastus intermedius, M. vasto externo, M. vasto medial. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 4,000 kg a 5,000 kg',
                Cortespieza: '4',
                promedioPeso: 'De 0,800 kg a 1,400 kg',
                cortesPorCaja: '16 a 20',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '75-80°C',
                preparacion: 'Cocción lenta',
                caracteristicas: 'Tierno en cocción prolongada'
            }
        },
        {
            slug: 'asiento',
            name: 'Asiento',
            imagen: 'asiento.png',
            tipo: "Vacuno",
            section: 'trasero',
            description: 'Corte jugoso para asados',
            descripcionIn: 'Se prepara a partir de un tope de lomito por la eliminación de los músculos abdominales de la cola dejando a los Músculos tensor in situ. Conformado por Músculo glúteo medio. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 2,700 kg a 3,500 kg ',
                Cortespieza: '3',
                promedioPeso: 'De 0,800 kg a 1,400 kg',
                cortesPorCaja: '18 a 21',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '65-70°C',
                preparacion: 'Parrilla o asado',
                caracteristicas: 'Jugoso y sabroso'
            }
        },
        {
            slug: 'punta-picana',
            name: 'Punta de Picana',
            imagen: 'punta-picana.png',
            tipo: "Vacuno",
            section: 'trasero',
            description: 'Corte premium para parrilla',
            descripcionIn: 'Es la porción del músculo forma de triángulo (M. tensor de la fascia lata) separado del cuadril a lo largo de la fibra natural entre las M. tensor de la fascia lata y los glúteos músculos medius. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 0,800 kg a 1,500 kg ',
                Cortespieza: '1',
                promedioPeso: 'De 0,800 kg a 1,500 kg ',
                cortesPorCaja: '18 a 22',
                KgCaja: '15 kg a 25 kg',
                maduracion: '21-28 días',
                temperatura: '54-57°C',
                preparacion: 'Parrilla',
                caracteristicas: 'Jugoso y tierno'
            }
        },
        {
            slug: 'tapabarriga',
            name: 'Tapabarriga',
            imagen: 'tapabarriga.png',
            tipo: "Vacuno",
            section: 'trasero',
            description: 'Versátil para diferentes preparaciones',
            descripcionIn: 'Se obtiene de la región abdominal lateral del vacuno, específicamente entre las costillas y la cadera. El corte se prepara a partir de la pared abdominal, conformado principalmente por tres músculos: el oblicuo externo del abdomen, oblicuo interno del abdomen y el músculo transverso abdominal. Se extrae mediante un corte que va desde la región del flanco hasta la parte inferior de las costillas. Se caracteriza por presentar una capa de grasa superficial que le aporta jugosidad y sabor. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 1,200 kg a 2,400 kg  ',
                Cortespieza: '2',
                promedioPeso: 'De 0,600 kg a 1,200 kg',
                cortesPorCaja: '12 a 16',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '70-75°C',
                preparacion: 'Parrilla o guisos',
                caracteristicas: 'Sabor característico'
            }
        },
        {
            slug: 'palanca',
            name: 'Palanca',
            imagen: 'palanca.png',
            tipo: "Vacuno",
            section: 'trasero',
            description: 'Ideal para preparaciones lentas',
            descripcionIn: 'Se prepara a partir del cuarto trasero y es la parte carnosa magra plana del recto abdominal, y está preparado por extracción de la membrana serosa y el tejido conectivo del músculo. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 0,900 kg a 1,150 kg  ',
                Cortespieza: '1',
                promedioPeso: 'De 0,900 kg a 1,150 kg ',
                cortesPorCaja: '30 a 40 ',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '80-85°C',
                preparacion: 'Cocción lenta',
                caracteristicas: 'Tierno en cocción prolongada'
            }
        },
        {
            slug: 'abastero',
            name: 'Abastero',
            imagen: 'abastero.png',
            tipo: "Vacuno",
            section: 'trasero',
            description: 'Corte trasero redondo. Conformado por músculos tricepscrural, gastrocnemio. ',
            descripcionIn: 'Corte trasero redondo. Conformado por músculos tricepscrural, gastrocnemio. ',
            categoria: 'V',
            formato: 'Cortes fraccionados, envasados al vacío y refrigerados en cajas de cartón.',
            specs: {
                Cgrasa: 'De 1 a 3% de Grasa Visible',
                PesoPieza: 'De 1,000 kg a 2,000 kg ',
                Cortespieza: '1',
                promedioPeso: 'De 1,000 kg a 2,000 kg ',
                cortesPorCaja: '14 a 20',
                KgCaja: '15 kg a 25 kg',
                maduracion: '14-21 días',
                temperatura: '75-80°C',
                preparacion: 'Cocción lenta',
                caracteristicas: 'Ideal para preparaciones lentas'
            }
        }
    ]
}

