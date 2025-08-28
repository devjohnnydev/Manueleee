import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const services = [
    "Coleta Especializada",
    "Descaracterização Segura", 
    "Reciclagem Sustentável",
    "Certificação Completa",
    "Cobertura Nacional"
  ];

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/attached_assets/logo_1756386223432.png" 
                  alt="MRX DO BRASIL" 
                  className="h-12 w-auto"
                  data-testid="footer-logo"
                />
                <div>
                  <h3 className="text-xl font-bold">MRX DO BRASIL</h3>
                  <p className="text-sm text-muted-foreground">Reciclagem Sustentável</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Desde 1990, lideramos a logística reversa de resíduos eletrônicos no Brasil. 
                Fundada por Emanuel com a missão de preservar o planeta através da reciclagem responsável.
              </p>
              <div className="inline-flex items-center bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">Sustentabilidade, Responsabilidade e Inovação em cada processo</span>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/5511940326215" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="footer-whatsapp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                  </svg>
                </a>
                <a 
                  href="mailto:mrxdobrasil@hotmail.com" 
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="footer-email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
              <ul className="space-y-3 text-muted-foreground">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#servicos" className="hover:text-primary transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                  </svg>
                  <span>(11) 94032-6215</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                  <span className="break-all">mrxdobrasil@hotmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                  <span>CEP: 08584-030, SP</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="text-muted-foreground mb-4 md:mb-0 flex items-center">
                <span>© 2024 MRX DO BRASIL. Todos os direitos reservados.</span>
                <div className="ml-4 flex items-center">
                  <span className="text-xs mr-2">Orgulhosamente brasileiro</span>
                  <div className="w-8 h-6 brazil-flag rounded-sm border"></div>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>Fundada em 1990 por Emanuel</span>
                <span>•</span>
                <span>34+ anos de experiência</span>
                <span>•</span>
                <span>Reciclagem 100% sustentável</span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block brazil-accent px-6 py-2 rounded-lg">
                <span className="text-sm font-medium">🇧🇷 Líder em Reciclagem de Resíduos Eletrônicos no Brasil 🇧🇷</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
