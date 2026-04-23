"use client"

import { useState } from "react"
import { LegalModal } from "./LegalModal"
import { trackModalOpen } from "@/components/GoogleAnalytics"

function PrivacyContent() {
  return (
    <>
      <p><strong style={{ color: "var(--text-main)" }}>Última atualização: abril de 2026</strong></p>
      <p>
        Esta Política de Privacidade descreve como Bárbara Leal Reis ("nós") coleta, usa e protege
        os dados pessoais dos usuários deste site, em conformidade com a Lei Geral de Proteção de
        Dados (LGPD, Lei n. 13.709/2018).
      </p>

      <p><strong style={{ color: "var(--text-main)" }}>1. Dados que coletamos</strong></p>
      <p>
        Ao acessar este site ou realizar uma compra, podemos coletar: nome, endereço de e-mail,
        dados de navegação (cookies e logs de acesso) e informações de pagamento processadas
        exclusivamente pela plataforma Hotmart. Não armazenamos dados de cartão de crédito.
      </p>

      <p><strong style={{ color: "var(--text-main)" }}>2. Como usamos seus dados</strong></p>
      <p>
        Seus dados são utilizados para: processar e confirmar sua compra, enviar o material digital
        adquirido, responder dúvidas e solicitações de suporte, e eventualmente enviar comunicações
        sobre novos conteúdos (com opção de cancelamento a qualquer momento).
      </p>

      <p><strong style={{ color: "var(--text-main)" }}>3. Compartilhamento</strong></p>
      <p>
        Não vendemos nem compartilhamos seus dados pessoais com terceiros, exceto com a Hotmart
        (plataforma de pagamento e entrega do produto) e conforme exigido por lei.
      </p>

      <p><strong style={{ color: "var(--text-main)" }}>4. Seus direitos (LGPD)</strong></p>
      <p>
        Você tem direito a: confirmar a existência de tratamento, acessar seus dados, corrigir
        dados incompletos, solicitar anonimização ou exclusão, revogar o consentimento e
        solicitar portabilidade. Para exercer esses direitos, entre em contato pelo e-mail
        barbareispsi@gmail.com.
      </p>

      <p><strong style={{ color: "var(--text-main)" }}>5. Cookies</strong></p>
      <p>
        Utilizamos cookies essenciais para o funcionamento do site. Você pode desativá-los nas
        configurações do seu navegador, mas isso pode afetar a experiência de uso.
      </p>

      <p><strong style={{ color: "var(--text-main)" }}>6. Segurança</strong></p>
      <p>
        Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra
        acesso não autorizado, perda ou divulgação indevida.
      </p>

      <p><strong style={{ color: "var(--text-main)" }}>7. Contato</strong></p>
      <p>
        Dúvidas sobre esta política podem ser enviadas para barbareispsi@gmail.com.
      </p>
    </>
  )
}

function TermsContent() {
  return (
    <>
      <p><strong style={{ color: "var(--text-main)" }}>Última atualização: abril de 2026</strong></p>
      <p>
        Ao adquirir o material digital "TDAH na Vida Adulta" você concorda com os Termos de Uso
        abaixo, que regulam a relação entre você (usuário) e Bárbara Leal Reis (produtora do
        conteúdo).
      </p>

      <p><strong style={{ color: "var(--text-main)" }}>1. Natureza do produto</strong></p>
      <p>
        O material é um guia digital de caráter educativo e informativo. Não constitui consulta,
        diagnóstico, prescrição ou tratamento psicológico. Não substitui o acompanhamento de
        profissional de saúde habilitado.
      </p>

      <p><strong style={{ color: "var(--text-main)" }}>2. Licença de uso</strong></p>
      <p>
        Ao adquirir o produto, você recebe uma licença pessoal, intransferível e não exclusiva de
        uso. É proibido reproduzir, distribuir, revender, compartilhar ou disponibilizar o
        conteúdo — total ou parcialmente — sem autorização prévia e por escrito.
      </p>

      <p><strong style={{ color: "var(--text-main)" }}>3. Propriedade intelectual</strong></p>
      <p>
        Todo o conteúdo do material (textos, áudios, vídeos e demais elementos) é de propriedade
        exclusiva de Bárbara Leal Reis e protegido pela legislação de direitos autorais (Lei n.
        9.610/1998).
      </p>

      <p><strong style={{ color: "var(--text-main)" }}>4. Garantia e reembolso</strong></p>
      <p>
        Você tem 7 dias corridos a partir da compra para solicitar reembolso integral, sem
        necessidade de justificativa, diretamente pela plataforma Hotmart. Após esse prazo, não
        serão aceitas solicitações de estorno.
      </p>

      <p><strong style={{ color: "var(--text-main)" }}>5. Limitação de responsabilidade</strong></p>
      <p>
        O conteúdo é fornecido "como está", sem garantia de resultados específicos. A produtora
        não se responsabiliza por decisões tomadas com base no material, nem por danos diretos ou
        indiretos decorrentes do uso ou incapacidade de uso do produto.
      </p>

      <p><strong style={{ color: "var(--text-main)" }}>6. Alterações</strong></p>
      <p>
        Estes termos podem ser atualizados a qualquer momento. A versão vigente estará sempre
        disponível nesta página.
      </p>

      <p><strong style={{ color: "var(--text-main)" }}>7. Foro</strong></p>
      <p>
        Fica eleito o foro da Comarca do Rio de Janeiro, RJ, para dirimir quaisquer conflitos
        decorrentes destes termos.
      </p>
    </>
  )
}

export function FooterSection() {
  const [modal, setModal] = useState<"privacy" | "terms" | null>(null)

  return (
    <>
      <LegalModal
        open={modal === "privacy"}
        onClose={() => setModal(null)}
        title="Política de Privacidade"
      >
        <PrivacyContent />
      </LegalModal>

      <LegalModal
        open={modal === "terms"}
        onClose={() => setModal(null)}
        title="Termos de Uso"
      >
        <TermsContent />
      </LegalModal>

    <footer
      className="py-12 md:py-16"
      style={{
        backgroundColor: "var(--text-main)",
        color: "#ffffff",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl" style={{ color: "#ffffff" }}>
              B&aacute;rbara Leal Reis
            </p>
            <p className="font-sans text-sm mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
              Psic&oacute;loga &bull; CRP 05/56240
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/psi.barbarareis"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.8)" }}
              aria-label="Instagram de Bárbara Leal Reis"
            >
              Instagram
            </a>
            <a
              href="mailto:barbareispsi@gmail.com"
              className="font-sans text-sm transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              barbareispsi@gmail.com
            </a>
            <a
              href="https://wa.me/5522997363220"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.8)" }}
              aria-label="WhatsApp de Bárbara Leal Reis"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ borderColor: "rgba(255,255,255,0.15)" }} />

        {/* Legal disclaimer */}
        <p
          className="font-sans text-xs leading-relaxed"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Este material tem finalidade educativa e n&atilde;o substitui avalia&ccedil;&atilde;o, diagn&oacute;stico ou tratamento realizado por profissional de sa&uacute;de habilitado. Pagamento processado com seguran&ccedil;a pela Hotmart.
        </p>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p
            className="font-sans text-xs"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            &copy; 2026 B&aacute;rbara Leal Reis, Todos os direitos reservados
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setModal("privacy")
                trackModalOpen("Política de Privacidade")
              }}
              className="font-sans text-xs underline underline-offset-2 transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              Pol&iacute;tica de Privacidade
            </button>
            <button
              onClick={() => {
                setModal("terms")
                trackModalOpen("Termos de Uso")
              }}
              className="font-sans text-xs underline underline-offset-2 transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
