"use client";
import { useState } from "react";

const FAQ_DATA = [
    {
        question: "O aplicativo é gratuito?",
        answer: "Sim, o Lumi é totalmente gratuito e sempre será. Nossa missão é ajudar pessoas.",
    },
    {
        question: "Como funciona o botão de emergência?",
        answer: "O botão de emergência, quando ativado, envia sua localização em tempo real para contatos de confiança e autoridades cadastradas.",
    },
    {
        question: "Minhas informações são seguras?",
        answer: "Todas as informações são criptografadas e protegidas seguindo os mais rigorosos padrões de segurança digital.",
    },
    {
        question: "Em quais dispositivos posso usar?",
        answer: "O Lumi está disponível para Android e iOS, e pode ser acessado em qualquer smartphone ou tablet.",
    },
];

export default function FaqSection() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq((prev) => (prev === index ? null : index));
    };

    return (
        <section className="py-20 px-4 bg-purple-50 text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-8 text-center">
                    <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-purple-900 mb-4 tracking-wide relative z-10">
                        Perguntas Frequentes
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-purple-950 lg:text-4xl font-semibold leading-snug">
                        Tire suas{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                            dúvidas
                        </span>{" "}
                        sobre a Lumi.
                    </p>
                </div>

                <div className="mt-12 space-y-4">
                    {FAQ_DATA.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#18003a] backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 shadow-lg"
                        >
                            <button
                                className="flex justify-between items-center w-full p-5 sm:p-6 cursor-pointer gap-4 text-left"
                                onClick={() => toggleFaq(index)}
                            >
                                <h3 className="text-lg sm:text-xl font-medium flex-1">{item.question}</h3>
                                <span
                                    className={`w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-xl transition-transform duration-300 shrink-0 ${
                                        activeFaq === index ? "rotate-180" : ""
                                    }`}
                                >
                                    {activeFaq === index ? "−" : "+"}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    activeFaq === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="px-5 sm:px-6 pb-6 leading-relaxed text-white/90">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
