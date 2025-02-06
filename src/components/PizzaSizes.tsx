import React from 'react';

const PizzaSizes = () => {
  return (
    <section className="bg-secondary-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Nos Formats de Pizza</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl font-bold text-primary">31"</span>
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-3">Format Normal</h3>
            <p className="text-gray-600">
              Notre format classique de 31cm, idéal pour une personne avec un petit appétit.
              La taille parfaite pour savourer tous les ingrédients de nos délicieuses pizzas.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl font-bold text-primary">38"</span>
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-3">Format Géant</h3>
            <p className="text-gray-600">
              Notre format généreux de 38 cm, idéal pour les amateurs de bons repas.
              Plus de pizza signifie encore plus de plaisir pour satisfaire un grand appétit !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PizzaSizes;