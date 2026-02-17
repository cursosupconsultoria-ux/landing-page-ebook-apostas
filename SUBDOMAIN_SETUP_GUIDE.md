# Guia Completo: Configurar Subdomínio Customizado no GitHub e Vercel

Este guia orientará você passo a passo para configurar um subdomínio customizado (como `ebook.seudominio.com`) para sua landing page no Vercel, com o código hospedado no GitHub.

---

## 📋 Visão Geral do Processo

O processo envolve três etapas principais:

1. **Registrar um domínio** (se ainda não tiver um)
2. **Conectar o GitHub ao Vercel** (já feito)
3. **Configurar o subdomínio no Vercel**
4. **Apontar o DNS para o Vercel**

---

## 🔧 Pré-requisitos

Você precisará de:

- ✅ Uma conta no Vercel (você já tem)
- ✅ Um repositório no GitHub (você já tem: `landing-page-ebook-apostas`)
- ✅ Um domínio registrado (ex: `seudominio.com`)
- ✅ Acesso ao painel de controle do seu registrador de domínio

---

## 📍 Opção 1: Comprar Domínio Diretamente no Vercel

**Vantagem:** Mais fácil e rápido
**Desvantagem:** Pode ser mais caro que em registradores especializados

### Passo 1: Acessar Configurações de Domínio no Vercel

1. Acesse https://vercel.com/dashboard
2. Clique no seu projeto `landing-page-ebook-apostas`
3. Vá para **Settings** (Configurações)
4. Clique em **Domains** (Domínios)

### Passo 2: Adicionar Novo Domínio

1. Clique em **Add Domain**
2. Digite o subdomínio desejado (ex: `ebook.seudominio.com`)
3. Clique em **Add**

### Passo 3: Configurar DNS

Se você já possui um domínio registrado em outro lugar:

1. O Vercel mostrará os registros DNS que você precisa adicionar
2. Vá para o painel de controle do seu registrador de domínio
3. Adicione os registros DNS conforme indicado pelo Vercel

---

## 🌐 Opção 2: Usar Domínio Existente (Recomendado)

**Vantagem:** Mais barato e flexível
**Desvantagem:** Requer configuração de DNS

### Passo 1: Registrar um Domínio

Se você ainda não tem um domínio, registre em um destes serviços:

| Registrador | URL | Preço Aproximado |
|------------|-----|-----------------|
| Namecheap | https://www.namecheap.com | $8-12/ano |
| GoDaddy | https://www.godaddy.com | $10-15/ano |
| Google Domains | https://domains.google | $12/ano |
| Registro.br | https://www.registro.br | R$40-50/ano |

**Exemplo:** Se registrar `seudominio.com.br`, você poderá criar subdomínios como:
- `ebook.seudominio.com.br`
- `vendas.seudominio.com.br`
- `blog.seudominio.com.br`

### Passo 2: Adicionar Domínio no Vercel

1. Acesse https://vercel.com/dashboard
2. Clique no seu projeto `landing-page-ebook-apostas`
3. Vá para **Settings** → **Domains**
4. Clique em **Add Domain**
5. Digite seu domínio (ex: `seudominio.com.br`)
6. Clique em **Add**

### Passo 3: Configurar Nameservers (Método Recomendado)

**O que são nameservers?** São servidores que apontam seu domínio para o Vercel.

#### 3.1 Obter Nameservers do Vercel

1. No Vercel, após adicionar o domínio, você verá uma mensagem como:
   ```
   Use these nameservers at your domain registrar:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com
   - ns3.vercel-dns.com
   - ns4.vercel-dns.com
   ```

2. Copie estes nameservers

#### 3.2 Configurar Nameservers no Registrador

**Exemplo com Namecheap:**

1. Acesse https://www.namecheap.com e faça login
2. Vá para **Domain List**
3. Clique em **Manage** ao lado do seu domínio
4. Vá para a aba **Nameservers**
5. Selecione **Custom DNS**
6. Cole os nameservers do Vercel:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com
   - ns3.vercel-dns.com
   - ns4.vercel-dns.com
7. Clique em **Save**

**Exemplo com GoDaddy:**

1. Acesse https://www.godaddy.com e faça login
2. Vá para **My Products**
3. Clique em **Manage** ao lado do seu domínio
4. Vá para **DNS**
5. Clique em **Change Nameservers**
6. Selecione **I'll use my own nameservers**
7. Cole os nameservers do Vercel
8. Clique em **Save**

**Exemplo com Registro.br:**

1. Acesse https://www.registro.br e faça login
2. Vá para **Meus Domínios**
3. Clique no seu domínio
4. Vá para **Editar Domínio**
5. Clique em **Editar Nameservers**
6. Cole os nameservers do Vercel
7. Clique em **Salvar**

### Passo 4: Aguardar Propagação de DNS

**Quanto tempo leva?** Geralmente 24-48 horas, mas pode ser imediato.

Para verificar se o DNS foi propagado:

1. Abra https://www.whatsmydns.net
2. Digite seu domínio (ex: `seudominio.com.br`)
3. Selecione **Nameserver** na lista suspensa
4. Se todos os servidores mostrarem os nameservers do Vercel, está pronto!

---

## 🔗 Opção 3: Usar Registros DNS (Alternativa)

Se você não quer mudar os nameservers, pode usar registros DNS individuais.

### Passo 1: Obter Registros DNS do Vercel

1. No Vercel, vá para **Settings** → **Domains**
2. Clique no seu domínio
3. Você verá registros como:
   ```
   Type: A
   Name: @
   Value: 76.76.19.165
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Passo 2: Adicionar Registros no Registrador

**Exemplo com Namecheap:**

1. Acesse https://www.namecheap.com e faça login
2. Vá para **Domain List** → **Manage**
3. Vá para **Advanced DNS**
4. Adicione os registros fornecidos pelo Vercel
5. Clique em **Save**

---

## 🎯 Configurar Subdomínio Específico (ex: `ebook.seudominio.com`)

Se você quer usar apenas um subdomínio em vez do domínio inteiro:

### Passo 1: No Vercel

1. Vá para **Settings** → **Domains**
2. Clique em **Add Domain**
3. Digite o subdomínio completo: `ebook.seudominio.com`
4. Clique em **Add**

### Passo 2: No Registrador (Registros DNS)

Se estiver usando registros DNS individuais:

1. Adicione um registro CNAME:
   ```
   Type: CNAME
   Name: ebook
   Value: cname.vercel-dns.com
   ```

2. Se estiver usando nameservers, não precisa fazer nada adicional!

---

## ✅ Verificar se Tudo Está Funcionando

### Teste 1: Acessar o Domínio

1. Abra seu navegador
2. Digite `https://seudominio.com.br` (ou seu domínio)
3. Você deve ver sua landing page

### Teste 2: Verificar DNS

```bash
# No terminal/prompt de comando
nslookup seudominio.com.br
# ou
dig seudominio.com.br
```

### Teste 3: Verificar Certificado SSL

1. Clique no cadeado 🔒 na barra de endereço
2. Clique em **Certificado**
3. Você deve ver um certificado válido do Vercel

---

## 🔐 Ativar HTTPS (Automático)

O Vercel ativa HTTPS automaticamente! Você não precisa fazer nada.

- ✅ Certificado SSL gratuito
- ✅ Renovação automática
- ✅ Suporte a HTTPS em todos os subdomínios

---

## 🚀 Próximos Passos

Após configurar o domínio:

1. **Testar a landing page** - Acesse `https://seudominio.com.br` e verifique se tudo funciona
2. **Configurar redirecionamento no Hotmart** - Defina a URL de retorno como `https://seudominio.com.br/obrigado`
3. **Adicionar analytics** - Configure Google Analytics e Facebook Pixel com seus IDs
4. **Monitorar conversões** - Acompanhe as vendas e cliques no Vercel Dashboard

---

## 🆘 Solução de Problemas

### Problema: "Domínio não encontrado" ou erro 404

**Solução:**
1. Aguarde 24-48 horas para propagação de DNS
2. Limpe o cache do navegador (Ctrl+Shift+Delete)
3. Tente em outro navegador ou dispositivo
4. Verifique se o domínio está correto no Vercel

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
4. Contate o suporte do seu registrador

### Problema: "Subdomínio não funciona"

**Solução:**
1. Verifique se adicionou o subdomínio completo no Vercel (ex: `ebook.seudominio.com`)
2. Se usando registros DNS, adicione um CNAME para o subdomínio
3. Aguarde propagação de DNS

---

## 📞 Suporte

Se tiver dúvidas:

- **Vercel Support:** https://vercel.com/support
- **Namecheap Support:** https://www.namecheap.com/support/
- **GoDaddy Support:** https://www.godaddy.com/help
- **Registro.br Support:** https://www.registro.br/suporte/

---

## 📚 Referências Úteis

- [Documentação Vercel - Domains](https://vercel.com/docs/concepts/projects/domains)
- [Como funciona DNS](https://www.cloudflare.com/pt-br/learning/dns/what-is-dns/)
- [Verificador de DNS](https://www.whatsmydns.net)
- [Gerador de Certificados SSL](https://www.sslforfree.com)

---

**Última atualização:** 16 de fevereiro de 2026  
**Versão:** 1.0
