import React from 'react';
import { FileText, AlertTriangle } from 'lucide-react';

// Types pour le typage strict
type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  priceNormal?: string;
  priceGeante?: string;
};

type Category = {
  category: string;
  items: MenuItem[];
};

type MenuData = {
  pizzas: Category[];
  boissons: Category[];
  desserts: Category[];
};

// Données du menu complètes
const menuData: MenuData = {
  pizzas: [
    {
      category: "Pizzas sans tomate, à la crème",
      items: [
        {
          name: "ALPAGE",
          description: "Crème, mozzarella, champignons, oignons, pommes de terre, lard, reblochon",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "TARTIFLETTE",
          description: "Crème, mozzarella, oignons, champignons, pommes de terre, lard, reblochon",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "BIANCA",
          description: "Crème, mozzarella, champignons, speck, raclette, oignons",
          priceNormal: "13,50 €",
          priceGeante: "17,50 €"
        },
        {
          name: "FLAMMEKUECHE",
          description: "Crème, lard, oignons",
          priceNormal: "12,00 €",
          priceGeante: "15,00 €"
        }
      ]
    },
    {
      category: "Pizzas tomate + crème",
      items: [
        {
          name: "ROSA",
          description: "Tomate, crème, jambon blanc, mozzarella, oignons, huile d'olive basilic",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "ROQUEFORT",
          description: "Tomate, crème, mozzarella, roquefort",
          priceNormal: "13,50 €",
          priceGeante: "17,50 €"
        },
        {
          name: "HAWAÏENNE",
          description: "Tomate, crème, champignons, jambon blanc, mozzarella, ananas",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "BORNANDINE",
          description: "Tomate, crème, champignons, lard, reblochon",
          priceNormal: "13,00 €",
          priceGeante: "16,00 €"
        },
        {
          name: "CARBONARA",
          description: "Tomate, crème, mozzarella, lardons, œuf, parmesan",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "SAUMON",
          description: "Tomate, crème, mozzarella, saumon fumé, citron",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        }
      ]
    },
    {
      category: "Les Fromages",
      items: [
        {
          name: "SAVOYARDE",
          description: "Tomate, champignons, mozzarella, lard, œuf, reblochon",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "RACLETTE",
          description: "Tomate, patates, speck, œuf, mozzarella, raclette, cornichons",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "SEGUIN",
          description: "Tomate, jambon blanc, champignons, mozzarella, fromage de chèvre",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "CHÈVRE MIEL",
          description: "Tomate, noix, mozzarella, fromage de chèvre, miel",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "AUBERGINE",
          description: "Tomate, champignons, aubergines, mozzarella, fromage de chèvre, olives",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "AUVERGNATE",
          description: "Tomate, jambon blanc, champignons, mozzarella, bleu d'Auvergne",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "BRIARDE",
          description: "Tomate, jambon blanc, champignons, mozzarella, brie",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "4 FROMAGES",
          description: "Tomate, champignons, reblochon, brie, bleu, mozzarella",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        }
      ]
    },
    {
      category: "Les Viandes",
      items: [
        {
          name: "TEXANE",
          description: "Tomate, mozzarella, bœuf, épices, poivrons, oignons, câpres",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "FERMIÈRE",
          description: "Tomate, champignons, mozzarella, blanc de volaille (halal), œuf, oignons",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "ORIENTALE",
          description: "Tomate, champignons, mozzarella, oignons, poivrons, merguez (halal)",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "KEBAB",
          description: "Tomate, mozzarella, viande de kebab extra (halal), oignons",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "ANDALOUSE",
          description: "Tomate, champignons, mozzarella, oignons, poivrons, chorizo",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "CHÈVRIZO",
          description: "Tomate, mozzarella, fromage de chèvre, chorizo",
          priceNormal: "14,00 €",
          priceGeante: "17,50 €"
        },
        {
          name: "CANNIBALE",
          description: "Tomate, mozzarella, bœuf, chorizo, merguez",
          priceNormal: "15,00 €",
          priceGeante: "18,00 €"
        }
      ]
    },
    {
      category: "Les Classiques",
      items: [
        {
          name: "MARGARITA",
          description: "Tomate, mozzarella",
          priceNormal: "10,50 €",
          priceGeante: "13,00 €"
        },
        {
          name: "NAPOLITAINE",
          description: "Tomate, anchois, mozzarella",
          priceNormal: "11,50 €",
          priceGeante: "14,50 €"
        },
        {
          name: "PARISIENNE",
          description: "Tomate, champignons, mozzarella",
          priceNormal: "11,50 €",
          priceGeante: "14,50 €"
        },
        {
          name: "JAMBON FROMAGE",
          description: "Tomate, jambon blanc, mozzarella",
          priceNormal: "12,50 €",
          priceGeante: "15,50 €"
        },
        {
          name: "REINE",
          description: "Tomate, jambon blanc, champignons, mozzarella",
          priceNormal: "13,00 €",
          priceGeante: "16,00 €"
        },
        {
          name: "PARMA",
          description: "Tomate, mozzarella, speck, olives",
          priceNormal: "14,00 €",
          priceGeante: "17,00 €"
        },
        {
          name: "ITALIA",
          description: "Tomate, mozzarella, parmesan, roquette, speck, tomates fraîches, huile d'olive",
          priceNormal: "15,00 €",
          priceGeante: "18,50 €"
        },
        {
          name: "CALZONE",
          description: "Tomate, jambon blanc, champignons, mozzarella, œuf",
          priceNormal: "15,00 €",
          priceGeante: "18,00 €"
        },
        {
          name: "PROVENÇALE",
          description: "Tomate, tomate fraîche, champignons, mozzarella, oignons, poivrons, câpres, olives, anchois",
          priceNormal: "14,00 €",
          priceGeante: "17,00 €"
        },
        {
          name: "4 SAISONS",
          description: "Tomate, mozzarella, champignons, jambon blanc, artichauts, olives",
          priceNormal: "14,00 €",
          priceGeante: "17,00 €"
        },
        {
          name: "BASILIC",
          description: "Tomate, mozzarella, tomates fraîches, basilic, olives, huile d'olive basilic",
          priceNormal: "13,00 €",
          priceGeante: "16,00 €"
        },
        {
          name: "VÉGÉTARIENNE",
          description: "Tomate, champignons, mozzarella, artichauts, poivrons, oignons, aubergines, câpres, tomates fraîches, olives, huile d'olive basilic",
          priceNormal: "15,50 €",
          priceGeante: "18,50 €"
        }
      ]
    },
    {
      category: "La Mer",
      items: [
        {
          name: "PÊCHEUR",
          description: "Tomate, mozzarella, champignons",
          priceNormal: "12,50 €",
          priceGeante: "15,50 €"
        },
        {
          name: "NORDIQUE",
          description: "Tomate, mozzarella, saumon, crème",
          priceNormal: "12,50 €",
          priceGeante: "16,00 €"
        },
        {
          name: "OCÉANE",
          description: "Tomate, mozzarella, champignons, fruits de mer",
          priceNormal: "13,00 €",
          priceGeante: "17,00 €"
        },
        {
          name: "BALTIQUE",
          description: "Tomate, mozzarella, champignons, saumon, crème",
          priceNormal: "12,50 €",
          priceGeante: "16,00 €"
        }
      ]
    }
  ],
  boissons: [
    {
      category: "Boissons fraîches",
      items: [
        { name: "Eau plate 50 cl", price: "1,20 €" },
        { name: "Eau gazeuse 50 cl", price: "2 €" },
        { name: "Coca Cola 33 cl", price: "3 €" },
        { name: "Orangina 33 cl", price: "3 €" },
        { name: "Oasis 33 cl", price: "3 €" },
        { name: "Energy", price: "2,50 €" }
      ]
    },
    {
      category: "Vins",
      items: [
        { name: "Vin de Provence rosé 75 cl", price: "13 €" },
        { name: "Vin blanc de Savoie 75 cl", price: "11 €" },
        { name: "Côtes-du-rhône 75 cl", price: "11 €" },
        { name: "Vin rouge italien 75 cl", price: "14 €" },
        { name: "Vin rouge de Bordeaux 75 cl", price: "12 €" }
      ]
    },
    {
      category: "Bières",
      items: [
        { name: "1664 33 cl", price: "3 €" },
        { name: "Heineken 33 cl", price: "3 €" },
        { name: "Leffe 50 cl", price: "4,50 €" },
        { name: "Grimbergen 50 cl", price: "4,50 €" },
        { name: "Desperados 50 cl", price: "4,50 €" }
      ]
    }
  ],
  desserts: [
    {
      category: "Glaces",
      items: [
        { name: "Häagen-Dazs 500 ml", price: "11 €" },
        { name: "Häagen-Dazs 100 ml", price: "4,50 €" }
      ]
    }
  ]
};

const PizzaMenu: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'pizzas' | 'boissons' | 'desserts'>('pizzas');
  const [activePizzaCategory, setActivePizzaCategory] = React.useState(menuData.pizzas[0].category);
  const [showAllergens, setShowAllergens] = React.useState(false);

  const PizzaCard = ({ pizza }: { pizza: MenuItem }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2">{pizza.name}</h3>
        <p className="text-gray-600 mb-4">{pizza.description}</p>
        <div className="space-y-1">
          <p className="text-primary">
            <span className="font-semibold">Normal :</span> {pizza.priceNormal}
          </p>
          <p className="text-primary">
            <span className="font-semibold">Géante :</span> {pizza.priceGeante}
          </p>
        </div>
      </div>
    </div>
  );

  const ItemCard = ({ item }: { item: MenuItem }) => (
    <div className="bg-white rounded-lg shadow p-4">
      <p className="font-medium text-gray-800">{item.name}</p>
      <p className="text-primary font-semibold">{item.price}</p>
    </div>
  );

  const AllergenInfo = () => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300 p-4 ${showAllergens ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => setShowAllergens(false)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white rounded-full p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center mb-4 sm:mb-6">
          <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Informations sur les Allergènes</h3>
          <p className="text-gray-600">Informations importantes sur les allergènes présents dans nos pizzas :</p>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Huile de Colza</h4>
            <p className="text-gray-700">Des traces peuvent être présentes dans nos pâtes à pizza</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Lait</h4>
            <p className="text-gray-700">Présent dans :</p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Toutes les pizzas contenant de la crème</li>
              <li>Toutes les pizzas contenant du fromage</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Protéine de Soja</h4>
            <p className="text-gray-700">Présente uniquement dans les pizzas :</p>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Kebab</li>
              <li>Andalouse</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Œufs</h4>
            <p className="text-gray-700">Présent uniquement dans les pizzas où l'œuf est mentionné dans la description</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Noix</h4>
            <p className="text-gray-700">Présentes uniquement dans la pizza Chèvre Miel</p>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 text-center text-sm text-gray-500">
          En cas d'allergie ou d'intolérance, veuillez nous en informer lors de votre commande. Notre équipe est à votre disposition pour vous conseiller.
        </div>
      </div>
    </div>
  );

  const renderPizzas = () => {
    const categoryData = menuData.pizzas.find(cat => cat.category === activePizzaCategory);
    
    if (!categoryData) {
      return <p className="text-center text-gray-600">Aucune pizza disponible dans cette catégorie.</p>;
    }

    return (
      <div className="grid md:grid-cols-2 gap-6">
        {categoryData.items.map((pizza, index) => (
          <PizzaCard key={`${pizza.name}-${index}`} pizza={pizza} />
        ))}
      </div>
    );
  };

  const renderBoissonsEtDesserts = () => {
    const categories = activeTab === 'boissons' ? menuData.boissons : menuData.desserts;
    
    return (
      <div className="space-y-8">
        {categories.map((category, categoryIndex) => (
          <div key={`${category.category}-${categoryIndex}`}>
            <h3 className="text-2xl font-semibold text-primary mb-4">{category.category}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item, itemIndex) => (
                <ItemCard key={`${item.name}-${itemIndex}`} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">La Carte de Pizza du Vuache</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white shadow-sm p-1">
            {['pizzas', 'boissons', 'desserts'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as 'pizzas' | 'boissons' | 'desserts')}
                className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-primary text-white shadow'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'pizzas' && (
          <div className="mb-8 overflow-x-auto scrollbar-hide">
            <div className="flex flex-nowrap justify-start md:justify-center gap-2 pb-2">
              {menuData.pizzas.map((category, index) => (
                <button
                  key={`${category.category}-${index}`}
                  onClick={() => setActivePizzaCategory(category.category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                    activePizzaCategory === category.category
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          {activeTab === 'pizzas' ? renderPizzas() : renderBoissonsEtDesserts()}
        </div>

        <div className="mt-16 text-center space-y-4">
          <button
            onClick={() => setShowAllergens(true)}
            className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl mr-4 mb-4 sm:mb-0"
          >
            <AlertTriangle className="w-5 h-5 mr-2" />
            Allergènes
          </button>
          
          <a
            href="/assets/menu_pizza.pdf?v=2024"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <FileText className="w-5 h-5 mr-2" />
            Télécharger le menu Pizza du Vuache
          </a>
        </div>

        <AllergenInfo />
      </div>
    </section>
  );
};

export default PizzaMenu;