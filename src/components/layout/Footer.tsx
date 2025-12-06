import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#18003a] text-white pt-16">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-wrap justify-center gap-12 lg:gap-16 text-left mb-12">
                    <div className="flex-1 min-w-[250px]">
                        <h3 className="text-pink-400 text-xl mb-6 relative pb-3">
                            Sobre o Lumi
                            <span className="absolute left-0 bottom-0 w-10 h-0.5 bg-pink-400"></span>
                        </h3>
                        <p className="leading-relaxed mb-6 opacity-85">
                            Aplicativo dedicado ao combate à violência doméstica, oferecendo suporte e proteção 24/7.
                        </p>
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
                                <Phone className="w-5 h-5 text-pink-400 min-w-[20px]" />
                                <span>0800 XXX XXXX</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-pink-400 min-w-[20px]" />
                                <span>contato@lumi.app</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-pink-400 min-w-[20px]" />
                                <span>Manhuaçu, MG</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-[#0d0020] py-6 px-8 text-center">
                <p className="opacity-80 mb-3">&copy; 2025 Lumi. Todos os direitos reservados.</p>

                <div className="flex flex-wrap justify-center gap-6">
                    <a href="#" className="text-white/80 transition-all duration-300 hover:text-pink-400">
                        Privacidade
                    </a>
                    <a href="#" className="text-white/80 transition-all duration-300 hover:text-pink-400">
                        Termos de Uso
                    </a>
                    <a href="#" className="text-white/80 transition-all duration-300 hover:text-pink-400">
                        Cookies
                    </a>
                </div>
            </div>
        </footer>
    );
}
