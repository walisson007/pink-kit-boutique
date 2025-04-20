import ProductCard from "@/components/ProductCard";
import SpecialOffer from "@/components/SpecialOffer";
import TrustBadges from "@/components/TrustBadges";
import CountdownTimer from "@/components/CountdownTimer";
import { useToast } from "@/components/ui/use-toast";
import { Truck } from "lucide-react";

const productData = [
  {
    id: "kit1",
    name: "Kit Elegância - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanho único 36/42",
    description: "Vestidos sofisticados em tons elegantes, com detalhes refinados e acabamento premium.",
    images: ["/lovable-uploads/aac48638-db3f-4105-bba1-937ab832feba.png"],
  },
  {
    id: "kit2",
    name: "Kit Elegância - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanho único 36/42",
    description: "Vestidos sofisticados em tons elegantes, com detalhes refinados e acabamento premium.",
    images: ["/lovable-uploads/aac48638-db3f-4105-bba1-937ab832feba.png"],
  },
  {
    id: "kit3",
    name: "Kit Primavera - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanho único 36/42",
    description: "Vestidos florais e coloridos, perfeitos para a temporada primavera-verão, com tecidos leves e confortáveis.",
    images: ["/lovable-uploads/aac48638-db3f-4105-bba1-937ab832feba.png"],
  },
  {
    id: "kit4",
    name: "Kit Delicadeza - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanho único 36/42",
    description: "Vestidos em tons suaves com estampas de borboletas, flores e detalhes delicados. Perfeitos para ocasiões especiais.",
    images: ["/lovable-uploads/aac48638-db3f-4105-bba1-937ab832feba.png"],
  },
  {
    id: "kit5",
    name: "Kit Jardim - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanho único 36/42",
    description: "Vestidos com estampas florais vibrantes, perfeitos para eventos ao ar livre e celebrações. Modelos frescos e encantadores.",
    images: ["/lovable-uploads/aac48638-db3f-4105-bba1-937ab832feba.png"],
  },
  {
    id: "kit6",
    name: "Kit Tropical - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanho único 36/42",
    description: "Vestidos inspirados em cores e estampas tropicais, com modelagem moderna e confortável. Perfeitos para o verão.",
    images: ["/lovable-uploads/aac48638-db3f-4105-bba1-937ab832feba.png"],
  },
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
