import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { addTools, delTool, editTools } from './methods/setters';
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
app.get('/toolsName/:name',getTool)

app.post('/newTools',addTools)
app.put('/setTools',editTools)
app.delete('/delTools/:id',delTool)

/*
A API deve seguir o padrão REST para:
 - Listar todas as ferramentas; ok
 - Obter detalhes de uma ferramenta pelo ID; ok
 - Criar uma nova ferramenta; ok
 - Atualizar o status de uma ferramenta; 
 - Reservar uma ferramenta para um mecânico;
 - Deletar uma ferramenta pelo ID. ok
*/
