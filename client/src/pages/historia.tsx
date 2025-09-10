import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, Lightbulb, Leaf, Award, Target } from "lucide-react";

export default function Historia() {
  const timeline = [
    {
      year: "2019",
      title: "O Sonho Nasceu",
      description: "Emanuel teve a visão de criar uma empresa focada na reciclagem responsável de resíduos eletrônicos, inspirado pela necessidade urgente de preservar o meio ambiente.",
      icon: Lightbulb
    },
    {
      year: "2022",
      title: "Fundação Oficial",
      description: "Em 23 de setembro de 2022, a MRX DO BRASIL foi oficialmente fundada, estabelecendo-se como pioneira em logística reversa para resíduos eletrônicos.",
      icon: Calendar
    },
    {
      year: "2023",
      title: "Expansão dos Serviços",
      description: "Ampliamos nossa capacidade operacional e desenvolvemos processos avançados de separação e reciclagem de materiais eletrônicos.",
      icon: Target
    },
    {
      year: "2024",
      title: "Certificações e Reconhecimento",
      description: "Conquistamos certificações ambientais importantes e nos estabelecemos como referência nacional em reciclagem sustentável.",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-secondary/20 hex-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold gradient-text">Nossa História</h1>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Uma jornada de <strong className="text-primary">sustentabilidade</strong> e <strong className="text-primary">inovação</strong> 
                que começou com um sonho e se transformou em realidade
              </p>
              <div className="inline-flex items-center bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-3">
                <Leaf className="text-primary mr-3 h-5 w-5" />
                <span className="text-lg font-medium">Da visão à ação: preservando o planeta através da reciclagem</span>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Linha do Tempo</h2>
              
              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border-4 border-primary/20">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      
                      <Card className="flex-1 bg-card border-border">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <span className="text-2xl font-bold text-primary">{item.year}</span>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nossa Fundação</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-primary">Emanuel: O Visionário</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Em 2019, Emanuel vislumbrou a necessidade urgente de uma empresa especializada em 
                    reciclagem de resíduos eletrônicos no Brasil. Movido pela paixão ambiental e 
                    visão empresarial, ele dedicou três anos ao planejamento e estruturação do negócio.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A oficialização da MRX DO BRASIL em setembro de 2022 marcou o início de uma 
                    jornada comprometida com a sustentabilidade e a responsabilidade ambiental.
                  </p>
                  <div className="inline-flex items-center bg-primary/10 rounded-lg px-4 py-2">
                    <span className="text-sm font-medium text-primary">
                      "Transformar resíduos em recursos para um futuro sustentável"
                    </span>
                  </div>
                </div>
                
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Leaf className="h-6 w-6 text-primary mr-3" />
                      Missão da Empresa
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Visão</h4>
                      <p className="text-muted-foreground text-sm">
                        Ser a empresa líder em logística reversa de equipamentos eletrônicos no Brasil.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Missão</h4>
                      <p className="text-muted-foreground text-sm">
                        Promover a reciclagem responsável de resíduos eletrônicos, contribuindo para 
                        a preservação do meio ambiente.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Valores</h4>
                      <p className="text-muted-foreground text-sm">
                        Sustentabilidade, responsabilidade, inovação e compromisso com o futuro do planeta.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}