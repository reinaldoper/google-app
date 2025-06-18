# 🛡️ NestJS Auth API com Google OAuth + Prisma + Swagger

Este é um backend completo utilizando **NestJS**, **Prisma** e **Passport** para autenticação de usuários via:

- ✅ Cadastro e login manual com email/senha
- ✅ Login com conta Google (OAuth 2.0)
- ✅ Proteção de rotas com JWT
- ✅ Documentação com Swagger

---

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Passport.js](https://www.passportjs.org/)
- [JWT (JSON Web Token)](https://jwt.io/)
- [Swagger (OpenAPI)](https://swagger.io/)
- [PostgreSQL](https://www.postgresql.org/)

---

## 🧱 Estrutura da Aplicação

```bash
├── prisma
│   ├── migrations
│   │   ├── 20250618084654_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── README.md
├── src
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── auth
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── dto
│   │   │   └── index.ts
│   │   └── strategies
│   │       ├── google.strategy.ts
│   │       └── jwt.strategy.ts
│   ├── main.ts
│   └── prisma
│       ├── prisma.controller.ts
│       ├── prisma.module.ts
│       └── prisma.service.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json

```

⚙️ Configuração do Projeto
1. Clone o repositório


```bash
git clone https://github.com/reinaldoper/google-app.git
cd google-app
```


2. Instale as dependências

```bash
npm install

```

3. Configure o .env
Crie um arquivo .env na raiz com:

```bash
DATABASE_URL="postgresql://usuario:senha@host:porta/nome_do_banco"

JWT_SECRET=suachavesecreta
JWT_EXPIRES_IN=1d

GOOGLE_CLIENT_ID=sua-client-id-do-google
GOOGLE_CLIENT_SECRET=sua-client-secret-do-google

```
---

4. 💡 Crie seu OAuth Client ID no Console do Google Cloud

✅ Passo a passo para gerar as credenciais do Google OAuth:
- Acesse: [console-google](https://console.cloud.google.com/apis/credentials)
- Clique em "Vamos começar".
- Na tela "Branding":
- Nome do app: pode ser algo como AuthApp NestJS
- Email de suporte: seu email do Google
- Logo (opcional)
- Clique em "Salvar e continuar" até o fim
- Vá até o menu "Clientes" (ou "Credenciais" em português).
- Clique em "Criar credencial" > "ID do cliente do OAuth"

Na tela:

- Tipo de aplicativo: Aplicativo da Web
- Nome: NestJS Auth API
- URIs autorizados de redirecionamento:
- http://localhost:3000/auth/google/redirect ✅ (este é o backend NestJS)
- Clique em "Criar" e copie os valores:
- Client ID → vai para .env como GOOGLE_CLIENT_ID
- Client Secret → vai como GOOGLE_CLIENT_SECRET


--- 

4. 🧩 Prisma
1. Gere os arquivos do Prisma Client

```bash
npx prisma generate
```

2. Rode as migrações (se houver)
bash

```bash
npx prisma migrate dev --name init
```

🏁 Executando o Projeto

```bash
npm run start:dev

```

A API estará disponível em:
📍 http://localhost:3000

📖 Rotas Disponíveis
🧾 Auth Manual
POST /auth/register → Cadastrar novo usuário

POST /auth/login → Login com email e senha

GET /auth/me → Retorna usuário autenticado (JWT necessário)

🔐 Google OAuth
GET /auth/google → Redireciona para autenticação com Google

GET /auth/google/redirect → Callback do Google OAuth

🔐 Protegidas
Use o token JWT no Authorization: Bearer <token> para acessar rotas protegidas.

📚 Documentação Swagger
Acesse: http://localhost:3000/api

Visualize e teste os endpoints com Swagger UI

✅ Checklist de Funcionalidades
 Cadastro manual com e-mail e senha

 - Login manual com JWT
 - Login via conta Google (OAuth2)
 - Integração com Prisma + PostgreSQL
 - Documentação com Swagger
 - Proteção de rotas com AuthGuard
 - Estrutura modular escalável

✨ Possíveis Melhorias Futuras
- Refresh Token
- Redefinição de senha por e-mail
- Upload de avatar do usuário
- Painel de administração

🧑‍💻 Autor
Repositório mantido por Reinaldo Pereira dos Santos