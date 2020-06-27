import  { Router } from 'express'; // importando só a parte de rotas do express

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ ok: false });
});

export default routes; //exportando todas as rotas