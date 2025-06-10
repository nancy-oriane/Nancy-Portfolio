
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  const skills = [
    'Gestion réseaux sociaux',
    'Rédaction web',
    'E-réputation',
    'Événementiel',
    'Stratégie digitale',
    'Community management',
    'Content marketing',
    'Analytics & reporting'
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">À propos</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-12">
          {/* Première ligne : Photo + Mon expertise */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center">
              <Card className="p-8 border-0 shadow-lg bg-background w-fit">
                <div className="flex justify-center mb-6">
                  <Avatar className="w-48 h-48 border-4 border-background shadow-xl">
                    <AvatarImage 
                      src="/lovable-uploads/87b587a1-b092-4b50-a1ba-1b5896b24423.png" 
                      alt="Nancy Oriane Kouami Ngampele"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-4xl font-bold">NO</AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Nancy Oriane Kouami Ngampele</h3>
                  <p className="text-lg text-muted-foreground">Chargée de communication digitale</p>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Mon expertise</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Forte d'une expertise solide en communication digitale, j'accompagne les entreprises 
                dans leur transformation numérique. Mon approche allie créativité et stratégie pour 
                développer une présence en ligne impactante et mesurable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Je crois fermement que chaque marque a une histoire unique à raconter. Mon rôle est 
                de traduire cette histoire en contenus engageants qui résonnent avec l'audience cible 
                et génèrent des résultats concrets.
              </p>
            </div>
          </div>

          {/* Deuxième ligne : Compétences clés + Philosophie professionnelle */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h4 className="text-xl font-semibold mb-4">Compétences clés</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Philosophie professionnelle</h4>
              <p className="text-muted-foreground italic">
                "L'innovation digitale n'est pas seulement une question de technologie, 
                c'est avant tout une question d'humain et de connexion authentique."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
