import { Productquantity } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string;
    }
}


export default function ({ params }: Props) {

    const {slug} = params;
    const products = initialData.products.find(product => product.slug === slug);

    if (!products) {
        notFound();
    }
    return (
        <div className="mt-10 mb-20 grid md:grid-cols-2 gap-3 ">
            {/*Slideshow*/}
            <div className=" col-span-1">
                <Image src={"/images/cuts/"+products.imagen} alt={products.name} width={700} height={500} />
            </div>
            {/*Product Info*/}
            <div className="col-span-1 px-5 ">
                <h1 className=" antialiased font-bold text-xl mb-5">{products.name}</h1>
                {/*Product Specs*/}
                <p className="font-bold">Categoria {products.categoria}</p>

                <p className="font-light">{products.descripcionIn}</p>
                <p className="font-bold">Formato de envio</p>

                <p className="font-light">{products.formato}</p>

                <p className="font-bold">Cobertura de Grasa</p>
                <p className="font-light">{products.specs.Cgrasa}</p>

                <p className="font-bold">Cantidad de corte por pieza</p>
                <p className="font-light">{products.specs.Cortespieza}</p>

                <p className="font-bold">Cortes por caja</p>
                <p className="font-light">{products.specs.cortesPorCaja}</p>

                <p className="font-bold">kg / caja</p>
                <p className="font-light">{products.specs.KgCaja}</p> 

                {/*Product quantity*/}
                <Productquantity quantity={1} />
                {/*Add to Cart*/}
                <button className="btn-primary my-5">Add to Cart</button>
                
            </div>
        </div>
    );
}