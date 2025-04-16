
import ProductCard from "@/components/ProductCard";
import SpecialOffer from "@/components/SpecialOffer";
import TrustBadges from "@/components/TrustBadges";
import { useToast } from "@/components/ui/use-toast";

// Product data
const productData = [
  {
    id: "kit1",
    name: "Kit Básico - 7 Peças",
    price: "R$49,90/cada",
    description: "Vestidos básicos para o dia a dia, perfeitos para igreja e trabalho.",
    images: ["/lovable-uploads/aac48638-db3f-4105-bba1-937ab832feba.png"],
  },
  {
    id: "kit2",
    name: "Kit Elegância - 7 Peças",
    price: "R$49,90/cada",
    description: "Vestidos mais formais para eventos especiais na igreja.",
    images: ["/lovable-uploads/aac48638-db3f-4105-bba1-937ab832feba.png"],
  },
  {
    id: "kit3",
    name: "Kit Primavera - 7 Peças",
    price: "R$49,90/cada",
    description: "Vestidos com estampas florais, perfeitos para a primavera.",
    images: ["/lovable-uploads/aac48638-db3f-4105-bba1-937ab832feba.png"],
  },
  {
    id: "kit4",
    name: "Kit Trabalho - 7 Peças",
    price: "R$49,90/cada",
    description: "Vestidos sofisticados ideais para o ambiente corporativo.",
    images: ["/lovable-uploads/aac48638-db3f-4105-bba1-937ab832feba.png"],
  },
  {
    id: "kit5",
    name: "Kit Casual - 7 Peças",
    price: "R$49,90/cada",
    description: "Vestidos casuais e confortáveis para o dia a dia.",
    images: ["/lovable-uploads/aac48638-db3f-4105-bba1-937ab832feba.png"],
  },
  {
    id: "kit6",
    name: "Kit Completo - 7 Peças",
    price: "R$49,90/cada",
    description: "Uma seleção especial dos nossos melhores vestidos evangélicos.",
    images: ["/lovable-uploads/aac48638-db3f-4105-bba1-937ab832feba.png"],
  },
];

const Index = () => {
  const { toast } = useToast();
  
  const handlePlaceOrder = () => {
    toast({
      title: "Pedido em processamento",
      description: "Você será redirecionado para finalizar seu pedido em instantes.",
    });
  };

  return (
    <div className="min-h-screen bg-boutiqueRosaPink">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-boutiqueDarkPink mb-3 leading-tight">
            Promoção por tempo limitado - Kit de Vestidos no Atacado
          </h1>
          <p className="text-xl md:text-2xl font-playfair text-boutiqueGold mb-2">
            A partir de R$49,90 cada peça
          </p>
          <p className="text-boutiqueGray max-w-2xl mx-auto mb-4">
            São 6 kits exclusivos com 7 vestidos selecionados em cada, ideais para revender na sua cidade! Tamanho único 36/42 disponível.
          </p>
          
          <SpecialOffer />
          
          <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
            <h2 className="text-2xl font-playfair font-bold text-boutiqueDarkPink mb-4">
              Kits especiais para você revender e lucrar com moda evangélica!
            </h2>
          </div>
        </header>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productData.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
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
          <button 
            onClick={handlePlaceOrder}
            className="px-6 py-3 bg-boutiqueDarkPink text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
          >
            Fechar meu pedido agora
          </button>
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
