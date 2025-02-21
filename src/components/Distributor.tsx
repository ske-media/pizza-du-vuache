import React, { useEffect, useState } from 'react';
import { Clock, ChefHat, Flame, Sparkles, Timer } from 'lucide-react';

const FALLBACK_IMAGE = "https://i.imgur.com/HzohscN.jpeg";

const Distributor = () => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Précharger l'image pour vérifier qu'elle existe
    const img = new Image();
    img.src = 'https://i.imgur.com/HzohscN.jpeg';
    img.onerror = () => setImageError(true);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Notre Distributeur Automatique
          </h2>
          <p className="text-xl text-gray-600">
            La même qualité, où que vous soyez ! 🍕
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="fade-in">
            <img
              key={imageError ? 'fallback' : 'main'}
              src={imageError ? FALLBACK_IMAGE : "https://i.imgur.com/HzohscN.jpeg"}
              onError={(e) => {
                console.error('Erreur de chargement de l\'image:', e);
                setImageError(true);
              }}
              alt="Distributeur de pizzas"
              className="rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </div>
          
          <div className="space-y-8 fade-in">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Un savoir-faire maison</h3>
                <p className="text-gray-600">
                  Chaque pizza est élaborée à la main dans notre atelier, avec amour et passion, 
                  comme si vous la commandiez directement au comptoir.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Flame className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Deux options de cuisson</h3>
                <p className="text-gray-600">
                  Choisissez votre mode de préparation préféré :
                </p>
                <ul className="mt-3 space-y-3">
                  <li className="flex items-center space-x-2">
                    <Timer className="w-5 h-5 text-primary" />
                    <span>Réchauffée en 4 minutes directement dans le distributeur</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Flame className="w-5 h-5 text-primary" />
                    <span>Froide à réchauffer dans votre four (3-4 min à 250°) pour un rendu croustillant</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Disponible 24h/7j</h3>
                <p className="text-gray-600">
                  Idéal pour les envies spontanées, notre distributeur est disponible jour et nuit 
                  pour combler vos petites et grandes faims.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary-light rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              La différence Pizza du Vuache
            </h3>
            <p className="text-gray-700 text-lg mb-8">
              Nos pizzas du distributeur ne sont pas "juste des pizzas". 
              Elles sont une expérience, le résultat de notre passion pour la bonne cuisine. 
              Goûtez la différence et laissez-vous séduire !
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="font-semibold text-primary">Ingrédients frais</p>
                <p className="text-gray-600 text-sm">Sélectionnés avec soin</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="font-semibold text-primary">Même qualité</p>
                <p className="text-gray-600 text-sm">Sans compromis</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="font-semibold text-primary">Service 24/7</p>
                <p className="text-gray-600 text-sm">Toujours disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distributor;