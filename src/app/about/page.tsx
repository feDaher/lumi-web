import Image from 'next/image';

export default function SobreLumi() {
  return (
    <section className="min-h-screen w-full px-4 sm:px-10 md:px-16 lg:px-24 py-4 flex flex-col items-center justify-center overflow-hidden relative">
                <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-purple-900 mb-10 sm:mb-14 tracking-wide text-center relative z-10">
                    Sobre a Lumi
                </h1>

                <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20 z-10">
                    <div className="flex-1 flex justify-center items-center">
                        <div className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-auto aspect-square">
                            <Image
                                src="/avatar lumi.png"
                                alt="Avatar Lumi"
                                width={500}
                                height={500}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col space-y-6 sm:space-y-8 text-purple-950 max-w-xl sm:max-w-4xl sm:px-0 text-left">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
                            Tecnologia que acolhe, inovação que transforma vidas.
                        </h2>

                        <div className="text-base sm:text-lg md:text-2xl leading-relaxed text-gray-700 space-y-4 text-justify">
                            <p>
                                A Lumi é mais do que um aplicativo — é uma rede de apoio. Desenvolvida
                                com empatia e tecnologia, nossa missão é oferecer{" "}
                             proteção, informação e autonomia para mulheres em qualquer situação de
                                vulnerabilidade.
                            </p>
                            <p>
                                Por meio de recursos inteligentes comoalertas instantâneos,{" "}
                             localização em tempo real econtatos de confiança, a
                                Lumi ajuda a garantir que ajuda nunca esteja longe.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
  );
}