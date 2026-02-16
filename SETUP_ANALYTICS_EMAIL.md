# Configuração de Analytics e Captura de Email

Este documento descreve como configurar os recursos de rastreamento e captura de email na landing page.

## 1. Captura de Email (EmailCaptureModal)

O componente `EmailCaptureModal` foi adicionado à landing page e aparece automaticamente:
- **Após 30 segundos** de permanência na página
- **Ao fazer scroll de 50%** da página (o que ocorrer primeiro)

### Características:
- ✅ Modal responsivo com design expressionista
- ✅ Armazena emails em `localStorage` (não mostra novamente na mesma sessão)
- ✅ Validação de email
- ✅ Mensagem de sucesso após envio
- ✅ Alinhado com a paleta de cores do projeto (alaranjado, bege, teal)

### Próximos passos:
Para integrar com um serviço de email (Mailchimp, Brevo, etc.), edite o arquivo `client/src/components/EmailCaptureModal.tsx` e substitua a seção de armazenamento local por uma chamada API:

```typescript
// Exemplo com Mailchimp
const response = await fetch('https://seu-mailchimp-endpoint.com/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
});
```

---

## 2. Google Analytics

O componente `AnalyticsTracker` foi adicionado para rastrear eventos na landing page.

### Configuração:
1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma propriedade para seu site
3. Copie o **ID de medição** (formato: `G-XXXXXXXXXX`)
4. Adicione a variável de ambiente no arquivo `.env.local`:

```bash
REACT_APP_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Eventos rastreados:
- ✅ `PageView` - Visualização de página
- ✅ `CTA_Click` - Cliques em botões de CTA
- ✅ `Lead` - Captura de email
- ✅ `InitiateCheckout` - Cliques em links de compra
- ✅ `Purchase` - Conversão (na página de agradecimento)

---

## 3. Facebook Pixel

O componente `AnalyticsTracker` também rastreia eventos no Facebook Pixel.

### Configuração:
1. Acesse [Facebook Ads Manager](https://business.facebook.com/)
2. Vá para **Eventos** → **Gerenciar Pixels**
3. Crie um novo Pixel ou use um existente
4. Copie o **ID do Pixel**
5. Adicione a variável de ambiente no arquivo `.env.local`:

```bash
REACT_APP_FACEBOOK_PIXEL_ID=123456789
```

### Eventos rastreados:
- ✅ `PageView` - Visualização de página
- ✅ `Lead` - Captura de email
- ✅ `InitiateCheckout` - Cliques em links de compra
- ✅ `Purchase` - Conversão (na página de agradecimento)

---

## 4. Página de Agradecimento Pós-Compra

Uma página de agradecimento foi criada em `/obrigado` (ou `/thank-you`).

### Como usar:
Você pode redirecionar os usuários para esta página após a compra no Hotmart:

1. **Opção 1: URL de redirecionamento no Hotmart**
   - Acesse as configurações do seu produto no Hotmart
   - Adicione a URL de redirecionamento: `https://seu-dominio.com/obrigado`

2. **Opção 2: Redirecionamento via JavaScript**
   ```javascript
   window.location.href = 'https://seu-dominio.com/obrigado';
   ```

### Conteúdo da página:
- ✅ Mensagem de sucesso
- ✅ Instruções para acessar o e-book
- ✅ Links para próximos passos
- ✅ FAQ sobre o produto
- ✅ Informações de suporte

---

## 5. Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```bash
# Google Analytics
REACT_APP_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Facebook Pixel
REACT_APP_FACEBOOK_PIXEL_ID=123456789
```

**Importante:** Não compartilhe este arquivo. Adicione `.env.local` ao `.gitignore`.

---

## 6. Testando Localmente

Para testar os componentes localmente:

1. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```

2. Abra a página inicial em `http://localhost:3000`

3. **Testar EmailCaptureModal:**
   - Aguarde 30 segundos ou faça scroll de 50%
   - O modal deve aparecer
   - Preencha o email e clique em "Receber Dicas Exclusivas"
   - Verifique o `localStorage` no DevTools (F12 → Application → Local Storage)

4. **Testar Analytics:**
   - Abra o Google Analytics em tempo real
   - Você deve ver a visualização de página
   - Clique em um botão de CTA e verifique se o evento foi rastreado

5. **Testar Página de Agradecimento:**
   - Navegue para `http://localhost:3000/obrigado`
   - A página deve carregar corretamente

---

## 7. Deployment no Vercel

Ao fazer deploy no Vercel:

1. Acesse as configurações do projeto no Vercel
2. Vá para **Settings** → **Environment Variables**
3. Adicione as variáveis de ambiente:
   - `REACT_APP_GOOGLE_ANALYTICS_ID`
   - `REACT_APP_FACEBOOK_PIXEL_ID`

4. Faça um novo deploy

---

## 8. Monitorando Conversões

### Google Analytics:
- Acesse **Relatórios** → **Conversão** para ver eventos rastreados
- Configure **Metas** para rastrear conversões específicas

### Facebook Ads Manager:
- Vá para **Eventos** para ver os eventos rastreados
- Use os dados para criar **Públicos Personalizados** e **Públicos Similares**

---

## 9. Suporte e Próximos Passos

### Recomendações:
1. **Integrar com CRM:** Conecte a captura de email com um CRM (HubSpot, Pipedrive, etc.)
2. **Automação de Email:** Configure sequências de email automáticas após captura
3. **A/B Testing:** Teste diferentes textos e designs do modal
4. **Retargeting:** Use o Facebook Pixel para criar campanhas de retargeting
5. **Otimização de Conversão:** Analise os dados e otimize continuamente

### Contato:
Para dúvidas ou sugestões, entre em contato com o time de desenvolvimento.

---

**Data de criação:** 15 de fevereiro de 2026  
**Versão:** 1.0
