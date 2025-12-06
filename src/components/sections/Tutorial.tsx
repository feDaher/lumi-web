import Image from "next/image";
import ImageSelector from "@/components/ui/ImageSelector";

export default function TutorialSection() {
    const steps = [
        { id: 1, title: "Baixe o Aplicativo", desc: "Disponível para iOS e Android." },
        { id: 2, title: "Cadastre-se", desc: "Crie sua conta em poucos minutos." },
        { id: 3, title: "Está Protegida", desc: "Acesso imediato às funcionalidades." },
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-purple-900 mb-4 sm:mb-8 tracking-wide relative z-10">
                    Como Usar?
                </h1>

                <p className="text-xl sm:text-2xl md:text-3xl text-purple-950 lg:text-4xl font-semibold mb-8 leading-snug">
                    Acompanhe o tutorial e entenda como utilizar os recursos.
                </p>

                <ImageSelector />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center"
                        >
                            <div className="relative w-[70px] h-[70px] mb-4 flex-shrink-0">
                                <Image
                                    src="/tutorial_images/Ellipse.png"
                                    alt={`Passo ${step.id}`}
                                    width={70}
                                    height={70}
                                />
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                                    {step.id}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-center">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
