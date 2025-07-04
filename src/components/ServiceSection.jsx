import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wrench, 
  Zap, 
  Lightbulb, 
  Hammer, 
  Paintbrush, 
  Settings,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceSection() {
  const services = [
    {
      icon: Zap,
      title: "Instalações",
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      items: [
        "Chuveiros elétricos e duchas",
        "Luminárias, pendentes e plafons",
        "Interruptores, tomadas e espelhos",
        "Varais de teto ou parede",
        "Suportes de TV, prateleiras e nichos"
      ]
    },
    {
      icon: Wrench,
      title: "Reparos e Ajustes",
      color: "text-amber-500",
      bgColor: "bg-amber-100",
      items: [
        "Troca de resistência do chuveiro",
        "Troca de sifões, torneiras e registros",
        "Ajuste de portas e janelas",
        "Troca de dobradiças e fechaduras",
        "Vedação de pequenos vazamentos"
      ]
    },
    {
      icon: Paintbrush,
      title: "Pintura e Acabamento",
      color: "text-red-500",
      bgColor: "bg-red-100",
      items: [
        "Pintura de pequenos cômodos",
        "Retoques em áreas danificadas",
        "Rejuntes e silicone",
        "Acabamentos básicos"
      ]
    },
    {
      icon: Settings,
      title: "Outros Serviços",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      items: [
        "Montagem de móveis simples",
        "Fixação de quadros e espelhos",
        "Substituição de itens quebrados",
        "Soluções para problemas domésticos"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🛠️ O que fazemos por você
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Principais reparos rápidos e fáceis que realizamos. Tudo com profissionalismo, 
            preço justo e atendimento descomplicado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${service.bgColor}`}>
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">🔎 Não encontrou o que precisa?</h3>
            <p className="text-lg opacity-90">
              Se for um reparo doméstico rápido e seguro, fale com a gente — provavelmente resolvemos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}