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
                <span className="text-sm font-medium">Desde 2019</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nossa <span className="gradient-text">História</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Um sonho nasceu em <strong className="text-primary">novembro de 2019</strong>: construir uma empresa 
                que unisse inovação, responsabilidade e compromisso com a sustentabilidade. Desde o início, 
                a visão foi clara — transformar resíduos em valor, cuidando do meio ambiente.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Com dedicação e aprendizado, esse sonho tomou forma e, em <strong className="text-primary">23 de setembro de 2022</strong>, 
                nasceu oficialmente a MRX do Brasil, estruturada sobre princípios sólidos de responsabilidade 
                ambiental, valorização de parceiros e compromisso com a transparência e eficiência.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ao decorrer do tempo, ouvindo a necessidade do mercado e o aumento da demanda, um parceiro 
                com o mesmo sonho e propósito passou a fazer parte dessa história, fortalecendo ainda mais 
                nosso compromisso em <strong className="text-primary">transformar desafios em oportunidades</strong>.
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
                      Promover a sustentabilidade, oferecendo um atendimento humano e justo, 
                      e manter-se como parceira confiável em todas as relações de negócio, 
                      transformando desafios em oportunidades e construindo um futuro melhor para todos.
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
                      "Transformar o setor de reciclagem em um exemplo de sustentabilidade e 
                      responsabilidade, construindo um futuro mais consciente para as próximas gerações."
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                      <Heart className="mr-3 h-5 w-5" />
                      Valores
                    </h3>
                    <div className="text-muted-foreground">
                      <p className="mb-2"><strong>Transparência:</strong> atuar com clareza em todas as relações</p>
                      <p className="mb-2"><strong>Credibilidade:</strong> construir confiança com clientes, fornecedores e parceiros</p>
                      <p className="mb-2"><strong>Respeito:</strong> valorizar pessoas, relações e o meio ambiente</p>
                      <p className="mb-2"><strong>Sustentabilidade:</strong> promover práticas que gerem impacto positivo</p>
                      <p><strong>Empatia:</strong> compreender e agir com humanidade em todas as situações</p>
                    </div>
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
