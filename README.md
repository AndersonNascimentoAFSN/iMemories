# Projeto Web com Vídeos do YouTube

Este é um projeto web que integra duas aplicações micro frontEnds e um bff para consumir os vídeos do YouTube. 

## Responsável pelo Projeto

**Nome:** Anderson Felipe Silva do Nascimento 
**Email:** anderson.nascimentoafsn@gmail.com
**GitHub:** [AndersonNascimentoAFSN](https://github.com/AndersonNascimentoAFSN)

## Tecnologias Utilizadas

- HTML5
- CSS3
- TypeScript
- Web Components
- YouTube API
- NodeJs
- Docker
- Docker Compose
- Module Federation (Micro frontEnd)

## Estrutura do Projeto

- `src/`: Contém todos os arquivos de código fonte do projeto.
- `src/components/`: Contém os Web Components usados no projeto também os arquivos de teste do projeto.
- `src/utils/`: Contém utilitários e funções auxiliares.
- `index.html`: Arquivo HTML principal.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Docker Compose](https://docs.docker.com/compose/install/linux/)

## Como Compilar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/AndersonNascimentoAFSN/iMemories.git
    cd iMemories
    ```

2. Instale as dependências dentro do diretório de cada cada uma das aplicações (bff, mf_drawer, mf_videos):
    ```bash
    npm install
    ```

3. Compile o TypeScript para JavaScript em cada uma das aplicações:
    ```bash
    npm run build
    ```

## Como Executar os Testes

1. Dentro do diretório de cada uma das aplicações:
    ```bash
    npm test
    ```

2. Para executar testes específicos, você pode usar:
    ```bash
      npm run test -- -t "Drawer Component"
    ```
  Observação: "Drawer Component" é o texto do describe do texto. Pode ser utilizado também o texto do it.

## Como Rodar o Projeto localmente

1. Configuração de variáveis de ambiente no arquivo .env de cada uma das aplicações. Você deve gerar sua própria API_KEY do youtube nesse [link](https://developers.google.com/youtube/v3/getting-started?hl=pt-br)

bff:
```plaintext
 API_BFF_PORT="3003"
 YOUTUBE_API_KEY=""
```
mf_drawer:
```plaintext
    APP_URL="http://localhost:3000/"
    APP_PORT="3000"
    APP_MF_VIDEOS="mf_videos@http://localhost:3001/remoteEntry.js"
```

mf_videos:
```plaintext
    APP_URL="http://localhost:3001/"
    APP_PORT="3001"
    APP_MF_DRAWER="mf_videos@http://localhost:3000/remoteEntry.js"
    API_BFF="http://localhost:3003"
```
2. Dentro de cada uma das aplicações executar os comandos:
 ```bash
    npm install
    npm build
    npm start
```

## Como Rodar o Projeto no docker

1. Dentro do arquivo docker-compose.yml defina a API_KEY do Youtube na variável de ambiente "YOUTUBE_API_KEY".
 
3. Dentro do diretório principal (IMemories) execute o comando:
    ```bash
     docker compose up --build
    ```

4. Abra seu navegador e acesse:
    ```plaintext
    http://localhost:3000
    ```

## Estrutura de Código

Aqui está uma visão geral da estrutura de código do projeto:

```plaintext
iMemories/
│
├── bff/
│   ├── src/
│   │   ├── lib/
│   │   └── types/
│   ├── Dockerfile
│   └── tsconfig.json
│
├── mf_drawer/
│   ├── src/
|   │   ├── components/
|   │   ├── utils/
|   │   ├── index.ts
|   │   ├── index.html
|   │   ├── index.css
|   │   ├── reset.css
│   │   └── App.ts
│   ├── types/
│   ├── .babelrc
│   ├── .gitignore
│   ├── .babel.config.js
│   ├── Dockerfile
│   ├── setupTests.ts
│   ├── vitest.config.mts
│   └── webpack.config.js
|
├── mf_videos/
│   ├── src/
|   │   ├── components/
|   │   ├── utils/
|   │   ├── index.ts
|   │   ├── index.html
|   │   ├── index.css
|   │   ├── reset.css
│   │   └── App.ts
│   ├── types/
│   ├── .babelrc
│   ├── .gitignore
│   ├── .babel.config.js
│   ├── Dockerfile
│   ├── setupTests.ts
│   ├── vitest.config.mts
│   └── webpack.config.js
│
├── .gitignore
├── .docker-compose.yml
└── README.md
