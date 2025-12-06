"use client";

import { useState } from "react";
import Image from "next/image";

const tutorialImages = [
    {
        src: "/tutorial_images/hero_section.png",
        alt: "Tela inicial do LUMI com opções de login e cadastro",
        description: "Ao entrar no site LUMI, cadastre-se ou faça o login para desbloquear o download do aplicativo.",
    },
    {
        src: "/tutorial_images/register_page.png",
        alt: "Tela de cadastro do LUMI",
        description:
            "Ao aperta em cadastro, ira aparecer esta tela, aonde você deverá colocar alguns de seus dados pessoais.",
    },
    {
        src: "/tutorial_images/hero_section_2.png",
        alt: "Tela principal logada com botão de download",
        description:
            "Ao realizar o login ou o cadastro você era voltar a tela principal e iria aparecer esse botão, aperte-o.",
    },
    {
        src: "/tutorial_images/download.png",
        alt: "Janela de download do aplicativo LUMI",
        description: "Irá aparecer está janela, ao clicar neste botão ira fazer o download do aplicativo LUMI.",
    },
];

export default function ImageSelector() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, tutorialImages.length - 1));
    };

    const isAtFirstImage = currentIndex === 0;
    const isAtLastImage = currentIndex === tutorialImages.length - 1;

    return (
        <div className="w-Afull mb-16 rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto bg-gray-50 p-6">
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden bg-black">
                <Image
                    src={tutorialImages[currentIndex].src}
                    alt={tutorialImages[currentIndex].alt}
                    fill
                    className="object-contain transition-opacity duration-300"
                />

                <div
                    className="absolute bottom-0 left-0 w-full p-6 
                     bg-gradient-to-t from-black/80 to-transparent"
                >
                    <p className="text-white text-lg font-semibold text-left shadow-lg max-w-lg">
                        {tutorialImages[currentIndex].description}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between mt-4">
                <button
                    onClick={handlePrevious}
                    disabled={isAtFirstImage}
                    className="px-5 py-2 bg-[#59168B] text-white rounded-lg shadow-md flex items-center gap-2
                     disabled:bg-gray-300 cursor-pointer disabled:cursor-not-allowed 
                     transition-colors duration-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    Voltar
                </button>

                <div className="flex gap-2">
                    {tutorialImages.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                                currentIndex === index ? "bg-[#59168B]" : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={isAtLastImage}
                    className="px-5 py-2 bg-[#59168B] text-white rounded-lg shadow-md flex items-center gap-2
                     disabled:bg-gray-300 cursor-pointer disabled:cursor-not-allowed
                     transition-colors duration-200"
                >
                    Seguir
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
