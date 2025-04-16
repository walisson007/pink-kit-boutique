
import ProductCard from "@/components/ProductCard";
import SpecialOffer from "@/components/SpecialOffer";
import TrustBadges from "@/components/TrustBadges";
import CountdownTimer from "@/components/CountdownTimer";
import { useToast } from "@/components/ui/use-toast";

// Product data
const productData = [
  {
    id: "kit1",
    name: "Kit Santidade - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanho único 36/42",
    description: "Vestidos midi com manga, discretos e muito elegantes. Ideal para igrejas e eventos.",
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
    // Redirect will happen via the link, not programmatically
  };

  return (
    <div className="min-h-screen bg-boutiqueRosaPink">
      {/* Countdown timer at the very top spanning full width */}
      <CountdownTimer />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-boutiqueDarkPink mb-3 leading-tight">
            Promoção por tempo limitado - Kit de Vestidos no Atacado
          </h1>
          <p className="text-xl md:text-2xl font-playfair text-black font-bold mb-2">
            A partir de R$49,90 cada peça
          </p>
          <p className="text-boutiqueGray max-w-2xl mx-auto mb-4">
            São 6 kits exclusivos com 7 vestidos selecionados em cada, ideais para revender na sua cidade! Tamanho único 36/42 disponível.
          </p>
          
          <SpecialOffer />
        </header>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productData.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              priceEach={product.priceEach}
              sizeInfo={product.sizeInfo}
              description={product.description}
              images={product.images}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <div id="finalizar-pedido" className="bg-boutiqueRosaPink border-2 border-white rounded-lg p-6 mt-10 mb-6 text-center">
          <h2 className="text-2xl font-playfair font-bold text-boutiqueDarkPink mb-4">
            Gostou? Já escolheu seu kit? Clique abaixo e finalize seu pedido com a gente!
          </h2>
          <a 
            href={whatsappGeneralLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePlaceOrder}
            className="px-6 py-3 bg-boutiqueDarkPink text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 inline-block"
          >
            Fechar meu pedido agora
          </a>
        </div>
        
        {/* Trust Badges */}
        <TrustBadges />
        
        <footer className="text-center text-boutiqueLightGray text-sm mt-8">
          <p>© 2025 - Moda Evangélica Atacado | Todos os direitos reservados</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
