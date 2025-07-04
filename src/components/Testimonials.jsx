import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Gabriela T.",
      text: "O profissional da FastRepair chegou no horário, foi super educado e resolveu tudo muito rápido. Excelente!",
      rating: 5
    },
    {
      name: "Rodrigo P.",
      text: "Já contratei duas vezes: primeiro pra trocar o chuveiro, depois pra pintar a parede. Serviço impecável.",
      rating: 5
    },
    {
      name: "Elaine C.",
      text: "Nunca mais fiquei esperando alguém aparecer. Com a FastRepair, em poucas horas estava tudo pronto.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            💬 O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Veja os depoimentos de quem já confiou na FastRepair
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Quote className="w-6 h-6 text-orange-500" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">— {testimonial.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}