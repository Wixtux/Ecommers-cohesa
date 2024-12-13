import Image from 'next/image';

interface CardProps {
    title: string;
    imageSrc: string;
    buttonText: string;
    link: string;
}

export default function Card({ title, imageSrc, buttonText, link }: CardProps) {
    return (
        <div className="flex flex-col   items-start  justify-end border border-gray-300 rounded-lg p-4 bg-white shadow-md h-full min-h-[250px] min-w-full">
            <Image
                src={imageSrc}
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }} // optional    

                className="rounded-lg "
            />
            <h3 className="mt-4 font-semibold">{title}</h3>
            <a href={link}>
                <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 font-bold text-xs md:text-sm">
                    {buttonText}
                </button>
            </a>
        </div>
    );
}