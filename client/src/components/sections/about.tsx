import { History, Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <div className="inline-flex items-center bg-primary/20 rounded-full px-4 py-2 mb-6">
                <History className="text-primary mr-2 h-4 w-4" />
                <span className="text-sm font-medium">Desde 1990</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nossa <span className="gradient-text">História</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A MRX DO BRASIL foi fundada em <strong className="text-primary">1990 por Emanuel</strong>, 
                visionário que percebeu a necessidade urgente de criar soluções sustentáveis para o 
                descarte de resíduos eletrônicos no Brasil.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ao longo de mais de <strong className="text-primary">três décadas</strong>, consolidamos nossa 
                posição como líder no mercado de logística reversa, sempre com foco na 
                <strong className="text-primary"> preservação do meio ambiente</strong> e responsabilidade social.
              </p>
              
              {/* Mission, Vision, Values */}
              <div className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                      <Target className="mr-3 h-5 w-5" />
                      Missão
                    </h3>
                    <p className="text-muted-foreground">
                      Liderar a logística reversa de resíduos eletrônicos no Brasil, 
                      promovendo a sustentabilidade e preservação ambiental.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                      <Eye className="mr-3 h-5 w-5" />
                      Visão
                    </h3>
                    <p className="text-muted-foreground">
                      Ser referência nacional em reciclagem sustentável, contribuindo 
                      para um planeta mais limpo e saudável para as futuras gerações.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                      <Heart className="mr-3 h-5 w-5" />
                      Valores
                    </h3>
                    <p className="text-muted-foreground">
                      Sustentabilidade, responsabilidade, transparência, inovação 
                      e compromisso com o meio ambiente e sociedade.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="fade-in">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Facilidade de reciclagem eletrônica moderna com equipamentos organizados" 
                className="rounded-2xl shadow-2xl w-full"
                data-testid="about-facility-image"
              />
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2" data-testid="stat-years">34+</div>
                    <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2" data-testid="stat-tons">5000+</div>
                    <div className="text-sm text-muted-foreground">Toneladas Recicladas</div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2" data-testid="stat-compliance">100%</div>
                    <div className="text-sm text-muted-foreground">Conformidade Ambiental</div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2" data-testid="stat-support">24h</div>
                    <div className="text-sm text-muted-foreground">Suporte Técnico</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
