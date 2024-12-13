import ProductCard from "./ProductCard";


export default function AsadoSection() {
    const products = [
        {
            image: '/images/lomo-liso.jpg',
            title: 'Lomo Liso Premium | 1.300 kg| Corte Criollo',
            category: 'ALMACÉN',
            price: '$25.987',
        },
        {
            image: '/images/lomo-vetado.jpg',
            title: 'Lomo Vetado Premium | Paquete 1.5 kg | Corte Criollo',
            category: 'ALMACÉN',
            price: '$35.985',
        },
        {
            image: '/images/punta-ganso.jpg',
            title: 'Punta de Ganso Premium | Paquete 1.7 Kg',
            category: 'ALMACÉN',
            price: '$33.983',
        },
        {
            image: '/images/longaniza.jpg',
            title: 'Longaniza 4 Unidades | Paquete 500 grs. | Braunau',
            category: 'ALMACÉN',
            price: '$6.495',
        },
        {
            image: '/images/flat-iron.jpg',
            title: 'Flat Iron Premium | Paquete 1.5 kg | Corte Criollo',
            category: 'ALMACÉN',
            price: '$29.985',
        },
    ];
    return (
        <section className="max-w-7xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Todo para el asado</h2>
            <div className="grid grid-cols-5 gap-6">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        category={product.category}
                        price={product.price}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button className="bg-red-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-red-600">Ver todo</button>
            </div>
        </section>
    )
}
