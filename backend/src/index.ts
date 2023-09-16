import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { addTools } from './methods/setters';
import { getAllTools, getTool } from './methods/getters';

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/`);
});

app.get('/',(req,res)=>{res.status(200).send("Server ON")})

app.get('/tools',getAllTools)
app.get('/tools/:id',getTool)

app.post('/newTools',addTools)
app.put('/setTools',()=>{})
app.delete('/delTools/:id',()=>{})

/*
A API deve seguir o padrão REST para:
 - Listar todas as ferramentas;
 - Obter detalhes de uma ferramenta pelo ID;
 - Criar uma nova ferramenta;
 - Atualizar o status de uma ferramenta;
 - Reservar uma ferramenta para um mecânico;
 - Deletar uma ferramenta pelo ID.
*/
