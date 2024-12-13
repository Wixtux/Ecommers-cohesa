import { Productquantity, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
];

export default function () {
    return (
        <div className=" flex justify-center mb-72 px-0 sm:px-10">
            <div className="flex flex-col w-[1000px]">
                <Title title="Cart" />
                <div className="grid sm:grid-cols-2 gap-10">
                    <div className="flex flex-col mt-5">
                        <Link href={"/"} className="underline mb-5 text-right">
                            Continuar comprando
                        </Link>

                        {/*Cart Items*/}
                        {
                            productsInCart.map((product) => (
                                <div key={product.slug} className="flex mb-5">
                                    <Image src={"/images/cuts/" + product.imagen} alt={product.name} width={100} height={100}  className="mr-5 rounded"/>
                                    <div>
                                        <p>{product.name}</p>
                                        <p className="text-gray-500">{product.description}</p>
                                        <div className="">
                                        <Productquantity quantity={1} />
                                        <button className="underline mt-3">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                    {/*Cart Summary*/}
                    <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
                        <h2 className="text-2xl mb-2">Resumen de orden</h2>
                        <div className="grid grid-cols-2">
                            <span>No. Productos</span>
                            <span className="text-right">{productsInCart.length} articulos</span>
                            <span>Subtotal</span>
                            <span className="text-right">$100</span>
                            <span>IVA</span>
                            <span className="text-right">$20</span>
                            <span className="mt-5 text-2xl">TOTAL</span>
                            <span className="mt-5 text-2xl text-right">$20</span>
                        </div>
                        <div className="mt-5 mb-2 w-full">
                            <Link  className="flex btn-primary justify-center"
                            href={"/checkout/address"}>
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}