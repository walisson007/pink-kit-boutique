import ProductCard from "@/components/ProductCard";
import SpecialOffer from "@/components/SpecialOffer";
import TrustBadges from "@/components/TrustBadges";
import CountdownTimer from "@/components/CountdownTimer";
import { useToast } from "@/components/ui/use-toast";
import { Truck } from "lucide-react";

const productData = [
  {
    id: "kit1",
    name: "Kit Tropical - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanhos: M (40/42) e G (44/46)",
    description: "Kit de vestidos com estampas tropicais vibrantes e cortes modernos.",
    images: [
      "/lovable-uploads/b429ab87-fcf0-4e0b-aec9-991595b18811.png",
      "/lovable-uploads/030e2637-e83a-45e1-8825-81f7cbc3764d.png",
      "/lovable-uploads/373d2199-09dd-45a7-b724-375705cf90ea.png",
      "/lovable-uploads/72215627-d6ab-4bac-bdac-9dd824873cc7.png",
      "/lovable-uploads/d681c932-a700-457b-8838-8083122cc5a0.png",
      "/lovable-uploads/7209cb2a-02b3-4e66-82f9-2f70eb35f9df.png",
      "/lovable-uploads/1bca62cc-7494-4ebc-b4d5-c75081fd2a6c.png"
    ],
  },
  {
    id: "kit2",
    name: "Kit Clássico - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanhos: M (40/42) e G (44/46)",
    description: "Kit de vestidos em tons clássicos com modelagem elegante.",
    images: [
      "/lovable-uploads/b1ebf12f-d8c1-4f1f-adf6-2b01ff29de6f.png",
      "/lovable-uploads/bc4e947b-41de-4ce8-ba74-67857985b530.png",
      "/lovable-uploads/f3deee82-213f-4a7a-8a4b-aece0d983314.png",
      "/lovable-uploads/d50e0629-3200-4c54-8f51-76eaa4227941.png",
      "/lovable-uploads/af6e9ced-fe6b-4ca5-a219-205992d158ab.png",
      "/lovable-uploads/d1e54b61-4111-4b96-994a-37545f6b4275.png",
      "/lovable-uploads/b115e9a8-67fb-4524-9716-42088f873397.png"
    ],
  },
  {
    id: "kit3",
    name: "Kit Sofisticado - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanhos: M (40/42) e G (44/46)",
    description: "Kit de vestidos sofisticados com acabamento premium.",
    images: [
      "/lovable-uploads/7c653cde-c60e-4354-84de-94399b6d8100.png",
      "/lovable-uploads/3d177eef-7a6f-41be-b35a-6237414473e4.png",
      "/lovable-uploads/eb0520ba-101c-42b1-b118-f3d48f26fb05.png",
      "/lovable-uploads/86d3e570-3013-455d-a3ef-770367f1b872.png",
      "/lovable-uploads/505253f4-38c8-493d-bca9-e129655675ed.png",
      "/lovable-uploads/86d3e570-3013-455d-a3ef-770367f1b872.png",
      "/lovable-uploads/bea70e97-6494-484f-ac61-83d7e6122e5d.png"
    ],
  }
];

const Index = () => {
  const { toast } = useToast();
  
  const whatsappGeneralMessage = "Olá, acabei de ver os kits no site e já escolhi o meu. Quero fechar o pedido com vocês!";
  const whatsappGeneralLink = `https://wa.me/5538997483702?text=${encodeURIComponent(whatsappGeneralMessage)}`;
  
  const handlePlaceOrder = () => {
    toast({
      title: "Pedido em processamento",
      description: "Você será redirecionado para finalizar seu pedido em instantes.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <CountdownTimer />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 leading-tight">
            Promoção por tempo limitado
            <span className="block text-red-600 mt-2">Kit de Vestidos no Atacado</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-medium mb-12">
            A partir de R$49,90 cada peça
          </p>
          
          <SpecialOffer />
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productData.map((product) => (
            <ProductCard 
              key={product.id}
              {...product}
            />
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-12 mt-16 mb-8 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Gostou? Já escolheu seu kit?
            <span className="block mt-2">Clique abaixo e finalize seu pedido com a gente!</span>
          </h2>
          <a 
            href={whatsappGeneralLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePlaceOrder}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-red-600 rounded-xl font-bold text-xl hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg group"
          >
            <Truck className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
            Fechar meu pedido agora
          </a>
        </div>
        
        <TrustBadges />
        
        <footer className="text-center text-gray-500 text-sm mt-16">
          <p>© 2025 - Moda Evangélica Atacado | Todos os direitos reservados</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
