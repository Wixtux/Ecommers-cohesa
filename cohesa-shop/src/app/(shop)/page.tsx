import AsadoSection from "@/components/home/AsadoSection";
import Card from "@/components/home/Card";
import ProductDetails from "@/components/home/ProductDetail";


export default function Home() {

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:p-6 md:grid-cols-2">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <Card
            title="PK Marca"
            imageSrc="/images/pk-marca.jpg"
            buttonText="VER MARCA PK"
            link="#"
          />
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">
          <Card
            title="Charcutería Premium"
            imageSrc="/images/charcuteria.jpg"
            buttonText="VER"
            link="#"
          />
          <Card
            title="Carnes Premium"
            imageSrc="/images/carnes.jpg"
            buttonText="VER"
            link="#"
          />
          <Card
            title="Cuchillos"
            imageSrc="/images/cuchillos.jpg"
            buttonText="COMPRAR"
            link="#"
          />
          <Card
            title="Braseros"
            imageSrc="/images/braseros.jpg"
            buttonText="COMPRAR"
            link="#"
          />
        </div>

      </div>
      <div className="">
        <ProductDetails />
      </div>
     {/*  <div>
        <AsadoSection />
      </div> */}
    </div >
  );
}
