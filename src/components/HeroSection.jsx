
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Wrench, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511985142772?text=Olá Nei! Vim do seu site FastRepair e preciso de um reparo rápido!', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-100 via-white to-amber-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-8 h-8 text-orange-400">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>
            <path d="m8 12 2 2 4-4"/>
          </svg>
        </div>
        <div className="absolute top-40 right-32 w-6 h-6 text-amber-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 text-orange-300">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>
            <path d="m8 12 2 2 4-4"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 w-7 h-7 text-amber-300">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                <Wrench className="w-4 h-4" />
                FastRepair
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Reparos <span className="text-orange-500">rápidos</span>,<br />
                do seu jeito.
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Seu chuveiro queimou? Uma tomada parou de funcionar? A parede precisa de pintura?
                <br /><br />
                Na FastRepair, você encontra soluções rápidas e seguras para os pequenos problemas do dia a dia.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Reparo
              </Button>
            </motion.div>
          </motion.div>

          {/* Logo Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cdd040dbb_WhatsAppImage2025-04-16at110146PM.jpg"
                alt="FastRepair - Reparos rápidos"
                className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-lg"
              >
                <Wrench className="w-6 h-6 text-orange-500" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg"
              >
                <Zap className="w-6 h-6 text-amber-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
