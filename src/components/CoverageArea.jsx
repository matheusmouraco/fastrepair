
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CoverageArea() {
  const zones = [
    {
      name: "Zona Oeste",
      neighborhoods: ["Pinheiros", "Vila Madalena", "Lapa", "Perdizes", "Butantã", "Osasco"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      name: "Zona Sul",
      neighborhoods: ["Vila Mariana", "Moema", "Santo Amaro", "Saúde"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Zona Norte e Leste",
      neighborhoods: ["Santana", "Tucuruvi", "Tatuapé", "Mooca", "Consulte outros"],
      color: "bg-amber-100 text-amber-800"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de consultar disponibilidade na minha região', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🗺️ Atendemos em São Paulo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos pra te atender em toda a região de São Paulo capital, 
            especialmente nos bairros:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {zones.map((zone, index) => (
            <motion.div
              key={zone.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-bold text-gray-900">{zone.name}</h3>
                  </div>
                  <div>
                    {zone.neighborhoods.map((neighborhood, nIndex) => (
                      <span
                        key={nIndex}
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 ${zone.color}`}
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Se estiver dentro da cidade, é só chamar que a gente vai!</h3>
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar Disponibilidade
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
