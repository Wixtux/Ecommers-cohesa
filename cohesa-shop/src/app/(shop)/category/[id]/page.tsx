import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props{
    params: {
        slug: string;
    }
}

export default function ({params}: Props) {
    const products = initialData.products.filter(product => product.tipo === 'Vacuno');
    const {slug} = params;
    
    if (slug === "a") {
        notFound();
    }


    return (
        
        <div className="page-width ">
        <Title title="Nuestras Carnes"/>
        <ProductGrid products={products} />
      </div>
    );
}