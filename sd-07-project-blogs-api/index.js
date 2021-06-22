const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

const routerUser = require('./router/userRouter');
const loginRouter = require('./router/loginRouter');
const categorieRouter = require('./router/categorieRouter');
const blogPostRouter = require('./router/blogPostRouter');

 app.use('/user', routerUser);
 app.use('/login', loginRouter);
 app.use('/categories', categorieRouter);
 app.use('/post', blogPostRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});