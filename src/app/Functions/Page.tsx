'use client';

import React from 'react';

import { FaShieldAlt, FaComments, FaUsers, FaBookOpen } from 'react-icons/fa';

import './functions.css';

const featuresData = [
  {
    id: 1,
    icon: <FaShieldAlt size={32} />,
    title: "Botão de Emergência",
    description: "Acione ajuda rapidamente com localização em tempo real e notificação para contatos de confiança.",
  },
  {
    id: 2,
    icon: <FaComments size={32} />,
    title: "Chat Seguro",
    description: "Converse com profissionais especializados de forma segura e anônima, 24 horas por dia.",
  },
  {
    id: 3,
    icon: <FaUsers size={32} />,
    title: "Rede de Apoio",
    description: "Encontre delegacias, centros de apoio e abrigos mais próximos de você.",
  },
  {
    id: 4,
    icon: <FaBookOpen size={32} />,
    title: "Conteúdo Educativo",
    description: "Acesse materiais sobre direitos, prevenção e recursos de apoio disponíveis.",
  },
];

export default function FunctionsPage() {
  return (
    <section className="features-section-simple">
      <h2>Funcionalidades</h2>
      <p className="subtitle-simple">
        Conheça as ferramentas que o Lumi oferece para sua proteção
      </p>

      <div className="features-grid-simple">
        { }
        {featuresData.map((feature) => (
          <div key={feature.id} className="card-simple">
            <div className="icon-wrapper-simple">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}