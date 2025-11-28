"use client"

import React from "react"
import { Shield, MessageCircle, Users, BookOpen } from "lucide-react"

const featuresData = [
  {
    id: 1,
    icon: <Shield size={32} />,
    title: "Botão de Emergência",
    description:
      "Acione ajuda rapidamente com localização em tempo real e notificação para contatos de confiança.",
  },
  {
    id: 2,
    icon: <MessageCircle size={32} />,
    title: "Chat Seguro",
    description:
      "Converse com profissionais especializados de forma segura e anônima, 24 horas por dia.",
  },
  {
    id: 3,
    icon: <Users size={32} />,
    title: "Rede de Apoio",
    description:
      "Encontre delegacias, centros de apoio e abrigos mais próximos de você.",
  },
  {
    id: 4,
    icon: <BookOpen size={32} />,
    title: "Conteúdo Educativo",
    description:
      "Acesse materiais sobre direitos, prevenção e recursos de apoio disponíveis.",
  },
]

export default function FunctionsSection() {
  return (
    <section className="w-full py-20 px-5 text-center font-[Arial,sans-serif] bg-[#fdfdfd] flex flex-col justify-center items-center">
      <h2 className="text-[2rem] sm:text-[2.75rem] text-[#5A2D82] mb-[15px] font-bold">
        Funcionalidades
      </h2>

      <p className="text-[1rem] sm:text-[1.1rem] text-[#555] mb-[30px] sm:mb-[50px] max-w-[500px] mx-auto">
        Conheça as ferramentas que o Lumi oferece para sua proteção
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-[30px] max-w-[1200px] mx-auto">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-[20px] p-[30px_20px] sm:p-[35px_25px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.07)] transition-all duration-300 ease-out flex flex-col items-center hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
          >
            <div className="w-[80px] h-[80px] rounded-full bg-[#5A2D82] flex items-center justify-center mb-[25px] text-white">
              {feature.icon}
            </div>
            <h3 className="text-[1.3rem] font-semibold text-[#333] mb-[15px]">
              {feature.title}
            </h3>
            <p className="text-[0.95rem] text-[#666] leading-[1.6]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
