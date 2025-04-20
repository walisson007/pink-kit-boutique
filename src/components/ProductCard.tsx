
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <div className="overflow-hidden h-96 relative">
          <img 
            src={images[currentImageIndex]} 
            alt={`${name} - imagem ${currentImageIndex + 1}`} 
            className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
          />
          
          {images.length > 1 && (
            <>
              <button 
                onClick={goToPreviousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg text-boutiqueDarkPink transition-all duration-300 hover:scale-110"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={goToNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg text-boutiqueDarkPink transition-all duration-300 hover:scale-110"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h2 className="text-2xl font-montserrat font-bold text-boutiqueDarkPink mb-3">{name}</h2>
        <p className="text-boutiqueGray mb-4 text-base leading-relaxed">{description}</p>
        
        <div className="space-y-2">
          <div className="text-2xl font-semibold text-boutiqueDarkPink">{price}</div>
          {priceEach && <p className="text-sm text-boutiqueGray">{priceEach}</p>}
          {sizeInfo && <p className="text-sm text-boutiqueGray mb-4">{sizeInfo}</p>}
          
          <div className="pt-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center px-6 py-3 bg-boutiqueDarkPink text-white rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Comprar
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
