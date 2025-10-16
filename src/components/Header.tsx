import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border/40 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CarePad Pro
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              Sign In
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
