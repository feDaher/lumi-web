"use client";

import { Download } from "lucide-react";

interface HeroSectionProps {
    onOpenDownload: () => void;
}

export default function HeroSection({ onOpenDownload }: HeroSectionProps) {
    return (
        <div className="h-[calc(100vh-80px)] w-full flex items-center justify-center px-4 sm:px-4 py-4">
            <div
                className="relative flex justify-center items-center overflow-hidden
                bg-[url(/image_home.png)] rounded-lg bg-no-repeat bg-center bg-cover
                w-full h-full
                shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-shadow duration-500
                "
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 space-y-4 sm:px-6 md:px-8 h-full py-16">
                    <div>
                        <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-xl">
                            Você Merece Paz
                        </h2>
                        <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-light italic drop-shadow-xl mt-4">
                            E Não Está Sozinha
                        </h2>
                    </div>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-2xl leading-relaxed font-normal italic drop-shadow-2xl text-gray-300">
                        A força para recomeçar já vive em você. Cada passo, por menor que pareça, é um ato de coragem.
                        Estamos aqui para lembrar: há caminhos, há apoio, e há esperança.
                    </p>

                    <button
                        onClick={onOpenDownload}
                        className="mt-8 flex items-center justify-center gap-4 bg-pink-600 px-12 py-6 rounded-lg cursor-pointer border-2 border-pink-800 hover:bg-transparent hover:border-white transition-all text-white"
                    >
                        <Download className="w-6 h-6 sm:w-7 sm:h-7 animate-bounce" />
                        <span className="font-semibold text-lg">Baixar Lumi</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
