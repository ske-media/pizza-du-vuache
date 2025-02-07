import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Praxa Phithak",
    text: "Excellentes pizzas, le personnel est très chaleureux!!! je visite tellement leur machine 24/24 qu'elle est devenue une membre de ma famille 😂",
    rating: 5,
    date: "il y a 2 mois",
    source: "Google"
  },
  {
    name: "Bruno",
    text: "Des pizzas généreuses et qui ont du goût, je recommande cette bonne adresse. Grande variété de pizzas 🍕 pour des prix raisonnables.",
    rating: 5,
    date: "il y a 3 mois",
    source: "Google"
  },
  {
    name: "Arno Savoy",
    text: "Excellente végétarienne mais elles sont toutes extra. Garniture juste ce qu'il faut pas trop ni trop peu. Et service sympa",
    rating: 5,
    date: "il y a 1 mois",
    source: "Google"
  },
  {
    name: "Kevin Porret",
    text: "Pizza toujours de très bonnes qualités je recommande",
    rating: 5,
    date: "il y a 2 semaines",
    source: "Google"
  },
  {
    name: "Jennifer Kuennegel",
    text: "Les pizzas sont exceptionnelles !!!",
    rating: 5,
    date: "il y a 1 mois",
    source: "Google"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleTestimonialClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Avis clients Pizza du Vuache
          </h2>
          <p className="text-gray-600 text-lg">
            Découvrez ce que nos clients pensent de Pizza du Vuache sur Google
          </p>
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] fade-in">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute w-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'opacity-100 translate-x-0'
                      : index < currentIndex
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center space-x-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                          alt="Google Logo"
                          className="w-4 h-4 mr-2"
                        />
                        {testimonial.date}
                      </div>
                    </div>

                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    
                    <p className="text-gray-700 text-lg mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-xl font-semibold text-primary">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-primary">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">Client vérifié</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleTestimonialClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-gray-300 hover:bg-primary/50'
                  }`}
                  aria-label={`Voir l'avis ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google Logo"
              className="w-5 h-5"
            />
            <span className="font-semibold text-gray-700">Note moyenne de 4,5/5 sur Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;