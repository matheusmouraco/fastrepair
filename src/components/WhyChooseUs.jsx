
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Shield,
  DollarSign,
  Users,
  CheckCircle,
  Target,
  Award // Added Award icon
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: "Atendimento ágil",
      description: "Agendamento fácil e execução rápida",
      color: "text-orange-500",
      bgColor: "bg-orange-100"
    },
    {
      icon: Shield,
      title: "Serviço limpo e direto",
      description: "Sem bagunça, sem enrolação, tudo no lugar",
      color: "text-green-500",
      bgColor: "bg-green-100"
    },
    {
      icon: DollarSign,
      title: "Transparência",
      description: "Orçamento claro e combinado antes do início",
      color: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      icon: Users,
      title: "Profissionalismo",
      description: "Técnicos capacitados, educados e pontuais",
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      icon: Target,
      title: "Segurança e praticidade",
      description: "Ideal para quem busca soluções sem estresse",
      color: "text-red-500",
      bgColor: "bg-red-100"
    },
    {
      icon: Award,
      title: "Garantia e Confiança",
      description: "Serviços com garantia e profissionais qualificados",
      color: "text-teal-500",
      bgColor: "bg-teal-100"
    }
  ];

  const targetAudience = [
    "Você mora sozinho(a) e precisa de ajuda para instalar ou arrumar algo em casa?",
    "Não tem tempo (ou paciência) pra lidar com reparos domésticos?",
    "Quer um profissional de confiança, que resolva sem enrolação?"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            💡 Para quem é a FastRepair?
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* New wrapper div for target audience questions */}
            <div className="inline-block text-left">
              {targetAudience.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 mb-6" /* text-left removed from here */
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{question}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-orange-200"
          >
            <p className="text-lg text-gray-700 font-medium">
              Se você respondeu <span className="text-orange-500 font-bold">sim</span> para qualquer uma dessas,
              a FastRepair foi feita pra você.
            </p>
            <p className="text-gray-600 mt-2">
              Somos como um <strong>&quot;marido de aluguel&quot;</strong> moderno — prontos pra resolver,
              com agilidade e respeito ao seu tempo.
            </p>
          </motion.div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🚀 Por que contratar a FastRepair?
          </h2>
          <p className="text-xl text-gray-600">
            Chega de depender de favores ou esperar dias por um pedreiro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${reason.bgColor} flex items-center justify-center`}>
                    <reason.icon className={`w-8 h-8 ${reason.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-8 rounded-2xl">
            <p className="text-xl font-semibold">
              Na FastRepair, o atendimento é sob medida para sua rotina.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
