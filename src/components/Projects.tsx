import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Stratégie Social Media B2B",
      type: "Stratégie digitale",
      description: "Développement d'une stratégie complète pour une entreprise tech, augmentant l'engagement de 300%.",
      tags: ["LinkedIn", "Content Strategy", "B2B", "Analytics"],
      image: "/brand%20you.jpg",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "Campagne de lancement produit",
      type: "Campaign digitale",
      description: "Orchestration d'une campagne multi-canal pour le lancement d'un nouveau service.",
      tags: ["Facebook Ads", "Instagram", "Influence", "Video"],
      image: "/eklosion%20au%20naturel.jpg",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      title: "Refonte identité numérique",
      type: "Branding digital",
      description: "Repositionnement complet de la marque sur les réseaux sociaux avec nouvelle charte éditoriale.",
      tags: ["Branding", "Design", "Guidelines", "Tone of voice"],
      image: "/pressing%20elegance.jpg",
      color: "from-green-500/20 to-emerald-500/20"
    },
    
    
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Mes projets</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations en communication digitale, 
            chacune pensée pour maximiser l'impact et l'engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-background"
            >
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`}></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <div className="flex gap-2">
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <Eye size={20} className="text-gray-900" />
                    </button>
                    <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <ExternalLink size={20} className="text-gray-900" />
                    </button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge variant="secondary" className="text-xs mb-2">
                    {project.type}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Intéressé(e) par une collaboration ? Discutons de votre projet !
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-primary hover:underline font-medium"
          >
            Me contacter →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
