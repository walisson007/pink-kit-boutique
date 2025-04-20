
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Truck } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const kitName = name.split('-')[0].trim();
  const whatsappMessage = `Olá, escolhi o ${kitName} e quero fechar meu pedido!`;
  const whatsappLink = `https://wa.me/5538997483702?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl bg-white">
      <div className="relative">
        <div className="overflow-hidden h-[400px] relative">
          <img 
            src={images[currentImageIndex]} 
            alt={`${name} - imagem ${currentImageIndex + 1}`} 
            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
          />
          
          {images.length > 1 && (
            <>
              <button 
                onClick={goToPreviousImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg text-red-600 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={goToNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg text-red-600 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      </div>
      
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
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
