# SYMBIO - A Evolução do Trabalho (Global Solution 2025/2)

![Project Status](https://img.shields.io/badge/STATUS-CONCLUÍDO-green)
![React](https://img.shields.io/badge/React-Vite-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Strong-blue)
![Java](https://img.shields.io/badge/Backend-Java%20Quarkus-red)
![Oracle](https://img.shields.io/badge/Database-Oracle-orange)

---

## 1. Título e Descrição
**SYMBIO** é uma plataforma B2B de **Reskilling e Mobilidade Interna** impulsionada por Inteligência Artificial. 

Em um cenário onde o avanço tecnológico transforma profissões rapidamente, a Symbio ajuda empresas a identificarem o potencial oculto de seus colaboradores. O sistema cruza as *Hard Skills* e *Soft Skills* dos funcionários com os requisitos de novas vagas internas, gerando um "Match" de compatibilidade e identificando *gaps* de aprendizado para requalificação.

Este projeto foi desenvolvido como entrega da **Global Solution 2025/2 - O Futuro do Trabalho**, alinhado ao **ODS 8 (Trabalho Decente e Crescimento Econômico)** da ONU.

---

## 2. Status do Projeto
✅ **Projeto Concluído**
* Frontend finalizado e responsivo.
* Integração com API Java/Oracle completa.
* Deploy realizado na Vercel.

---

## 3. Sumário
1. [Sobre o Projeto](#4-sobre-o-projeto)
2. [Tecnologias Utilizadas](#5-tecnologias-utilizadas)
3. [Instalação](#6-instalação)
4. [Como Usar (Link do Deploy)](#7-como-usar)
5. [Estrutura de Pastas](#8-estrutura-de-pastas)
6. [Endpoints e Rotas](#9-endpoints-ou-rotas-principais)
7. [Autores e Créditos](#10-autores-e-créditos)
8. [Screenshots](#11-screenshots--demonstração)
9. [Contato e Links](#12-contato)

---

## 4. Sobre o Projeto
O futuro do trabalho exige adaptação. Segundo o Fórum Econômico Mundial, grande parte das profissões mudará até 2027. A **Symbio** soluciona dois problemas:
1.  **Para a Empresa:** Reduz custos de demissão/contratação (turnover) ao realocar talentos internos.
2.  **Para o Colaborador:** Oferece segurança e oportunidade de carreira em novas áreas (ex: um atendente aprendendo programação).

A aplicação consiste em um Dashboard onde o RH pode cadastrar colaboradores (CRUD completo conectado ao Oracle) e utilizar uma IA para verificar a compatibilidade (Match) entre um funcionário e uma vaga aberta.

---

## 5. Tecnologias Utilizadas

**Frontend:**
* **React.js** (Biblioteca de UI)
* **Vite** (Build Tool & Bundler)
* **TypeScript** (Tipagem Estática)
* **Tailwind CSS** (Estilização Utility-First)
* **React Router DOM** (Navegação SPA)
* **React Icons** (Icones Personalizados)
* **Fetch API** (Consumo de APIs REST)

**Backend & Dados (Integração):**
* **Java Quarkus** (API RESTful)
* **Oracle Database** (Persistência de dados)
* **Python** (Microsserviço de IA para cálculo de Match)

**Ferramentas:**
* **Git/GitHub** (Versionamento - GitFlow)
* **Vercel** (Deploy Frontend)
* **Render** (Deploy Backend)

---

## 6. Instalação

Para rodar o projeto localmente, siga os passos abaixo:

```bash
# 1. Clone o repositório
git clone [https://github.com/Symbio-Global-Solution/symbio-frontend.git]

# 2. Entre na pasta do projeto
cd nome-da-pasta-do-projeto

# 3. Instale as dependências
npm install

# 4. Execute o projeto em modo de desenvolvimento
npm run dev
```
---

## 7. Como Usar

### 🔗 Acesso ao Projeto (Deploy)
Acesse a aplicação rodando em produção através do link abaixo:

👉 **[CLIQUE AQUI PARA ACESSAR O SYMBIO (VERCEL)](INSIRA_SEU_LINK_VERCEL_AQUI)**

### Guia de Uso:
1.  **Home:** * Ao acessar, você verá o *Dashboard* com métricas gerais (Total de Colaboradores, Vagas abertas e Cargos mapeados).
2.  **Cadastro (CRUD):** * Navegue até a aba **"Cadastro"** no menu.
    * Utilize o formulário para cadastrar um novo colaborador no banco Oracle (Nome, E-mail, Cargo, Salário, Admissão).
    * Na tabela abaixo, utilize os ícones de **Lápis** para editar ou **Lixeira** para excluir (o sistema protege a exclusão se houver dados vinculados).
3.  **Match IA:**
    * Navegue até a aba **"Match"**.
    * Selecione um **Colaborador** e uma **Vaga Alvo** nos menus suspensos.
    * Clique em **"Calcular Compatibilidade"**.
    * Aguarde o processamento da IA e veja o gráfico de aderência, *skills* compatíveis e *gaps* a desenvolver.

---

## 8. Estrutura de Pastas

A arquitetura do projeto segue os padrões do React + Vite, organizado para escalabilidade:

```bash
src/
├── assets/          # Imagens (Logos, ícones, vetores)
├── components/      # Componentes reutilizáveis da UI
│   ├── Menu/        # Barra de navegação responsiva
│   └── ...
├── context/         # Gerenciamento de estado global
│   └── ThemeContext.tsx # Controle do Tema (Dark/Light Mode)
├── pages/           # Páginas principais da aplicação
│   ├── Home.tsx     # Dashboard inicial
│   ├── Match.tsx    # Lógica de IA e Gráficos
│   ├── Cadastro.tsx # CRUD de Colaboradores
│   ├── Sobre.tsx    # Página institucional
│   └── ...
├── services/        # Comunicação com o Backend
│   └── apiService.ts # Configuração do Fetch e tratamento de CORS
├── App.tsx          # Componente Raiz e Roteamento
└── main.tsx         # Ponto de entrada da aplicação

## 9. Endpoints e Rotas Principais

### Rotas do Frontend (React Router):
* `/`: Página Inicial (Dashboard com estatísticas).
* `/match`: Ferramenta de análise de compatibilidade com IA.
* `/cadastro`: Gestão de Colaboradores (CRUD Completo).
* `/sobre`: Informações sobre o projeto e equipe.

### Integração com Backend (API Java):
A aplicação consome a API RESTful hospedada no Render. Os principais recursos utilizados são:

* `GET /colaboradores`: Retorna a lista de todos os funcionários cadastrados.
* `POST /colaboradores`: Cria um novo registro de colaborador no Oracle.
* `PUT /colaboradores/{id}`: Atualiza os dados de um funcionário existente.
* `DELETE /colaboradores/{id}`: Remove um funcionário (possui validação de integridade FK).
* `GET /cargos`: Lista os cargos disponíveis para preencher o formulário.
* `GET /vagas`: Lista as vagas abertas para o processo de match.
* `GET /match/{idColab}/{idVaga}`: Endpoint que orquestra o Java e o Python para calcular a porcentagem de match.

---

## 10. Autores e Créditos

Integrantes do grupo (Turma **[INSIRA_SUA_TURMA]**):

| Foto | Nome | RM | Turma | Links |
| :---: | :--- | :--- | :--- | :--- |
| <img src="https://github.com/hrqmartins.png" width="50" style="border-radius:50%"/> | **[Henrique Martins]** | [RM563620] | [1TDSPF] | [LinkedIn](https://www.linkedin.com/in/hrqmartins) \| [GitHub](https://github.com/hrqmartins) |
| <img src="https://github.com/HenriqueTCesar.png" width="50" style="border-radius:50%"/> | **[Henrique Teixeira]** | [RM563088] | [1TDSPF] | [LinkedIn](https://www.linkedin.com/in/henriquecesarr) \| [GitHub](https://github.com/HenriqueTCesar) |

---

## 11. Screenshots / Demonstração

### Dashboard (Home)
![Home Screenshot]([<img src="https://i.ibb.co/kV9w3fB3/imagem-2025-11-23-173140022.png" alt="imagem-2025-11-23-173140022" border="0">])

### Análise de Match com IA
![Match Screenshot]([<img src="https://i.ibb.co/rKkcnfDD/imagem-2025-11-23-173350728.png" alt="imagem-2025-11-23-173350728" border="0">])

### Cadastro de Colaboradores (CRUD)
![Cadastro Screenshot]([<img src="https://i.ibb.co/BVh3vGBZ/imagem-2025-11-23-173428197.png" alt="imagem-2025-11-23-173428197" border="0">])

---

## 12. Contato

Para dúvidas ou avaliação, consulte os links oficiais da entrega:

* **Repositório Frontend (GitHub):** [https://github.com/Symbio-Global-Solution/symbio-frontend.git]
* **Vídeo Pitch/Demo (YouTube):** [https://www.youtube.com/watch?v=CDD27nGvpE4]
* **Deploy (Vercel):** [INSIRA_SEU_LINK_VERCEL_AQUI]

---
© 2025 SYMBIO - FIAP Global Solution. Todos os direitos reservados.