import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511985142772?text=Olá Nei! Vim do seu site FastRepair e preciso de um reparo rápido!', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-amber-500 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📲 Agende agora seu reparo
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Chega de adiar aquela coisinha que precisa arrumar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center mb-12"
        >
          <Button
            size="lg"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Quero Agendar Meu Reparo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white bg-opacity-20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">Ou mande uma mensagem para:</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                <span className="text-lg font-semibold">(11) 98514-2772</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Atendimento em São Paulo - SP</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}