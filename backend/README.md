# Campus Connect Backend

API simples em Node.js/Express para armazenar dados do Campus Connect. Atualmente usa armazenamento em memória (arrays) e está pronta para evoluir para banco de dados.

## Como funciona

- `GET /api/status` → status da API e contagens básicas.
- `GET /api/chamados` e `POST /api/chamados` → chamados de manutenção.
- `GET /api/reservas` e `POST /api/reservas` → reservas esportivas.
- `GET /api/refeicoes` e `POST /api/refeicoes` → cardápio/refeições.

## Próximo passo (banco de dados)

- Substituir o arquivo `store.js` por uma camada de repositório.
- Criar migrações e modelos (ex.: PostgreSQL com Prisma ou Sequelize).
- Adicionar autenticação (JWT) e autorização por perfil.

## Executar

1. Instale as dependências.
2. Inicie o servidor.

Exemplo (Windows PowerShell):

```powershell
npm install
npm run start
```

A API sobe em `http://localhost:3333`.

## Teste rápido

```powershell
node smoke-test.js
```
