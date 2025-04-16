
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  // Extract kit name for WhatsApp message
  const kitName = name.split('-')[0].trim();
  const whatsappMessage = `Olá, escolhi o ${kitName} e quero fechar meu pedido!`;
  const whatsappLink = `https://wa.me/5538997483702?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="relative">
        <div className="overflow-hidden h-80 relative">
          <img 
            src={images[currentImageIndex]} 
            alt={`${name} - imagem ${currentImageIndex + 1}`} 
            className="w-full h-full object-cover object-center"
          />
          
          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button 
                onClick={goToPreviousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md text-boutiqueDarkPink"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={goToNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow-md text-boutiqueDarkPink"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          
          {/* Image counter */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="text-xl font-montserrat font-bold text-boutiqueDarkPink mb-2">{name}</h2>
        <p className="text-boutiqueGray mb-3 text-sm">{description}</p>
        
        <div className="mt-3">
          <div className="text-xl font-semibold text-boutiqueDarkPink mb-1">{price}</div>
          {priceEach && <p className="text-sm text-boutiqueGray mb-1">{priceEach}</p>}
          {sizeInfo && <p className="text-sm text-boutiqueGray mb-3">{sizeInfo}</p>}
          
          <div className="flex justify-end">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-boutiqueDarkPink text-white rounded-md font-medium hover:bg-opacity-90 transition-colors duration-200"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
