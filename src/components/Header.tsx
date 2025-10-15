import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="text-lg font-bold text-secondary">Gloria Rosado</span>
          </a>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white font-bold"
              onClick={() => {
                const supportSection = document.getElementById('support');
                supportSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Support
            </Button>
            
            <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded">
              <span className="text-secondary font-semibold text-sm">EN</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
