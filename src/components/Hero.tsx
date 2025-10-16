import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Modern Healthcare Management
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Streamline Your
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Patient Care
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                Effortlessly manage appointments, consultations, and patient
                records. Get powerful analytics and calendar features designed
                for modern medical practices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="group shadow-lg hover:shadow-xl transition-all"
                >
                  Watch Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="shadow-sm">
                  User Guide
                </Button>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 backdrop-blur-sm">
                <img
                  src={heroDashboard}
                  alt="Medical dashboard showing patient management interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
