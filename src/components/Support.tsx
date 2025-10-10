import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Facebook, Mail } from "lucide-react";

const meetups = [
  {
    date: "Tuesday, October 14",
    dateFr: "Mardi, 14 octobre",
    time: "11:00 AM",
    timeFr: "11h",
    location: "Mouton Noir, Coffee",
    address: "4675 Rue Sherbrooke",
  },
  {
    date: "Saturday, October 18",
    dateFr: "Samedi, 18 octobre",
    time: "10:00 AM",
    timeFr: "10h",
    location: "Westmount Recreation Center",
    locationFr: "Centre des Loisirs de Westmount",
    address: "4675 Rue Ste-Catherine O",
  },
];

const Support = () => {
  return (
    <section id="support" className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Get Involved / Participez
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <Card className="mb-12 border-2 border-primary shadow-xl bg-card">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <CardTitle className="text-3xl font-heading font-bold text-center">
                Meet the Candidate! / Rencontrez la candidate !
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {meetups.map((meetup, index) => (
                  <div
                    key={index}
                    className="p-6 bg-muted/50 rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1 space-y-2">
                        <p className="text-lg font-heading font-bold text-foreground">
                          {meetup.date} / {meetup.dateFr}
                        </p>
                        <p className="text-foreground">
                          {meetup.time} / {meetup.timeFr}
                        </p>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground">
                              {meetup.location}
                              {meetup.locationFr && ` / ${meetup.locationFr}`}
                            </p>
                            <p className="text-muted-foreground">{meetup.address}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-primary transition-colors bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-foreground flex items-center gap-2">
                  <Mail className="h-6 w-6 text-primary" />
                  Express Your Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Show your support for Gloria Rosado and help build a better Westmount together.
                </p>
                <p className="text-muted-foreground italic">
                  Exprimez votre soutien à Gloria Rosado et aidez à bâtir un meilleur Westmount ensemble.
                </p>
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold shadow-glow"
                  size="lg"
                >
                  Sign Up / Inscrivez-vous
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-foreground flex items-center gap-2">
                  <Facebook className="h-6 w-6 text-accent" />
                  Stay Connected
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Follow Gloria on social media for updates and community news.
                </p>
                <p className="text-muted-foreground italic">
                  Suivez Gloria sur les réseaux sociaux pour des mises à jour et nouvelles communautaires.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent/10 font-heading font-bold"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://www.facebook.com/GloriaRosadoLopez"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @GloriaWestmount7
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
