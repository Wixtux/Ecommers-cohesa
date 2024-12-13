import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

export default function () {

    const products = initialData.products.filter(product => product.tipo === 'Vacuno');
    return (
        <div className="">
        <Title title="Nuestros productos"/>
        <ProductGrid products={products} />
      </div>
    );
}