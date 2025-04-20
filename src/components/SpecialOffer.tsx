
import { Truck } from "lucide-react";

const SpecialOffer = () => {
  return (
    <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto border border-red-200">
      <p className="text-red-700 font-bold text-2xl md:text-3xl mb-6 text-center">
        Oferta especial kit completo por R$349,00
      </p>
      <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:from-red-700 hover:to-red-800 transition-all duration-300 mx-auto group transform hover:scale-105">
        <Truck className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
        <span className="font-bold text-lg">FRETE GRÁTIS</span>
      </button>
      <p className="text-red-600 font-bold mt-6 text-xl text-center">Somente hoje!</p>
    </div>
  );
};

export default SpecialOffer;
