"use client";

import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-purple-900 mb-4 tracking-wide text-center relative z-10">
                    Contato e Suporte
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mt-12 max-w-6xl mx-auto">
                    <div className="bg-[#18003a] text-white p-8 rounded-3xl h-fit">
                        <h3 className="text-2xl font-semibold mb-8 text-pink-400">Canais de Atendimento</h3>
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="text-base text-start">Central 24h: XX XXXXX-XXXX</span>
                            </li>

                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-base text-start">contato@lumi.app</span>
                            </li>
                        </ul>
                    </div>

                    <form className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl">
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-left text-[#18003a] font-medium">
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
                            <label htmlFor="email" className="block mb-2 text-left text-[#18003a] font-medium">
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
                            <label htmlFor="message" className="block mb-2 text-left text-[#18003a] font-medium">
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
    );
}
