import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trees, ShieldCheck, Users, MessageSquare } from "lucide-react";

const priorities = [
  {
    icon: ShieldCheck,
    title: "Safer & Greener Streets",
    titleFr: "Des rues plus sûres et plus vertes",
    description: "Better lighting, more visible pedestrian crossings, and protected bike lanes. A Westmount where everyone feels safe.",
    descriptionFr: "Meilleur éclairage, passages piétons mieux indiqués et pistes cyclables sécurisées. Un Westmount où chacun se sent en sécurité.",
  },
  {
    icon: Trees,
    title: "Cleaner Public Spaces",
    titleFr: "Espaces publics plus propres",
    description: "More visible trash and recycling bins, better sidewalk and park maintenance, and faster response to resident reports.",
    descriptionFr: "Plus de poubelles et bacs de recyclage visibles, meilleur entretien des trottoirs et parcs, et réponse rapide aux signalements des résidents.",
  },
  {
    icon: Users,
    title: "Stronger Community Engagement",
    titleFr: "Engagement communautaire renforcé",
    description: "Regular public consultations, accessible multilingual information, and real involvement of residents in decisions that affect their neighborhood.",
    descriptionFr: "Consultations publiques régulières, information multilingue accessible et participation réelle des résidents aux décisions qui affectent leur quartier.",
  },
  {
    icon: MessageSquare,
    title: "Better Communication",
    titleFr: "Meilleure communication",
    description: "Clear, timely updates on city projects, accessible city services, and a council that listens and responds to residents' concerns.",
    descriptionFr: "Mises à jour claires et ponctuelles sur les projets municipaux, services accessibles et un conseil qui écoute et répond aux préoccupations des résidents.",
  },
];

const Priorities = () => {
  return (
    <section id="priorities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Priorities / Priorités
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical solutions for a better Westmount / Solutions pratiques pour un meilleur Westmount
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {priorities.map((priority, index) => {
            const Icon = priority.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl bg-card"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-heading font-bold text-foreground mb-2">
                        {priority.title}
                      </CardTitle>
                      <p className="text-lg font-heading font-semibold text-accent">
                        {priority.titleFr}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground leading-relaxed">
                    {priority.description}
                  </p>
                  <p className="text-muted-foreground italic leading-relaxed">
                    {priority.descriptionFr}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Priorities;
