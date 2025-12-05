"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import TutorialSection from "@/components/sections/Tutorial";
import FunctionsSection from "@/components/sections/FunctionsSection";
import FaqSection from "@/components/sections/Faq";
import ContactSection from "@/components/sections/Contact";
import DownloadModal from "@/components/ui/ModalDownload";

export default function HomePage() {
    const [isDownloadOpen, setIsDownloadOpen] = useState(false);

    const openDownload = () => setIsDownloadOpen(true);
    const closeDownload = () => setIsDownloadOpen(false);

    return (
        <>
            <Header />
            <main>
                <HeroSection onOpenDownload={openDownload} />
                <AboutSection />
                <FunctionsSection />
                <TutorialSection />
                <FaqSection />
                <ContactSection />
            </main>
            <Footer />

            <DownloadModal isOpen={isDownloadOpen} onClose={closeDownload} />
        </>
    );
}
