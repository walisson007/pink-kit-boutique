import ProductCard from "@/components/ProductCard";
import SpecialOffer from "@/components/SpecialOffer";
import TrustBadges from "@/components/TrustBadges";
import CountdownTimer from "@/components/CountdownTimer";
import { useToast } from "@/components/ui/use-toast";

// Updated product data with the descriptions from the image
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
    <div className="min-h-screen bg-gray-50">
      {/* Full-width countdown timer */}
      <CountdownTimer />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-boutiqueDarkPink mb-6 leading-tight">
            Promoção por tempo limitado - Kit de Vestidos no Atacado
          </h1>
          <p className="text-2xl md:text-3xl font-playfair text-black font-bold mb-4">
            A partir de R$49,90 cada peça
          </p>
          
          <SpecialOffer />
        </header>
        
        {/* Products Grid - Improved responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((product) => (
            <ProductCard 
              key={product.id}
              {...product}
            />
          ))}
        </div>
        
        {/* Call to Action - Enhanced styling */}
        <div className="bg-white border-2 border-boutiqueDarkPink rounded-2xl p-8 mt-16 mb-8 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-boutiqueDarkPink mb-6">
            Gostou? Já escolheu seu kit? Clique abaixo e finalize seu pedido com a gente!
          </h2>
          <a 
            href={whatsappGeneralLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePlaceOrder}
            className="inline-block px-8 py-4 bg-boutiqueDarkPink text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Fechar meu pedido agora
          </a>
        </div>
        
        {/* Trust Badges */}
        <TrustBadges />
        
        <footer className="text-center text-boutiqueLightGray text-sm mt-12">
          <p>© 2025 - Moda Evangélica Atacado | Todos os direitos reservados</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
