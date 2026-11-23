import {useState} from 'react';
import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {SpecialCombosSection} from './components/SpecialCombosSection';
import {MenuSection, type MenuFilter} from './components/MenuSection';
import {SignatureBiryaniSection} from './components/SignatureBiryaniSection';
import {WhyChooseSection} from './components/WhyChooseSection';
import {AboutSection} from './components/AboutSection';
import {GallerySection} from './components/GallerySection';
import {ReviewsSection} from './components/ReviewsSection';
import {ContactSection} from './components/ContactSection';
import {FinalCtaSection} from './components/FinalCtaSection';
import {Footer} from './components/Footer';
import {FloatingWhatsAppButton} from './components/FloatingWhatsAppButton';

export default function App() {
  const [activeMenuCategory, setActiveMenuCategory] = useState<MenuFilter>('All');

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5E5] text-[#320609]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#F5BE36] focus:text-[#320609] focus:font-bold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <SpecialCombosSection />
        <MenuSection
          activeCategory={activeMenuCategory}
          onSelectCategory={setActiveMenuCategory}
        />
        <SignatureBiryaniSection />
        <WhyChooseSection />
        <AboutSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
        <FinalCtaSection />
      </main>

      <Footer onSelectMenuCategory={setActiveMenuCategory} />
      <FloatingWhatsAppButton />
    </div>
  );
}
