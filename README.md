# Clandestinos FC - PWA Camiseta Preta

Este é um Progressive Web App (PWA) desenvolvido para a campanha de lançamento da "Camiseta Preta" do Clandestinos FC, uma edição limitada com foco na luta contra o racismo.

## ✨ Features

- **Progressive Web App (PWA):** Totalmente instalável em dispositivos móveis para uma experiência de aplicativo nativo.
- **Página de Vendas Completa:** Uma landing page com várias seções detalhando o produto e sua proposta.
- **Design Responsivo:** Interface otimizada para desktops e dispositivos móveis.
- **Prompt de Instalação Inteligente:** Notifica os usuários em dispositivos móveis para instalar o aplicativo, com uma página dedicada explicando os benefícios.
- **Navegação Otimizada:** Roteamento do lado do cliente com React Router.
- **Animações:** Animações sutis com Framer Motion para uma experiência de usuário mais fluida.

## 🚀 Technologies Used

- **React:** Biblioteca para construção da interface de usuário.
- **Vite:** Ferramenta de build para desenvolvimento rápido.
- **Tailwind CSS:** Framework de CSS para estilização.
- **React Router:** Para roteamento e navegação.
- **Framer Motion:** Para animações.
- **ESLint:** Para linting de código.

## 🏁 Getting Started

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Prerequisites

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

### Installation

1. Clone o repositório (substitua `seu-usuario` pelo seu nome de usuário do GitHub):
   ```sh
   git clone https://github.com/seu-usuario/pwa-clandestinos-fc.git
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd pwa-clandestinos-fc
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

### Running the Project

Para iniciar o servidor de desenvolvimento, execute:

```sh
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no seu terminal) para ver o projeto em execução.

### Building for Production

Para criar a versão de produção do projeto, execute:

```sh
npm run build
```

Os arquivos otimizados serão gerados no diretório `dist/`.

## 📂 Project Structure

A estrutura de pastas do projeto é a seguinte:

```
/
├── public/         # Arquivos estáticos e assets do PWA
├── src/
│   ├── assets/     # Imagens e outros assets
│   ├── components/ # Componentes React reutilizáveis
│   ├── context/    # Contexto React (ex: InstallPWAContext)
│   ├── data/       # Dados estáticos (JSON)
│   ├── pages/      # Componentes de página (rotas)
│   ├── App.jsx     # Componente principal da aplicação
│   ├── main.jsx    # Ponto de entrada da aplicação
│   └── index.css   # Estilos globais
├── tailwind.config.js # Configuração do Tailwind CSS
└── vite.config.js     # Configuração do Vite
```