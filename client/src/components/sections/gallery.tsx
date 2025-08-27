import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import wasteImage1 from "@assets/coleta-aparelhos-eletronicos-03_1756314694405.jpg";
import wasteImage2 from "@assets/coleta-aparelhos-eletronicos-04_1756314694405.jpg";
import wasteImage3 from "@assets/coleta-destinacao-residuos-01_1756314694404.jpg";
import wasteImage4 from "@assets/coleta-lixo-eletronico-bh-02_1756314694404.jpg";

export default function Gallery() {
  const galleryItems = [
    {
      image: wasteImage1,
      title: "Componentes Eletrônicos",
      description: "Placas de circuito, processadores e componentes diversos coletados para reciclagem responsável"
    },
    {
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Facility de Reciclagem",
      description: "Instalações modernas equipadas com tecnologia de ponta para processamento seguro"
    },
    {
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Coleta Especializada",
      description: "Frota especializada para coleta segura e transporte adequado dos resíduos eletrônicos"
    },
    {
      image: wasteImage2,
      title: "Processamento Seguro",
      description: "Equipe especializada com equipamentos de proteção para manuseio seguro dos materiais"
    },
    {
      image: wasteImage3,
      title: "Separação de Materiais",
      description: "Processo minucioso de separação e classificação de diferentes tipos de materiais"
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Certificação Total",
      description: "Documentação completa e certificações internacionais para garantir conformidade"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Nossa Galeria</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça nossos processos e instalações especializadas em reciclagem de resíduos eletrônicos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <div key={index} className="fade-in">
              <Card className="bg-card border-border overflow-hidden gallery-item" data-testid={`gallery-item-${index}`}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-all duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
