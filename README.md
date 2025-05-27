# Sistema de Planejamento Financeiro

Um sistema moderno e intuitivo para gerenciamento financeiro pessoal, desenvolvido com Next.js, Material-UI, Zustand e Supabase.

## 🚀 Tecnologias

- **Frontend**

  - Next.js 14
  - Material-UI (MUI)
  - Zustand (Gerenciamento de Estado)
  - React Icons
  - Recharts/Chart.js (Visualização de Dados)
  - React Query
  - React Hook Form
  - Zod

- **Backend**
  - Supabase
    - Autenticação
    - Banco de Dados PostgreSQL
    - Storage
    - Edge Functions
    - Realtime

## ✨ Funcionalidades

### 1. Autenticação e Usuários

- Login/Registro
- Perfil do usuário
- Recuperação de senha
- Login social (Google/GitHub)

### 2. Dashboard

- Visão geral do mês
- Saldo total
- Resumo de entradas/saídas
- Gráficos interativos
  - Evolução do saldo
  - Distribuição de gastos
  - Comparativo mensal
  - Previsões

### 3. Gestão de Transações

- Registro de receitas e despesas
- Categorização automática
- Upload de comprovantes
- Transações recorrentes
- Importação de extratos

### 4. Categorias e Orçamentos

- Categorias personalizáveis
- Orçamentos mensais
- Alertas de limite
- Sugestões de economia

### 5. Metas Financeiras

- Definição de metas
- Acompanhamento de progresso
- Cálculo de economia mensal
- Notificações

### 6. Relatórios

- Relatórios detalhados
- Exportação (PDF/Excel)
- Análise de gastos
- Comparativos
- Previsões

### 7. Recursos Adicionais

- Múltiplas contas
- Suporte a moedas
- Backup automático
- Tema escuro/claro
- Notificações
- Lembretes

## 📊 Estrutura do Banco de Dados

```sql
-- Tabelas principais
users
  - id
  - email
  - name
  - created_at
  - avatar_url

accounts
  - id
  - user_id
  - name
  - type
  - balance
  - currency

transactions
  - id
  - user_id
  - account_id
  - category_id
  - amount
  - type (income/expense)
  - description
  - date
  - receipt_url
  - is_recurring
  - recurring_frequency

categories
  - id
  - user_id
  - name
  - type
  - color
  - icon

budgets
  - id
  - user_id
  - category_id
  - amount
  - period
  - start_date
  - end_date

goals
  - id
  - user_id
  - name
  - target_amount
  - current_amount
  - deadline
  - status
```

## 🛠️ Configuração do Ambiente

1. Clone o repositório

```bash
git clone [url-do-repositorio]
```

2. Instale as dependências

```bash
yarn install
```

3. Configure as variáveis de ambiente
   Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

4. Inicie o servidor de desenvolvimento

```bash
yarn dev
```

## 📱 Interface

O sistema possui uma interface moderna e responsiva, com:

- Design intuitivo
- Gráficos interativos
- Animações suaves
- Layout adaptativo
- Tema claro/escuro

## 🔒 Segurança

- Autenticação segura via Supabase
- Proteção de rotas
- Validação de dados
- Sanitização de inputs
- HTTPS
- Proteção contra CSRF

## 📈 Funcionalidades Premium

- Relatórios avançados
- Múltiplas contas
- Exportação de dados
- Backup automático
- Suporte prioritário

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

[Seu Nome] - [seu-email@exemplo.com]

Link do Projeto: [https://github.com/seu-usuario/seu-repositorio](https://github.com/seu-usuario/seu-repositorio)

## 🎨 Referência Visual
 ˝
Este projeto foi inspirado no seguinte design do Dribbble:

- [Project Dashboard by QClay](https://dribbble.com/shots/24003091-Project-Dashboard)

A proposta visual é de um dashboard moderno, escuro, com sidebar fixa, cards arredondados, gráficos interativos e tipografia clean, seguindo o estilo apresentado na referência acima.
