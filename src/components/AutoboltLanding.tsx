import { useState, useEffect } from 'react';
import { 
  Bot, 
  Phone, 
  Camera, 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Clock, 
  Moon, 
  CheckCircle, 
  Star,
  ArrowRight,
  ChevronDown,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import CountdownTimer from './CountdownTimer';
import FloatingWhatsApp from './FloatingWhatsApp';
import gimHero from '@/assets/gim-hero.jpg';
import dealershipBg from '@/assets/dealership-bg.jpg';
import ownerRoberto from '@/assets/owner-roberto.jpg';
import ownerFernanda from '@/assets/owner-fernanda.jpg';
import ownerLucas from '@/assets/owner-lucas.jpg';
import dashboardNetflix from '@/assets/dashboard-netflix.jpg';

const AutoboltLanding = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="section-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Atendimento Automático Profissional",
      description: "Autobolt apresenta marca, modelo, ano, câmbio e outras informações importantes antes de transferir para o humano. Chega de responder a mesma coisa.",
      animation: "💬 → 📞"
    },
    {
      title: "Fotos + Link Direto para WhatsApp",
      description: "O cliente já sai do chat com todas as fotos e o contato do vendedor!",
      animation: "📸 → 📲"
    },
    {
      title: "Resumo da Conversa para o Vendedor",
      description: "Seu time recebe um histórico completo para fechar o negócio com assertividade!",
      animation: "📋 → 👨‍💼"
    }
  ];

  const testimonials = [
    {
      quote: "Autobolt atende 90% das consultas iniciais! Nosso time agora foca só nos clientes prontos para comprar.",
      name: "Roberto",
      company: "AutoPremium MG",
      badge: "📈 +40% conversão",
      image: ownerRoberto
    },
    {
      quote: "Clientes adoram receber fotos e detalhes na hora! Reduzimos o tempo de venda pela metade.",
      name: "Fernanda",
      company: "Motors RJ",
      badge: "⏱️ 50% mais rápido",
      image: ownerFernanda
    },
    {
      quote: "Agora atendemos 24h sem custo extra. Autobolt virou nosso melhor vendedor!",
      name: "Lucas",
      company: "Seminovos SP",
      badge: "🌙 Vendas noturnas",
      image: ownerLucas
    }
  ];

  const problemSolutions = [
    {
      problem: "⏳ Clientes fogem ao esperar resposta humana.",
      solution: "⚡ Autobolt responde em 3 segundos com todos os dados do veículo!"
    },
    {
      problem: "💸 Vendedores perdem horas com perguntas repetitivas.",
      solution: "🤖 AUTOBOLT resolve 80% das dúvidas e transfere o lead qualificado!"
    },
    {
      problem: "🌙 Vendas zero após o horário comercial.",
      solution: "🌗 Atendimento 24/7 – até de madrugada!"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen gradient-hero flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${dealershipBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold animate-pulse border-2 border-primary">
              OFERTA POR TEMPO LIMITADO
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2 sm:px-0">
              Autobolt: O Primeiro 
              <span className="text-secondary"> Vendedor 24/7 </span>
              para Sua Loja de Seminovos!
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl px-2 sm:px-0">
              Atenda instantaneamente, venda muito mais e poupe custos com o Agente Autobolt. O agente que nunca dorme
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-2 sm:px-0">
              <Button className="btn-primary text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 w-full sm:w-auto">
                <span className="block sm:hidden">QUERO O AUTOBOLT!</span>
                <span className="hidden sm:block">QUERO O AUTOBOLT AGORA</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={gimHero}
                alt="Agente Autobolt"
                className="w-full max-w-md rounded-2xl shadow-2xl float-animation"
              />
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-bold animate-bounce">
                IA VENDENDO 24/7!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section id="section-problem" className={`py-12 md:py-20 px-4 fade-in ${isVisible['section-problem'] ? 'visible' : ''}`}>
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
              Por que sua loja precisa do Autobolt?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 md:gap-3 bg-red-100 text-red-700 px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-base md:text-xl mb-6 md:mb-8 border border-red-200">
                  🔴 PROBLEMA
                </div>
              </div>
              {problemSolutions.map((item, index) => (
                <Card key={index} className="card-floating bg-red-50 border-l-4 border-l-red-500 hover:shadow-lg transition-all duration-300 border-red-200">
                  <CardContent className="p-4 md:p-8">
                    <p className="text-base md:text-lg font-medium text-gray-800">{item.problem}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="space-y-6 md:space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 md:gap-3 bg-green-100 text-green-700 px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-base md:text-xl mb-6 md:mb-8 border border-green-200">
                  🟢 SOLUÇÃO
                </div>
              </div>
              {problemSolutions.map((item, index) => (
                <Card key={index} className="card-floating bg-green-50 border-l-4 border-l-green-500 hover:shadow-lg transition-all duration-300 border-green-200">
                  <CardContent className="p-4 md:p-8">
                    <p className="text-base md:text-lg font-medium text-gray-800">{item.solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="section-features" className={`py-20 px-4 bg-muted fade-in ${isVisible['section-features'] ? 'visible' : ''}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Como o Autobolt Revoluciona Suas Vendas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Três funcionalidades que transformam visitantes em compradores
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-floating text-center hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl mb-6">{feature.animation}</div>
                  <h3 className="text-xl font-bold mb-4 text-primary">
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

      {/* Testimonials */}
      <section id="section-testimonials" className={`py-20 px-4 fade-in ${isVisible['section-testimonials'] ? 'visible' : ''}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Lojas que usam Autobolt estão vendendo 30% mais:
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-floating hover:border-secondary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic text-foreground mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name} - ${testimonial.company}`}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <div className="font-semibold text-primary">{testimonial.name}</div>
                        <div className="text-muted-foreground">{testimonial.company}</div>
                        <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold mt-2">
                          {testimonial.badge}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section id="section-bonus" className={`py-20 px-4 bg-secondary/10 fade-in ${isVisible['section-bonus'] ? 'visible' : ''}`}>
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8">
              🎁 Bônus Exclusivo
            </h2>
            
            <Card className="card-floating bg-secondary/20 border-2 border-secondary overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={dashboardNetflix}
                    alt="Dashboard de Vídeo Aulas"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      ▶️ Reproduzindo agora
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Plataforma de Treinamento para Vendedor Humano
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Treinaremos os vendedores humanos da loja para não perder vendas, um guia completo com vídeo aulas focadas em resolver este problema.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-6 h-6" />
                      <span className="font-semibold">Vídeo aulas profissionais</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-6 h-6" />
                      <span className="font-semibold">Guia completo de vendas</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-6 h-6" />
                      <span className="font-semibold">Interface intuitiva</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="section-pricing" className={`py-20 px-4 gradient-primary fade-in ${isVisible['section-pricing'] ? 'visible' : ''}`}>
        <div className="container mx-auto text-center">
          <div className="text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Quanto custa ter um vendedor automático perfeito?
            </h2>
            <div className="max-w-2xl mx-auto mb-8 bg-white rounded-2xl p-4 md:p-6 border-2 border-yellow-400/50">
              <CountdownTimer />
            </div>
          </div>
          
          <Card className="max-w-2xl mx-auto card-floating">
            <CardContent className="p-12">
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Taxa de Setup</div>
                    <div className="text-2xl text-gray-400 line-through">R$ 997</div>
                    <div className="text-4xl font-bold text-primary">R$ 497</div>
                    <div className="text-sm text-green-600 font-bold bg-green-100 px-2 py-1 rounded">(somente esta semana)</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Mensalidade</div>
                    <div className="text-2xl text-gray-400 line-through">R$ 247</div>
                    <div className="text-4xl font-bold text-primary">R$ 197/mês</div>
                  </div>
                </div>
                
                <div className="border-t pt-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">O que está incluso:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Hospedagem + Servidor</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Suporte 24/7</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Atualizações gratuitas</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Configuração completa</span>
                    </div>
                  </div>
                </div>
                
                <Button className="btn-primary w-full text-sm sm:text-base md:text-lg lg:text-xl py-3 md:py-4 lg:py-5 px-2 sm:px-3 md:px-4 lg:px-8 pulse-subtle">
                  QUERO AGORA!
                  <ArrowRight className="ml-1 md:ml-2 lg:ml-3 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold">7 dias para testar ou devolvemos seu dinheiro!</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="section-faq" className={`py-20 px-4 fade-in ${isVisible['section-faq'] ? 'visible' : ''}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  E se o cliente fizer uma pergunta muito complexa?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Autobolt repassa para o vendedor humano e envia um resumo completo da conversa! 
                  Seu time recebe todas as informações necessárias para continuar o atendimento 
                  de forma personalizada.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  O bot precisa de treinamento?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O agente já está treinado. Autobolt já vem pronto para usar com linguagem de atendimento específicas para a sua loja de seminovos.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Como funciona a integração com meu sistema atual?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Autobolt se integra facilmente ao site da sua loja, a base de dados do agente será o site da própria loja. Nosso time técnico cuida de toda a integração sem interromper suas operações.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Posso cancelar quando quiser?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim! Não há fidelidade. Você pode cancelar a qualquer momento. 
                  Além disso, oferecemos 7 dias de garantia total - se não ficar satisfeito, 
                  devolvemos 100% do seu investimento.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 px-4 gradient-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 animate-pulse">
            Atenção! Esse sistema será implantando em um número limitados de lojas.
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            ⚠️ Atenção: Esta oferta é exclusiva para as 10 primeiras lojas que contratarem hoje.
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8 border-2 border-white/30 mb-8 w-full max-w-md mx-auto">
            <Button className="bg-white text-primary hover:bg-white/90 text-lg md:text-2xl px-6 md:px-12 py-4 md:py-6 font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 w-full">
              QUERO AGORA!
              <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>
          <div className="text-sm opacity-75">
            ⚡ Resposta em menos de 2 minutos
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </div>
  );
};

export default AutoboltLanding;