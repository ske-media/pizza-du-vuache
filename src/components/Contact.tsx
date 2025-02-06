import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">80 Rte de Saint-Julien-en-Genevois<br />74520 Valleiry</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Commander par téléphone</h3>
                    <div className="space-y-2">
                      <a
                        href="tel:+33450386798"
                        className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        COMMANDER
                      </a>
                      <p className="text-gray-600">+33 4 50 38 67 98</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horaires d'ouverture</h3>
                    <p className="text-gray-600">
                      Ouvert 6 jours sur 7<br />
                      De 17h à 22h<br />
                      Fermé le lundi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.914567837518!2d5.979987715796274!3d46.13383217911471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c269982e1e569%3A0x257c62057e41bce6!2s80%20Rte%20de%20Saint-Julien-en-Genevois%2C%2074520%20Valleiry%2C%20France!5e0!3m2!1sen!2sfr!4v1700000000000!5m2!1sen!2sfr%22width=%22600%22height=%22450"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;