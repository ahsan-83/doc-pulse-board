import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-glow to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Practice?
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of healthcare providers who trust our platform to
            manage their patient care efficiently and securely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="shadow-lg border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white hover:border-white/50"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
