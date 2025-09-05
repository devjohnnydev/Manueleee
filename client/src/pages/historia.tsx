import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Historia() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation back */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </Link>
      </div>
      
      {/* História Content */}
      <section className="pt-20 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Nossa História</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça a trajetória da MRX do Brasil na reciclagem de resíduos eletrônicos
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 fade-in">
              <h2 className="text-2xl font-bold mb-6 text-primary">A Trajetória da MRX do Brasil</h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Fundada com o propósito de transformar o cenário da reciclagem de resíduos eletrônicos no Brasil, 
                  a <strong className="text-foreground">MRX do Brasil</strong> nasceu da visão de criar soluções 
                  sustentáveis e seguras para o descarte de equipamentos eletrônicos.
                </p>
                
                <p>
                  Nossa empresa surgiu em resposta à crescente necessidade de um gerenciamento adequado do lixo 
                  eletrônico, que representa um dos maiores desafios ambientais da atualidade. Com mais de 
                  <strong className="text-foreground"> 34 anos de experiência</strong> acumulada de nossa equipe 
                  no setor, estabelecemos uma operação que combina tecnologia de ponta com práticas ambientalmente responsáveis.
                </p>
                
                <p>
                  Ao longo dos anos, desenvolvemos um processo completo de logística reversa que vai desde a coleta 
                  especializada até a reciclagem sustentável, sempre mantendo os mais altos padrões de segurança 
                  e certificação. Nossa sede estratégica em São Paulo nos permite atender todo o território nacional 
                  através de uma rede de parceiros certificados.
                </p>
                
                <p>
                  Hoje, a MRX do Brasil é reconhecida como referência no setor, tendo atendido mais de 
                  <strong className="text-foreground"> 1000 empresas</strong> e contribuído significativamente 
                  para o aumento da taxa de reciclagem de eletrônicos no país. Nosso compromisso com a 
                  <strong className="text-foreground"> sustentabilidade, segurança e inovação</strong> nos 
                  posiciona na vanguarda da economia circular brasileira.
                </p>
                
                <p>
                  Nossa missão continua sendo a de transformar resíduos eletrônicos em oportunidades, 
                  protegendo o meio ambiente e gerando valor para nossos clientes através de soluções 
                  completas e certificadas de reciclagem.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-primary">Dados da Empresa</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Razão Social:</strong> Mr do Brasil Sucatas Eletrônicas Ltda</p>
                    <p><strong>Nome Fantasia:</strong> Mrx do Brasil</p>
                    <p><strong>CNPJ:</strong> 48.058.447/0001-48</p>
                  </div>
                  <div>
                    <p><strong>Endereço:</strong> Estr. Pedro da Cunha Albuquerque Lopes, 3156</p>
                    <p><strong>Bairro:</strong> Perobal</p>
                    <p><strong>Cidade:</strong> América - São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seções da página principal com background da imagem */}
      <div className="relative">
        {/* Background com a imagem fornecida */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/attached_assets/Captura_de_tela_2025-09-05_074704-removebg-preview_1757069924825.png)`
          }}
        />
        <div className="relative z-10">
          <About />
          <Services />
          <Gallery />
          <Contact />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}