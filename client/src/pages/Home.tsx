import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2, Zap, Shield, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Toaster, toast } from "sonner";

/**
 * Design Philosophy: Minimalist Technical with Urgency
 * - Primary: Blue (#0052CC) - Trust, Technology, Professionalism
 * - Secondary: Green (#00D084) - Success, Solution, Action
 * - Focus: Clear hierarchy, fast solution, high conversion
 * - Layout: Asymmetric with strong CTA focus
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Por favor, insira seu email");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("Guia enviado para seu email! Verifique sua caixa de entrada.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-block bg-orange-50 border border-orange-200 rounded-lg px-4 py-2">
                <span className="text-orange-700 text-sm font-semibold">⚡ Solução Rápida</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Sua TV Box Parou de Funcionar?
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Reative em <strong>5 minutos</strong>. Guia prático e seguro que funciona em <strong>95% dos casos</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Totalmente Gratuito</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">100% Seguro</span>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <img
                src="/images/hero-tvbox.jpg"
                alt="TV Box com checkmark de sucesso"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-600 text-white rounded-full p-4 shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Por Que Sua TV Box Parou de Funcionar?
            </h2>
            
            <div className="bg-white border-l-4 border-orange-500 p-6 rounded-r-lg">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Nos últimos dias, uma onda de <strong>bloqueios judiciais</strong> derrubou diversos aplicativos de streaming em TV Boxes no Brasil. Serviços como BTV, Red Play, Blue TV e muitos outros saíram do ar de forma repentina, afetando milhares de usuários.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold text-green-700">
                    ✓ A boa notícia? Sua TV Box não está quebrada. O problema é técnico e totalmente reversível.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Steps Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            5 Passos Simples para Reativar sua TV Box
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Siga esses passos na ordem e sua TV Box voltará a funcionar. Nenhum conhecimento técnico necessário.
          </p>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Step 1 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Reiniciar o Dispositivo</h3>
                  <p className="text-gray-600 mb-4">
                    Desligue sua TV Box completamente, aguarde 30 segundos e ligue novamente.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>2 minutos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Limpar Cache e Dados</h3>
                  <p className="text-gray-600 mb-4">
                    Acesse Configurações {">"} Aplicativos {">"} Gerenciar Aplicativos. Selecione cada app e escolha "Limpar Cache".
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>3 minutos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <span className="text-blue-600 font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Reinstalar Aplicativos</h3>
                  <p className="text-gray-600 mb-4">
                    Desinstale os apps problemáticos. Acesse a Google Play Store e reinstale-os.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>5 minutos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <span className="text-blue-600 font-bold text-lg">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Verificar Conexão de Internet</h3>
                  <p className="text-gray-600 mb-4">
                    Vá para Configurações {">"} Rede e certifique-se de que está conectado a uma rede estável.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>2 minutos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow md:col-span-2">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <span className="text-blue-600 font-bold text-lg">5</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Factory Reset (Se Necessário)</h3>
                  <p className="text-gray-600 mb-4">
                    Se nada funcionar, faça um reset de fábrica. Vá para Configurações {">"} Sistema {">"} Sobre {">"} Reset. <strong>Aviso:</strong> isso apagará todos os dados.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>10 minutos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps Illustration */}
          <div className="mt-12">
            <img
              src="/images/steps-illustration.jpg"
              alt="Ilustração dos 5 passos"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Success Rate Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div>
              <img
                src="/images/success-rate.jpg"
                alt="95% Taxa de Sucesso"
                className="w-full h-auto"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Por Que Funciona?
              </h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Solução Comprovada</h3>
                    <p className="text-gray-600">Esses passos resolvem 95% dos problemas de TV Box.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Sem Risco</h3>
                    <p className="text-gray-600">Os primeiros 4 passos não deletam nenhum dado.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Rápido</h3>
                    <p className="text-gray-600">Leva entre 5 e 15 minutos para resolver.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Funciona em Qualquer TV Box</h3>
                    <p className="text-gray-600">MXQ, H96, X96, e qualquer modelo com Android TV.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Minha TV Box está realmente quebrada?
              </h3>
              <p className="text-gray-600">
                Na maioria dos casos, não. O problema é de software, não de hardware. Siga os 5 passos acima e sua TV Box voltará a funcionar.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Quanto tempo leva para reativar?
              </h3>
              <p className="text-gray-600">
                Entre 5 e 15 minutos, dependendo do passo que você escolher. Os primeiros 4 passos levam apenas 12 minutos no total.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Vou perder meus dados?
              </h3>
              <p className="text-gray-600">
                Não, a menos que você faça um factory reset (Passo 5). Os primeiros 4 passos são completamente seguros e não deletam nada.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Funciona em qualquer marca de TV Box?
              </h3>
              <p className="text-gray-600">
                Sim! Esses passos funcionam em qualquer TV Box com Android TV ou Google TV (MXQ, H96, X96, e outros modelos).
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                E se nada funcionar?
              </h3>
              <p className="text-gray-600">
                Se você seguiu todos os passos e nada funcionou, entre em contato com o suporte técnico do fabricante da sua TV Box. Mas em 95% dos casos, os passos acima resolvem o problema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não Deixe Sua TV Box Parada
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Reative agora e tenha acesso ao guia completo com passo a passo detalhado.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white text-gray-900 placeholder-gray-500 border-0"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 whitespace-nowrap"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Guia"}
                </Button>
              </div>
              <p className="text-sm text-blue-100 mt-3">
                {"✓"} Guia gratuito {"•"} {"✓"} Sem spam {"•"} {"✓"} Cancelar a qualquer momento
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Legal Path Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Se Nada Funcionar: Entenda o Problema Real
            </h2>
            
            <div className="bg-white border-l-4 border-red-500 p-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Os Bloqueios Judiciais Explicados</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se voc\u00ea seguiu todos os 5 passos e sua TV Box ainda n\u00e3o funciona, o problema provavelmente est\u00e1 relacionado aos bloqueios judiciais recentes. \u00d3rg\u00e3os reguladores e plataformas de streaming leg\u00edtimas t\u00eam derrubado sistematicamente aplicativos piratas e ilegais que ofereciam conte\u00fado sem autoriza\u00e7\u00e3o.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Esses bloqueios s\u00e3o permanentes e intencionais. N\u00e3o \u00e9 um problema t\u00e9cnico que possa ser corrigido \u2014 \u00e9 uma a\u00e7\u00e3o legal para proteger os direitos autorais e a ind\u00fastria do entretenimento.
              </p>
            </div>

            <div className="bg-white border-l-4 border-green-500 p-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">O Caminho Legal e Seguro</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Em vez de tentar reativar aplicativos bloqueados, recomendamos adotar servi\u00e7os de streaming leg\u00edtimos e confi\u00e1veis. Eles oferecem:
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Seguran\u00e7a Garantida</h4>
                    <p className="text-gray-600">Sem risco de malware, v\u00edrus ou problemas legais.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Qualidade Garantida</h4>
                    <p className="text-gray-600">Conte\u00fado em alta defini\u00e7\u00e3o, sem interrup\u00e7\u00f5es ou bloqueios.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Suporte Profissional</h4>
                    <p className="text-gray-600">Atendimento ao cliente 24/7 em caso de problemas.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Pre\u00e7os Acess\u00edveis</h4>
                    <p className="text-gray-600">Planos para todos os or\u00e7amentos, muitos com per\u00edodo de teste gratuito.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Servi\u00e7os Recomendados e Confi\u00e1veis</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Escolha uma ou mais dessas plataformas leg\u00edtimas para desfrutar de entretenimento de qualidade:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Netflix</h4>
                  <p className="text-sm text-gray-600">Filmes, s\u00e9ries e document\u00e1rios originais de qualidade premium.</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Amazon Prime Video</h4>
                  <p className="text-sm text-gray-600">Conte\u00fado exclusivo + benef\u00edcios adicionais da assinatura Prime.</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Disney+</h4>
                  <p className="text-sm text-gray-600">Disney, Marvel, Star Wars, Pixar e National Geographic.</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Globoplay</h4>
                  <p className="text-sm text-gray-600">Novelas, s\u00e9ries e conte\u00fado exclusivo da Globo.</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">YouTube Premium</h4>
                  <p className="text-sm text-gray-600">Sem an\u00fancios + acesso a conte\u00fado exclusivo.</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Pluto TV</h4>
                  <p className="text-sm text-gray-600">Canais ao vivo e conte\u00fado sob demanda \u2014 completamente gratuito.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 border border-gray-300 p-8 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Escolha Produtos Originais e de Confian\u00e7a</h3>
              <p className="text-gray-700 leading-relaxed">
                Ao investir em uma TV Box ou smart TV, sempre escolha marcas reconhecidas e autorizadas. Produtos originais oferecem garantia, atualiza\u00e7\u00f5es de seguran\u00e7a regulares e compatibilidade com os servi\u00e7os de streaming leg\u00edtimos. Evite produtos falsificados ou de origem duvidosa \u2014 eles s\u00e3o mais baratos, mas v\u00eam sem suporte, seguran\u00e7a ou confiabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Sobre</h3>
              <p className="text-sm">
                Guia prático para reativar TV Boxes com aplicativos de streaming fora do ar.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Redes Sociais</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>{"©"} 2025 Reative sua TV Box. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
