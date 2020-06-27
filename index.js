const express = require('express');
const server = express();
server.use(express.json());

//Middleware Global. sempre chamado para qualquer requisição
// server.use((req, res, next) => {// next é para seguir sem travar a requsição
//     console.log(`URL chamada: ${req.url}`);
//     if (!req.body.name) {
//         return res.status(400).json({error: "Nome é obrigatório"});
//     }
//     return next();
// });

const port = 3000;

const cursos = ['NODE JS', 'JAVASCRIPT', 'REACT NATIVE']

function checkCursos(req, res, next) {// next é para seguir sem travar a requsição
    console.log(`URL chamada: ${req.url}`);
    if (!req.body.name) {
        return res.status(400).json({error: "Nome é obrigatório"});
    }

    req.curso = req.body.name;

    return next();
};

//chamada do middleware checkCursos (podemos passar quantos quisermos)
//com query params
server.get('/cursos', checkCursos ,(req, res) => {
    res.json({ curso: cursos});
});

//com route params
server.get('/cursos/:id', (req, res) => {
    const id = req.params.id;
    res.json({ curso: cursos[id]});
});

server.post('/cursos', (req, res) => {
    const {name} = req.body;
    cursos.push(name);

    return res.json(cursos);
});

server.put('/cursos/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    cursos[id] = name;

    return res.json(cursos[id]);
});

server.delete('/cursos/:id', (req, res) => {
    const {id} = req.params;
    cursos.splice(id, 1);

    return res.json(cursos);
});

server.listen(port);