import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Calendar, Users, Facebook } from "lucide-react";

const Support = () => {
  return (
    <section id="support" className="py-20 bg-gradient-to-br from-accent via-background to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary">
              Get Involved / Impliquez-vous
            </h2>
            <p className="text-xl text-foreground">
              Join us in making District 7 an even better place to live
            </p>
            <p className="text-xl text-muted-foreground italic">
              Rejoignez-nous pour faire du District 7 un endroit encore meilleur où vivre
            </p>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/30 hover:border-secondary transition-all duration-300 animate-fade-in">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary/20 rounded-full">
                    <Calendar className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-secondary">Upcoming Meetups</h3>
                </div>
                <div className="space-y-4 text-left">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-semibold text-lg text-foreground">Community Coffee Chat</p>
                    <p className="text-sm text-muted-foreground">October 15, 2025 - 10:00 AM</p>
                    <p className="text-sm text-muted-foreground">Westmount Public Library</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-semibold text-lg text-foreground">Town Hall Meeting</p>
                    <p className="text-sm text-muted-foreground">October 25, 2025 - 7:00 PM</p>
                    <p className="text-sm text-muted-foreground">Victoria Hall</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/30 hover:border-secondary transition-all duration-300 animate-fade-in">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary/20 rounded-full">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-secondary">Get Connected</h3>
                </div>
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary text-white hover:bg-primary/90 font-bold text-lg border-2 border-secondary"
                  >
                    Express Your Support
                  </Button>
                  <a
                    href="https://www.facebook.com/GloriaRosadoLopez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-background font-bold text-lg"
                    >
                      <Facebook className="mr-2 h-5 w-5" />
                      Stay Connected on Facebook
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
