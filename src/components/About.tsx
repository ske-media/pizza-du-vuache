import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="fade-in aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl">
            <h1 className="sr-only">Pizza du Vuache - La meilleure pizzeria artisanale de Valleiry</h1>
            <img
              src="https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?auto=format&fit=crop&q=80&w=800"
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
              Depuis 2012, Pizza du Vuache fait vibrer les papilles des Valleiriens avec d'authentiques pizzas italiennes. Notre secret ? Une passion débordante et un savoir-faire artisanal qui ont fait de nous une référence incontournable en Haute-Savoie.
            </p>
            <p className="text-gray-700 mb-6">
              Entre tradition italienne et esprit du Mont Vuache, chacune de nos créations raconte une histoire. Des ingrédients frais minutieusement sélectionnés, des recettes authentiques et un tour de main unique : voilà la recette de notre succès !
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