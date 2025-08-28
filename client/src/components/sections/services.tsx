import { Truck, Shield, Recycle, Tag, MapPin, Headphones, ArrowRight, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: "Coleta Especializada",
      description: "Coleta programada de equipamentos eletrônicos em sua empresa com toda segurança e rastreabilidade",
      details: "Realizamos a coleta especializada de resíduos eletrônicos com otimização da cadeia de transporte. Nosso processo inclui agendamento flexível, equipe treinada e rastreabilidade completa desde a coleta até o destino final. Atendemos computadores, notebooks, celulares, impressoras, servidores e todos os tipos de equipamentos eletrônicos.",
      stats: "1000+ empresas atendidas"
    },
    {
      icon: Shield,
      title: "Descaracterização Segura",
      description: "Destruição completa de dados e descaracterização física de equipamentos com certificado",
      details: "Utilizamos trituradores Shredder para garantir a destruição total de dados e a descaracterização física dos equipamentos. O processo inclui separação de telas e baterias, trituração em pequenos pedaços e certificação de destruição de dados. Fornecemos certificados de destruição para compliance.",
      stats: "100% segurança de dados"
    },
    {
      icon: Recycle,
      title: "Reciclagem Sustentável",
      description: "Processo completo de reciclagem seguindo normas ambientais e certificações internacionais",
      details: "Nosso processo de reciclagem segue as melhores práticas ambientais. Realizamos armazenagem correta, separação criteriosa, classificação de materiais nocivos e reciclagem 100% sustentável. Os materiais são transformados em matéria-prima para novos produtos, contribuindo para a economia circular.",
      stats: "17,4% taxa global de reciclagem"
    },
    {
      icon: Tag,
      title: "Certificação Completa",
      description: "Documentação completa para compliance ambiental da sua empresa",
      details: "Fornecemos toda a documentação necessária para compliance ambiental, incluindo certificados de destinação, licenças ambientais, política de gestão e relatórios detalhados. Mais de 10 anos de experiência garantem credibilidade técnica e conform completa com órgãos reguladores.",
      stats: "Certificações essenciais"
    },
    {
      icon: MapPin,
      title: "Cobertura Nacional",
      description: "Atendemos todo território nacional com parceiros certificados",
      details: "Com sede estratégica em São Paulo e rede de parceiros certificados, atendemos todo o Brasil. Nossa logística reversa é otimizada para atender desde pequenas empresas até grandes corporações. O Brasil produz 1,2 milhões de toneladas de lixo eletrônico anualmente, e apenas 3% é reciclado corretamente.",
      stats: "Cobertura nacional"
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Equipe técnica especializada para orientações e suporte completo",
      details: "Nossa equipe conta com mais de 34 anos de experiência em gerenciamento de resíduos eletrônicos. Oferecemos consultoria especializada, treinamentos, suporte técnico e acompanhamento de todo o processo. Tecnologia de ponta e processos otimizados garantem máxima eficiência e resultados superiores.",
      stats: "34+ anos experiência"
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-accent transition-colors">
                        <span>Saiba mais</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center mb-4">
                          <service.icon className="text-primary h-6 w-6 mr-3" />
                          {service.title}
                        </DialogTitle>
                      </DialogHeader>
                      <DialogDescription asChild>
                        <div>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {service.details}
                          </p>
                          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4">
                            <div className="flex items-center">
                              <Info className="text-primary h-5 w-5 mr-2" />
                              <span className="font-semibold text-primary">{service.stats}</span>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <Button 
                              onClick={() => window.open('https://wa.me/5511940326215', '_blank')}
                              className="bg-primary text-primary-foreground hover:bg-accent"
                            >
                              Solicitar Orçamento
                            </Button>
                            <Button variant="outline">
                              Falar com Especialista
                            </Button>
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
