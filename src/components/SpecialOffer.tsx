
import { Truck } from "lucide-react";

const SpecialOffer = () => {
  return (
    <div className="bg-black text-red-600 py-3 px-4 rounded-lg font-medium text-center mb-6">
      <p className="font-bold text-lg">Oferta especial kit completo por R$349,00</p>
      <div className="flex justify-center mt-2">
        <button className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-700 transition-colors">
          <Truck size={18} />
          <span className="uppercase font-semibold">FRETE GRÁTIS</span>
        </button>
      </div>
      <p className="text-sm font-bold mt-3">Somente hoje!</p>
    </div>
  );
};

export default SpecialOffer;
