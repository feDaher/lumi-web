import React from "react"
import Image from "next/image"
import ImageSelector from "@/components/ImageSelector"

export default function TutorialPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[80px] font-arial text-[#59168B] mb-6">
            Como Usar?
          </h2>

          <p className="text-[38px] text-[#3C0366] mb-12 font-arial font-semibold">
            Assista ao tutorial completo e entenda como utilizar os recursos.
          </p>
          
          <ImageSelector />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
              <div className="relative w-[70px] h-[70px] mb-4 flex-shrink-0">
                <Image
                  src="/tutorial_images/Ellipse.png"
                  alt="Passo 1"
                  width={70}
                  height={70}
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Baixe o Aplicativo
              </h3>
              <p className="text-gray-600 text-center">
                Disponível para iOS e Android.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
              <div className="relative w-[70px] h-[70px] mb-4 flex-shrink-0">
                <Image
                  src="/tutorial_images/Ellipse.png"
                  alt="Passo 2"
                  width={70}
                  height={70}
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Cadastre-se
              </h3>
              <p className="text-gray-600 text-center">
                Crie sua conta em poucos minutos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center">
              <div className="relative w-[70px] h-[70px] mb-4 flex-shrink-0">
                <Image
                  src="/tutorial_images/Ellipse.png"
                  alt="Passo 3"
                  width={70}
                  height={70}
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Está Protegida
              </h3>
              <p className="text-gray-600 text-center">
                Acesso imediato às funcionalidades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
