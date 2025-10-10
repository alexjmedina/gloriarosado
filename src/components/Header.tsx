import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-accent text-accent-foreground shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm md:text-base font-heading font-semibold">
          <span className="hidden sm:inline">Vote November 2nd / Votez le 2 novembre</span>
          <span className="sm:hidden">Vote Nov 2nd</span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hover:bg-accent-foreground/10"
          >
            <a
              href="https://www.facebook.com/GloriaRosadoLopez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Gloria Rosado's Facebook page"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="default"
            size="sm"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-bold"
            asChild
          >
            <a href="#support">Support / Soutenir</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
