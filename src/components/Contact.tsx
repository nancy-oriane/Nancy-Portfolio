import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Instagram, Download, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nancyorianepro@gmail.com",
      href: "mailto:nancyorianepro@gmail.com",
      primary: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/nancy-oriane-kouami",
      href: "https://linkedin.com/in/nancy-oriane-kouami",
      primary: false
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@nancy.oriane.pro",
      href: "https://instagram.com/nancy.oriane.pro",
      primary: false
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Restons connectés</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prêt(e) à donner une nouvelle dimension à votre communication digitale ? 
            Échangeons sur vos objectifs et voyons comment je peux vous accompagner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-lg bg-background">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Discutons de votre projet</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Que vous ayez besoin d'une stratégie complète ou d'un accompagnement ponctuel, 
                je suis là pour transformer vos idées en succès digital mesurable.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-200 hover:scale-105 ${
                        contact.primary 
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      <IconComponent size={24} />
                      <div>
                        <div className="font-medium">{contact.label}</div>
                        <div className={`text-sm ${contact.primary ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-background">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Mes services</h3>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Stratégie digitale</h4>
                  <p className="text-sm text-muted-foreground">Audit, conseil et planification stratégique</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Community management</h4>
                  <p className="text-sm text-muted-foreground">Animation et modération de communautés</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Content marketing</h4>
                  <p className="text-sm text-muted-foreground">Création et diffusion de contenus engageants</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Formation & accompagnement</h4>
                  <p className="text-sm text-muted-foreground">Montée en compétences de vos équipes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="px-8 py-3 text-lg gap-2 mb-4" asChild>
            <a href="/CV%20nancy%20cv%20(3).pdf" download>
              <Download size={20} />
              Télécharger mon CV complet
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Disponible pour de nouveaux projets • Temps de réponse : 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
