"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import ImageSelector from "@/components/ImageSelector"
import FunctionsPage from "@/components/FunctionsSection"

export default function LumiLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index))
  }

  // NOVA FUNÇÃO: Gerencia o scroll suave e fecha o menu se necessário
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  return (
    <div className="h-full w-full">
      {/* HERO */}
      <div className="h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50 flex flex-col space-y-4 py-4">
        {/* HEADER */}
        <div className="border-b border-b-zinc-500">
          <header className="flex justify-between px-4 sm:px-4 items-center pb-2 w-full mx-auto z-50 relative">
            <h1 className="text-3xl sm:text-4xl bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Lumi
            </h1>

            {/* NAV DESKTOP */}
            <nav className="hidden md:flex gap-8 lg:gap-10 text-base font-medium text-gray-700">
              <a
                href="#sobre"
                onClick={(e) => handleScroll(e, "sobre")} // ALTERAÇÃO: Scroll suave desktop
                className="relative group hover:text-purple-600 transition-colors duration-300"
              >
                Sobre a Lumi
                <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full"></span>
              </a>
              
              
              <a
                href="#"
                className="relative group hover:text-purple-600 transition-colors duration-300"
              >

                <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full"></span>
              </a>

              <a
                href="#"
                className="relative group hover:text-purple-600 transition-colors duration-300"
              >

                <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full"></span>
              </a>
            </nav>

            {/* BOTÕES DESKTOP */}
            <div className="hidden md:flex items-center gap-3 sm:gap-4">
              <button className="px-6 cursor-pointer sm:px-8 py-2.5 sm:py-3 font-semibold text-sm sm:text-base text-gray-800 hover:text-purple-700 transition-all duration-300 ease-out">
                <Link href={"/login"}>Entrar</Link>
              </button>
              <button className="bg-gradient-to-r cursor-pointer from-purple-700 to-pink-600 text-white font-semibold text-sm sm:text-base px-7 sm:px-9 py-2.5 sm:py-3 rounded-xl hover:scale-[1.03] transition-all duration-300 ease-out">
                <Link href={"/register"}>Cadastrar</Link>
              </button>
            </div>

            {/* BOTÃO MOBILE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-gray-100 transition"
            >
              <span
                className={`block w-6 h-[2px] bg-gray-800 transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-[2px] bg-gray-800 my-[5px] transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-[2px] bg-gray-800 transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              ></span>
            </button>

            {/* MENU MOBILE */}
            {menuOpen && (
              <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md flex flex-col items-center py-6 space-y-4 md:hidden animate-fadeIn z-40">
                <a
                  href="#sobre"
                  className="text-lg font-medium text-gray-800 hover:text-purple-700 transition-all"
                  onClick={(e) => handleScroll(e, "sobre")} // ALTERAÇÃO: Scroll suave mobile
                >
                  Sobre a Lumi
                </a>
                <a
                  href="#"
                  className="text-lg font-medium text-gray-800 hover:text-purple-700 transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  Artigos
                </a>
                <a
                  href="#"
                  className="text-lg font-medium text-gray-800 hover:text-purple-700 transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  Nossa Equipe
                </a>
                <div className="flex flex-row gap-3 pt-3">
                  <button className="px-6 cursor-pointer sm:px-8 py-2.5 sm:py-3 font-semibold text-sm sm:text-base text-gray-800 hover:text-purple-700 transition-all duration-300 ease-out">
                    <Link href={"/login"}>Entrar</Link>
                  </button>
                  <button className="bg-gradient-to-r from-purple-700 to-pink-600 text-white font-semibold px-8 py-3 rounded-xl hover:scale-[1.03] transition-all">
                    <Link href={"/register"}>Cadastrar</Link>
                  </button>
                </div>
              </div>
            )}
          </header>
        </div>

        {/* MAIN HERO */}
        <main className="flex-1 w-full flex mx-auto items-center justify-center px-4 sm:px-4">
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
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-2xl leading-relaxed drop-shadow-lg font-light text-gray-100">
                A força para recomeçar já vive em você. Cada passo, por menor
                que pareça, é um ato de coragem. Estamos aqui para lembrar: há
                caminhos, há apoio, e há esperança.
              </p>

              <button
                onClick={() => setDownloadModalOpen(true)}
                className="flex items-center justify-center gap-4 bg-pink-600 px-12 py-6 rounded-lg cursor-pointer border-2 border-pink-800 hover:bg-transparent hover:border-white transition-all "
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span className="font-semibold">Baixar Lumi</span>
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* MODAL DE DOWNLOAD */}
      {downloadModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-8 sm:p-10 w-[90%] max-w-md relative text-center space-y-6">
            <button
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-600 text-2xl font-bold transition-all"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold text-purple-800">
              Baixar Lumi
            </h2>
            <p className="text-gray-700">
              Obrigado por estar conosco! Clique abaixo para baixar o app:
            </p>
            <a
              href="#"
              className="bg-gradient-to-r from-purple-700 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform inline-block"
            >
              Download do APP
            </a>
          </div>
        </div>
      )}
      {/* ABOUT */}
      <section
        id="sobre" // ALTERAÇÃO: Adicionado ID para âncora
        className="min-h-screen w-full px-4 sm:px-10 md:px-16 lg:px-24 py-4 flex flex-col items-center justify-center overflow-hidden relative"
      >
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-purple-900 mb-10 sm:mb-14 tracking-wide text-center relative z-10">
          Sobre a Lumi
        </h1>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20 z-10">
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-auto aspect-square">
              <Image
                src="/avatar_lumi.png"
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
                A Lumi é mais do que um aplicativo — é uma rede de apoio.
                Desenvolvida com empatia e tecnologia, nossa missão é oferecer{" "}
                proteção, informação e autonomia para mulheres em qualquer
                situação de vulnerabilidade.
              </p>
              <p>
                Por meio de recursos inteligentes como alertas instantâneos,{" "}
                localização em tempo real e contatos de confiança, a Lumi ajuda
                a garantir que ajuda nunca esteja longe.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FUNCIONALIDADES */}
      <FunctionsPage />
      {/* TUTORIAL */}
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

      {/* FAQ */}
      <section className="py-20 px-4 bg-purple-50 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-[80px] font-arial text-[#59168B] mb-6 semi-bold">
              Perguntas Frequentes
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-purple-950 lg:text-4xl font-semibold text-center leading-snug">
              Tire suas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                dúvidas
              </span>{" "}
              sobre a Lumi.
            </p>
          </div>

          <div className="max-h-[calc(100vh-250px)] mt-8 overflow-y-auto px-4 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-pink-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-pink-700">
            <div className="bg-[#18003a] backdrop-blur-sm rounded-xl mb-2 overflow-hidden transition-all duration-300 shadow-lg">
              <div
                className="flex justify-between items-center p-5 sm:p-6 cursor-pointer gap-4"
                onClick={() => toggleFaq(0)}
              >
                <h3 className="text-lg sm:text-xl font-medium flex-1">
                  O aplicativo é gratuito?
                </h3>
                <span
                  className={`w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-xl transition-transform duration-400 ${
                    activeFaq === 0 ? "rotate-[360deg]" : ""
                  }`}
                >
                  {activeFaq === 0 ? "−" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  activeFaq === 0
                    ? "max-h-96 opacity-100 pb-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 sm:px-6 leading-relaxed text-white/95">
                  Sim, o Lumi é totalmente gratuito e sempre será. Nossa missão
                  é ajudar pessoas.
                </p>
              </div>
            </div>

            <div className="bg-[#18003a] backdrop-blur-sm rounded-xl mb-2 overflow-hidden transition-all duration-300 shadow-lg">
              <div
                className="flex justify-between items-center p-5 sm:p-6 cursor-pointer gap-4"
                onClick={() => toggleFaq(1)}
              >
                <h3 className="text-lg sm:text-xl font-medium flex-1">
                  Como funciona o botão de emergência?
                </h3>
                <span
                  className={`w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-xl transition-transform duration-400 ${
                    activeFaq === 1 ? "rotate-[360deg]" : ""
                  }`}
                >
                  {activeFaq === 1 ? "−" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  activeFaq === 1
                    ? "max-h-96 opacity-100 pb-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 sm:px-6 leading-relaxed text-white/95">
                  O botão de emergência, quando ativado, envia sua localização
                  em tempo real para contatos de confiança e autoridades
                  cadastradas.
                </p>
              </div>
            </div>

            <div className="bg-[#18003a] backdrop-blur-sm rounded-xl mb-2 overflow-hidden transition-all duration-300 shadow-lg">
              <div
                className="flex justify-between items-center p-5 sm:p-6 cursor-pointer gap-4"
                onClick={() => toggleFaq(2)}
              >
                <h3 className="text-lg sm:text-xl font-medium flex-1">
                  Minhas informações são seguras?
                </h3>
                <span
                  className={`w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-xl transition-transform duration-400 ${
                    activeFaq === 2 ? "rotate-[360deg]" : ""
                  }`}
                >
                  {activeFaq === 2 ? "−" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  activeFaq === 2
                    ? "max-h-96 opacity-100 pb-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 sm:px-6 leading-relaxed text-white/95">
                  Todas as informações são criptografadas e protegidas seguindo
                  os mais rigorosos padrões de segurança digital.
                </p>
              </div>
            </div>

            <div className="bg-[#18003a] backdrop-blur-sm rounded-xl mb-2 overflow-hidden transition-all duration-300 shadow-lg">
              <div
                className="flex justify-between items-center p-5 sm:p-6 cursor-pointer gap-4"
                onClick={() => toggleFaq(3)}
              >
                <h3 className="text-lg sm:text-xl font-medium flex-1">
                  Em quais dispositivos posso usar?
                </h3>
                <span
                  className={`w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-xl transition-transform duration-400 ${
                    activeFaq === 3 ? "rotate-[360deg]" : ""
                  }`}
                >
                  {activeFaq === 3 ? "−" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  activeFaq === 3
                    ? "max-h-96 opacity-100 pb-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 sm:px-6 leading-relaxed text-white/95">
                  O Lumi está disponível para Android e iOS, e pode ser acessado
                  em qualquer smartphone ou tablet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTATO */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[80px] font-arial text-[#59168B] mb-6 semi-bold">
            Contato e Suporte
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mt-12 max-w-6xl mx-auto">
            <div className="bg-[#18003a] text-white p-8 rounded-3xl h-fit">
              <h3 className="text-2xl font-semibold mb-8 text-pink-400">
                Canais de Atendimento
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-base">Central 24h: XX XXXXX-XXXX</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <span className="text-base ">suporte@lumi.app</span>
                </li>
              </ul>
            </div>

            <form className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-left text-[#18003a] font-medium"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:border-[#523b8d] focus:outline-none focus:ring-4 focus:ring-purple-900/10"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-left text-[#18003a] font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:border-[#523b8d] focus:outline-none focus:ring-4 focus:ring-purple-900/10"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-left text-[#18003a] font-medium"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-all duration-300 focus:border-[#523b8d] focus:outline-none focus:ring-4 focus:ring-purple-900/10 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-4 bg-[#523b8d] text-white rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-[#18003a] hover:-translate-y-1"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#18003a] text-white pt-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16 text-left mb-12">
            <div className="flex-1 min-w-[250px]">
              <h3 className="text-pink-400 text-xl mb-6 relative pb-3">
                Sobre o Lumi
                <span className="absolute left-0 bottom-0 w-10 h-0.5 bg-pink-400"></span>
              </h3>
              <p className="leading-relaxed mb-6 opacity-85">
                Aplicativo dedicado ao combate à violência doméstica, oferecendo
                suporte e proteção 24/7.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-pink-600 hover:-translate-y-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-pink-600 hover:-translate-y-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-pink-600 hover:-translate-y-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex-1 min-w-[200px]">
              <h3 className="text-pink-400 text-xl mb-6 relative pb-3">
                Links Rápidos
                <span className="absolute left-0 bottom-0 w-10 h-0.5 bg-pink-400"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#sobre-app"
                    className="text-white/80 transition-all duration-300 hover:text-pink-400 hover:pl-2"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#funcionalidades"
                    className="text-white/80 transition-all duration-300 hover:text-pink-400 hover:pl-2"
                  >
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-white/80 transition-all duration-300 hover:text-pink-400 hover:pl-2"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="text-white/80 transition-all duration-300 hover:text-pink-400 hover:pl-2"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1 min-w-[200px]">
              <h3 className="text-pink-400 text-xl mb-6 relative pb-3">
                Contato
                <span className="absolute left-0 bottom-0 w-10 h-0.5 bg-pink-400"></span>
              </h3>
              <ul className="space-y-3 opacity-85">
                <li className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-pink-400 min-w-[20px]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>0800 XXX XXXX</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-pink-400 min-w-[20px]"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>contato@lumi.app</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-pink-400 min-w-[20px]"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Manhuaçu, MG</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#0d0020] py-6 px-8 text-center">
          <p className="opacity-80 mb-3">
            &copy; 2025 Lumi. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-white/80 transition-all duration-300 hover:text-pink-400"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-white/80 transition-all duration-300 hover:text-pink-400"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-white/80 transition-all duration-300 hover:text-pink-400"
            >
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
