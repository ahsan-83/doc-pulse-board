import { Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/40">
      <div className="container mx-auto px-6 py-12">
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            © CarePad Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
