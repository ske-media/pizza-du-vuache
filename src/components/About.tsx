import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="fade-in aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl">
            <h1 className="sr-only">Pizza du Vuache - La meilleure pizzeria artisanale de Valleiry</h1>
            <img
              src="https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?auto=format&fit=crop&q=80"
              width="800"
              height="600"
              alt="Pizza du Vuache - Restaurant et pizzeria à Valleiry"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-primary mb-6">Notre Histoire</h2>
            <p className="text-gray-700 mb-6">
              Depuis 2012, Pizza du Vuache perpétue la tradition de la véritable pizza italienne au cœur de Valleiry, Haute-Savoie. Notre pizzeria artisanale est devenue une référence incontournable dans la région, reconnue pour ses délicieuses pizzas faites maison.
              Notre passion pour la qualité et l'authenticité se retrouve dans chacune de nos créations culinaires.
            </p>
            <p className="text-gray-700 mb-6">
              Chez Pizza du Vuache, nous cultivons un savoir-faire unique inspiré par l'esprit local du Mont Vuache et la tradition italienne. Nos pizzas sont préparées avec des ingrédients frais et de qualité, selon des recettes authentiques transmises de génération en génération.
              Chaque pizza est réalisée avec passion et minutie dans notre pizzeria à Valleiry, pour vous offrir une expérience authentique et inoubliable.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-bold text-primary text-xl mb-2">13</h3>
                <p className="text-gray-600">Années</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-bold text-primary text-xl mb-2">40+</h3>
                <p className="text-gray-600">Pizzas uniques</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="font-bold text-primary text-xl mb-2">100%</h3>
                <p className="text-gray-600">Fait maison</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;