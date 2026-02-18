# Guia Completo: Teste do TikTok Pixel

**Versão:** 1.0  
**Data:** Fevereiro 2026  
**Projeto:** Recuperar Controle - E-book Ansiedade e Vício em Apostas  
**TikTok Pixel ID:** D6AH6J3C77U2V3Q5JOQG  
**Código de Teste:** TEST14972

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Pré-requisitos](#pré-requisitos)
3. [Teste Local (Desenvolvimento)](#teste-local-desenvolvimento)
4. [Teste em Produção](#teste-em-produção)
5. [Validação no TikTok Ads Manager](#validação-no-tiktok-ads-manager)
6. [Troubleshooting](#troubleshooting)
7. [Próximos Passos](#próximos-passos)

---

## 🎯 Visão Geral

O TikTok Pixel foi implementado com suporte nativo a **modo de teste**, permitindo validar que os eventos estão sendo capturados e enviados corretamente para o TikTok Ads Manager sem afetar dados de produção.

### O que será testado:

- ✅ Carregamento correto do script do TikTok Pixel
- ✅ Rastreamento de visualizações de página (`PageView`)
- ✅ Rastreamento de cliques em CTAs (`AddToCart`)
- ✅ Envio de eventos com código de teste (TEST14972)
- ✅ Recebimento de eventos no TikTok Ads Manager

---

## 📋 Pré-requisitos

Antes de iniciar os testes, certifique-se de que você possui:

1. **Acesso ao TikTok Ads Manager** com permissão para gerenciar o Pixel
2. **TikTok Pixel criado e ativo** (ID: D6AH6J3C77U2V3Q5JOQG)
3. **Acesso às landing pages** (local ou produção)
4. **Console do navegador aberto** (F12 ou Cmd+Option+I)
5. **Paciência** - eventos podem levar até 15 minutos para aparecer no TikTok Ads Manager

---

## 🧪 Teste Local (Desenvolvimento)

### Passo 1: Iniciar o Servidor de Desenvolvimento

```bash
cd /home/ubuntu/landing-page-ebook-apostas
pnpm install
pnpm run dev
```

O servidor estará disponível em `http://localhost:3000`.

### Passo 2: Ativar Modo de Teste

Acesse qualquer uma das landing pages com o parâmetro `?tiktok_test=true`:

| Landing Page | URL de Teste |
|---|---|
| Ebook 01 (Original) | `http://localhost:3000/ebook01?tiktok_test=true` |
| Ebook 01_01 (Ansiedade/Impulsividade) | `http://localhost:3000/ebook01_01?tiktok_test=true` |
| Ebook 01_02 (Proteção Familiar) | `http://localhost:3000/ebook01_02?tiktok_test=true` |
| Ebook 01_03 (Inteligência Financeira) | `http://localhost:3000/ebook01_03?tiktok_test=true` |

### Passo 3: Verificar Console do Navegador

Abra o console do navegador (F12) e procure por mensagens de confirmação:

```
✅ TikTok Pixel - Evento de teste enviado
Código de teste: TEST14972
Verifique em: TikTok Ads Manager > Eventos > Seu Pixel > Teste de Eventos
```

Se a mensagem aparecer, significa que o TikTok Pixel foi carregado e o evento de teste foi enviado com sucesso.

### Passo 4: Testar Cliques em CTAs

1. Localize os botões "COMPRE AGORA" ou "ADQUIRIR AGORA" na página
2. Clique em um deles
3. Verifique o console para confirmar que o evento foi rastreado
4. Você verá logs adicionais confirmando o rastreamento do clique

---

## 🌐 Teste em Produção

### Passo 1: Acessar Landing Page em Produção

Use a URL de produção com o parâmetro de teste:

```
https://www.recuperarcontrole.com.br/ebook01?tiktok_test=true
https://www.recuperarcontrole.com.br/ebook01_01?tiktok_test=true
https://www.recuperarcontrole.com.br/ebook01_02?tiktok_test=true
https://www.recuperarcontrole.com.br/ebook01_03?tiktok_test=true
```

### Passo 2: Verificar Console

Repita os mesmos passos do teste local. O console mostrará as mesmas mensagens de confirmação.

### Passo 3: Aguardar Propagação

Os eventos podem levar até **15 minutos** para aparecer no TikTok Ads Manager. Não feche a página imediatamente após o teste.

---

## ✅ Validação no TikTok Ads Manager

### Acessar Teste de Eventos

1. Faça login no **TikTok Ads Manager** (https://ads.tiktok.com)
2. Navegue até **Ativos** → **Pixels**
3. Selecione seu pixel (D6AH6J3C77U2V3Q5JOQG)
4. Clique na aba **Teste de Eventos**

### Verificar Eventos Recebidos

Na seção "Teste de Eventos", você verá:

- **Código de Teste:** TEST14972
- **Eventos Recebidos:** Lista de eventos enviados
- **Timestamp:** Hora exata do recebimento
- **Dados do Evento:** Detalhes como `content_name`, `value`, `currency`

### Exemplo de Evento Esperado

```json
{
  "event": "AddToCart",
  "test_event_code": "TEST14972",
  "data": {
    "content_name": "COMPRE AGORA",
    "content_type": "product",
    "value": 67,
    "currency": "BRL"
  },
  "timestamp": "2026-02-18T19:50:00Z"
}
```

---

## 🔧 Troubleshooting

### Problema: Nenhuma mensagem no console

**Possíveis causas:**
- Bloqueador de scripts (uBlock, Adblock Plus)
- JavaScript desabilitado no navegador
- Erro de carregamento do TikTok Pixel

**Solução:**
1. Desabilite extensões de bloqueio de anúncios temporariamente
2. Verifique se JavaScript está habilitado
3. Abra o console (F12) e procure por erros vermelhos
4. Recarregue a página (Ctrl+Shift+R para cache limpo)

### Problema: Eventos não aparecem no TikTok Ads Manager

**Possíveis causas:**
- Pixel não está vinculado corretamente
- Código de teste incorreto
- Eventos ainda não foram propagados (aguarde 15 minutos)
- Problemas de conectividade

**Solução:**
1. Verifique se o ID do Pixel está correto: `D6AH6J3C77U2V3Q5JOQG`
2. Confirme que o código de teste é: `TEST14972`
3. Aguarde pelo menos 15 minutos
4. Tente novamente em outro navegador
5. Verifique a conexão de internet

### Problema: Erro "Pixel não reconhecido"

**Possível causa:**
- Pixel não está ativo na conta do TikTok Ads

**Solução:**
1. Acesse TikTok Ads Manager
2. Verifique se o Pixel está com status "Ativo"
3. Se não estiver, clique em "Ativar Pixel"
4. Aguarde 5 minutos e tente novamente

---

## 📊 Métricas de Sucesso

Após completar os testes, você deverá ver:

| Métrica | Esperado |
|---|---|
| Eventos PageView recebidos | ≥ 1 por acesso |
| Eventos AddToCart recebidos | ≥ 1 por clique em CTA |
| Tempo de propagação | < 15 minutos |
| Taxa de sucesso | 100% |

---

## 🚀 Próximos Passos

### 1. Desativar Modo de Teste em Produção

Após validar que tudo funciona, **remova o parâmetro `?tiktok_test=true`** das URLs de produção. Os eventos continuarão sendo rastreados normalmente, mas sem o código de teste.

### 2. Criar Campanhas no TikTok Ads

Com o Pixel validado, você pode criar campanhas de anúncios:

1. Acesse **TikTok Ads Manager** → **Campanhas**
2. Clique em **Criar Campanha**
3. Selecione objetivo: **Conversões**
4. Configure seu Pixel como evento de conversão
5. Defina públicos-alvo e orçamento
6. Inicie a campanha

### 3. Monitorar Performance

Acompanhe regularmente:

- **Taxa de Conversão:** Cliques em CTA vs. Visualizações
- **Custo por Conversão:** Investimento dividido por conversões
- **ROAS (Return on Ad Spend):** Receita gerada vs. Investimento
- **Eventos Rastreados:** Verifique se eventos continuam sendo capturados

### 4. Otimizar Campanhas

Com base nos dados coletados:

- Teste diferentes headlines e imagens
- Ajuste públicos-alvo
- Otimize landing pages para conversão
- A/B teste diferentes CTAs

---

## 📞 Suporte

Se encontrar problemas durante os testes:

1. **Verifique o console do navegador** (F12) para erros específicos
2. **Consulte a documentação oficial do TikTok:** https://ads.tiktok.com/help/article/tiktok-pixel-events
3. **Entre em contato:** contato@gestaofx.com.br

---

## 📝 Notas Técnicas

### Como o Modo de Teste Funciona

O componente `TikTokPixel.tsx` detecta automaticamente o parâmetro `?tiktok_test=true` na URL e:

1. Carrega o script do TikTok Pixel normalmente
2. Aguarda o carregamento completo (máximo 5 segundos)
3. Envia um evento de teste com `test_event_code: TEST14972`
4. Registra confirmação no console do navegador
5. Continua rastreando cliques em CTAs com o código de teste

### Código Implementado

```typescript
// Detectar modo de teste
const urlParams = new URLSearchParams(window.location.search);
const isTestMode = urlParams.get('tiktok_test') === 'true';
const testEventCode = 'TEST14972';

// Se em modo de teste, adicionar código de teste aos eventos
if (isTestMode) {
  eventData.test_event_code = testEventCode;
}
```

### Segurança

- O modo de teste **não afeta dados de produção**
- Eventos de teste são isolados no TikTok Ads Manager
- Parâmetro de teste é facilmente removível
- Nenhuma informação sensível é registrada

---

## 🎓 Referências

- [TikTok Pixel Documentation](https://ads.tiktok.com/help/article/tiktok-pixel-events)
- [TikTok Event Testing Guide](https://ads.tiktok.com/help/article/test-events)
- [TikTok Ads Manager](https://ads.tiktok.com)

---

**Última atualização:** Fevereiro 2026  
**Mantido por:** Equipe Recuperar Controle
