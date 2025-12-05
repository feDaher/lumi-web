"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "@/store/session";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const user = useSession((state) => state.user);
    const logout = useSession((state) => state.logout);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <div className="border-b border-b-zinc-500 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
            <header className="flex justify-between px-4 sm:px-4 items-center py-3 w-full mx-auto">
                <h1 className="text-3xl sm:text-4xl bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent font-bold">
                    Lumi
                </h1>

                <nav className="hidden md:flex md:items-center md:justify-center text-lg font-medium text-gray-700 gap-8">
                    <button
                        onClick={() => handleScroll("sobre")}
                        className="relative group hover:text-purple-600 transition bg-transparent border-none cursor-pointer"
                    >
                        Sobre a Lumi
                        <span className="absolute bottom-[-5px] left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                    </button>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    {!user ? (
                        <>
                            <Link
                                href="/login"
                                className="px-6 py-2.5 font-semibold text-gray-800 hover:text-purple-700 transition"
                            >
                                Entrar
                            </Link>
                            <Link
                                href="/register"
                                className="bg-gradient-to-r from-purple-700 to-pink-600 text-white font-semibold px-7 py-2.5 rounded-xl hover:scale-[1.03] transition-all"
                            >
                                Cadastrar
                            </Link>
                        </>
                    ) : (
                        <div className="flex items-center gap-4">
                            <p className="text-gray-700 text-lg">
                                Olá,{" "}
                                <span className="font-semibold text-purple-700">
                                    {user.name?.split(" ")[0] || "Usuário"}
                                </span>
                                .
                            </p>
                            <button
                                onClick={logout}
                                className="font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer bg-red-500 text-white hover:bg-red-600 py-2 px-4 text-sm"
                            >
                                Sair
                            </button>
                        </div>
                    )}
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-gray-100 transition z-50"
                    aria-label="Menu"
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

                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md flex flex-col items-center py-6 space-y-4 md:hidden animate-fadeIn z-40">
                        <button
                            onClick={() => handleScroll("sobre")}
                            className="text-lg font-medium text-gray-800 hover:text-purple-700 transition"
                        >
                            Sobre a Lumi
                        </button>

                        <div className="flex items-center gap-3 pt-3 flex-col w-full px-8">
                            {!user ? (
                                <>
                                    <Link
                                        href="/login"
                                        className="w-full text-center py-2 font-semibold text-gray-800 hover:text-purple-700"
                                    >
                                        Entrar
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="px-6 py-2.5 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-purple-700 to-pink-600 text-white hover:scale-[1.03] shadow-lg shadow-purple-500/20 border-0 w-full"
                                    >
                                        Cadastrar
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <p className="text-lg text-gray-800">
                                        Olá,{" "}
                                        <span className="font-semibold text-purple-700">
                                            {" "}
                                            {user.name?.split(" ")[0] || "Usuário"}
                                        </span>
                                        .
                                    </p>

                                    <button
                                        onClick={logout}
                                        className="px-6 py-2.5 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer bg-red-500 text-white hover:bg-red-600 w-full"
                                    >
                                        Sair
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}
