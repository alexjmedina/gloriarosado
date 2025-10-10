import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div>
            <h3 className="text-3xl font-heading font-bold mb-2">Gloria Rosado</h3>
            <p className="text-lg font-heading font-semibold">
              Westmount District 7 City Councillor
            </p>
            <p className="text-lg font-heading font-semibold">
              Conseillère municipale District 7
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/GloriaRosadoLopez"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="Visit Gloria Rosado's Facebook page"
            >
              <Facebook className="h-8 w-8" />
            </a>
          </div>

          <div className="pt-6 border-t border-accent-foreground/20">
            <p className="text-sm">
              &copy; 2025 Gloria Rosado Campaign. All rights reserved.
            </p>
            <p className="text-sm mt-2">
              Authorized by Gloria Rosado, Official Agent / Autorisé par Gloria Rosado, Agent Officiel
            </p>
          </div>

          <div className="pt-4">
            <p className="text-2xl font-heading font-bold text-secondary">
              Together, Yes We Can / Ensemble, nous pouvons
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
