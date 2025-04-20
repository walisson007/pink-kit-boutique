
import { Truck } from "lucide-react";

const SpecialOffer = () => {
  return (
    <div className="bg-black p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
      <p className="text-red-600 font-bold text-2xl md:text-3xl mb-4">
        Oferta especial kit completo por R$349,00
      </p>
      <button className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-red-700 transition-colors mx-auto">
        <Truck className="w-5 h-5" />
        <span className="font-semibold">FRETE GRÁTIS</span>
      </button>
      <p className="text-red-600 font-bold mt-4 text-lg">Somente hoje!</p>
    </div>
  );
};

export default SpecialOffer;
