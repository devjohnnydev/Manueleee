import { Truck, Shield, Recycle, Tag, MapPin, Headphones, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: "Coleta Especializada",
      description: "Coleta programada de equipamentos eletrônicos em sua empresa com toda segurança e rastreabilidade"
    },
    {
      icon: Shield,
      title: "Descaracterização Segura",
      description: "Destruição completa de dados e descaracterização física de equipamentos com certificado"
    },
    {
      icon: Recycle,
      title: "Reciclagem Sustentável",
      description: "Processo completo de reciclagem seguindo normas ambientais e certificações internacionais"
    },
    {
      icon: Tag,
      title: "Certificação Completa",
      description: "Documentação completa para compliance ambiental da sua empresa"
    },
    {
      icon: MapPin,
      title: "Cobertura Nacional",
      description: "Atendemos todo território nacional com parceiros certificados"
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Equipe técnica especializada para orientações e suporte completo"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em logística reversa e reciclagem de resíduos eletrônicos com certificação total
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="fade-in">
              <Card className="bg-card border-border card-hover h-full" data-testid={`service-card-${index}`}>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="text-2xl text-primary h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium cursor-pointer hover:text-accent transition-colors">
                    <span>Saiba mais</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
