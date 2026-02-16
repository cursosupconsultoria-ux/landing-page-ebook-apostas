# Arquivos para Upload no GitHub

## ✅ Arquivos Essenciais para Incluir

### Configuração do Projeto
- [ ] `package.json` - Dependências e scripts
- [ ] `pnpm-lock.yaml` - Lock file do pnpm (CRÍTICO!)
- [ ] `vercel.json` - Configuração Vercel
- [ ] `.npmrc` - Configuração npm/pnpm
- [ ] `.vercelignore` - Arquivos ignorados no Vercel
- [ ] `tsconfig.json` - Configuração TypeScript
- [ ] `tsconfig.node.json` - TypeScript para Node
- [ ] `vite.config.ts` - Configuração Vite
- [ ] `postcss.config.js` - Configuração PostCSS
- [ ] `tailwind.config.js` - Configuração Tailwind
- [ ] `components.json` - Configuração shadcn/ui

### Código-Fonte
- [ ] `client/` - Código React (todo o diretório)
  - [ ] `client/index.html`
  - [ ] `client/src/main.tsx`
  - [ ] `client/src/App.tsx`
  - [ ] `client/src/index.css`
  - [ ] `client/src/pages/` (todos os arquivos)
  - [ ] `client/src/components/` (todos os arquivos)
  - [ ] `client/src/contexts/` (se houver)
  - [ ] `client/src/lib/` (se houver)
  - [ ] `client/public/` (assets estáticos)

- [ ] `server/` - Código Node/Express
  - [ ] `server/index.ts`

- [ ] `shared/` - Código compartilhado
  - [ ] `shared/const.ts`

### Documentação
- [ ] `README.md` - Documentação do projeto
- [ ] `DEPLOY_VERCEL.md` - Guia de deploy
- [ ] `.gitignore` - Arquivos ignorados pelo Git

## ❌ Arquivos NÃO Incluir

- `node_modules/` - Será instalado automaticamente
- `.manus-logs/` - Logs locais
- `dist/` - Build gerado (será criado no Vercel)
- `.env.local` - Variáveis locais
- `patches/` - Patches locais (opcional)
- `.git/` - Histórico Git (já gerenciado)

## 📋 Estrutura Esperada no GitHub

```
landing-page-ebook-apostas/
├── client/
│   ├── index.html
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── contexts/
│       ├── lib/
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
├── server/
│   └── index.ts
├── shared/
│   └── const.ts
├── package.json
├── pnpm-lock.yaml
├── vercel.json
├── .npmrc
├── .vercelignore
├── .gitignore
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── postcss.config.js
├── tailwind.config.js
├── components.json
├── README.md
└── DEPLOY_VERCEL.md
```

## 🚀 Passo a Passo para GitHub

### 1. Inicializar Git (se não tiver)
```bash
cd /home/ubuntu/landing-page-ebook-apostas
git init
git config user.name "Seu Nome"
git config user.email "seu.email@exemplo.com"
```

### 2. Adicionar Arquivos
```bash
git add .
```

### 3. Criar Commit
```bash
git commit -m "Landing page Projeto Recuperar Controle - Configuração Vercel"
```

### 4. Adicionar Remote (substitua pelo seu repositório)
```bash
git remote add origin https://github.com/seu-usuario/landing-page-ebook-apostas.git
git branch -M main
git push -u origin main
```

### 5. Conectar no Vercel
- Acesse https://vercel.com
- Clique "New Project"
- Selecione seu repositório
- Clique "Deploy"

## ✨ Pronto!

Após fazer push no GitHub e conectar no Vercel, seu site estará online em minutos!
