# 🚀 Guia de Deploy - Vercel

Este documento explica como fazer deploy do CampusConnect no Vercel.

---

## ✅ Pré-requisitos

- [x] Conta no GitHub
- [x] Repositório pushado no GitHub
- [x] Conta no Vercel (gratuita)

---

## 🎯 Opção 1: Deploy via Interface Vercel (Recomendado - Mais Fácil)

### **Passo 1: Vá para Vercel**

```
https://vercel.com/dashboard
```

### **Passo 2: Clique em "Add New" → "Project"**

### **Passo 3: Selecione seu repositório GitHub**

- Procure por `campusconnect`
- Clique em "Import"

### **Passo 4: Configure**

- **Framework Preset:** Deixe em branco (vamos usar Node.js)
- **Root Directory:** Deixe vazio (padrão)
- **Build Command:** Deixe vazio
- **Install Command:** Deixe vazio

### **Passo 5: Deploy 🎉**

Clique em "Deploy" e aguarde (~2-3 minutos)

---

## 🎯 Opção 2: Deploy via CLI (Para Controle Total)

### **Passo 1: Instale Vercel CLI**

```bash
npm install -g vercel
```

### **Passo 2: Na raiz do projeto, execute**

```bash
vercel --prod
```

### **Passo 3: Responda as perguntas**

```
? Set up and deploy? Yes
? Which scope? [seu-usuario]
? Link to existing project? No
? What's your project's name? campusconnect
? In which directory is your code? ./
? Want to modify these settings? No
? 🔗 Linked to seu-usuario/campusconnect (created .vercel)
? 🔨 Building...
```

### **Passo 4: Pronto! 🎉**

```
✓ Production: https://campusconnect.vercel.app
```

---

## 🔗 URLs Após Deploy

```
🌐 Frontend:   https://campusconnect.vercel.app
📡 Backend:    https://campusconnect.vercel.app/api
🎟️  Chamados:   https://campusconnect.vercel.app/api/chamados
📦 Reservas:   https://campusconnect.vercel.app/api/reservas
🍽️  Cardápio:   https://campusconnect.vercel.app/api/refeicoes
📊 Status:     https://campusconnect.vercel.app/api/status
```

---

## 📝 Configuração do vercel.json

O arquivo `vercel.json` já está configurado e faz:

1. **Rota `/api/*`** → Aponta para `backend/server.js` (API)
2. **Outras rotas** → Servem arquivos estáticos (HTML, CSS, JS)

```json
{
  "version": 2,
  "builds": [
    {
      "src": "backend/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "backend/server.js"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

---

## 🔄 Atualizações Automáticas

Depois do primeiro deploy:

1. Você faz mudanças no código
2. Faz commit e push para GitHub
3. **Vercel detecta a mudança automaticamente**
4. **Deploy acontece sozinho** ✨

```bash
git add .
git commit -m "fix: algo"
git push origin main
# → Deploy automático no Vercel em ~1-2 minutos
```

---

## 🛠️ Monitorar Deployments

### **Via Interface Vercel**

1. Acesse https://vercel.com/dashboard
2. Clique no projeto `campusconnect`
3. Veja histórico de deployments em "Deployments"

### **Via CLI**

```bash
vercel deployments
```

---

## 🐛 Troubleshooting

### **Erro: "Cannot find module 'express'"**

```bash
cd backend
npm install
cd ..
git add backend/package-lock.json
git commit -m "chore: adicionar package-lock"
git push
```

### **API retorna 404**

- Verifique se os arquivos estão em `backend/`
- Certifique-se que `vercel.json` está na raiz

### **Frontend não carrega**

- Verifique caminhos relativos (../index.html, etc)
- Limpe cache do navegador

---

## 📊 Domínios Personalizados (Opcional)

Para usar seu próprio domínio:

1. Em Vercel → Project Settings → Domains
2. Adicione seu domínio
3. Aponte os nameservers

Exemplo:

```
https://campusconnect.mouratech.com
```

---

## 🎊 Sucesso!

Seu CampusConnect agora está **online e acessível de qualquer lugar**!

```
✓ Frontend rodando
✓ Backend funcionando
✓ APIs disponíveis
✓ Deploy automático
✓ SSL/HTTPS incluído
```

---

**Dúvidas?** Verifique os logs em: https://vercel.com/dashboard
