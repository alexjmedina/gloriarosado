import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary">
              Key Priorities
            </h2>
            <p className="text-xl text-foreground">
              My commitment to District 7 / Mon engagement envers le District 7
            </p>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {priorities.map((priority, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in border-2 border-primary/30 hover:border-secondary bg-card/80 backdrop-blur-sm">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary/20 rounded-full">
                      <priority.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-secondary">
                        {priority.title}
                      </h3>
                      <h3 className="text-xl font-heading font-semibold text-muted-foreground">
                        {priority.titleFr}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-foreground leading-relaxed">
                      {priority.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed italic">
                      {priority.descriptionFr}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Priorities;
