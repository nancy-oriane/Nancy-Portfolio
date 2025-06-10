import React, { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold cursor-pointer" onClick={() => scrollToSection('hero')}>
              Nancy Oriane
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-foreground transition-colors">
                À propos
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-foreground transition-colors">
                Projets
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </button>
              <Button variant="outline" size="sm" className="gap-2">
                <a href="/CV%20nancy%20cv%20(3).pdf" download>
                  <Download size={16} />
                  Télécharger CV
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block text-muted-foreground hover:text-foreground transition-colors">
                À propos
              </button>
              <button onClick={() => scrollToSection('projects')} className="block text-muted-foreground hover:text-foreground transition-colors">
                Projets
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </button>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 w-full"
                asChild
              >
                <a href="/CV%20nancy%20cv%20(3).pdf" download>
                  <Download size={16} />
                  Télécharger CV
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/87b587a1-b092-4b50-a1ba-1b5896b24423.png)'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white">
              Nancy Oriane
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl text-white/80 font-normal">
                Kouami Ngampele
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-light">
              Spécialiste en communication digitale et stratégie de contenu
            </p>
            
            <div className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed mb-12">
              <p>
                Passionnée par l'innovation digitale, je conçois des stratégies réseaux sociaux 
                créatives, efficaces et engageantes qui transforment la présence en ligne des marques 
                et créent des connexions authentiques avec leur audience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="px-8 py-3 text-lg"
                onClick={() => scrollToSection('projects')}
              >
                Découvrir mes projets
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-lg gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <a href="/CV%20nancy%20cv%20(3).pdf" download>
                  <Download size={20} />
                  Télécharger mon CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
