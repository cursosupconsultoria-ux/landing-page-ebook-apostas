# Guia: Configurar Landing Page como Subdomínio de recuperarcontrole.com.br

Este guia mostra como apontar a landing page para um subdomínio do seu domínio principal `recuperarcontrole.com.br` (ex: `ebook.recuperarcontrole.com.br`).

---

## 📋 Visão Geral

Você tem dois caminhos:

1. **Opção A (Recomendada):** Usar Nameservers do Vercel - Mais simples e automático
2. **Opção B:** Usar Registros DNS individuais - Mais controle, mas mais complexo

---

## ✅ Opção A: Usar Nameservers do Vercel (RECOMENDADO)

### Passo 1: Adicionar Domínio no Vercel

1. Acesse https://vercel.com/dashboard
2. Clique no projeto `landing-page-ebook-apostas`
3. Vá para **Settings** → **Domains**
4. Clique em **Add Domain**
5. Digite seu domínio: `recuperarcontrole.com.br`
6. Clique em **Add**

### Passo 2: Obter Nameservers do Vercel

Após adicionar o domínio, o Vercel mostrará uma mensagem como:

```
Use these nameservers at your domain registrar:
- ns1.vercel-dns.com
- ns2.vercel-dns.com
- ns3.vercel-dns.com
- ns4.vercel-dns.com
```

**Copie estes 4 nameservers** - você precisará deles no próximo passo.

### Passo 3: Atualizar Nameservers no Seu Registrador

Você precisa acessar o painel de controle do registrador onde você registrou `recuperarcontrole.com.br`.

**Se registrou em Registro.br:**

1. Acesse https://www.registro.br
2. Faça login com suas credenciais
3. Clique em **Meus Domínios**
4. Clique no domínio `recuperarcontrole.com.br`
5. Clique em **Editar Domínio**
6. Procure por **Editar Nameservers** ou **Servidores de Nomes**
7. Remova os nameservers antigos (se houver)
8. Adicione os 4 nameservers do Vercel:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com
   - ns3.vercel-dns.com
   - ns4.vercel-dns.com
9. Clique em **Salvar**

**Se registrou em outro registrador (Namecheap, GoDaddy, etc):**

1. Acesse o painel do seu registrador
2. Procure por **Domain Management** ou **Meus Domínios**
3. Clique em **Manage DNS** ou **Editar Nameservers**
4. Selecione **Custom Nameservers** ou **Usar meus próprios nameservers**
5. Adicione os 4 nameservers do Vercel
6. Salve as mudanças

### Passo 4: Aguardar Propagação de DNS

**Quanto tempo leva?** Geralmente 24-48 horas, mas pode ser imediato.

**Como verificar:**

1. Abra https://www.whatsmydns.net
2. Digite: `recuperarcontrole.com.br`
3. Selecione **Nameserver** no dropdown
4. Se todos os servidores mostrarem os nameservers do Vercel, está pronto! ✅

### Passo 5: Configurar Subdomínio no Vercel

Agora que o domínio principal está apontando para o Vercel, você pode criar subdomínios:

1. No Vercel, vá para **Settings** → **Domains**
2. Clique em **Add Domain**
3. Digite o subdomínio completo: `ebook.recuperarcontrole.com.br`
4. Clique em **Add**

**Pronto!** O subdomínio estará automaticamente apontando para sua landing page.

---

## 🔧 Opção B: Usar Registros DNS Individuais

Se você não quer mudar os nameservers (porque tem outros serviços usando o domínio), use esta opção.

### Passo 1: Obter Registros DNS do Vercel

1. No Vercel, vá para **Settings** → **Domains**
2. Clique no domínio `recuperarcontrole.com.br`
3. Você verá registros como:

```
Type: A
Name: @
Value: 76.76.19.165

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Copie estes registros.**

### Passo 2: Adicionar Registros no Seu Registrador

**Se registrou em Registro.br:**

1. Acesse https://www.registro.br
2. Clique em **Meus Domínios** → seu domínio
3. Clique em **Editar Domínio**
4. Procure por **Editar Registros DNS** ou **Zona DNS**
5. Adicione os registros fornecidos pelo Vercel
6. Salve

**Se registrou em outro registrador:**

1. Acesse o painel do seu registrador
2. Procure por **DNS Management** ou **Editar DNS**
3. Adicione os registros fornecidos pelo Vercel
4. Salve

### Passo 3: Para Criar Subdomínio

Se quiser usar `ebook.recuperarcontrole.com.br`:

1. Adicione um registro CNAME:
   ```
   Type: CNAME
   Name: ebook
   Value: cname.vercel-dns.com
   ```
2. Salve

---

## ⚠️ Importante: Não Misture Métodos

**Escolha UMA opção:**
- Se usar **Nameservers do Vercel** (Opção A), não adicione registros DNS individuais
- Se usar **Registros DNS** (Opção B), não mude os nameservers

Misturar os dois pode causar conflitos e sua página não funcionar.

---

## 🧪 Testar se Tudo Funciona

### Teste 1: Acessar o Domínio

1. Abra seu navegador
2. Digite: `https://recuperarcontrole.com.br`
3. Você deve ver sua landing page

### Teste 2: Acessar o Subdomínio

1. Digite: `https://ebook.recuperarcontrole.com.br`
2. Você deve ver a mesma landing page

### Teste 3: Verificar DNS

```bash
# No terminal
nslookup recuperarcontrole.com.br
# ou
dig recuperarcontrole.com.br
```

Você deve ver os nameservers do Vercel na resposta.

### Teste 4: Verificar Certificado SSL

1. Clique no cadeado 🔒 na barra de endereço
2. Clique em **Certificado**
3. Você deve ver um certificado válido do Vercel

---

## 🔐 SSL/HTTPS Automático

O Vercel ativa HTTPS automaticamente para todos os domínios e subdomínios. Você não precisa fazer nada!

- ✅ Certificado SSL gratuito
- ✅ Renovação automática
- ✅ Suporte a HTTPS em todos os subdomínios

---

## 🚀 Próximos Passos

Após configurar o domínio:

1. **Testar a landing page** - Acesse `https://ebook.recuperarcontrole.com.br` e verifique se tudo funciona
2. **Configurar redirecionamento no Hotmart** - Defina a URL de retorno como `https://ebook.recuperarcontrole.com.br/obrigado`
3. **Adicionar analytics** - Configure Google Analytics e Facebook Pixel com seus IDs
4. **Monitorar conversões** - Acompanhe as vendas no Vercel Dashboard

---

## 🆘 Solução de Problemas

### Problema: "Domínio não encontrado" ou erro 404

**Solução:**
1. Aguarde 24-48 horas para propagação de DNS
2. Limpe o cache do navegador (Ctrl+Shift+Delete)
3. Tente em outro navegador ou dispositivo
4. Verifique em https://www.whatsmydns.net se o DNS foi propagado

### Problema: "Certificado SSL inválido"

**Solução:**
1. Aguarde alguns minutos para o Vercel gerar o certificado
2. Atualize a página
3. Se persistir, entre em contato com suporte do Vercel

### Problema: "Nameservers não estão apontando"

**Solução:**
1. Verifique se digitou corretamente os nameservers
2. Aguarde 24-48 horas
3. Use https://www.whatsmydns.net para verificar
4. Contate o suporte do Registro.br ou seu registrador

### Problema: "Subdomínio não funciona"

**Solução:**
1. Verifique se adicionou o subdomínio completo no Vercel (ex: `ebook.recuperarcontrole.com.br`)
2. Se usando registros DNS, adicione um CNAME para o subdomínio
3. Aguarde propagação de DNS

---

## 📞 Suporte

- **Vercel Support:** https://vercel.com/support
- **Registro.br Support:** https://www.registro.br/suporte/
- **Documentação Vercel:** https://vercel.com/docs/concepts/projects/domains

---

## 📚 Resumo Rápido

| Etapa | O que fazer |
|-------|-----------|
| 1 | Adicionar domínio no Vercel |
| 2 | Copiar nameservers do Vercel |
| 3 | Atualizar nameservers no Registro.br |
| 4 | Aguardar 24-48 horas |
| 5 | Verificar em whatsmydns.net |
| 6 | Adicionar subdomínio no Vercel |
| 7 | Testar acesso ao domínio |

---

**Última atualização:** 16 de fevereiro de 2026  
**Versão:** 1.0
