import ProductCard from "@/components/ProductCard";
import SpecialOffer from "@/components/SpecialOffer";
import TrustBadges from "@/components/TrustBadges";
import CountdownTimer from "@/components/CountdownTimer";
import { useToast } from "@/components/ui/use-toast";
import { Truck } from "lucide-react";

const productData = [
  {
    id: "kit1",
    name: "Kit Borboletas - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanhos: M (40/42) e G (44/46)",
    description: "Vestidos românticos com estampas de borboletas em tons suaves. Design exclusivo e tecido premium.",
    images: [
      "/lovable-uploads/35cec54c-4ba7-4e6c-8801-74e3491728e8.png",
      "/lovable-uploads/c4456235-671e-4686-95c1-7517751689cc.png"
    ],
  },
  {
    id: "kit2",
    name: "Kit Floral Azul - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanhos: M (40/42) e G (44/46)",
    description: "Vestidos em tons de azul com estampas florais delicadas. Perfeito para ocasiões especiais.",
    images: [
      "/lovable-uploads/9100225c-7318-4705-a39a-c8a9c0e0d973.png",
      "/lovable-uploads/44d7b511-5b2c-4581-8e87-c09f93905700.png"
    ],
  },
  {
    id: "kit3",
    name: "Kit Jardim Encantado - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanhos: M (40/42) e G (44/46)",
    description: "Vestidos com estampas florais vibrantes em fundo branco, design romântico e elegante.",
    images: [
      "/lovable-uploads/1a2cf923-6bd5-46ac-ab3b-02bcf7d42ae5.png",
      "/lovable-uploads/99e92598-92fe-4157-a556-ec122075ff33.png"
    ],
  },
  {
    id: "kit4",
    name: "Kit Girassol - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanhos: M (40/42) e G (44/46)",
    description: "Vestidos alegres com estampas de girassol, perfeitos para eventos ao ar livre e celebrações.",
    images: [
      "/lovable-uploads/1e6ef859-d681-4956-9d91-779f9ba0ae06.png",
      "/lovable-uploads/b37c6f50-6ecd-4a43-9371-baecb293b7e5.png"
    ],
  },
  {
    id: "kit5",
    name: "Kit Primavera Verde - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanhos: M (40/42) e G (44/46)",
    description: "Vestidos em tom verde suave com estampas florais delicadas. Modelagem moderna e confortável.",
    images: [
      "/lovable-uploads/b2a15bd2-eb1e-4fea-9a5f-7b9058d367c6.png",
      "/lovable-uploads/92e57007-6208-4d94-ac4e-5bee2d32458d.png"
    ],
  },
  {
    id: "kit6",
    name: "Kit Elegância - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanhos: M (40/42) e G (44/46)",
    description: "Vestidos sofisticados em tons elegantes, com detalhes refinados e acabamento premium.",
    images: [
      "/lovable-uploads/779bd83d-91a8-4a3e-b221-59807f6467fd.png",
      "/lovable-uploads/f356eed6-ad4d-433b-8d05-77ba2e7246f7.png"
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
