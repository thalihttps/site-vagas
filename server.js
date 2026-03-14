const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('.')); // Serve o seu index.html

// Rota básica para receber os dados de cadastro
app.post('/api/cadastro', (req, res) => {
    const { tipo, nome } = req.body;
    console.log(`Novo cadastro recebido: ${tipo}`);
    
    // Aqui você conectaria com o banco usando o DBeaver/Supabase
    res.status(201).send({ message: "Cadastro iniciado com sucesso!" });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});