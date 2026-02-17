# Guia de Configuração - Facebook Pixel e Google Analytics

Este documento orienta como configurar o Facebook Pixel e Google Analytics para rastreamento de performance em todas as landing pages do projeto "Recuperar Controle".

## 📊 O que é rastreado?

O sistema rastreia os seguintes eventos:

### Facebook Pixel
- **PageView** - Visualização de página
- **ViewContent** - Visualização de conteúdo (landing page)
- **AddToCart** - Clique no botão de compra
- **InitiateCheckout** - Início do checkout
- **Purchase** - Compra realizada
- **Lead** - Geração de lead (captura de email)

### Google Analytics
- **page_view** - Visualização de página
- **view_item** - Visualização de conteúdo
- **add_to_cart** - Clique no botão de compra
- **begin_checkout** - Início do checkout
- **purchase** - Compra realizada
- **generate_lead** - Geração de lead

## 🔧 Como Configurar

### 1. Facebook Pixel

#### Passo 1: Criar/Acessar seu Facebook Pixel
1. Acesse [Facebook Business Manager](https://business.facebook.com)
2. Clique em **Eventos** (no menu esquerdo)
3. Clique em **Conectar Dados** → **Pixel Web**
4. Se não tiver um Pixel, clique em **Criar Pixel**
5. Copie o **ID do Pixel** (formato: 123456789)

#### Passo 2: Adicionar ID ao projeto
1. Abra o arquivo `.env.local` na raiz do projeto
2. Adicione a variável:
```
VITE_FACEBOOK_PIXEL_ID=SEU_PIXEL_ID_AQUI
```
3. Substitua `SEU_PIXEL_ID_AQUI` pelo ID copiado

#### Passo 3: Testar no Facebook Events Manager
1. Volte ao [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Acesse seu Pixel
3. Abra sua landing page em um navegador
4. Você deve ver "Pixel instalado com sucesso" em verde
5. Navegue pelas páginas e veja os eventos sendo rastreados em tempo real

### 2. Google Analytics (GA4)

#### Passo 1: Criar/Acessar sua propriedade GA4
1. Acesse [Google Analytics](https://analytics.google.com)
2. Clique em **Criar** (ou acesse uma propriedade existente)
3. Preencha os dados:
   - **Nome da propriedade**: "Recuperar Controle - Landing Pages"
   - **Fuso horário**: America/Sao_Paulo
   - **Moeda**: BRL
4. Clique em **Criar propriedade**

#### Passo 2: Criar stream de dados web
1. Na seção **Fluxo de dados**, clique em **Criar stream**
2. Selecione **Web**
3. Preencha:
   - **URL do site**: www.recuperarcontrole.com.br
   - **Nome do stream**: "Landing Pages"
4. Clique em **Criar stream**
5. Copie o **ID de medição** (formato: G-XXXXXXXXXX)

#### Passo 3: Adicionar ID ao projeto
1. Abra o arquivo `.env.local` na raiz do projeto
2. Adicione a variável:
```
VITE_GOOGLE_ANALYTICS_ID=SEU_GA_ID_AQUI
```
3. Substitua `SEU_GA_ID_AQUI` pelo ID copiado

#### Passo 4: Testar no Google Analytics
1. Volte ao [Google Analytics](https://analytics.google.com)
2. Acesse sua propriedade
3. Clique em **Relatórios em tempo real**
4. Abra sua landing page em um navegador
5. Você deve ver a sessão aparecendo em tempo real

## 📈 Configuração de Eventos Customizados

### Rastreamento de Cliques em CTAs

Os botões de compra já rastreiam automaticamente, mas você pode adicionar rastreamento customizado:

```typescript
import { trackInitiateCheckout } from '@/components/TrackingPixels';

// Em um componente
<Button onClick={() => {
  trackInitiateCheckout('E-book Recuperar Controle', 67);
  window.open('https://pay.hotmart.com/...', '_blank');
}}>
  Comprar Agora
</Button>
```

### Rastreamento de Captura de Email

```typescript
import { trackLead } from '@/components/TrackingPixels';

// Após capturar email
trackLead('Email Capture - Ebook01_01', email);
```

## 🎯 Variáveis de Ambiente

Arquivo `.env.local`:
```
VITE_FACEBOOK_PIXEL_ID=123456789
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## 📊 Métricas Importantes para Monitorar

### Facebook Ads Manager
- **CPM** (Custo por mil impressões)
- **CPC** (Custo por clique)
- **CTR** (Taxa de clique)
- **Conversão** (Compras)
- **ROAS** (Retorno sobre gastos em anúncios)

### Google Analytics
- **Taxa de conversão** (Compras / Sessões)
- **Valor médio de pedido**
- **Tempo na página**
- **Taxa de rejeição**
- **Origem do tráfego** (Orgânico, Pago, Direto)

## 🔍 Comparação de Performance por Landing Page

Use as métricas abaixo para comparar qual landing page converte melhor:

| Landing Page | Público | Métrica | Meta |
|---|---|---|---|
| `/ebook01_01` | TCC/Google Ads | Conversão | 5% |
| `/ebook01_02` | Feminino/Meta Ads | Conversão | 4% |
| `/ebook01_03` | Masculino/Meta Ads | Conversão | 5% |

## 🚨 Troubleshooting

### Pixel não aparece no Facebook Events Manager
- Verifique se a variável `VITE_FACEBOOK_PIXEL_ID` está correta
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Aguarde 5-10 minutos para sincronização

### Google Analytics não mostra dados
- Verifique se a variável `VITE_GOOGLE_ANALYTICS_ID` está correta
- Acesse "Relatórios em tempo real" para verificação rápida
- Aguarde 24 horas para dados históricos aparecerem

### Eventos não estão sendo rastreados
- Verifique se o console do navegador mostra erros (F12)
- Verifique se o Ad Blocker está bloqueando os scripts
- Teste em modo incógnito

## 📞 Suporte

Para dúvidas sobre configuração:
- [Facebook Pixel Documentation](https://developers.facebook.com/docs/facebook-pixel)
- [Google Analytics Documentation](https://support.google.com/analytics)
- Contato: contato@gestaofx.com.br
