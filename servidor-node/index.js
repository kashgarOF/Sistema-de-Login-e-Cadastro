// 1. Importa a biblioteca Express.
const express = require('express');

// 2. Cria a nossa aplicação servidora.
const app = express();

// 3. Define a porta.
const port = 3000;

// 4. Cria a nossa primeira rota na raiz ('/').
app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
});

// 5. Inicia o servidor para que ele comece a escutar por requisições.
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});