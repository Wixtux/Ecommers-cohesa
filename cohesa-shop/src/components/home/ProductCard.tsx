import Image from 'next/image';

type ProductCardProps = {
  image: string;
  title: string;
  category: string;
  price: string;
};

export default function ProductCard({ image, title, category, price }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="rounded-lg"
      />
      <h3 className="text-center text-sm font-semibold">{title}</h3>
      <p className="text-xs text-gray-500">{category}</p>
      <p className="text-lg font-bold">{price}</p>
    </div>
  );
}