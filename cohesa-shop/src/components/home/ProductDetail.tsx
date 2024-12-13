import Image from 'next/image';

export default function ProductDetails() {
  return (
    <div className="grid md:grid-cols-2 gap-6 p-6 items-center">
      {/* Image Section */}
      <div className="flex justify-center">
        <Image
          src="/images/parrilla.jpg"
          alt="Parrilla Austin Classic PK"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Product Details Section */}
      <div className="md:space-y-6">
        <h2 className="text-2xl font-bold">Parrilla Austin Classic PK | PREVENTA</h2>
        <div className="text-gray-500">
          <span className="line-through text-gray-400">$399.990</span> <span className="text-red-500 font-semibold">$299.990</span> <span className="bg-red-100 text-red-600 text-sm font-bold py-1 px-2 rounded">Oferta</span>
        </div>
        <p className="text-gray-600">Los gastos de envío se calculan en la pantalla de pago.</p>

        <div className="flex items-center md:space-x-4">
          <label htmlFor="quantity" className="font-medium">Cantidad</label>
          <div className="flex items-center border border-gray-300 rounded-md">
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">-</button>
            <input
              id="quantity"
              type="number"
              defaultValue={1}
              className="w-12 text-center border-none focus:outline-none"
            />
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">+</button>
          </div>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-md font-bold hover:bg-gray-800">Agregar al carrito</button>

        <div className="flex justify-between text-sm text-gray-500">
          <a href="#" className="hover:underline">Share</a>
          <a href="#" className="hover:underline">Ver todos los detalles →</a>
        </div>
      </div>
    </div>
  );
}