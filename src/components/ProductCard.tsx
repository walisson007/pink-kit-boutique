
import { useState, useEffect } from 'react';
import { Truck } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  priceEach?: string;
  sizeInfo?: string;
  description: string;
  images: string[];
}

const ProductCard = ({ id, name, price, priceEach, sizeInfo, description, images }: ProductCardProps) => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Muda a imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, [api]);

  const kitName = name.split('-')[0].trim();
  const whatsappMessage = `Olá, escolhi o ${kitName} e quero fechar meu pedido!`;
  const whatsappLink = `https://wa.me/5538997483702?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl bg-white">
      <div className="relative">
        <h2 className="text-2xl font-bold text-gray-800 text-center py-4 bg-gradient-to-r from-red-50 to-red-100">{name}</h2>
        <div className="overflow-hidden h-[400px]">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="relative">
                  <img 
                    src={image} 
                    alt={`${name} - imagem ${index + 1}`} 
                    className="w-full h-[400px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      
      <CardContent className="p-8">
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        <div className="space-y-3">
          <div className="text-3xl font-bold text-red-600">{price}</div>
          {priceEach && <p className="text-gray-500">{priceEach}</p>}
          {sizeInfo && <p className="text-gray-500 mb-6">{sizeInfo}</p>}
          
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 group"
          >
            <Truck className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            <span>Comprar Agora</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
