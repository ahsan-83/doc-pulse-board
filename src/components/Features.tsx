import { Calendar, ClipboardList, FileText, BarChart3, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Advanced calendar system with automated appointment booking and conflict prevention.",
    color: "from-primary to-primary-glow"
  },
  {
    icon: ClipboardList,
    title: "Consultation Management",
    description: "Streamline patient consultations with detailed notes and follow-up tracking.",
    color: "from-accent to-primary"
  },
  {
    icon: FileText,
    title: "Patient History",
    description: "Comprehensive medical records with instant access to complete patient histories.",
    color: "from-primary-glow to-accent"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into practice performance, patient trends, and revenue metrics.",
    color: "from-accent to-primary-glow"
  },
  {
    icon: Clock,
    title: "Appointment Reminders",
    description: "Automated notifications reduce no-shows and keep patients engaged.",
    color: "from-primary to-accent"
  },
  {
    icon: Users,
    title: "Multi-Provider Support",
    description: "Manage multiple doctors and staff members with role-based access control.",
    color: "from-primary-glow to-primary"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Manage Your Practice
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed specifically for healthcare professionals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <CardContent className="p-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
