# Guia de Deploy no Vercel

## Arquivos Criados/Modificados para Compatibilidade Vercel

### 1. **vercel.json** (NOVO)
Configuração específica do Vercel com:
- Build command: `pnpm install && pnpm build`
- Install command: `pnpm install --frozen-lockfile`
- Framework: Vite
- Output directory: dist

### 2. **.vercelignore** (NOVO)
Arquivos ignorados durante deploy para acelerar build:
- .git, .gitignore
- README.md
- .env.local
- node_modules, .pnpm-store
- .manus-logs
- patches

### 3. **.npmrc** (NOVO)
Configuração do pnpm para melhor compatibilidade:
- shamefully-hoist=true
- strict-peer-dependencies=false
- auto-install-peers=true

### 4. **package.json** (MODIFICADO)
- Removido: `pnpm` de devDependencies (causa conflito no Vercel)
- Mantido: `packageManager: pnpm@10.4.1+sha512...` (instrui Vercel a usar pnpm)

### 5. **pnpm-lock.yaml** (JÁ EXISTENTE)
Arquivo de lock do pnpm que garante reprodução exata das dependências

## Como Fazer Deploy

### Opção 1: GitHub + Vercel (Recomendado)

1. **Fazer push para GitHub:**
   ```bash
   git add .
   git commit -m "Configuração Vercel para deploy"
   git push origin main
   ```

2. **Conectar no Vercel:**
   - Acesse https://vercel.com
   - Clique "New Project"
   - Selecione seu repositório GitHub
   - Vercel detectará automaticamente:
     - Framework: Vite
     - Build Command: `pnpm build`
     - Output Directory: `dist`
   - Clique "Deploy"

### Opção 2: Deploy Direto (Sem GitHub)

1. **Instalar Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Fazer deploy:**
   ```bash
   cd /home/ubuntu/landing-page-ebook-apostas
   vercel
   ```

3. **Seguir as instruções do CLI**

## Arquivos Necessários para Deploy

✅ **Obrigatórios:**
- package.json
- pnpm-lock.yaml
- vercel.json
- .npmrc
- client/ (código fonte)
- server/ (código servidor)
- tsconfig.json
- tailwind.config.js
- vite.config.ts
- postcss.config.js
- components.json

✅ **Opcionais (melhoram build):**
- .vercelignore
- .gitignore
- README.md

## Troubleshooting

### Erro: "pnpm install exited with 254"
**Solução:** Verifique se vercel.json e .npmrc estão presentes

### Erro: "Cannot find module"
**Solução:** Certifique-se que pnpm-lock.yaml está sincronizado:
```bash
pnpm install
```

### Build lento
**Solução:** Adicione .vercelignore para ignorar arquivos desnecessários

## Variáveis de Ambiente

Se precisar de variáveis de ambiente no Vercel:
1. Acesse Project Settings → Environment Variables
2. Adicione as variáveis necessárias
3. Redeploy

## Domínio Customizado

1. Acesse Project Settings → Domains
2. Clique "Add"
3. Escolha entre:
   - Domínio Vercel (xxx.vercel.app)
   - Domínio customizado (seu próprio domínio)
