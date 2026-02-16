import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * EmailCaptureModal - Captura de email com design expressionista
 * - Aparece após 30 segundos ou scroll de 50% da página
 * - Armazena email em localStorage para não mostrar novamente
 * - Design alinhado com a paleta do projeto (alaranjado, bege, teal)
 */

export default function EmailCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Verificar se o modal já foi mostrado nesta sessão
    const hasShown = localStorage.getItem('emailModalShown');
    if (hasShown) {
      return;
    }

    // Mostrar após 30 segundos
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
      localStorage.setItem('emailModalShown', 'true');
    }, 30000);

    // Também mostrar ao fazer scroll de 50% da página
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50 && !isOpen && !hasShown) {
        setIsOpen(true);
        localStorage.setItem('emailModalShown', 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      // Enviar email para um serviço (você pode usar Mailchimp, Brevo, etc.)
      // Por enquanto, apenas armazenar localmente
      const existingEmails = JSON.parse(localStorage.getItem('capturedEmails') || '[]');
      existingEmails.push({
        email,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('capturedEmails', JSON.stringify(existingEmails));

      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
        setEmail('');
      }, 2000);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 bg-white rounded-lg shadow-2xl overflow-hidden grain-overlay">
        {/* Fundo com gradiente expressionista */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f1e8] via-white to-[#f5f1e8] pointer-events-none" />

        {/* Conteúdo */}
        <div className="relative p-8">
          {/* Botão fechar */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {!submitted ? (
            <>
              <h2 className="text-headline text-[#0a0a0a] mb-3">
                Não perca a oportunidade
              </h2>

              <p className="text-body-large text-gray-700 mb-6">
                Receba dicas exclusivas sobre recuperação do controle e atualizações sobre novos produtos do Projeto Recuperar Controle.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e76f51] focus:border-transparent transition-all"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#e76f51] hover:bg-[#d85a3d] text-white font-bold py-3 rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Enviando...' : 'Receber Dicas Exclusivas'}
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Não compartilhamos seu email. Você pode desinscrever-se a qualquer momento.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-headline text-[#0a0a0a] mb-2">Obrigado!</h3>
              <p className="text-body-large text-gray-700">
                Verifique seu email para as dicas exclusivas.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
