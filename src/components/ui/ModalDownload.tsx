"use client";

interface DownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-xl p-8 sm:p-10 w-[90%] max-w-md relative text-center space-y-6 animate-scaleIn">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-600 text-2xl font-bold transition-all"
                    aria-label="Fechar"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-semibold text-purple-800">Baixar Lumi</h2>
                <p className="text-gray-700">Obrigado por estar conosco! Clique abaixo para baixar o app:</p>

                <a
                    href="#"
                    className="bg-gradient-to-r from-purple-700 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform inline-block shadow-lg"
                >
                    Download do APP
                </a>
            </div>
        </div>
    );
}
