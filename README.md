# FullStack

Teste Prático para a Osten Moove

backend com NodeJS
frontend com ReactJS
TypeScript

objetivo : reserva de ferramentas

---
### Back-End
Foi usado express e prisma MySQL, certifiquece de que seu serve MySQL esteja ativo, dentro da pasta backend exite um arquivo com dotenv `.env` altere o link dentro dele para referenciar o teu server

caminho do banco de dados MySQL local `DATABASE_URL="mysql://root:123456@localhost:3306/reservedb"`
- nome do usuario em `root`
- senha em `123456`
- porta do MySQL `3306` porta padrão, caso a tua seja diferente altere aqui

Use o comando `npm install` para instalar as dependencias e em seguida `npm start` para iniciar o servidor na porta 3000

Os arquivos do banco de dados já estão dentro da pasta prisma, caso haja algum erro ou alteração no prisma use
`npx prisma migration dev` e dé um nome

para resetar o banco de dados use `npx prisma migrate reset`

### Front-End
dentro desta pasta está o codigo em react, instale os modulos com `npm install` e rode com `npm run dev`
Caso tenha alguma alteração de porta dentro do backend altere as chamadas dentro da pasta hook

---

As requisições ao back end são feitas da seguinte maneira:

```javascript
// Getters
app.get('/tools',getAllTools)
app.get('/tools/:id',getTool)
app.get('/toolsName/:name',getTool)

// Setters
app.post('/newTools',addTools)
app.put('/setTools',editTools)
app.delete('/delTools/:id',delTool)
```
