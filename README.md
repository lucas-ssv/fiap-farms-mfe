# FIAP Farms MFE

## 📄 Descrição

O **FIAP Farms MFE** é uma aplicação web de gerenciamento agrícola desenvolvida com **React** e **Vite**, seguindo a arquitetura de **Micro Frontends (MFE)**. A aplicação integra diversos recursos modernos para facilitar o controle e monitoramento de atividades rurais.

O projeto oferece funcionalidades completas para:

- **Dashboard interativo** com gráficos e métricas da produção;
- **Gestão de produtos** com categorização e controle de estoque;
- **Acompanhamento de produções** com status e cronogramas;
- **Controle de vendas** e análise de receitas;
- **Gerenciamento de metas** e objetivos de produção;
- **Alertas e notificações** sobre estoque e prazos;
- **Interface moderna e responsiva** utilizando React com TailwindCSS;
- **Formulários otimizados** com validação robusta;
- **Componentes reutilizáveis** baseados em Radix UI;
- **Arquitetura de Micro Frontend** para escalabilidade;

---

## ✨ Principais Destaques Técnicos

- **Arquitetura Micro Frontend (MFE)** com Module Federation;
- Estrutura baseada na **Clean Architecture** (`Domain`, `Presentation`, `Main`);
- Utilização de **TDD (Test-Driven Development)** e abordagem **AAA (Arrange, Act, Assert)**;
- Aplicação dos princípios **SOLID**;
- **TypeScript** para tipagem estática e maior segurança;
- **TailwindCSS** para estilização moderna e responsiva;
- **Componentes acessíveis** com Radix UI;
- **Build otimizado** com Vite para desenvolvimento ágil;
- **ESLint** para qualidade e padronização de código;
- Padrões utilizados:
  - **Repository Pattern**
  - **Factory Pattern**
  - **Component Pattern**
  - **Custom Hooks Pattern**
- **Componentização** com foco em reutilização;
- Interface moderna e altamente responsiva, com foco na **usabilidade do usuário**;
- **Performance otimizada** com lazy loading e code splitting;
- **Integração preparada** para outros microfrontends.

---

## ⚙️ Estrutura do Projeto

```
src/
├── domain/          # Entidades, casos de uso e contratos (interfaces)
│   └── models/      # Modelos de domínio
├── presentation/    # Componentes, páginas, hooks e UI
│   ├── components/  # Componentes reutilizáveis
│   ├── lib/         # Utilitários e configurações
│   └── styles/      # Estilos globais
└── main/            # Inicialização da aplicação e providers
```

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca para interfaces de usuário
- **Vite** - Build tool e servidor de desenvolvimento
- **TypeScript** - Superset do JavaScript com tipagem estática
- **TailwindCSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e sem estilo
- **Lucide React** - Ícones modernos e consistentes
- **Class Variance Authority** - Utilitário para variantes de classes
- **Day.js** - Biblioteca para manipulação de datas
- **Module Federation** - Arquitetura de microfrontends
- **ESLint** - Linter para qualidade de código

---

## 📊 Funcionalidades Principais

### Dashboard

- **Gráficos interativos** de produção e vendas
- **Métricas em tempo real** de estoque e receitas
- **Visão geral** das atividades da fazenda

### Gestão de Produtos

- **Cadastro e edição** de produtos agrícolas
- **Categorização** por tipo de produto
- **Controle de estoque** com alertas de níveis mínimos e máximos
- **Upload de imagens** dos produtos

### Controle de Produção

- **Acompanhamento do ciclo produtivo** (plantio → produção → colheita)
- **Status de produção** em tempo real
- **Cronograma de atividades** com datas de início e fim
- **Quantidades produzidas** vs planejadas

### Vendas e Receitas

- **Registro de vendas** com detalhamento
- **Análise de receitas** e lucros
- **Histórico de transações**

### Metas e Objetivos

- **Definição de metas** de produção/vendas
- **Acompanhamento de objetivos** mensais/anuais
- **Relatórios de performance**

### Sistema de Alertas

- **Notificações de estoque baixo**
- **Lembretes de atividades** agrícolas
- **Alertas de prazos** importantes

---

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** para gerenciamento de pacotes
- Navegador moderno com suporte a ES6+

## 🚀 Instalação e Execução

### 1. Clone o repositório:

```bash
git clone https://github.com/lucas-ssv/fiap-farms-mfe.git
cd fiap-farms-mfe
```

### 2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

### 3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

### 4. Build para produção:

```bash
npm run build
# ou
yarn build
```

### 5. Preview da build de produção:

```bash
npm run preview
# ou
yarn preview
```

### 6. Linting do código:

```bash
npm run lint
# ou
yarn lint
```

---

## 🏗️ Arquitetura Micro Frontend

Este projeto utiliza **Module Federation** para implementar uma arquitetura de microfrontend, permitindo:

- **Desenvolvimento independente** de diferentes partes da aplicação
- **Deploy independente** de módulos
- **Escalabilidade** horizontal da equipe de desenvolvimento
- **Tecnologias heterogêneas** quando necessário
- **Reutilização** de componentes entre diferentes aplicações

---

## 🎨 Design System

O projeto implementa um design system consistente utilizando:

- **TailwindCSS** para utilitários CSS
- **Radix UI** para componentes base acessíveis
- **Class Variance Authority** para variações de componentes
- **Lucide React** para iconografia consistente

---

## 🤝 Contribuindo

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autor

**Lucas Vieira**

- GitHub: [@lucas-ssv](https://github.com/lucas-ssv)
