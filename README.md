README - Como Rodar o Projeto
Este repositório contém uma aplicação full-stack que utiliza MongoDB como banco de dados. O objetivo deste guia é explicar como configurar e executar o projeto localmente.

Estrutura do Projeto
O projeto está organizado da seguinte forma:

/projeto
│
├── front-end/               # Código do frontend da aplicação
│   └── src/
│       └── assets/
│           └── database/    # Contém os arquivos de dados iniciais (artists.js e songs.js)
│
├── back-end/                # Código do backend da aplicação
│   ├── connect.js           # Arquivo de conexão com o MongoDB
│   └── insertMany.js        # Script para popular o banco de dados
│
└── api/                     # Pasta com APIs ou outros utilitários
    └── api.js               # Exporta os dados das músicas (songsArray)
Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js : Download aqui
MongoDB : Download aqui
npm ou yarn : Gerenciador de pacotes do Node.js (instalado automaticamente com o Node.js).
Passo a Passo para Rodar o Projeto
1. Clone o Repositório
Clone este repositório para sua máquina local usando o comando abaixo:

bash
Copy
1
2
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
Substitua <URL_DO_REPOSITORIO> e <NOME_DO_PROJETO> pelos valores correspondentes ao seu projeto.

2. Configure o MongoDB
Certifique-se de que o MongoDB está instalado e rodando na sua máquina. Por padrão, o MongoDB usa a porta 27017. Se estiver usando uma configuração diferente, ajuste o arquivo connect.js no backend para refletir isso.

Inicie o MongoDB
Abra um terminal e execute o seguinte comando para iniciar o servidor MongoDB:
'mongod'

Se você estiver usando Docker, pode iniciar o MongoDB com o seguinte comando:
'docker run -d -p 27017:27017 --name mongodb mongo'

3. Instale as Dependências
Navegue até a pasta do backend e instale as dependências necessárias:

'cd back-end'
'npm install'

Repita o processo para instalar as dependências do frontend:
cd ../front-end
npm install

4. Popule o Banco de Dados
O arquivo insertMany.js no backend é responsável por popular o MongoDB com os dados iniciais. Execute o script para inserir os dados no banco:

cd back-end
node insertMany.js

Esse script usará os dados dos arquivos artists.js e songs.js localizados em front-end/src/assets/database/.

Nota : Certifique-se de que o MongoDB está conectado antes de executar este comando. 

5. Inicie o Backend
Ainda na pasta do backend, inicie o servidor:

npm start
O backend estará disponível em http://localhost:3001 (ou outra porta configurada no código).

6. Inicie o Frontend
Navegue até a pasta do frontend e inicie o servidor de desenvolvimento:

cd ../front-end
npm start
O frontend estará disponível em http://localhost:5173 (ou outra porta configurada no código).

7. Teste a Aplicação
Com o backend e o frontend rodando, abra o navegador e acesse o frontend. A aplicação deve estar funcional e conectada ao banco de dados MongoDB.

Estrutura dos Dados
Os dados iniciais estão definidos nos seguintes arquivos:

front-end/src/assets/database/artists.js: Contém um array de objetos representando artistas.
front-end/src/assets/database/songs.js: Contém um array de objetos representando músicas.
Esses dados são importados pelo script insertMany.js para popular o MongoDB.