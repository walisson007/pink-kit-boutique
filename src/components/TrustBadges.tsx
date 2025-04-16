
import { Shield, Truck, MessageSquare } from "lucide-react";

const TrustBadges = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 py-6 text-boutiqueGray">
      <div className="flex items-center">
        <Shield className="mr-2 text-boutiqueDarkPink" size={20} />
        <span className="text-sm font-medium">Compra Segura</span>
      </div>
      <div className="flex items-center">
        <Truck className="mr-2 text-boutiqueDarkPink" size={20} />
        <span className="text-sm font-medium">Entrega Rápida</span>
      </div>
      <div className="flex items-center">
        <MessageSquare className="mr-2 text-boutiqueDarkPink" size={20} />
        <span className="text-sm font-medium">Atendimento Personalizado no WhatsApp</span>
      </div>
    </div>
  );
};

export default TrustBadges;
