
import ProductCard from "@/components/ProductCard";
import TrustBadges from "@/components/TrustBadges";
import CountdownTimer from "@/components/CountdownTimer";
import { useToast } from "@/components/ui/use-toast";

const productData = [
  {
    id: "kit1",
    name: "Kit Elegante - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanho único 36/42",
    description: "Kit de vestidos elegantes com modelagem versátil.",
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
    name: "Kit Moderno - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanho único 36/42",
    description: "Kit de vestidos modernos com estilo contemporâneo.",
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
    sizeInfo: "Tamanho único 36/42",
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
  },
  {
    id: "kit4",
    name: "Kit Casual - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanho único 36/42",
    description: "Kit de vestidos casuais perfeitos para o dia a dia.",
    images: [
      "/lovable-uploads/44d7b511-5b2c-4581-8e87-c09f93905700.png",
      "/lovable-uploads/1a2cf923-6bd5-46ac-ab3b-02bcf7d42ae5.png",
      "/lovable-uploads/1e6ef859-d681-4956-9d91-779f9ba0ae06.png",
      "/lovable-uploads/35cec54c-4ba7-4e6c-8801-74e3491728e8.png",
      "/lovable-uploads/779bd83d-91a8-4a3e-b221-59807f6467fd.png",
      "/lovable-uploads/92e57007-6208-4d94-ac4e-5bee2d32458d.png",
      "/lovable-uploads/99e92598-92fe-4157-a556-ec122075ff33.png"
    ],
  },
  {
    id: "kit5",
    name: "Kit Charme - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanho único 36/42",
    description: "Kit de vestidos charmosos com detalhes especiais.",
    images: [
      "/lovable-uploads/aac48638-db3f-4105-bba1-937ab832feba.png",
      "/lovable-uploads/b2a15bd2-eb1e-4fea-9a5f-7b9058d367c6.png",
      "/lovable-uploads/b37c6f50-6ecd-4a43-9371-baecb293b7e5.png",
      "/lovable-uploads/c4456235-671e-4686-95c1-7517751689cc.png",
      "/lovable-uploads/f356eed6-ad4d-433b-8d05-77ba2e7246f7.png",
      "/lovable-uploads/b37c6f50-6ecd-4a43-9371-baecb293b7e5.png",
      "/lovable-uploads/c4456235-671e-4686-95c1-7517751689cc.png"
    ],
  },
  {
    id: "kit6",
    name: "Kit Essencial - 7 Peças",
    price: "R$349,00",
    priceEach: "7 peças - Cada vestido sai por apenas R$49,90",
    sizeInfo: "Tamanho único 36/42",
    description: "Kit de vestidos essenciais para todas as ocasiões.",
    images: [
      "/lovable-uploads/b429ab87-fcf0-4e0b-aec9-991595b18811.png",
      "/lovable-uploads/030e2637-e83a-45e1-8825-81f7cbc3764d.png",
      "/lovable-uploads/373d2199-09dd-45a7-b724-375705cf90ea.png",
      "/lovable-uploads/72215627-d6ab-4bac-bdac-9dd824873cc7.png",
      "/lovable-uploads/d681c932-a700-457b-8838-8083122cc5a0.png",
      "/lovable-uploads/7209cb2a-02b3-4e66-82f9-2f70eb35f9df.png",
      "/lovable-uploads/1bca62cc-7494-4ebc-b4d5-c75081fd2a6c.png"
    ],
  }
];

const Index = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <CountdownTimer />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 leading-tight">
            MEGA PROMOÇÃO SÓ HOJE!
          </h1>
          <p className="text-2xl md:text-3xl text-pink-600 font-medium mb-6">
            Vestidos no Atacado por apenas R$49,90 cada
          </p>
          <p className="text-xl text-gray-600 mb-12">
            Escolha seu kit com 7 peças e feche agora pelo WhatsApp
          </p>
          <p className="text-lg text-pink-500 font-semibold mb-12">
            Frete fixo para todo o Brasil!
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productData.map((product) => (
            <ProductCard 
              key={product.id}
              {...product}
            />
          ))}
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
