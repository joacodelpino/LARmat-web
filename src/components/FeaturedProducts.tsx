import { CheckCircle, Sparkles, MessageCircle } from 'lucide-react';
import { products } from '../data/products';

export default function FeaturedProducts() {
  return (
    <section id="stock" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            Productos destacados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary mt-2">
            Stock <span className="text-primary">permanente</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Materiales siempre disponibles para que tu obra no se detenga.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/30"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  {product.badgeType === 'stock' ? (
                    <span className="flex items-center gap-1 bg-black/80 text-neutral text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      <CheckCircle size={12} />
                      {product.badge}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      <Sparkles size={12} />
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 text-accent text-xs font-semibold px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-secondary font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.description}</p>
                <a
                  href={`https://wa.me/5493804000000?text=Hola! Me interesa consultar sobre ${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-support font-semibold text-sm transition-colors group/link"
                >
                  <MessageCircle size={16} />
                  Consultar precio
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/5493804000000?text=Hola! Quiero ver el catálogo completo de productos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-sm transition-all duration-300"
          >
            <MessageCircle size={18} />
            Ver catálogo completo por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
