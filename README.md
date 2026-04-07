<h1 align="center">Counter App</h1>

<p align="center">
  Aplicação simples de contador desenvolvida com React e Styled Components, com foco em prática de componentização, manipulação de estado com useState e construção de interface responsiva e organizada.
</p>

<p align="center">
  <a href="#-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-features">Funcionalidades</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-project-structure">Estrutura</a>
</p>

<br>

<img src="./src/assets/Mockup - CounterApp.png" alt="Contador Imagem Mockup" width="100%">

---

## 🏠 About the project

Este projeto foi desenvolvido como uma aplicação de contador com **React**, com o objetivo de praticar conceitos fundamentais do ecossistema front-end moderno.

A proposta da aplicação é permitir que o usuário **aumente**, **diminua** e **reinicie** um contador por meio de uma interface simples, limpa e funcional.

Durante o desenvolvimento, foram trabalhados conceitos importantes como **componentização**, **uso de estado com useState**, **eventos de clique**, **regras de controle do contador** e **estilização com Styled Components**.

---

## 🧰 Features

- Interface centralizada e limpa
- Exibição dinâmica do valor do contador
- Botão para incrementar o contador
- Botão para decrementar o contador
- Botão para resetar o contador
- Limite mínimo de `0`
- Limite máximo de `1000`
- Componentes reutilizáveis para os botões
- Estilização com Styled Components
- Estrutura organizada por páginas, componentes e estilos globais

---

## 💻 Technologies

Este projeto foi desenvolvido com as seguintes tecnologias:

- React
- Vite
- JavaScript
- Styled Components
- HTML5
- CSS-in-JS
- ESLint

---

## 👷 Project structure

A estrutura principal do projeto está organizada da seguinte forma:

```bash
contador/
├── public/
├── src/
│   ├── components/
│   │   ├── ButtonDecrease/
│   │   ├── ButtonIncrease/
│   │   └── ButtonReset/
│   ├── pages/
│   │   └── Home/
│   ├── styles/
│   │   └── GlobalStyles.js
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
