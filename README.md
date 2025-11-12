# 📊 SYMBIO - Frontend (React/Vite)

Interface do usuário para o projeto SYMBIO (Global Solution 2025). [cite_start]Este projeto é um SPA (Single Page Application) construído com React, Vite, TypeScript e **exclusivamente** TailwindCSS para estilização[cite: 376, 419].

**Disciplina Relacionada:** *Front-End Design Engineering*

---

## 2. Status do Projeto
* **Status:** Em Desenvolvimento 🚧

---

## 3. Sumário
* [Sobre o Projeto](#5-sobre-o-projeto)
* [Tecnologias Utilizadas](#6-tecnologias-utilizadas)
* [Instalação](#7-instalação)
* [Como Usar](#8-como-usar)
* [Estrutura de Pastas](#9-estrutura-de-pastas)
* [Rotas Principais](#10-rotas-principais)
* [Autores e Créditos](#11-autores-e-créditos)
* [Screenshots](#12-screenshots--demonstração)
* [Contato](#13-contato)

---

## 5. Sobre o Projeto
Este frontend consome a API Java (`symbio-api-java`) para exibir um dashboard interativo para gestores de RH. As principais funcionalidades incluem um gráfico de pizza dos níveis de risco de automação, uma lista de colaboradores e o "match" com vagas internas. [cite_start]Implementa Tema Claro/Escuro usando Context API[cite: 473].

## 6. Tecnologias Utilizadas
* React
* Vite
* TypeScript
* [cite_start]TailwindCSS (ÚNICO método de estilização permitido [cite: 419])
* React Router
* Recharts (para gráficos)

[cite_start]**PROIBIDO** o uso de Axios, Bootstrap, Radix, etc.[cite: 599].

## 7. Instalação
1.  Clone o repositório:
    ```bash
    git clone [https://github.com/](https://github.com/)[seu-usuario]/symbio-frontend-react.git
    cd symbio-frontend-react
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```

## 8. Como Usar
1.  Execute o projeto em modo de desenvolvimento:
    ```bash
    npm run dev
    ```
2.  Acesse `http://localhost:5173` (ou a porta indicada) no seu navegador.

**Aplicação em Produção (Deploy Vercel):**
[cite_start]**URL:** `[LINK DA SUA VERCEL AQUI]` [cite: 391, 488]

## 9. Estrutura de Pastas
