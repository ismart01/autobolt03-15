import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5571991867336?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Autobolt', '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      onClick={handleWhatsAppClick}
    >
      <div className="relative">
        <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 pulse-subtle">
          <MessageCircle size={28} />
        </div>
        <div className="absolute -top-12 -left-20 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm whitespace-nowrap">
          Consultor On line
        </div>
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-ping">
          !
        </div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;