import { Check } from "lucide-react";

const benefits = [
  "Easily book appointment from doctor website",
  "Manage consultation location and time for appointment in real time",
  "Instant access to complete patient medical histories",
  "Secure data storage and transmission",
  "Real-time practice analytics and performance insights",
  "Manage patient appointments and consultation record",
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Benefits List */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Why Choose Us
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Focus on Care,
                <span className="block text-primary">Not Paperwork</span>
              </h2>

              <div className="space-y-4 pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <div className="text-5xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Active Doctors
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
                <div className="text-5xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-glow/10 to-primary/10 border border-primary-glow/20">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  500K+
                </div>
                <div className="text-sm text-muted-foreground">
                  Appointments
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary-glow/10 border border-accent/20">
                <div className="text-5xl font-bold text-primary-glow mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
