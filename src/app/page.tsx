'use client';

import { useState } from 'react';

function MenuOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-white p-4 text-black">
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <span className="text-2xl font-bold">Lumi</span>
        <button
          onClick={onClose}
          className="text-3xl font-light"
          aria-label="Fechar menu"
        >
          &times;
        </button>
      </div>

      <nav className="mt-6 flex flex-col space-y-4">
        <a href="#" className="text-lg hover:text-lumi-button">
          Sobre a Lumi
        </a>
        <a href="#" className="text-lg hover:text-lumi-button">
          Artigos
        </a>
        <a href="#" className="text-lg hover:text-lumi-button">
          Nossa Equipe
        </a>
      </nav>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <a href="#" className="text-lg font-medium hover:text-lumi-button">
          Entrar
        </a>
        <button className="px-5 py-2 font-semibold text-white bg-lumi-button rounded-lg hover:opacity-90">
          Cadastro
        </button>
      </div>
    </div>
  );
}

function DownloadModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="relative w-full max-w-sm rounded-lg bg-white p-6 text-center text-black">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-3xl font-light text-gray-400 hover:text-gray-700"
          aria-label="Fechar modal"
        >
          &times;
        </button>

        <h3 className="mb-3 text-2xl font-bold">Baixar Lumi</h3>
        <p className="mb-6">
          Obrigado por estar conosco! Clique abaixo para baixar o app:
        </p>
        <button className="w-full rounded-lg bg-lumi-button px-4 py-3 font-semibold text-white hover:opacity-90">
          Download do APP
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen text-white bg-lumi-gradient">
      {!isMenuOpen && (
        <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between p-4 text-white">
          <span className="text-2xl font-bold">Lumi</span>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-2xl"
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </header>
      )}

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <div className="pt-16">
          <h1 className="text-4xl font-extrabold md:text-6xl">Você Merece Paz</h1>
          <h2 className="mt-2 mb-4 text-3xl font-bold md:text-5xl">
            E Não Está Sozinha
          </h2>
          <p className="mx-auto mb-8 max-w-md text-base md:text-lg font-thin">
            A força para recomeçar já vive em você. Cada passo, por menor que
            pareça, é um ato de coragem. Estamos aqui para lembrar: há caminhos,
            há apoio, e há esperança.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-full bg-lumi-button px-8 py-3 text-lg font-semibold shadow-lg transition hover:opacity-90"
          >
            Baixar Lumi
          </button>
        </div>
      </div>

      {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
      {isModalOpen && <DownloadModal onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}